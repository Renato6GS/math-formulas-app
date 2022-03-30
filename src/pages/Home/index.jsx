import React from 'react';
import Formula from '../../components/Formula';

import './styles.css';

export default function Home() {
  return (
    <main className='main'>
      <h2 className='main--title'>Seleccione una fórmula:</h2>

      <nav className='main--nav'>
        <Formula formula='Potencia' to='/pow' />
        <Formula formula='Formula general' to='/generalFormula' />
        <Formula formula='Factorial' to='/factorial' />
      </nav>
    </main>
  );
}
