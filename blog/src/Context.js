import React from "react";
import { CommonContext } from "./Components/CommonContext";
import Main from "./Components/Main";
import UpdateButton from "./Components/UpdateButton";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
class Context extends React.Component {
    constructor(){
        super();
        this.updateColor=(clr)=>{
            this.setState({ 
                color:clr
             })
           
        }
        this.state={
            color:"green",
            updateColor:this.updateColor
        }
        
    }

    render(){
        return(
            <div>
                <CommonContext.Provider value={this.state}>
                    <Header/>
                    <h1>Complete and Easy Example of context API</h1>
                    <Main/>
                    <UpdateButton/>
                    <Footer/>
                </CommonContext.Provider>

            </div>
        )
    }
}
export default Context