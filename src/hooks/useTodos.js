import { useEffect, useState } from "react";

const STORAGE_KEY = "todo.items.v1";

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = ({ title, description }) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: Date.now()
    };

    setTodos(prev => [newTodo, ...prev]);
    return newTodo.id;
  };

  const updateTodo = (id, updates) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, ...updates } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

    const onToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return { todos, addTodo, updateTodo, deleteTodo, onToggle };
}
