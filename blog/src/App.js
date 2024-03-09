import logo from './logo.svg';
import './App.css';
// import Users from './Users';
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
import ComponentDidUpdate from './ComponentDidUpdate'
import ShouldComponentUpdate from './ShouldComponentUpdate';
import ComponentWillUnmount from './ComponentWillUnmount'
import User from './FunctionalComponent/User'
import Parent from './FunctionalComponent/Parent'
import StyleDemo from './FunctionalComponent/StyleDemo'
import Studentss from './FunctionalComponent/Studentss'
import Boot from './FunctionalComponent/Table'
import Customer from './FunctionalComponent/Customer';
function App() {

   const [name,setName] = useState("Abhi")
  let[email,setmail] = useState('abhi@gmail.com')
  
  function apple(){
    setName("Siddhu")
    setmail('siddhu@gmail.com')
  }
  function FAP(){
    alert('Function as a Props send')
  }
  return (
    <div className="App">
      {/* <h1>Hello World..!</h1> */}
      {/* <Users/><br></br> */}
      {/* <Client/>
      <ClassCompo/> */}
      {/* <HandleForm/> */}
      {/* <Toggle/> */}
      {/* <Students Name={"Pranav"} Email={'pranav@gmail.com'}/>
      <Students1 Name={name} Email={email}/>
      <button onClick={()=>apple()}>Update State</button> */}
      {/* <Login/> */}
      {/* <TextPrint></TextPrint> */}
      {/* <FuncAsProps item={FAP}/> */}
      {/* <ComponentDidMount/> */}
      {/* <ComponentDidUpdate/> */}
      {/* <ShouldComponentUpdate/> */}
      {/* <ComponentWillUnmount/> */}
      {/* <User/> */}
      {/* <Parent/> */}
      {/* <StyleDemo/> */}
      {/* <Studentss/> map looping */}
      {/* <Boot/> */}
      <Customer/>
    </div>
  );
}

export default App;
 