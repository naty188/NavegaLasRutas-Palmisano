import React, { useEffect, useState } from 'react'
/*import { getUnProducto } from "../../asyncmock.js";*/  // Ruta correcta
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import {db} from '../../Services/Config'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {idItem}= useParams();

    useEffect(()=>{
       const nuevoDoc = doc (db, "productos",idItem)


       getDoc(nuevoDoc)
       .then(res => {
        const data = res.data()
        const nuevosProductos= {id: res.id, ...data}
          setProducto (nuevosProductos)
        
       })
       .catch(error => console.log (error))
    },[idItem])


    /*useEffect(()=>{
        getUnProducto(idItem)
        .then(respuesta =>setProducto(respuesta))

    },[idItem] )*/


  return (
    
    <div className ="item-detail-container">
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer
