import React, { useEffect, useMemo, useState } from "react";

function CountMemo(){
    const [count,setCount]=useState(1)
    const [item,setItem]=useState(10)

    const MultiCountMemo = useMemo(function multiItem(){
        console.log("multiItem");
        return item*10;
    },[item])

    useEffect(()=>{
        console.log("useEffect");
    },[count])

    return(
        
        <div>
            
            <h1>UseMemo Hook in React</h1>
            <h1> Count : {count}</h1>
            <h1>item : {item}</h1>
            <h2>{MultiCountMemo}</h2>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setItem(item+10)}>Update Item</button>
        </div>
    )
}
export default CountMemo