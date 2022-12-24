import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className= 'header'>
      
      <nav className= 'header_nav'>
            <Link to="/"> Home </Link> | 
            <Link to="/about"> About </Link> |
            <Link to="/Demo"> Demo </Link> |
            <Link to="/Quiz"> Quiz </Link>
          </nav>
      
    </div>
  );
}

export default Header;
