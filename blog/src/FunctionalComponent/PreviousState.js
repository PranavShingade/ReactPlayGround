import React, { useState } from "react";

function PreviousState(){
    const [count,setCount]=useState(1);
    const [pre,setPre]=useState()
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
            <h2>Previous State {pre}</h2>
        </div>
    )
}
export default PreviousState