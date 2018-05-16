import React from "react";
import TodoItem from "./todo-item";


const List = ({ todos }) => {
    return (
        <div className="todo-list-wrap" >
            {
            todos.length > 0 && 
            <ul className="todo-list">
                {
                    todos.map( item => {
                        const { text,id,done} = item;
                        return <TodoItem id={id} text={text} done={done} key={id} />
                    })
                }
            </ul>
            }
        </div>
    )
}
export default List;