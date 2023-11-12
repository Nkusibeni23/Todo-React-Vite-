/* eslint-disable react/prop-types */
import { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

export default function CustomForm({ addTask }) {
  const [task, setTask] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
    // console.log(e);
    addTask({
      id: Date.now(),
      name: task,
      checked: false,
    });
    setTask("");
  }

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          placeholder="What needs to be done?"
          required
          autoFocus
          maxLength={60}
          value={task}
          onInput={(e) => setTask(e.target.value)}
        />
        <label htmlFor="task" className="label">
          Enter Your Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
}
