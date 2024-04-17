import React from "react";
import { CommonContext } from "./CommonContext";

function UpdateButton(){
    return(
        <div>
            <CommonContext.Consumer>
                {
                  
                        ({updateColor})=>(
                            <div>
                            <button onClick={()=>updateColor("orange")}>Update Orange Color</button>
                            <button onClick={()=>updateColor("yellow")}>Update Yellow Color</button>
                            <button onClick={()=>updateColor("blue")}>Update Blue Color</button>

                            </div>
                    )
                   
                    
                }
            </CommonContext.Consumer>

        </div>
    )
}
export default UpdateButton;