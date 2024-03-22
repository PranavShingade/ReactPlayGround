import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

function Page404()
{
    return(
        <div>
            <h2>This is Error Page</h2>
            <h2>This URL is not present</h2>
           <Link to='/'>Go to home page</Link>
        </div>
    )
}
export default Page404