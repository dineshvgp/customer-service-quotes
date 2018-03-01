import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'blue' };
const Header = () => {
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      {' | '}
      <NavLink to="/fuel-savings" activeStyle={activeStyle}>Fav Quotes</NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>Submitted Quotes</NavLink>
    </div>
  );
};

export default Header;
