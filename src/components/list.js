import React from "react";


const List= ({listItems}) => {
    return (
        <div className="todo-list-wrap" >
            {
            listItems && 
            <ul className="todo-list">
                
            </ul>
        }
        </div>
    )
}
export default List;