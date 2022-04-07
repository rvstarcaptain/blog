// import React,{useState} from 'react'

// export default function BasicForm() {
//     const[userid,setUserid]=useState("");
//     const[password,setPassword]=useState("");
//     const[error,setError]=useState(false);
//     const[passerror,setPassError]=useState(false);
    
//     function formsubmission(e){
//         e.preventDefault();
//         if(userid.length <=3 || password.length <=8){
//           alert("type correct value")
//         }else{
//           alert('typed ok :');
//         }
        
//     }
//     function userHandler(e){
//       let output =  e.target.value.length;
//       if(output <=3){
//         setError(true);
//       }else{
//         setError(false)
//       }
//       setUserid(output)
     

//     }
//     function passwordHandler(e){
//       let output =  e.target.value.length;
//       if(output <=7){
//         setPassError(true);
//       }else{
//         setPassError(false)
//       }
//       setPassword(output);
     

//     }
//   return (
//     <div>
//         <h1>Login</h1>
//         <form onSubmit={formsubmission}>
//         <input type='text' placeholder='enter userid' onChange={userHandler} />
//         <br></br>
//         {
//           error?<span>invalid userid</span>:""
//         }
//         <br></br>
//         <input type='text' placeholder='enter Password' onChange={passwordHandler}/>
//         <br></br>
//         {
//           passerror?<span>invalid userpassword</span>:""
//         }
//         <br></br>
//         <button type="submit">Login</button>
//         </form>

//     </div>
//   )
// }
