import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    const [responsemsg,setresponsemsg] = useState(null)
    const [inputList,setinputList] = useState({
        name:"",
        email:"",
        password:""
    })

    const inputChangeHandler = (e) => {
        e.preventDefault()
        setinputList({...inputList,[e.target.name]:e.target.value})
    }

    const submiHandler = async (e) => {
        e.preventDefault()
        let options = {
            url:"https://zen-task-45.herokuapp.com/signup",
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            data:inputList
        }
        let response = await axios(options)
        if(response.data == "user already exist"){
            setresponsemsg("user already exist")
        }else{
            setresponsemsg("SignUp Successfull")
        }
        setinputList({
            name:"",
            email:"",
            password:""
        })
        setTimeout(() => {
            setresponsemsg(null)
        }, 4000);
    }
  return (
    <div className='mainpagesignup'>
        <div className='mainNavBar'>
            <NavLink to={"/"} className="mainnavbtn">Sign uP</NavLink>
            <NavLink to={"/login"} className="mainnavbtnlogin">Login</NavLink>
        </div>
        <h2 style={{textAlign:"center"}}>Please Enter Below Details to SignUp</h2>
        <div className='formdiv'>
        <form onSubmit={submiHandler} className="signupform">
        <input type={"text"} placeholder="Enter UserName" name="name" required="required" onChange={inputChangeHandler} value={inputList.name}/>
        <br></br>
        <br></br>
        <input type={"email"} placeholder="Enter Emai" name="email" required="required" onChange={inputChangeHandler} value={inputList.email}/>
        <br></br>
        <br></br>
        <input type={"password"} placeholder="Enter Password" name="password" required="required" onChange={inputChangeHandler} value={inputList.password}/>
        <br></br>
        <br></br>
        <button className='signupbtn'>SignUp</button>
        </form>
        </div>
        {
            responsemsg ? <h3 style={{textAlign:"center"}}>{responsemsg}</h3> : null
        }
    </div>
  )
}

export default Signup