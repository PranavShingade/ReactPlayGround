import React from "react";
import { CommonContext } from "./CommonContext";
class Main extends React.Component {
    render(){
        return(
            <div>
                <CommonContext.Consumer>
                    {
                        ({color})=>(
                            <h2 style={{backgroundColor:color}}>Hello This Is Main Page</h2>
                        )
                    }
                </CommonContext.Consumer>

            </div>
        )
    }
}
export default Main