import React from 'react';  

function Child1(props){
    return(
        <div>
            <span>  {props.data.Name}  </span>
            <span>  {props.data.Email}  </span>
            <span>  {props.data.contact}  </span>
       </div>
    )
}
export default Child1