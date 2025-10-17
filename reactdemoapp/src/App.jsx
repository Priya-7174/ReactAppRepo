import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
<div><Header /></div>
     <div>
      
      <p className="read-the-docs">
                HI !!!!!
        This is my first demo app
      </p>
      </div>
      </>
    
  )
}

export default App
