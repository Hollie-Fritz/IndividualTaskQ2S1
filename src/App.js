import React from 'react'
import './App.css'
import ComponentC from './components/ComponentC';

//step 1: create context
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className='App'>
      {/* step two: provide the context value */}
      <UserContext.Provider value={'Hello World'}>
        <ChannelContext.Provider value={'Hello'}>
        <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
  </div>
  )
}

export default App;
