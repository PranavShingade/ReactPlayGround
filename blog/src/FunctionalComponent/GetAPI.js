import React, { useEffect, useState } from "react";
function GetAPI(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://6604fd112ca9478ea17eefc8.mockapi.io/Acculexa").then((result)=>{
            result.json().then((resp)=>{
                setData(resp);
                console.log(resp)
            })
        })
    },[])
    return(
        <div>
            <h1>Get API Method</h1>
            <table border={2}>
                <tr>
                   
                        <td>UserId</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                 
                </tr>
                    {
                        data.map((items)=>
                           <tr>
                            
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.password}</td>
                            
                           </tr>
                        )
                    }

                

            </table>
        </div>
    )
}
export default GetAPI