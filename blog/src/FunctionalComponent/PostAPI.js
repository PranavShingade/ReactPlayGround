import React, { useState } from "react";


function PostAPI(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");

    function SaveUser(){
        console.log({name,email,pass})
        let data = {name,email,pass}
        fetch("https://6604fd112ca9478ea17eefc8.mockapi.io/Acculexa",{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log("resp",resp);
            })
        })
    }
    return(
        <div>
            <h1>PostAPI Method</h1>
            <input name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/><br/><br/>
            <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Email"/><br/><br/>
            <input name="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Password    "/><br/><br/>
            <button type="button" onClick={SaveUser}>Save New User</button>
        </div>
    )
}
export default PostAPI;