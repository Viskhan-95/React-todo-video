import React from 'react';

const Todo = (props) => {
    return (
        <div className={props.todo.favorite ? "todo selected" : "todo"}>
            <div className="favorite">
                <button onClick={() => props.makeFavorite(props.indexTodo)}>*</button>
            </div>
            <div className="todo-text">
                {props.todo.text}
            </div>
            <div className="actions">
                <button onClick={() => props.deleteTodo(props.indexTodo)}>X</button>
            </div>
        </div>
    );
};

export default Todo;