import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'



const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const { agregarAlCarrito } = useContext((CarritoContext))



  

    const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
     
    
    
    const item ={id,nombre,precio}
    agregarAlCarrito(item,cantidad) 
    toast.success("Su compra fue enviada al carrito",{autoClose:1000, theme: "dark",position:"top-right"})
  }


  
  return (
    <div className='contenedorItemDetail'>
      <div className="itemImageContainer">
        <img src={img} alt={nombre} className="itemImage" />
      </div>

      <div className='itemDetailInfo'>
        <h2>{nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <h4>ID: {id}</h4>

        <p>
         {descripcion}
        </p>

        {
          agregarCantidad > 0
            ? <Link to="/cart" className='btnComprar'>Terminar Compra</Link>
            :( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
      </div>
    </div>
  )
}

export default ItemDetail
