import React from "react";
import { useLocation, useParams } from "react-router-dom";

function User3(){
    const params =useParams();
    const {name} = params ;
    const location = useLocation()
    console.log(location)
    return(
        <div>
            <h2>This is {name} Page</h2>
        </div>
    )
}
export default User3    