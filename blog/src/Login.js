import React from 'react'
import { useState} from 'react';
import {Button} from 'react-bootstrap'
function Login()    
{
    const[user , setUser] = useState("")
    const[pass , setPass] = useState("")
    const[userErr , setUserErr] = useState(false)
    const[passErr , setPassErr] = useState(false)

    function LoginHandle(e)
    {
        alert('Your Data Submit Successfully..!')
        e.preventDefault()
    }

    function userHandler(e)
    {
        let item = e.target.value;
        if(item.length<3){
            setUserErr(true);
            console.log("invalid")
        }
        else{
            setUserErr(false);
            console.log(e.target.value.length)
        }

    }

    return(
        <div>
        <form onSubmit={LoginHandle}>
        <input type='text' placeholder='Enter UserID' onChange={userHandler}></input>{userErr?<span>User Not Valid</span>:""}<br></br>
        <input type='text' placeholder='Enter Password'></input>{passErr?<span>Password Not Valid</span>:""}<br></br>
        <Button type='submit' variant="outline-success">Submit</Button>{' '}
        </form>
        </div>
        

    )
}
export default Login