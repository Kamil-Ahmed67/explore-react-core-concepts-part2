import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'
import Friend from './Friend'

function App() {
  function handleClick(){
    alert ('Button CLicked');
  }
  const handleClick2=()=>{
    alert('Button-2 Clicked')
  }
  const addToFIve=(num)=>{
    alert(num+5);
  }
  return (
    <>
      
      <h3>React Core Concepts-2</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('Button-3 Clicked')}}>Click 3</button>
      <button onClick={()=>{addToFIve(5)}}>Click-4</button>
      
    </>
  )
}

export default App
