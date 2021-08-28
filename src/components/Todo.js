import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai';
import {BsFillTrash2Fill} from 'react-icons/bs';
import "./todo.css"



function Todo( { text,todo, todos, setTodos } ) {
// Events
const deleteHandler = () => {
//Filter the state and find element that matches the element i clicked on
setTodos(todos.filter((element) => element.id !== todos.id));

console.log(todo)
}

const completeHandler = () => {
    setTodos(todos.map((item) => {
        if(item.id === todo.id) {
            return {
                ...item, completed: !item.completed
            }
        }
        //incase it does not match just return whatever it wants
        return item;
    }))
}


    return (
        <div>
        <li className={`todo-item ${todo.completed ? 'completed' : '' }`}>{text}</li>
        <button onClick={completeHandler}><AiFillCheckCircle/></button>
        <button onClick={deleteHandler}><BsFillTrash2Fill/></button>
        </div>
    )
}

export default Todo
