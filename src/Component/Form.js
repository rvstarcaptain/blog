// import React,{useState} from 'react'

// export default function Form() {
//     const[name,setName]=useState('');
//     const[tnc,setTnc]=useState(false);
//     const[intrest,setIntrest]=useState("");
//     function getFormData(e){
//         console.log(name,tnc,intrest)
//         e.preventDefault()
//     }
//   return (
//     <div>
//         <h1>Form Activity</h1>
//         <form onSubmit={getFormData}>
//             <input type="text"  placeholder='enter name' onChange={(e)=>{setName(e.target.value)}}/><br></br>
//             <select value={intrest} onChange={(e)=>setIntrest(e.target.value)}>
//                 <option>Select Option</option>
//                 <option>Marvel</option>
//                 <option>Dc</option>
//             </select><br></br>
//             <input type="checkbox" value={tnc} onChange={(e)=> setTnc(e.target.checked)} /><span>Accept Terms And Condition</span>
//             <br></br><br></br>
//             <button type='submit'>Submit</button>
//             <button type='reset' value="reset">clear</button>
//         </form>
//     </div>
//   )
// }
