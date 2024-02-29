import React from 'react'

class ComponentDidUpdate extends React.Component
{
    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("Constructor")
    }

    componentDidUpdate(preProps,preState,snapshot){

        console.log("componentDidUpdate", preState)


    }
    render(){
        console.log("render")
        
        return(
            <div>
             <h3>Component Did Update {this.state.count}</h3>
             <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update_count</button>
             </div>
        )
    }
}
export default ComponentDidUpdate