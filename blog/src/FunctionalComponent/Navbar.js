import React from "react"
import { Link ,NavLink } from "react-router-dom"
import About from "./About"
import Home from './Home'
import Boot from './Table'
function Navbar(){
    return (
        <div>
            <ul className="nav-bar">
            <li><NavLink className='nav-link' style={{color:'red'}} to='/'>Home</NavLink></li>
            <li><NavLink to='/about' className='nav-link'>About us</NavLink></li>
            <li><NavLink to='/boot' className='nav-link'>Users</NavLink></li>
            </ul>
        </div>
    )
}
export default Navbar