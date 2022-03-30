import React, { useState } from 'react';
import { handleOperations } from '../../operations/handleOperations';

import Input from '../Input';
import './styles.css';

export default function FormulaForm({ fields, typeOfOperation }) {
  const references = fields.map(({ label }) => label);
  console.log({ references });
  const [result, setResult] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault(); // Evitamos que recargue la pantalla, debido al form post
    const values = references.map((label) => document.getElementById(label).value);
    setResult(handleOperations({ typeOfOperation, values }));
  };

  return (
    <form action='' className='form' onSubmit={handleSubmit} id='myForm'>
      {fields.map(({ label, autofocus }, index) => {
        return <Input label={label} autofocus={autofocus} key={index} />;
      })}

      <button className='form--btn-calcular'>Calcular</button>

      <h3 className='form--resultado'>
        Resultado: <span className='form--span'>{result}</span>
      </h3>
    </form>
  );
}
