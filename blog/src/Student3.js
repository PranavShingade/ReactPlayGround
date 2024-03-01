import React, { Component } from "react"

class Student3 extends Component
{
    componentWillUnmount()
    {
        alert("ComponentWillUnmount")
    }
   render()
   {
    return(
        <div>
            <h3> Child Component Load</h3>
        </div>
    )
   }
}
export default Student3;