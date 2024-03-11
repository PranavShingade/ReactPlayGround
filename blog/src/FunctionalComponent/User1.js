import React from "react";

function User1(props){
    const data = "Pranav Shingade"
    return(
        <div>
            <h2>User Name :</h2>
            <button onClick={()=>props.alert(data)}>Click</button>
        </div>
    )
}
export default User1