

import '../src/hojas-de-estilo/boton.css'
import './App.css'
import { Boton }      from './components/Boton';
import { BotonClear } from './components/BotonClear';
import { Pantalla }   from './components/Pantalla';
import { useState }   from 'react';
import {evaluate}     from 'mathjs';

function App() {
  

      const [input, setInput] = useState('');

      const agregarInput = (val) => {
          setInput(input + val);
      };

      const calcularResultado = ()=>{
          if(input){
        setInput(evaluate(input));
      }else{
        alert('por favor ingrese valores validos');
      }
      }

  return (
    <>
    <h1>Calculadora con react</h1>
      <div className='contenedor-calculadora'>
            <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
          <BotonClear manejarClear ={()=> setInput('')}>
            clear
          </BotonClear>
          </div>
      </div>
    </>
  );
}

export default App
