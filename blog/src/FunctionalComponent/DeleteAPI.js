import React from "react";
import { useState,useEffect } from "react";

function DeleteAPI(){

    const[data,setData]=useState([])
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[userId,setUserId]=useState(null);
    useEffect(()=>{
        getList();
    },[])

    function getList(){
        fetch("https://6604fd112ca9478ea17eefc8.mockapi.io/Acculexa").then((result)=>{
            result.json().then((resp)=>{
                setData(resp);
                console.log(resp)
                setName(resp[0].name)
                setEmail(resp[0].email)
                setPass(resp[0].pass)
                setUserId(resp[0].id);

            })
        })
    }

    function DeleteRecord(id){
        fetch("https://6604fd112ca9478ea17eefc8.mockapi.io/Acculexa/"+id,{
            method:"DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                getList();
            })
        })
        
    }
    
    function SelectUser(id){
        console.log(data[id-1]);
        setName(data[id-1].name)
        setEmail(data[id-1].email)
        setPass(data[id-1].pass)
        setUserId(data[id-1].id)
        
    }
    function UpdateUser(){
        console.log(name , email , pass,userId , "Inside UpdateUser");
        let item = {name , email , pass,userId}
        fetch("https://6604fd112ca9478ea17eefc8.mockapi.io/Acculexa/"+userId,{
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
             },
             body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                getList();
            })
        })
        
    }
    return(
        <div>
            <h1>Delete API Method</h1>
            <table border={2}>
                <tr>
                   
                        <td>UserId</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Operations</td>
                 
                </tr>
                    {
                        data.map((items,i)=>
                           <tr key={i}>
                            
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.password}</td>
                            <td><button type="delete" onClick={()=>DeleteRecord(items.id)}>Delete</button></td>
                            <td><button type="button" onClick={()=>SelectUser(items.id)}>Update</button></td>

                           </tr>
                        )
                    }

                

            </table>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <input type="text" value={email}onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <input type="text" value={pass}onChange={(e)=>setPass(e.target.value)}/><br/><br/>
                <button type="button" onClick={UpdateUser}>Update</button>

            </div>
        </div>
    )
}
export default DeleteAPI