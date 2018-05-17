import React from "react";
import ListItem from "./list-item";
import TodoItem from "../containers/todo-item"

const List = ({ todos }) => {
    return (
        <div className="todo-list-wrap" >
            {
            todos.length > 0 && 
            <ul className="todo-list">
                {
                    todos.map( item => {
                        const { text,id,done,activeEdit } = item;
                        return <TodoItem 
                            id={id} text={text} 
                            done={done} 
                            key={id}
                            activeEdit={ activeEdit }
                        />
                    })
                }
            </ul>
            }
        </div>
    )
}
export default List;