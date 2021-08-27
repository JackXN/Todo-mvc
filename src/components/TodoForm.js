/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'





const FormContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

`



function TodoForm() {
    const [input,setInput] = useState('');

    //HANDLER FUNCTIONS

const handleChange = e => {
    //? Allowes me to change the value of the input
    setInput(e.target.value);
}


    const handleSubmit = e => {
        //? prevents browser reload on form submit
        e.preventDefault();
    
    // props.onSubmit({
    //     id: Math.floor(Math.random() * 1000),
    //     text: input,
    // })
    
    setInput('')
    
    }









    return (
        <FormContainer>
        <div className='form-container'>
            <form className='todo-form'>
        <input type='text' placeholder='Add something to your long list of things to do..' name='text' className='todo-input' onChange={handleChange}></input>
            </form>
        </div>
        </FormContainer>
    )
}

export default TodoForm


