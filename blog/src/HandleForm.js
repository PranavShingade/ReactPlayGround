import React ,{Component}from 'react'
import { useState } from 'react'
import {Button} from 'react-bootstrap'

function HandleForm()
{

const[name , setName]=useState("")
const[interest, setInterest]=useState("")
const[tnc,setTnc] = useState(false)

    function getData(e){
            console.log(name,interest,tnc);
            e.preventDefault()
    }
      return(
        <div >
        <form onSubmit={getData}>
            <input type='text' placeholder='Enter Name '
             onChange={(e)=>setName(e.target.value)}></input><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Option</option>
               <option>DAC</option>
               <option>DBDA</option>
               <option>DMC</option>
               <option>DITISS</option>
            </select><br/>
            <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}></input>
            <span>Terms & Conditions</span><br/>
            <Button variant="outline-success" type='submit' >Submit</Button>{''}
        </form>
        </div>





    )
}
export default HandleForm