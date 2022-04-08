import React,{useEffect,useState} from 'react'
//combination of lyfcycle method.......
export default function UseEffect() {
    const[count,setCount]=useState(0)
    
    useEffect(()=>{console.log("useeffect")})
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}
