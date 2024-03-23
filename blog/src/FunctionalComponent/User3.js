import React from "react";
import { useParams } from "react-router-dom";

function User3(){
    const params =useParams();
    const {name} = params ;
    
    return(
        <div>
            <h2>This is {name} Page</h2>
        </div>
    )
}
export default User3    