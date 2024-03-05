import React from 'react'
import { useState, useEffect } from 'react'

function User()
{
const [data, setData] = useState(10);
const [count, setCount] = useState(100);

useEffect(() =>{
    console.log("useEffect called Data")
},[data])

useEffect(()=>{
    console.log("useEffect Called Count")
},[count])

return(
        <div>
            <h1>data : {data}</h1>
            <h1>count : {count}</h1>
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
        </div>
    )
}
export default User;