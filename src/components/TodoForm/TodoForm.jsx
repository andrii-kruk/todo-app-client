const TodoForm = () => {
  return (
    <div class="todo-form">
      <h2>Add a Task</h2>
      <form>
        <div class="form-group">
          <input
            type="text"
            id="taskText"
            class="form-control"
            placeholder="Enter task..."
            required
          />
        </div>
        <div class="form-group">
          <button type="submit" class="add-task-btn">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
