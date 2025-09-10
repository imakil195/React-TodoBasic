import React, { useContext } from "react";
import { TodoContext } from "./todoContext"; // adjust path if needed
import { Card } from "./Card"; // adjust path if Card is inside components

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                padding: "0.5rem",
            }}
        >
            {todos.map((todo) => (
                <Card
                    key={todo.id}
                    id={todo.id}
                    todo={todo.todo}
                    completed={todo.completed}
                    createdAt={todo.createdAt}
                />
            ))}
        </div>
    );
};

export default TodoList;
