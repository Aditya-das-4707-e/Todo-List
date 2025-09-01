import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container bg-indigo-100 mx-auto m-5 rounded-xl p-5">
        
          <h1 className='text-xl font-bold'>Your Todos</h1>
          <div className="todos">
            <div className="todo">
              
            </div>
          </div>
        
      </div>
    </>
  )
}

export default App
