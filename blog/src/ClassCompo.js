import React,{Component} from "react"

class ClassCompo extends Component{
    constructor(){
        super();
        this.state={
            data:"Inside The Class Component"
        }
    }
    app(){
        this.setState({data:"Function Called"})
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.app()}>Click Here</button>
            </div>
        )
    }
    
}
export default ClassCompo;