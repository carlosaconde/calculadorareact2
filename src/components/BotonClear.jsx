import '../hojas-de-estilo/BotonClear.css'

export const BotonClear = (props) => {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
  )
}
