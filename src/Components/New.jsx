import React from "react";
import checkmark from "../images/icon-check.svg";

export default function New({ addTodo }) {
  const [inputTodo, setInputTodo] = React.useState("");

  function handleChange(e) {
    setInputTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputTodo);
    setInputTodo("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <button type="submit" className="check-button">
        <img src={checkmark} alt="checkmark" />
      </button>
      <input
        type="text"
        value={inputTodo}
        onChange={handleChange}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
