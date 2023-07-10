const TodoList = () => {
  return (
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor="todo-0">
            Todo 1
          </label>
        </div>
      </li>

      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-1" type="checkbox" />
          <label className="todo-label" htmlFor="todo-1">
            Todo 2
          </label>
        </div>
      </li>
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-2" type="checkbox" />
          <label className="todo-label" htmlFor="todo-2">
            Todo 3
          </label>
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
