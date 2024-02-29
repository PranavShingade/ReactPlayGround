
import {useState} from "react";
import App from "./App";

function Users(){
    
    let [name,setName] = useState("world")
    
    function Apple(){
        setName("Users")
       
       
    }
    
    return(
        <div className="app">
            <h1>{name}</h1>
            <button onClick={Apple}>Click Here..</button>
        </div>
    )
    
}
export default Users;