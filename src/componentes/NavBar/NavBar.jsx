import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header>
      <h1>El Diablo es Puerco</h1>

      <Link to="/">
        <img
          className='logoTienda'
          src="/img/8ab7cc4e23d5bd647050de544348b469-removebg-preview.png" 
          alt="Logo Tienda"
        />
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li><NavLink to="/categoria/novelas" onClick={() => setMenuOpen(false)}>Remeras Cine</NavLink></li>
          <li><NavLink to="/categoria/infantiles" onClick={() => setMenuOpen(false)}>Remeras Infantiles</NavLink></li>
          <li><NavLink to="/categoria/peliculas" onClick={() => setMenuOpen(false)}>Remeras Dibujitos</NavLink></li>
          <li><NavLink to="/categoria/dibujitos" onClick={() => setMenuOpen(false)}>Remeras Series</NavLink></li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
