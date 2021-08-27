import React from 'react'
import styled from 'styled-components'





const FormContainer = styled.div`
background: red;

`



function TodoForm() {
    return (
        <FormContainer>
        <div className='form-container'>
            <form className='todo-form'>
        <input type='text' placeholder='Add something to your long list of things to do..' value='data' name='text' className='todo-input'></input>

            </form>


        </div>
        </FormContainer>
    )
}

export default TodoForm


