import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const UrlTable = () => {
    const {email} = useParams()

    const [urlList,seturlList] = useState([])

    useEffect( ()=>{
        fetchdata()
    },[])
    
    const fetchdata = async () => {
        const email = localStorage.getItem("emailId") 
        console.log(email)
        let options = {
            url:"https://zen-task-45.herokuapp.com/showurl",
            data:{
                email:email
            },
            headers:{
                "content-type":"application/json"
            },
            method:"POST"
        }
        let response = await axios(options)
        if(response.data.message == "user not found"){

        }else if(response.data.message == "no url found"){
            alert("No Url Found Please Short Some Url")
        }else{
            seturlList(response.data.list)
        }
    }
  return (
    <div className='dashboardDiv'>
    <div className='dashboardNav'>
    <NavLink to="/" className={"navbarcomponents"}>LogOut</NavLink>
    <NavLink to={`/urltable/${email}`} className={"navbarcomponents"}>Url Table</NavLink>
    <NavLink to={`/dashboard/${email}`} className={"navbarcomponents"}>Home</NavLink>
    </div>
    <h2 style={{textAlign:"center"}}>List of url Shortened</h2>
    <table>
        <thead>
            <tr>
                <th>Sl.No</th>
                <th>URL</th>
            </tr>
        </thead>
        <tbody>
           {
               urlList.length ? urlList.map((item,index) => <tr key={index}>
                   <td>{index+1}</td>
                   <td>{item}</td>
               </tr>)
               : <h2 style={{textAlign:"center"}}> No Url List Found</h2>
           }
        </tbody>
    </table>
</div>
  )
}

export default UrlTable