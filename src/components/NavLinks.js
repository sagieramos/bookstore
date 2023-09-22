import React from 'react';
import NavMenuItem from './NavMenuItem';
import './NavLinks.scss';

const NavLinks = () => (
  <nav id="NavLinks">
    <ul>
      <h1>Bookstore CMS</h1>

      <NavMenuItem to="./">Books</NavMenuItem>
      <NavMenuItem to="/categories">Categories</NavMenuItem>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">person</span>
    </button>
  </nav>
);

export default NavLinks;
