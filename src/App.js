import React, { useState } from 'react'
import LinkInput from './linkInput'
import ShortedInput from './shortedInput'
import Signup from './signup'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './login'
import Nav from './nav'
import Dashboard from './dashboard'
import ForgotPassword from './forgotPassword'
import Emailverification from './emailverification'
import UrlTable from './UrlTable'


function App() {
    const [inputvalue,setinputvalue] = useState("")
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:email" element={<Dashboard />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/emailverification" element={<Emailverification />} />
          <Route path="/urltable/:email" element={<UrlTable />} />
        </Routes>
      </BrowserRouter>
        {/* <LinkInput setinputvalue={setinputvalue}/>
        <ShortedInput inputvalue={inputvalue}/> */}
    </div>
  )
}

export default App