import React from 'react'

function FuncAsProps(props)
{
    return(
        <div>
            <h3> Sending Function as a props..</h3>
            <button onClick={FuncAsProps.props}>Call Function</button>
        </div>
    )
}
export default FuncAsProps;