import React from 'react'
import { Link } from 'react-router-dom'
function About(){
    return(
        <>
        <h1>About Page</h1>
        <h3>This is about page of our awesome app </h3>
        <h3> & here we learning about React Router</h3>
        <Link to='user/pranav'>Pranav</Link><br/>
            <Link to='user/varad'>varad</Link>
        </>
    )
}
export default About