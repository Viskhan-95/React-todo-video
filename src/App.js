import todosBD from './todos';
import { useState } from "react";
import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos/Todos';

function App() {
    const [todos, setTodos] = useState(todosBD);
    const [text, setText] = useState("");

    const deleteTodo = (indexOfRemovingTodo) => {
        setTodos(todos.filter((todo, index) => {
            return index === indexOfRemovingTodo ? false : true
        }))
    }

    const makeFavorite = (indexOfFavoritingTodo) => {
        setTodos(todos.map((todo, indexTodo) => {
            if(indexOfFavoritingTodo === indexTodo) {
                return {
                    ...todo, 
                    favorite: !todo.favorite
                }
            }
            return todo;
        }))
    }
    
    const addTodo = () => {
        setTodos([
            {
                text: text,
                favorite: false
            },
            ...todos,
        ])
        setText("");
    }

    return (
        <div className="app" >
            <Header />
            <Form text={text} setText={setText} addTodo={addTodo}/>
            <Todos todos={todos} deleteTodo={deleteTodo} makeFavorite={makeFavorite} />
        </div>
    );
}

export default App;
