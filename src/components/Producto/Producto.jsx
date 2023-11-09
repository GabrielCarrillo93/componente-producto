import React from 'react'
import Descripcion from '../Descripcion/Descripcion'
import EncabezadoProducto from '../EncabezadoProducto/EncabezadoProducto'
import StockKeepingUnit from '../StockKeepingUnit/StockKeepingUnit'
import './Producto.css'

const Producto = () => {
  return (
    <div className='container'>
        <EncabezadoProducto />
        <Descripcion />
        <StockKeepingUnit />
    </div>
  )
}

export default Producto