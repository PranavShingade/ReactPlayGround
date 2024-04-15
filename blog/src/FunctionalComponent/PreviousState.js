import React, { useState } from "react";

function PreviousState(){
    const [count,setCount]=useState(1);
    const [pre,setPre]=useState()
    const [data,setData]=useState({name:"Pranav",age:24})
    function UpdateCounter(){
       let num = (Math.floor(Math.random()*10));
       setCount((pre)=>{
        console.log(pre);
        setPre(pre);
        return num;
       })
    }
    return(
        <div className="prestate"><br/>
            <h2>Current State {count}</h2>
            <button onClick={UpdateCounter}>Update State</button>
            <h2>Previous State {pre}</h2><br/>

            <h2>State Object With Hook </h2>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setData({...data,name:e.target.value})}></input>
            <input type="text" placeholder="Enter Age" onChange={(e)=>setData({...data,age:e.target.value})}></input>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>


        </div>
    )
}
export default PreviousState