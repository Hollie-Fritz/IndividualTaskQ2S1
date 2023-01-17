import React from 'react'
import './App.css'
import CounterThree from './components/CounterThree'

//step 1: create context
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <CounterThree />
  </div>
  )
}

export default App;
