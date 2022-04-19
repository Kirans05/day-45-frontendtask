import React, { useState } from 'react'
import axios from "axios"


const LinkInput = ({setinputvalue}) => {
    const [urlvalue,seturlvalue] = useState("")

    const urlHandler = (e) => {
        e.preventDefault()
        seturlvalue(e.target.value)
    }

    const submitUrl = async (e) => {
        e.preventDefault()
        console.log("hi")
        let response = await axios(`https://api.shrtco.de/v2/shorten?url=${urlvalue}`)
        console.log(response.data.result.full_short_link)
        setinputvalue(response.data.result.full_short_link)
        seturlvalue("")
    }
  return (
    <div>
        <input type={"text"} placeholder="Paste URL" value={urlvalue} onChange={urlHandler}/>
        <button onClick={submitUrl}>Short URL</button>
    </div>
  )
}

export default LinkInput