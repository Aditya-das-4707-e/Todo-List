import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])

  const handleEdit = () => { }
  const handleDelete = () => { }
  const handleAdd = () => {
    setTodos([...Todos, { Todo, isCompleted: false }])
    setTodo("")
    console.log(Todos);
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container bg-indigo-100 mx-auto m-5 rounded-xl p-5 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a todo</h2>
          <input onChange={handleChange} value={Todo} type="text" className='w-75' name="" id="" />
          <button onClick={handleAdd} className='bg-indigo-500 hover:bg-indigo-700 p-2 py-1 text-sm font-bold text-white rounded-md m-2 mx-5 transition-colors duration-150'>Add</button>
        </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          {Todos.map(item => {


            return <div className="todo flex">
              <div className={item.isCompleted?"":"line-through"}> {item.Todo} </div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-indigo-500 hover:bg-indigo-700 p-2 py-1 text-sm font-bold text-white rounded-md m-2 mx-2 transition-colors duration-150'>Edit</button>
                <button onClick={handleDelete} className='bg-indigo-500 hover:bg-indigo-700 p-2 py-1 text-sm font-bold text-white rounded-md m-2 mx-2 transition-colors duration-150'>Delete</button>
              </div>

            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
