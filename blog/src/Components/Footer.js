import React from "react";
import { CommonContext } from "./CommonContext";
class Footer extends React.Component {
    render(){
        return(
            <div>
                <CommonContext.Consumer>
                    {
                        ({color})=>(
                            <h2 className= "footer" style={{backgroundColor:color}}>Footer Page</h2>
                        )
                    }
                </CommonContext.Consumer>

            </div>
        )
    }
}
export default Footer