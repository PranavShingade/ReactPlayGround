import React from 'react'

function Studentss(){

    const student = ['Pranav','Amey','Shubham','Abhi','Amit'];
    return(
     <div>
        <h2>Handle Array with List</h2>
        {
            student.map((data)=>
                <h3>Name : {data}</h3>
            )
        }
    </div>
    )
}
export default Studentss