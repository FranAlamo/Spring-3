import React from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import "../Hojas-de-estilos/Header.css";
import "../Hojas-de-estilos/App.css";

export default function Header({ changeTheme, theme }) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="title">TO/DO</h1>
        <button onClick={changeTheme} className="theme-button">
          {theme === "light" ? (
            <img alt="moon icon" src={moon} />
          ) : (
            <img alt="sun icon" src={sun} />
          )}
        </button>
      </div>
    </div>
  );
}
