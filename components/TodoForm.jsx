import React, { useState } from "react";
import { TodoWrapper } from "./TodoWrapper";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        {" "}
        Add Task{" "}
      </button>
    </form>
  );
};

/*import React, { useState } from "react";

export default function TodoForm(props) {
  const [name, setName] = useState(" ");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        placeholder="Type a new todo"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add Todo
      </button>
    </form>
  );
}
*/
