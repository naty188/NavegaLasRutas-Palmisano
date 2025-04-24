import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>

      <h1>El Diablo es Puerco</h1>

      <Link to="/">
        <img
          className='logoTienda'
          src="../../../public/img/8ab7cc4e23d5bd647050de544348b469-removebg-preview.png" 
          alt="Logo Tienda"
        />
      </Link>

      <nav>
        <ul>
          <li> <NavLink to="/categoria/novelas">Remeras Series</NavLink> </li>
          <li> <NavLink to="/categoria/cine">Remeras Infantiles</NavLink> </li>
          <li> <NavLink to="/categoria/series">Remeras Cine</NavLink> </li>
          <li> <NavLink to="/categoria/dibujitos">Remeras Dibujitos</NavLink> </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
