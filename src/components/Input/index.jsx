import React, { useState } from 'react';
// import useForm from '../FormulaForm/hook';

import './styles.css';

export default function Input({ label, type = 'number', autofocus = false }) {
  const [keyword, setKeyword] = useState('');

  // const { keyword, updateKeyword } = useForm();

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
    // updateKeyword(evt.target.value);
    console.log(`Este si que es un keyword: ${keyword}`);
  };

  return (
    <div className='input--container'>
      <label className='input--label'>{`${label}: `}</label>
      <input
        className='input--input'
        onChange={handleChange}
        type={type}
        name={label}
        id={label}
        value={keyword}
        placeholder={label}
        autoFocus={autofocus}
      />
    </div>
  );
}
