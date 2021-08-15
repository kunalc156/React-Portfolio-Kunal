import React from 'react';
import { Link } from 'react-router-dom';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Header(props) {
  return (
    <header>
    <nav>
        <Link to="/about">About Me</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    </header>
  );
}

export default Header;
