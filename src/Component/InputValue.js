import React,{useState} from 'react'

export default function InputValue() {
    const [name,setName]=useState("");
  const [print,setPrint]=useState(false);
  function getvalue(event){
    setName(event.target.value);
    setPrint(false);
    
  }
  return (
    <div>
        <input type='text' onChange={getvalue}></input>   
      <button onClick={()=>{setPrint(true)}}>UpdateName</button>
      {
        print?<h2>{name}</h2>: ""
        }
    </div>
  )
}




