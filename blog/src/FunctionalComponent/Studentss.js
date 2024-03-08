import React from 'react'
import '../FunctionalComponent/style.css'
function Studentss(){

    const student = [
        {Name:"Pranav",Email:"Pranav@gmail.com",Contact:123},
        {Name:"Amey",Email:"Amey@gmail.com",Contact:321},
        {Name:"Abhi",Email:"Abhi@gmail.com",Contact:456},
        {Name:"Amit",Email:"Amit@gmail.com",Contact:654},
        {Name:"Shubh",Email:"Shubh@gmail.com",Contact:789},
     ];
    return(
     <div className='asb'>
        <div>
            <h2>Handle Array with list..</h2><br/><br/>
            <table border="1">
                <tr> 
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>CONTACT</td>
                </tr>
        
         {
            student.map((data)=>
                <tr>
                    <td>{data.Name}</td>
                    <td>{data.Email}</td>
                    <td>{data.Contact}</td>
                </tr>
            )
         }
            </table>
        </div>
        
    </div>
    )
}
export default Studentss