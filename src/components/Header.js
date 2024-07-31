import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Hey there, It's Ayush Tamta</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#extra-curricular">Extrass</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
