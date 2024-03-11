import React from "react";
import User1 from '../FunctionalComponent/User1'
function Parent3(){

    function parentAlert(data){
        alert(data)
    }
    return( 
        <div>
            <h1>Lifting State Up</h1>
            <User1 alert={parentAlert}/>
        </div>
    )
}
export default Parent3