import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>its me react</a>
        <Home />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Improve your reactjs foundation.
        </a>
      </header>
    </div>
  );
}

export default App;
