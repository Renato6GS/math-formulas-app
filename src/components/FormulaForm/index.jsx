import React from 'react';

import Input from '../Input';
// import useForm from './hook';
import './styles.css';

export default function FormulaForm({ fields, typeOfOperator }) {
  // const { keyword } = useForm();

  const handleSubmit = (evt) => {
    evt.preventDefault(); // Evitamos que recargue la pantalla, debido al form post
    // console.log(`El keyword es ahora: ${keyword}`);
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
