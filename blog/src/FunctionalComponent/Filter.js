import React from "react";
import { useSearchParams } from "react-router-dom";
function Filter(){
    const[searchparams,setserchparams]=useSearchParams();
    const data = searchparams.get('age');
    const data1 = searchparams.get('city');
    return(
        <div>
            <h2>Filter Page</h2>
            <h3>Write a query String</h3>
            <h3>Age = {data}</h3>
            <h3>City = {data1}</h3>
        </div>
    )
}
export default Filter