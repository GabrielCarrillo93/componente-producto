import './EncabezadoProducto.css'

const EncabezadoProducto = () => {
  return (
    <div className="encabezado">
        <h3>Nombre</h3>
        <div>
            <span className='precio'>$Precio</span>
            <span>cantidad disponible</span>
        </div>
    </div>
  )
}

export default EncabezadoProducto