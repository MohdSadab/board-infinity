import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super();
        this.state={
            counter:0,
            name:"My Counter"
        }
    }

    render() {
        return (
        <>
            <div>
               {this.state.name}:{this.state.counter} 
            </div>
            <div>
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>Increment</button>
                <button onClick={()=>this.setState((prevState)=>({counter:prevState.counter-1}))}>Decrement</button>
            </div>
        </>
        )
    }
}
