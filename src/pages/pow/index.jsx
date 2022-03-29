import React from 'react';
import FormulaForm from '../../components/FormulaForm';
import './styles.css';

export default function Pow() {
  return (
    <section className='pow--container'>
      <h3>Ingrese los siguientes valores:</h3>
      <FormulaForm fields={[{ label: 'Base', autofocus: true }, { label: 'Exponente' }]} />
    </section>
  );
}
