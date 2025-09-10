import { useState } from 'react';
import { Card } from './components/Card.tsx'

function App() {

  const [todos, setTodos] = useState([])

  const [todoName, setTodoName] = useState('')

  const addTodo = (todo: string) => {
    const newTodo = {
      id: Math.random(),
      todo,
      completed: false,
      createdAt: new Date()
    }
    setTodos((prev) => [...prev, newTodo])
  }

  const toggleComplete = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;

    })
    setTodos(newTodos)

  }







  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem",
      gap: "2rem"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignContent: "center",
        justifyContent: "center"
      }}>
        <input style={{
          maxWidth: "18rem",
          fontSize: "2rem",
          borderRadius: "0.5rem",
          backgroundColor: "black"

        }}
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}

          type="text" placeholder='Write a To-Do' />

        <button style={{
          fontSize: "1.5rem"
        }}
          onClick={() => addTodo(todoName)}

        >Add </button>
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "0.5rem",

      }}>
        {todos.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            completed={todo.completed}
            createdAt={todo.createdAt}
            toggleComplete={toggleComplete}
          />

        ))}

      </div>


    </section>
  );
}

export default App;
