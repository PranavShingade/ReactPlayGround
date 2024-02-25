import React from 'react'

function FuncAsProps(props)
{
    return(
        <div>
            <h3>Inside a FuncAsProps..</h3>
            <button onClick={props.item}>Click</button>
        </div>
    )
}
export default FuncAsProps;