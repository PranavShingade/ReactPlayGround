import React from "react";
import { useState } from "react";

function TextPrint(){
    const[data,setdata]=useState(null)
    let[print,setprint]=useState(false)

    function getdata(val){
        console.log(val.target.value)
        setdata(val.target.value)
        setprint(false)
    }

    return(
        <div>
            <h3>Enter a text here..</h3>
           
            <input type="text" onChange={getdata}></input>
            {/* <h3>{data}</h3> */}
            <button onClick={()=>setprint(true)}>Print</button>
            { print ?
           <h3>{data}</h3>
           : null }
            
        </div>
    )
}
export default TextPrint