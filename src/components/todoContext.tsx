import { createContext, useState } from "react";

export const TodoContext = createContext({
    todos: [],
    setTodos: undefined,
    toggleTodos: undefined,
    addTodo: undefined
});

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo: string) => {
        const newTodo = {
            id: Math.random(),
            todo,
            completed: false,
            createdAt: new Date()
        };
        setTodos((prev) => [...prev, newTodo]);
    };

    const toggleComplete = (id: string) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider
            value={{
                todos: todos,
                setTodos: setTodos,
                toggleTodos: toggleComplete,
                addTodo: addTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
