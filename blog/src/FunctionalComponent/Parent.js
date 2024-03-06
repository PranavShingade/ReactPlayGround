import React, { useState } from 'react'
import Child from './Child'
function  Parent()
{
    const[data,setData]=useState(10)
    const[count,setCount]=useState(100)

    return(
        <div className='app'>
        <Child data={data} count={count} />
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}
export default Parent