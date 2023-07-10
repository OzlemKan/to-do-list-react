import TodoForm from "./TodoForm";

import TodoList from "./TodoList";

function App() {
  return (
    <div className="todoapp stack-large">
      <h1>My Todo App</h1>
      <TodoForm />
      <h2 id="list-heading">Todos</h2>
      <TodoList />
    </div>
  );
}

export default App;
