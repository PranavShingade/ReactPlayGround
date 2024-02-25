import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Client from './Client';
import ClassCompo from './ClassCompo';
import Students from './Students';
import Students1 from './Students1';
import { useState } from 'react';
import TextPrint from './TextPrint';
import Toggle from './Toggle';
import HandleForm from './HandleForm';
import Login from './Login'
import FuncAsProps from './FuncAsProps'

function App() {

   const [name,setName] = useState("Abhi")
  let[email,setmail] = useState('abhi@gmail.com')
  
  function apple(){
    setName("Siddhu")
    setmail('siddhu@gmail.com')
  }
  
  return (
    <div className="App">
      <h1>Hello World..!</h1>
      <Users/>
      <Client/>
      <ClassCompo/>
      {/* <HandleForm/>
      <Toggle/> */}
      {/* <Students Name={"Pranav"} Email={'pranav@gmail.com'}/>
      <Students1 Name={name} Email={email}/> */}
      {/* <button onClick={()=>apple()}>Update State</button> */}
      {/* <Login/> */}
      {/* <TextPrint></TextPrint> */}
      
    </div>
  );
}

export default App;
 