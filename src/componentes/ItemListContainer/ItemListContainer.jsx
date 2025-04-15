import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'; 
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos
    funcionProductos(idCategoria)
      .then(res => setProductos(res))

  }, [idCategoria])

  return (
    <div className="item-list-container"> 
      <h2 className="tituloProductos">Mis Productos</h2> 
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
