
import {useState} from "react";
import App from "./App";
import {Button} from 'react-bootstrap'
function Users(){
    
    let [name,setName] = useState("world")
    
    function Apple(){
        setName("Users")
       
       
    }
    
    return(
        <div className="app">
            <h1>{name}</h1>
            <Button variant="outline-info" onClick={Apple}>Click Here..</Button>{' '}
        </div>
    )
    
}
export default Users;