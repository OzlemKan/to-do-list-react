const TodoForm = () => {
  return (
    <form>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        placeholder="Type a new todo"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
