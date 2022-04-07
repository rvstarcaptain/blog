import React,{useState} from 'react'

export default function BasicForm() {
    const[userid,setUserid]=useState("");
    const[password,setPassword]=useState("");
    function prevent(e){
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={prevent}>
        <input type='text' placeholder='enter userid'/><br></br>
        <input type='text' placeholder='enter Password'/>
        <button type="submit">Login</button>
        </form>

    </div>
  )
}
