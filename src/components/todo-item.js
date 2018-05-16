import React from "react";

const todoItem = data => (
    <li className="todo-item">
        <span className="todo-id" >{data.id}</span>
        <p>{data.text}</p>
        <input className="done-btn" type="checkbox" />
        <span className="delete-btn" >DEL</span>
    </li>
)
export default todoItem;