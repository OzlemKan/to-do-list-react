import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const [tasks, setTasks] = useState(props.tasks);

function addTask(name) {
  alert(name);
}

const taskList = props.tasks?.map((task) => task.name);

function App() {
  return (
    <div className="todoapp stack-large">
      <h1>My Todo App</h1>

      <TodoForm addTask={addTask} />

      <h2 id="list-heading">Todos</h2>
      <TodoList />
    </div>
  );
}

export default App;
