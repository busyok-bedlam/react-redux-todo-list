import React from "react";

const todoItem = ({id,text,done}) => (
    <li className="todo-item">
        <span className="todo-id" >{id}</span>
        <div className="check-btn">
            <i className="far fa-check-circle"></i>
        </div>
        <p>{text}</p>
        <div className="delete-btn" >DEL</div>
    </li>
)
export default todoItem;