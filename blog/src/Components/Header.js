import React from "react";
import { CommonContext } from "./CommonContext";
class Header extends React.Component {
    render(){
        return(
            <div>
                <CommonContext.Consumer>
                    {
                        ({color})=>(
                            <h2 style={{backgroundColor:color}}>Header Page</h2>
                        )
                    }
                </CommonContext.Consumer>

            </div>
        )
    }
}
export default Header