
import './App.css';
import TodoForm from './components/TodoForm';
import List from './components/List';
import React, {useState} from 'react';


function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = ([]);
  
  return (
    <>
    <h1>Text</h1>

    {/* Setting the prop value */}
<TodoForm setInput={setInput}/>
    </>
  );
}

export default App;
