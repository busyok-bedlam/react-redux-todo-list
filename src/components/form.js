import React from "react";


const Form = ({addItem}) => {
    let input = null;
    let submitHandler = e => {
        e.preventDefault();
        let value = input.value;
        addItem(value);
        input.value = "";
        input.focus();
    }
    return (
        <form 
            className="todo-form"
            onSubmit={submitHandler}
        >
            <input
                ref={ node => input = node}
                placeholder="enter the task"
                className="todo-input"
                type="text"
            />
        </form>
    )
}
export default Form;