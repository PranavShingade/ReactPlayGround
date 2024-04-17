import React from "react";
import { CommonContext } from "./Components/CommonContext";
import Main from "./Components/Main";
class Context extends React.Component {
    constructor(){
        super();
        this.state={
            color:"green",
            updateColor:this.updateColor
        }
        this.updateColor=()=>{
            this.setState({ 
                color:"red"
             })
           
        }
    }

    render(){
        return(
            <div>
                <CommonContext.Provider value={this.state}>
                    <h1>Complete and Easy Example of context API</h1>
                    <Main/>
                </CommonContext.Provider>

            </div>
        )
    }
}
export default Context