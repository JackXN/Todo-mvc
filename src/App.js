import "./App.css";
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [mewTwo, setMewTwo] = useState([]);




useEffect(() => {
  async function fetchData() {
  fetch('http://arch.bugfoot.net:8080/api/rest/todos', {
    method: 'GET',
    headers: {['x-hasura-user-id']: '257368db-79b8-4948-bf64-6fef2a764f5e'}
  })
.then((res) => res.json())
.then(setMewTwo)
.catch((error) => {
  console.log(error)
})
}
fetchData();
}, [])







  // const Api = axios.create({
  //   baseURL: `http://arch.bugfoot.net:8080/api/rest/`
  // })



// useEffect(() => {
//  async function fetchData() {
//    const result = await Api.get('/todos')
//    .then(console.log)
//  }
//  fetchData();
// }, [])













  //! Run the filterHandler() when todos,status re-render
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
