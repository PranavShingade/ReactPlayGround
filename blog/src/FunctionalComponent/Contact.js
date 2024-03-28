import React from "react";
import { Link , Outlet } from "react-router-dom";
function Contact(){
    return(
        <div>
            <h2>Contact Us Page</h2>
            <p>Here we have some other business..!</p>
            <Link to='channel'>View Channel</Link><br></br>
            <Link to='company'>Go to company page</Link><br></br>
            
            <Outlet/>
        </div>
    )
}
export default Contact