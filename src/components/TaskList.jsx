export default function TaskList({
  todos,
  onAddClick,
  onSelect,
  onToggle,
  selectedId,
}) {
  return (
    <section className="task-list">
      <div className="header">
        <h2>Today</h2>
      </div>

      <button className="primary" onClick={onAddClick}>
        + Add New Task
      </button>

      {todos.length === 0 && <p className="empty">No tasks yet</p>}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`task-item ${todo.id === selectedId ? "selected" : ""}`}
          onClick={() => onSelect(todo.id)}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />

          <span className={todo.completed ? "done" : ""}>{todo.title}</span>
        </div>
      ))}
    </section>
  );
}
