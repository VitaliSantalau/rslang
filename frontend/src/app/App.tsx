import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/login">
          Login
        </NavLink>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
        </Routes>
      </main>
      <footer className="footer">
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </footer>
    </div>
  );
}

export default App;
