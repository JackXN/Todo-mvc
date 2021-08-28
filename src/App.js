
import './App.css';
import TodoForm from './components/TodoForm';
import List from './components/List';
import React, {useState} from 'react';
import Todo from './components/Todo'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([]);

  return (
    <>
    <h1>Text</h1>
    {/* Setting the prop value */}
<TodoForm setInput={setInput} setTodos={setTodos} todos={todos} input={input}/>
<List todos={todos}/>

    </>
  );
}

export default App;
