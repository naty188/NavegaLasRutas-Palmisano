import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  const imgCarrito = "https://static.vecteezy.com/system/resources/previews/016/314/413/non_2x/shopping-cart-free-png.png";

  return (
    <div className="cart-widget-container">
      <Link to="/cart">
        <img src={imgCarrito} alt="Carrito" />
        {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
      </Link>
    </div>
  );
};

export default CartWidget;
