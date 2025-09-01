import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="bg-red-600">
          hey i am div 
        </div>
      </div>
    </>
  )
}

export default App
