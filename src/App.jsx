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
          <button>Add</button>
        </div>
          <h2 className='text-xl font-bold'>Your Todos</h2>
          <div className="todos">
            <div className="todo flex">
              <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                <div className="buttons">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              
            </div>
          </div>
        
      </div>
    </>
  )
}

export default App
