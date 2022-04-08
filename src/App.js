import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Props from './Component/Props';
import React,{useState} from 'react';
import InputValue from './Component/InputValue';
import HideShow from './Component/Hide&Show';
import Form from './Component/Form';
import Condition from './Component/Condition';
import BasicForm from './Component/BasicForm';
import PassingFunction from './Component/PassingFunction';
import Lyfcycle from './Component/Lyfcycle';
import Compdidmount from './Component/Compdidmount';
import CompDidUpdate from './Component/CompDidUpdate';
import CompWillUnmount from './Component/CompWillUnmount';
import UseEffect from './Component/UseEffect';
function App() {
  // const[name,setName]=useState("rahul")
  // function getFunction(){
  //   alert("hello from app")
  // }
  
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Props n1 ={name} /> */}
      {/* <InputValue/> */}
      {/* <HideShow/> */}
      {/* <Form/> */}
      {/* <Condition/> */}
      {/* <BasicForm/> */}
      {/* <PassingFunction data={getFunction}/> */}
      {/* <Lyfcycle  /> */}
      {/* <button onClick={()=>setName("rohit")}>UpdateName</button> */}
      {/* <Compdidmount/> */}
      {/* <CompDidUpdate/> */}
      {/* <CompWillUnmount/> */}
      <UseEffect/>



      
    </div>
  );
}

export default App;
