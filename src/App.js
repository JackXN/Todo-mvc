
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

// Run this sideEffect on mount 
useEffect(() => {
// console.log('test');
filterHandler();
}, [todos]) //Run only once when the component is rendered)




const filterHandler = () => {
switch(status) {
  //? Filter out the compelted todos
  case'completed':
  setFilteredTodos(todos.filter(todo => todo.completed === true));
  // ? Break
  break;
//? Create another switch statement for 'uncompleted' and 'completeed'
case 'uncompleted':
setFilteredTodos(todos.filter(todo => todo.completed === false));
break;
//? Default Case
default: 
setFilteredTodos(todos);
break;
}

}
console.log(filteredTodos)
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
