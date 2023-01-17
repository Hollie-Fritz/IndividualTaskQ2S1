import React, {useReducer} from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

// to provide the values - create a context called CountContext
export const CountContext = React.createContext()
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

function App() {
  // create counter using reducer hook
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // pass countState and countDispatch as two parameters which returns the current state 
    // value and dispatch method
    // at the topmost level provide the two values as an object
    <CountContext.Provider value = {{countState: count, countDispatch: dispatch}}> 
    <div className='App'>
      Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
  </div>
  </CountContext.Provider>
  )
}

export default App;
