import React, { useRef } from "react"


function InputRef()
{
    let data = useRef(null);
   
    function HandleInput(){
        console.log("Function Called");
        
        data.current.style.color='red';
        console.log(data.current.value);
        data.current.focus();
    }

    return(
        <div>
            <h1>Ref Using Functional Component</h1>
            <input type="text" ref = {data}></input>
            <button onClick={HandleInput}>CheckRef</button>
        </div>
    )
}
export default InputRef