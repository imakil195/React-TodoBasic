import { useContext } from "react";
import { TodoContext } from "./todoContext.tsx";

type CardProps = {
    id: string;
    todo: string;
    completed: boolean;
    createdAt: Date;
};

function Card(props: CardProps) {
    const { id, todo, completed, createdAt } = props;
    const { toggleTodos } = useContext(TodoContext); 

    return (
        <div style={{
            border: '1px solid gray',
            width: "28rem",
            padding: "1rem",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            borderRadius: "0.5rem",
            position: "relative",
            maxHeight: "12rem",
            minWidth: "max-content",
            textDecoration: completed ? "line-through" : "none",
        }}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodos(id)}  // ✅ directly calls context
            />
            <h2>{todo.slice(0, 18)} {todo.length > 18 ? "..." : null}</h2>
            <p style={{
                position: "absolute",
                right: "1rem",
                top: "0.15rem",
            }}>{createdAt.toDateString()}</p>
        </div>
    );
}

export { Card };

