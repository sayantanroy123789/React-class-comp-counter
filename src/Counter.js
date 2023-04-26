import { Component } from "react";
import './App.css';

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleDeccrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    reset=()=>{
        this.setState({
            count:0
        })
    }
render(){
    return(
        <div id="container">
            <h1>Count is {this.state.count}</h1>
        <button onClick=  {this.handleIncrement}>Increment</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.handleDeccrement}>Decrement</button>
        </div>
    )
}
}
export default Counter;