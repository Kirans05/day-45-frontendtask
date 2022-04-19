import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from "react-router-dom"

const Dashboard = () => {
    const {email} = useParams()
    
    const [urlvalue,seturlvalue] = useState("")
    const [newurllink,setnewurllink] = useState("")


    const handleURLvalue = (e) => {
        e.preventDefault()
        seturlvalue(e.target.value)
    }
    console.log("===>",email)
    const submitForm1 = async (e) => {
        e.preventDefault()
        let response = await axios(`https://api.shrtco.de/v2/shorten?url=${urlvalue}`)
        if(response.data.result.full_short_link){
            seturlvalue("")
            setnewurllink(response.data.result.full_short_link)
        }else{
            alert("Please check the URL")
        }
        let options = {
            url:"https://zen-task-45.herokuapp.com/addurl",
            data:{
                urlvalue:urlvalue,
                email:email
            },
            headers:{
                "content-type":"application/json"
            },
            method:"POST"
        }
        let addurltodb = await axios(options)
    }

    useEffect(()=>{
        localStorage.setItem("emailId",email)
    },[])
  return (
    <div className='dashboardDiv'>
        <div className='dashboardNav'>
        <NavLink to="/" className={"navbarcomponents"}>LogOut</NavLink>
        <NavLink to={`/urltable/${email}`} className={"navbarcomponents"}>Url Table</NavLink>
        </div>
        <h1 style={{textAlign:"center"}}>Welcome to Dashboard</h1>
        <h2 style={{textAlign:"center"}}>URL <span>SHORTNER</span></h2>
        <div className='urldiv'>
        <form onSubmit={submitForm1}>
            <input type={"text"} placeholder="Paste URL" value={urlvalue} onChange={handleURLvalue}/>
            <button className='signupbtn'>Shorten</button>
        </form>
        <br />
        <form>
            <input type={"text"} value={newurllink} placeholder="Shortened URL"/>
        </form>
        </div>
    </div>
  )
}

export default Dashboard