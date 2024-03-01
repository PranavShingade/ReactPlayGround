import React from 'react'
import Student3 from './Student3'
class ComponentWillUnmount extends React.Component
{
    constructor(){
        super()
        this.state={
            show:true
        }
    }
    render()
    {
        return(
            <div>
                <h3>ComponentWillUnmount..{this.state.show}</h3>
                {this.state.show ? <Student3/> : <h3>child Component Removed </h3>}
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
            </div>
        )
    }
}
export default ComponentWillUnmount