import React, { useEffect, useState } from 'react'

const ShortedInput = ({inputvalue}) => {
    const [shortvalue,setshortvalue] = useState("")
    useEffect(()=>{
        setshortvalue(inputvalue)
    },[inputvalue])

    const changeHandler = (e) => {
        e.preventDefault()
        setshortvalue(inputvalue)
    }
  return (
    <div>
        <input type={"text"} value={shortvalue} onChange={changeHandler}/>
        <button>copy to clipboard</button>
    </div>
  )
}

export default ShortedInput