import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const change = (e) => {
    setInput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 5000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={submit}>
      <input
        type="text"
        placeholder="Add activity"
        value={input}
        name="text"
        className="todo-input"
        onChange={change}
      />
      <button className="todo-btn">Add activity</button>
    </form>
  );
}

export default TodoForm;
