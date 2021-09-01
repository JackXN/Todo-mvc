import "./App.css";
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import React, { useState, useEffect } from "react";


function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run the filterHandler() when todos,status re-render
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      //? Filter out the completed todos
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      //? Filter out the active todos
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      //? Set a default value for every todo regardless of status
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="app-container">
      <div className="App">
        <div className="form-layer">
          <div className="form-layout">
            <h1>Tinkers Todo List</h1>

            {/* Setting the prop values */}
            <TodoForm
              setInput={setInput}
              setTodos={setTodos}
              todos={todos}
              input={input}
              setStatus={setStatus}
            />

            <List
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
