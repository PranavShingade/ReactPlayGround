import React,{Component} from 'react'
import {useState } from 'react'

function Toggle()
{
    const[statusbar , setstatusbar] = useState(true)
    return(
        <div>
            {
            statusbar ?<h2> Toggle is working </h2>:null
            }
            {/* <button onClick={()=>setstatusbar(true)} >Show </button>
            <button onClick={()=> setstatusbar(false)}>Hide</button> */}
            <button onClick={()=>setstatusbar(!statusbar)}> Toggle </button>
        </div>
    )
}
export default Toggle