import React from 'react'

class ComponentDidMount extends React.Component
{
    constructor(){
        super()
        this.state={
            Name:"Pranav"
            
        }
        console.log('constructor')
    }

    componentDidMount()
    {
        console.log("componentDidMount")
    }

    render()
    {
          console.log("render")
          
        return(
            <div>
                <h3>Component Did Mount {this.state.Name}</h3>
                <button onClick={()=>{this.setState({Name:"Sid"})}}>Update Name</button>
            </div>
        )
    }
       
}
export default ComponentDidMount