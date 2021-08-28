
import './App.css';
import TodoForm from './components/TodoForm';
import List from './components/List';
import React, {useState} from 'react';
import Todo from './components/Todo'

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

const filterHandler = () => {
switch(status) {
  //? Filter out the compelted todos
  case 'completed';
  setFilteredTodos(todos.filter(todo => todo.completed === true));
  // ? Break
  break;
//? Create another switch statement for 'uncompleted' and 'completeed'
case: 'uncompleted';
setFilteredTodos(todos.filter(todo => todo.uncompleted === true));
break;
case: 'all';
setFilteredTodos(todos.filter(todo => todo.all === true));
break;


}
}


  return (
    <>
    <h1>Todo App
    </h1>
    {/* Setting the prop values */}
<TodoForm setInput={setInput} setTodos={setTodos} todos={todos} input={input} setStatus={setStatus}/>
<List todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
