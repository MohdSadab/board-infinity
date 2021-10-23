import React, { Component } from 'react'

class SimpleClassBased extends Component {
    constructor(props) {
        super()
        console.log("constructor called")
        this.state={count:1}
    }

    static getDerivedStateFromProps(props,state) {
        console.log("getDerivedStateFromProps called")
        return props
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate called")
        return true;
    }

    // called only ones in whole life cycle only first mounting
    componentDidMount(){
        console.log("componentDidMount called",document)
    }

    componentDidUpdate(prevProps, prevState){
        // called every time when compoennt is re render except first rendering
        console.log("componentDidUpdate called",prevState.count)
        if(prevState.count<5)
            this.setState(prevState=>({...prevState,count:prevState.count+1}))
        // don't update state here without condition infinite re rendering
    }

    componentWillUnmount(){
        // here we clear all the event listener 
        // here we cancelled the api calls 
        // for preventing leaked memory issue
        console.log("componentWillUnmount called")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate called",prevProps)
        return prevProps
    }

    render() {
        return (
            <div>
                SimpleClassBased Component {this.props.name}
            </div>
        )
    }
}

export function temp(){
    console.log("temp is exported")
}

export default SimpleClassBased


// 1st render lifecycle sequence for class based components(also known as mounting of a component)
// 1-> constructor get called for initialization of props and state called only once 
// 2-> getDerivedStateFromProps for access to props and state
// 3-> render method get called
// 4-> component did mount get called  called only once 

// updating lifecycle sequence for class based components(also known as mounting of a component)
// 1-> getDerivedStateFromProps for access to props and state
// 2-> should component update get called (can controll re rendering )
// 3-> render method get called
// 4-> getSnapshotBeforeUpdate called
// 5-> component did update get called  called when the state or props get change (does not called on first rendering)

// unmounting
// 1-> componentWillUnmount get called
