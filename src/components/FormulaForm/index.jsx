import React from 'react';

import Input from '../Input';
import './styles.css';

export default function FormulaForm({ fields, typeOfOperator }) {
  const references = fields.map(({ label }) => label);

  const handleSubmit = (evt) => {
    evt.preventDefault(); // Evitamos que recargue la pantalla, debido al form post
    const values = references.map((label) => document.getElementById(label).value);
    console.log({ values });
  };

  return (
    <form action='' className='form' onSubmit={handleSubmit}>
      {fields.map(({ label, autofocus }, index) => {
        return <Input label={label} autofocus={autofocus} key={index} />;
      })}

      <button className='form--btn-calcular'>Calcular</button>

      <h3 className='form--resultado'>
        Resultado: <span className='pow--span'>0</span>
      </h3>
    </form>
  );
}
