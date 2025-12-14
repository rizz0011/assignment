import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import TaskEditor from "./components/TaskEditor";
import AddTaskModal from "./components/AddTaskModal";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  const { todos, addTodo, updateTodo, deleteTodo, onToggle } = useTodos();

  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedTodo = todos.find((t) => t.id === selectedId);

  const handleAddTask = (data) => {
    const newId = addTodo(data);
    setSelectedId(newId);
  };

  return (
    <div className="layout">
      <Sidebar />

      <TaskList
        todos={todos}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onAddClick={() => setIsModalOpen(true)}
        onToggle={onToggle}
      />

      <TaskEditor
        todo={selectedTodo}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
      />

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddTask}
      />
    </div>
  );
}
