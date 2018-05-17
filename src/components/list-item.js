import React from "react";
import { connect } from "react-redux";
import EditField from "./edit-field";


const ListItem = ({ id,text,done,deleteItem,changeFlag,activeEdit,toggleEdit }) => {
    // let editInput = null;
    let changeHandler = e => {
        e.preventDefault();
        changeFlag(id)
    }
    // debugger
    let deleteHandler = e => {
        e.preventDefault();
        deleteItem(id);
    }
    let toggleHandler = e => {
        e.preventDefault();
        toggleEdit(id);
    }

    return (
        <li className="todo-item">
            <div 
                className="check-btn center"
                style={{ color: done ? "#2789B7" : "#536269" }}
            >
                <i 
                    className="far fa-check-circle"
                    onClick={changeHandler}
                ></i>
            </div>
            <p
                className="item-context"
                style={{
                    textDecoration: done ? "line-through" : "none",
                    color: done ? "#216371" : "#000",
                    fontWeight: done ? 700 : 300
                }}
            >{text}</p>
            <div className="delete-btn center" >
                <i 
                    className="fas fa-times"
                    onClick={ deleteHandler }
                ></i>
            </div>
    </li>
    )
}

    


export default ListItem;