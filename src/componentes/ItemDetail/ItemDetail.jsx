import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  // Función para manejar la cantidad agregada
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("Productos agregados:", + cantidad)  // Verifica el valor en la consola
  }

  // Verifica que la propiedad img tenga un valor válido
  console.log("Ruta de la imagen:", img);

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Aliquid reprehenderit ducimus consequuntur magni id ratione quas quod nobis.
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
