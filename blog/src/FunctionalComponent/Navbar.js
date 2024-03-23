import React from "react"
import { Link } from "react-router-dom"
import About from "./About"
import Home from './Home'
import Boot from './Table'
function Navbar(){
    return(
        <>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About us</Link></li>
            <li><Link to='/boot'>Users</Link></li>
            <li><Link to='user/pranav'>Pranav</Link></li>
            <li><Link to='user/varad'>varad</Link></li>
            
        </ul>
        </>
    )
}
export default Navbar