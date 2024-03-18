import React,{Component, createRef} from "react";

class UseRef extends Component{
    
constructor(){
    super();
    this.inputRef = createRef();
}
 getVal(){
    console.log(this.inputRef.current.value )
    this.inputRef.current.style.color='red';

}
componentDidMount(){
    console.log(this.inputRef.current.value = 1000)
}
render()
{
    return(
        <div>
            <h1>Check React Ref</h1>
            <input type='text' ref = {this.inputRef}></input>
            <button onClick={()=>this.getVal()}>Check Ref</button>
        </div>
    )
}
}
export default UseRef