import React, { useState, useContext } from "react";
import { TodoContext } from "./todoContext.tsx"; // adjust path if needed

export const AddTodo = () => {
    const [todoName, setTodoName] = useState("");
    const { addTodo } = useContext(TodoContext); // ✅ pull from context

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignContent: "center",
            justifyContent: "center"
        }}>
            <input
                style={{
                    maxWidth: "18rem",
                    fontSize: "2rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "black"
                }}
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
                type="text"
                placeholder="Write a To-Do"
            />

            <button
                style={{ fontSize: "1.5rem" }}
                onClick={() => addTodo(todoName)}
            >
                Add
            </button>
        </div>
    );
};
