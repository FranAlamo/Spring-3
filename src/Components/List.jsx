import React from "react";
import Todo from "./Todo";

export default function List({
  todos,
  handleToggle,
  handleClear,
  handleFilter,
  handleDelete,
}) {
  const [active, setActive] = React.useState("all");

  function handleActive(e) {
    setActive(e.currentTarget.value);
    handleFilter(e.currentTarget.value);
  }
  return (
    <div className="list">
      <div className="todos">
        {todos.map((todo) => {
          return (
            <Todo
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </div>
      <div className="list-bottom">
        <span className="items-left">
          {todos.filter((t) => t.complete === false).length} items left
        </span>
        <div className="filters">
          <button
            value="all"
            onClick={handleActive}
            className={`${active === "all" ? "active" : null}`}
          >
            All
          </button>
          <button
            value="active"
            onClick={handleActive}
            className={`${active === "active" ? "active" : null}`}
          >
            Active
          </button>
          <button
            value="completed"
            onClick={handleActive}
            className={`${active === "completed" ? "active" : null}`}
          >
            Completed
          </button>
        </div>
        <button className="clear-button" onClick={handleClear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}
