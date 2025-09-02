import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState(() => {
    // Initialize from localStorage
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [showFinished, setShowFinished] = useState(false); // start with showing all
  const [editId, setEditId] = useState(null);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  // Save to localStorage whenever Todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos));
  }, [Todos]);

  const handleAdd = () => {
    if (Todo.trim() === "") {
      alert("Input is empty! Please enter a task.");
      return;
    }

    if (editId) {
      setTodos(
        Todos.map((item) =>
          item.id === editId ? { ...item, text: Todo } : item
        )
      );
      setEditId(null);
    } else {
      setTodos([
        ...Todos,
        { id: Date.now(), text: Todo, isCompleted: false },
      ]);
    }

    setTodo("");
  };

  const handleChange = (e) => setTodo(e.target.value);

  const handleDelete = (id) => {
    setTodos(Todos.filter((item) => item.id !== id));
    if (editId === id) {
      setTodo("");
      setEditId(null);
    }
  };

  const handleToggle = (id) => {
    setTodos(
      Todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleEdit = (id) => {
    const toEdit = Todos.find((item) => item.id === id);
    if (toEdit) {
      setTodo(toEdit.text);
      setEditId(id);
    }
  };

  const handleCancelEdit = () => {
    setTodo("");
    setEditId(null);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-6">
        <div className="bg-indigo-100 rounded-xl p-6 min-h-[80vh] w-full max-w-2xl shadow-lg">
          <div className="addTodo my-5">
            <h2 className="text-lg font-bold mb-2">Add your todo</h2>
            <div className="flex gap-3">
              <input
                onChange={handleChange}
                value={Todo}
                type="text"
                placeholder="Write your task..."
                className="flex-1 border rounded-md p-2"
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              />
              <button
                onClick={handleAdd}
                className="bg-indigo-500 hover:bg-indigo-700 px-4 py-2 text-sm font-bold text-white rounded-md transition-colors duration-150"
              >
                {editId ? "Update" : "Save"}
              </button>
              {editId && (
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-400 hover:bg-gray-600 px-4 py-2 text-sm font-bold text-white rounded-md transition-colors duration-150"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>

          {/* Toggle for showing finished */}
          <label className="flex items-center gap-2 mb-3">
            <input className="cursor-pointer"
              onChange={toggleFinished}
              type="checkbox"
              checked={showFinished}
            />
            Show Finished
          </label>

          <h2 className="text-xl font-bold mb-3">Your Todos</h2>
          <div className="todos space-y-3">
            {Todos.length === 0 && (
              <p className="text-gray-500">
                No todos available. Please add some tasks.
              </p>
            )}
            {Todos.filter((item) =>
              showFinished ? item.isCompleted : true
            ).map((item) => (
              <div
                key={item.id}
                className="todo flex items-center justify-between p-3 bg-white rounded-md shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <input className="cursor-pointer"
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleToggle(item.id)}
                  />
                  <div
                    className={
                      item.isCompleted
                        ? "line-through text-gray-500"
                        : "text-gray-900"
                    }
                  >
                    {item.text}
                  </div>
                </div>
                <div className="buttons flex gap-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-indigo-500 hover:bg-indigo-700 px-3 py-1 text-sm font-bold text-white rounded-md transition-colors duration-150"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 px-3 py-1 text-sm font-bold text-white rounded-md transition-colors duration-150"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;