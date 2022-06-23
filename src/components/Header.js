import React from 'react';
import logo from '../logo.svg';

export default function Header(props) {
    // component 시작
    const message = "Learn React";
    const getGreetingMessage = (name) => {
      if(name === "GREEN"){
        return "HELLO " + name;
      }
      return "WELCOME " + name;
    };
  
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* JSX 표현식 */}
            {message}
            {props.title}
          </a>
          {getGreetingMessage(" REACT ")}
        </header>
  
    );
  }

