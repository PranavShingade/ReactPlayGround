import logo from './logo.svg';
import './App.css';
// import Users from './Users';
import Client from './Client';
import ClassCompo from './ClassCompo';
import Students from './Students';
import Students1 from './Students1';
 import { Component, PureComponent, useState } from 'react';
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
import Parent1 from './FunctionalComponent/Parent1';
import Parent3 from './FunctionalComponent/Parent3';
import PureCounter from './PureCounter'
import CountMemo from './FunctionalComponent/CountMemo';
import UseRef from './UseRef';
import LoginOption from './FunctionalComponent/LoginOption';
import InputRef from './FunctionalComponent/InputRef';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './FunctionalComponent/Home'
import About from './FunctionalComponent/About'
import Navbar from './FunctionalComponent/Navbar';
import Page404 from './FunctionalComponent/Page404';
import User3 from './FunctionalComponent/User3';
import Filter from './FunctionalComponent/Filter';
import SignUp from './FunctionalComponent/SignUp';
import Contact from './FunctionalComponent/Contact';
import Channel from './FunctionalComponent/Channel';
import Company from './FunctionalComponent/Company';
import Navbar1 from './FunctionalComponent/Navbar1';
import Login1 from './FunctionalComponent/Login1';
import Protected from './FunctionalComponent/Protected';

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
      {/* <Customer/> */}
      {/* <Parent1/> */}
      {/* <Parent3/> 
      <PureCounter/> */}
      {/* <CountMemo/> */}
      {/* <UseRef/>
      <LoginOption/> */}
      {/* <InputRef/> */}
      
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Protected Component={Home}/>}></Route>
        <Route path='/login' element={<Login1/>}></Route>
        <Route path='/about' element={<Protected Component={About}/>}></Route>
        <Route path='/boot' element={<Boot/>}></Route> {/*THis is users Page*/}
        <Route path='about/user/:name' element={<User3/>}></Route>
        <Route path='/Filter' element={<Filter/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/*' element={<Page404/>}></Route>
        <Route path='/contact/' element={<Contact/>}>
          <Route path='channel' element={<Channel/>}></Route>
          <Route path='company' element={<Company/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>

      
    </div>
    

  );
}

export default App;
 