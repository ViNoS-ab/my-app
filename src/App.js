import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./timer.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>let's begin woooo hooooo !!!</p>
          <a
            className="App-link"
            // href="https://reactjs.org"
            href="https://openclassrooms.com/fr/courses/4286486-build-web-apps-with-reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>ok now {this.props.name} is happy :D</p>
          <Timer />
        </header>
      </div>
    );
  }
}

export { App as default };
