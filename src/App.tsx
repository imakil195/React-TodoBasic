
import { AddTodo } from './components/AddTodo.tsx';
import { TodoProvider } from './components/todoContext.tsx';
import TodoList from './components/TodoList.tsx';

export default function App() {
  return (
    <TodoProvider>
      <section style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
        gap: "2rem"
      }}>
        <AddTodo />
        <TodoList />
      </section>
    </TodoProvider>
  );
}


