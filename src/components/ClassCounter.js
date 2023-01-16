import React, { Component } from 'react'

//1st step: create class component
class ClassCounter extends Component{
    constructor(props) {
        super(props)

        //2nd step: create state variable 
        this.state = {
            count: 0
        }
    }

    //3rd step: create method that is capable of setting the state value
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Count {this.state.count}</button>
            </div>
        )
    }
}
export default ClassCounter