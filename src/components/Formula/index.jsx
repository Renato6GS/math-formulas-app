import React from 'react';
import { Link } from 'wouter';
import './styles.css';

export default function Formula({ formula, to }) {
  return (
    <Link to={to}>
      <div className='formula--link-container'>
        <a className='formula--link'>{formula}</a>
      </div>
    </Link>
  );
}
