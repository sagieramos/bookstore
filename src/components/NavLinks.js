import React from 'react';
import { FaUser } from 'react-icons/fa';
import NavMenuItem from './NavMenuItem';
import './NavLinks.scss';

const NavLinks = () => (
  <header className="nav-container">
    <nav id="NavLinks">
      <ul>
        <h1>Bookstore CMS</h1>
        <NavMenuItem to="./">Books</NavMenuItem>
        <NavMenuItem to="/categories">Categories</NavMenuItem>
      </ul>
      <button className="person" type="button">
        <FaUser />
      </button>
    </nav>
  </header>
);

export default NavLinks;
