import React,{PureComponent} from "react";

class PureCounter extends PureComponent{

    constructor()
    {
        super();
        this.state={
            count : 0
        }
    }

    render()
    {
        console.log(" Pure Component Stop re-rendering the component")
        return(
            <div>
                <h2> Pure Component Stop re-rendering the component - {this.state.count}</h2>
                <button onClick={()=>this.setState({count :1 })}>Update Count</button>
            </div>
        )
    }
}
export default PureCounter;