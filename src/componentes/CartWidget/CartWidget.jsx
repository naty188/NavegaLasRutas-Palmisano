import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {

  const imgCarrito= "https://static.vecteezy.com/system/resources/previews/016/314/413/non_2x/shopping-cart-free-png.png"
  return (
    <div>
      <img className = "imgCarrito" src={imgCarrito} alt="Carrito" />
      
    </div>
  )
}

export default CartWidget
