import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import '../Cart/Cart.css'; 


const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal, eliminarProducto } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="empty-cart">
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div className="cart-container"> 
      <div className="cart-header">
        <h3>Carrito de Compras</h3> 
      </div>

      {carrito.map((producto) => (
        <div className="cart-item" key={producto.item.id}>
          <CartItem item={producto.item} cantidad={producto.cantidad} /> 
        </div>
      ))}

      <div className="cart-total">
        <h3>Total: ${total}</h3>
      </div>

      <div className="cart-buttons">
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/checkout">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
