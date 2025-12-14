import { useEffect, useRef, useState } from "react";

export default function TaskEditor({ todo, onUpdate, onDelete }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDescEmpty, setIsDescEmpty] = useState(false);

  useEffect(() => {
    if (todo) {
      titleRef.current.innerText = todo.title;
      descRef.current.innerText = todo.description || "";

      setIsTitleEmpty(!todo.title);
      setIsDescEmpty(!todo.description);
    }
  }, [todo]);

  if (!todo) {
    return (
      <aside className="editor empty">
        <div>
          <h4>Select a task</h4>
          <p>Choose a task from the list to view or edit</p>
        </div>
      </aside>
    );
  }

  const handleSave = () => {
    const title = titleRef.current.innerText.trim();
    const description = descRef.current.innerText.trim();

    if (!title) {
      setIsTitleEmpty(true);
      alert("Title required");
      return;
    }

    onUpdate(todo.id, { title, description });
  };

  const handleTitleInput = () => {
    const text = titleRef.current.innerText.trim();
    setIsTitleEmpty(text.length === 0);
  };

  const handleDescInput = () => {
    const text = descRef.current.innerText.trim();
    setIsDescEmpty(text.length === 0);
  };

  return (
    <aside className="editor">
      <h3>Task</h3>
      <div className="editor-content">
        <h5
          ref={titleRef}
          contentEditable
          suppressContentEditableWarning
          className={`editable ${isTitleEmpty ? "empty-field" : ""}`}
          onInput={handleTitleInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.target.blur();
            }
          }}
        />
        <p
          ref={descRef}
          contentEditable
          suppressContentEditableWarning
          className={`editable description ${isDescEmpty ? "empty-field" : ""}`}
          onInput={handleDescInput}
        />
      </div>
      <div className="actions">
        <button className="danger" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
        <button className="primary" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </aside>
  );
}
