import { useState } from "react";

export default function AddTaskModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onSave({
      title: title.trim(),
      description: description.trim(),
    });
    setTitle("");
    setDescription("");
    setError("");
    onClose();
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <h3>Add New Task</h3>

        <label>
          Title *
          <input
            value={title}
            maxLength={120}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            autoFocus
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            maxLength={1000}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {error && <p className="error">{error}</p>}

        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
