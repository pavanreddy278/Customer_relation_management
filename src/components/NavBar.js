import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">Profile</Link></li>
        <li className="nav-item"><Link to="/tasks" className="nav-link">Tasks</Link></li>
        <li className="nav-item"><Link to="/support-ticket" className="nav-link">Support Ticket</Link></li>
        <li className="nav-item"><Link to="/sales" className="nav-link">Sales</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
