import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchParam from './components/SearchParam'


function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
      <div>
        <h1>This is the course from Frontend Master v8</h1>
        
      </div>
      <SearchParam />
      
    </>
  )
}

export default App
