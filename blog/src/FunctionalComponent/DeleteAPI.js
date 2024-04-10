import React from "react";
import { useState,useEffect } from "react";

function DeleteAPI(){

    const[data,setData]=useState([])
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");

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
        const item = data[id];
        // setName(item.name)
        setEmail(item.email)
        setPass(item.pass)
        
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
                <input type="text" value={name}/><br/><br/>
                <input type="text" value={email}/><br/><br/>
                <input type="text" value={pass} /><br/><br/>
                <button type="button">Update</button>

            </div>
        </div>
    )
}
export default DeleteAPI