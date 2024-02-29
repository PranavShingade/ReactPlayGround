
import React from 'react'

class ShouldComponentUpdate extends React.Component
{

    constructor(){
        super()
        this.state={count:0}
        console.log("constructor",this.state.count)
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        if(this.state.count>=4 && this.state.count<8)
        {
            return true;
        }
       
    }
    render(){
        console.log("render")
        return(
            <div>
                <h3> ShouldComponentUpdate..{this.state.count} </h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update_State</button>
            </div>
        )
    }
}
export default ShouldComponentUpdate
