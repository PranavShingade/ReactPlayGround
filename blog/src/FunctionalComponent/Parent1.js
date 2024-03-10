import React from "react";
import Child1 from "./Child1";

function Parent(){
    const users=[{Name:"Pranav",Email:"pranav@gmail.com",contact:"123"},
    {Name:"Amit",Email:"amit@gmail.com",contact:"456"},
    {Name:"Amey",Email:"amey@gmail.com",contact:"789"}
]
    return(
        <div>
            <h2>Reuse Component with List</h2>
            {
                users.map((item,i)=>
                <Child1 data={item}/>)
            }
        </div>
    )
}
export default Parent