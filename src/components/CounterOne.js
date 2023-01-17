import React, {useReducer} from 'react';
//define initial state
const initialState = 0
//accept current state and action then return new state
//action is a instruction to the reducer function
//define reducer function
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        //unknown action - default
        default:
            return state
    }
}

function CounterOne() {
    // call on useReducer passing in a reducer function and the inital state
    //returns the count value and dispatch method which accepts an action (button click)
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>            
        </div>
    )
}

export default CounterOne;