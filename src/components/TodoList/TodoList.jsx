const TodoList = () => {
  return (
    <div class="todo-list">
      <div class="todo-item in-progress">
        <span class="todo-text">Task 1: This is an in-progress task</span>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
        <input type="checkbox" class="checkbox" />
      </div>
      <div class="todo-item is-finished">
        <span class="todo-text">Task 2: This is a finished task</span>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
        <input type="checkbox" class="checkbox" checked />
      </div>
    </div>
  );
};

export default TodoList;
