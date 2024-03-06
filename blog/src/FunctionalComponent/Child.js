import React, { useEffect } from 'react'

function Child(props)
{

    useEffect(()=>{
        console.log("useEffect called after update data")
    },[props.data])

    useEffect(()=>{
        console.log("UseEffect Called After Update Count")
    },[props.count])

  return (
    <div>
      <h1>Data : {props.data}</h1>
      <h1>Count : {props.count}</h1>
      
    </div>
  )
}

export default Child
