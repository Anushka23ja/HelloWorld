// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/justme">Favorites</Link>
        </li>
        <li>
          <Link to="/things-to-read">Things to Read </Link>
        </li>
        <li>
          <Link to="/accessibility-info">Keyboard Accessibility  </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
