import { render } from '@testing-library/react'
import React,{Component} from "react"

class Students1 extends Component{

    render(){
        console.log(this.props)
        return(
           
            <div style={{backgroundColor:'grey',margin:20}} > Inside Class Components
            <h1>Name: {this.props.Name}</h1>
            <h3>Email:{this.props.Email}</h3>
            </div>
        )

        
    }

}
export default Students1;