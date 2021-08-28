
import './App.css';
import TodoForm from './components/TodoForm';
import List from './components/List';
import React, {useState, useEffect} from 'react';
import Todo from './components/Todo';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


const filterHandler = () => {
  switch(status){
    case 'completed':
     setFilteredTodos(todos.filter(todo => todo.completed === true))
     break;
     case 'active':
       setFilteredTodos(todos.filter(todo => todo.completed === false));
       break;
       default:
         setFilteredTodos(todos)
         break;
  }
}




  return (
    <div className='App'>
      
    <h1>Tinkers Todo List
    </h1>
    <div className='form-layout'>
    {/* Setting the prop values */}
<TodoForm setInput={setInput} 
setTodos={setTodos} 
todos={todos} input={input} 
setStatus={setStatus}/>

<List todos={todos} 
setTodos={setTodos} 
filteredTodos={filteredTodos}/>
</div>
</div>
  );
}

export default App;
