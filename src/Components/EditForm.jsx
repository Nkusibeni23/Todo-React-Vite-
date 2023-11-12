/* eslint-disable react/prop-types */
import { useState } from "react";

import { CheckIcon } from "@heroicons/react/24/solid";

export default function EditForm({ editedTask, updateTask }) {
  const [isUpdatedTask, setUpdatedTask] = useState(editedTask.name);
  function handleFormSubmit(e) {
    e.preventDefault();
    updateTask({
      id: editedTask.id,
      name: isUpdatedTask,
      checked: editedTask.checked,
    });
    // console.log(e);
  }

  return (
    <div role="dialog" aria-labelledby="editTask">
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            required
            autoFocus
            maxLength={60}
            value={isUpdatedTask}
            onInput={(e) => setUpdatedTask(e.target.value)}
          />
          <label htmlFor="editTask" className="label">
            Update Your Mind
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited Task to now read ${isUpdatedTask}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} width={20} height={20} />
        </button>
      </form>
    </div>
  );
}
