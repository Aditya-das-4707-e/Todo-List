import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container bg-indigo-100 mx-auto m-5 rounded-xl p-5 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a todo</h2>
          <input type="text" name="" id="" />
          <button className='bg-indigo-500 hover:bg-indigo-700 p-2 py-1 text-sm font-bold text-white rounded-md m-2 transition-colors duration-150'>Add</button>
        </div>
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <div className="todos">
            <div className="todo flex">
              <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                <div className="buttons">
                  <button className='bg-indigo-500 hover:bg-indigo-700 p-2 py-1 text-sm font-bold text-white rounded-md m-2 transition-colors duration-150'>Edit</button>
                  <button className='bg-indigo-500 hover:bg-indigo-700 p-2 py-1 text-sm font-bold text-white rounded-md m-2 transition-colors duration-150'>Delete</button>
                </div>
              
            </div>
          </div>
        
      </div>
    </>
  )
}

export default App
