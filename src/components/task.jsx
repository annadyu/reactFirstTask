import { useState } from "react";

const Task = ({
  completed,
  active,
  description,
  completedData,
  handleClick,
  id,
  deliteTask,
  editTask,
  editing,
  onSave,
}) => {
  const [newDescription, setNewDescription] = useState(description);

  const confirming = (event) => {
    if (event.key === "Enter") {
      onSave(id, newDescription);
    }
  };

  return (
    <li
      className={` ${active ? "active" : ""} ${
        completed ? "completed" : "active"
      } ${editing ? "editing" : ""}`}
    >
      {editing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          onKeyDown={confirming}
          onBlur={confirming}
        />
      ) : (
        " "
      )}
      <div>
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => handleClick(id)}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{completedData}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => editTask(id)}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => deliteTask(id)}
        ></button>
      </div>
    </li>
  );
};

export default Task;
