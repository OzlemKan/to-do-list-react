import React, { useState } from "react";

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
