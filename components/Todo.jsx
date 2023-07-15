import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodoWrapper } from "./TodoWrapper";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

/*import React, { useState } from "react";

export default function TodoList() {
  const todos = ["todo 1", "todo 2", "todo 3"];
  return (
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {todos.map((todo, index) => (
        <li className="todo stack-small" key={index}>
          <div className="c-cb">
            <input id={`todo-${index}`} type="checkbox" />
            <label className="todo-label" htmlFor={`todo-${index}`}>
              {todo}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
*/
