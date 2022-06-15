import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div className="todos">
                {props.todos.map((todo, indexTodo) => {
                    return (
                        <Todo
                            key={indexTodo}
                            todo={todo}
                            indexTodo={indexTodo}
                            makeFavorite={props.makeFavorite}
                            deleteTodo={props.deleteTodo}
                            />
                    );
                })
                }
            </div>
    );
};

export default Todos;