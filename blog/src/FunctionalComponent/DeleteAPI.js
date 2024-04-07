import React from "react";
import { useState,useEffect } from "react";

function DeleteAPI(){

    const[data,setData]=useState([]);
    useEffect(()=>{
        getList();
    },[])

    function getList(){
        fetch("https://6604fd112ca9478ea17eefc8.mockapi.io/Acculexa").then((result)=>{
            result.json().then((resp)=>{
                setData(resp);
                console.log(resp)
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
                        data.map((items)=>
                           <tr>
                            
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.password}</td>
                            <td><button type="delete" onClick={()=>DeleteRecord(items.id)}>Delete</button></td>
                            
                           </tr>
                        )
                    }

                

            </table>
        </div>
    )
}
export default DeleteAPI