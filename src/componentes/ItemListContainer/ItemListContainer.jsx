import React, { useEffect, useState } from 'react'
/* import { getProductos, getProductosPorCategoria } from '../../asyncmock' */
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../../Services/Config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import './ItemListContainer.css'; 
import Loader from '../Loader/Loader'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (false)
  
  const { idCategoria } = useParams()

  useEffect (() =>{
    setLoading(true)
    const misProductos = idCategoria ? query(collection(db,"productos"),where("idCat", "==", idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
          .then(res => {
              const nuevosProductos = res.docs.map(doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
              })
              setProductos(nuevosProductos)
          })
          .catch(error => console.log(error))
          .finally (()=>{
            console.log ("proceso terminado")
            setLoading(false)
          })
      },[idCategoria])

  /*useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos
    funcionProductos(idCategoria)
      .then(res => setProductos(res))

  }, [idCategoria])*/

  return (
    <div className="item-list-container"> 
      <h2 className="tituloProductos">Mis Productos</h2> 
      {loading ? <Loader/> : <ItemList productos={productos} /> }
      
    </div>
  )
}

export default ItemListContainer
