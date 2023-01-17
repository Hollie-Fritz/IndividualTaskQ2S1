import React from 'react'
import './App.css'
import CounterTwo from './components/CounterTwo'

//step 1: create context
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className='App'>
      {/* <CounterOne /> */}
      <CounterTwo />
  </div>
  )
}

export default App;
