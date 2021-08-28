
import './App.css';
import TodoForm from './components/TodoForm';
import List from './components/List';
import React, {useState} from 'react';
import Todo from './components/Todo'

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');


  return (
    <>
    <h1>Todo App
    </h1>
    {/* Setting the prop value */}
<TodoForm setInput={setInput} setTodos={setTodos} todos={todos} input={input} setStatus={setStatus}/>
<List todos={todos} setTodos={setTodos}/>

    </>
  );
}

export default App;
