import React, { useState } from 'react'
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate()
    const [responsemsg,setresponsemsg] = useState(null)
    const [inputList,setinputList] = useState({
        email:"",
        password:""
    })

    const inputChangeHandler = (e) => {
        e.preventDefault()
        setinputList({...inputList,[e.target.name]:e.target.value})
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        let options = {
            url:"https://zen-task-45.herokuapp.com/login",
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            data:inputList
        }
        let response = await axios(options)
        if(response.data.message == "login Successfull"){
            setresponsemsg("login Successfull")

            nav(`/dashboard/${response.data.email}`)
        }else if(response.data.message == "Incorrect Password"){
            setresponsemsg("Incorrect Password")
        }else{
            setresponsemsg("EmailId does not exist")
        }
        setTimeout(() => {
            setresponsemsg(null)
        }, 3000);
    }
  return (
    <div className='mainpagesignup'>
         <div className='mainNavBar'>
            <NavLink to={"/"} className="mainnavbtn">Sign uP</NavLink>
            <NavLink to={"/login"} className="mainnavbtnlogin">Login</NavLink>
        </div>
        <h2 style={{textAlign:"center"}}>Please Enter Email and Password to login</h2>
        <div className='formdiv'>
          <form onSubmit={submitHandler} className="signupform">
            <input type={"email"} placeholder="Enter Email" value={inputList.email} onChange={inputChangeHandler} name="email" required="required"/>
            <br />
            <br />
            <input type={"password"} placeholder="Enter Password" value={inputList.password} onChange={inputChangeHandler} name="password" required="required"/>
            <br />
            <br />
            <NavLink to="/emailverification" >Forgot Password</NavLink>
            <br />
            <br />
            <button className='signupbtn'>Login</button>
         </form>
        </div>
        {
            responsemsg ? <h3 style={{textAlign:"center"}}>{responsemsg}</h3> : null
        }
    </div>
  )
}

export default Login