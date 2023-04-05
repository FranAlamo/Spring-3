import { useState } from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import New from "./Components/New";
import "./Hojas-de-estilos/App.css";

function App() {
  const initialTodos = [
    {
      id: 1,
      task: "Tomar agua",
      complete: true,
    },
    {
      id: 2,
      task: "Finalizar práctica de estados y props",
      complete: false,
    },
    {
      id: 3,
      task: "Tomar agua",
      complete: false,
    },
    {
      id: 4,
      task: "Compartir lo aprendido con algun compañero",
      complete: false,
    },
    {
      id: 5,
      task: "Probar pizza italiana",
      complete: false,
    },
    {
      id: 6,
      task: "Completar el desafío del sprint 3",
      complete: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const [theme, setTheme] = useState("light");

  function addTodo(inputTodo) {
    const newTodo = {
      id: todos.length + 1,
      task: inputTodo,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleToggle(id) {
    let mapped = todos.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodos(mapped);
  }

  function handleFilter(value) {
    if (value === "active") {
      let filtered = todos.filter((todo) => {
        return todo.complete === false;
      });
      setTodos(filtered);
    } else if (value === "completed") {
      let filtered = todos.filter((todo) => {
        return todo.complete === true;
      });
      setTodos(filtered);
    } else {
      setTodos(initialTodos);
    }
  }

  function handleClear() {
    let filtered = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(filtered);
  }

  function handleDelete(id) {
    let filtered = todos.filter((todo) => {
      return todo.id !== Number(id);
    });
    setTodos(filtered);
  }

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="App" data-theme={theme}>
      <Header changeTheme={changeTheme} theme={theme} />
      <div className="todolist">
        <New addTodo={addTodo} />
        <List
          todos={todos}
          handleToggle={handleToggle}
          handleClear={handleClear}
          handleFilter={handleFilter}
          handleDelete={handleDelete}
        />
        <div className="footer">
          <p className="p-footer">Senpai - Full Stack Web Developer</p>
          <p className="p-footertwo">Create by Francis Alamo</p>
        </div>
      </div>
    </div>
  );
}

export default App;
