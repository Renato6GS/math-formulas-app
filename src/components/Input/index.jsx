import React, { useState } from 'react';

import './styles.css';

export default function Input({ label, type = 'number', autofocus = false }) {
  const [keyword, setKeyword] = useState('');

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div className='input--container'>
      <label className='input--label' htmlFor={label}>{`${label}: `}</label>
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
