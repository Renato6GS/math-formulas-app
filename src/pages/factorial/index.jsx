import React from 'react';
import FormulaForm from '../../components/FormulaForm';
import './styles.css';

export default function Factorial() {
  return (
    <section className='factorial--container'>
      <h3>Ingrese los siguientes valores:</h3>
      <FormulaForm fields={[{ label: 'Número', autofocus: true }]} typeOfOperation='factorialOperation' />
    </section>
  );
}
