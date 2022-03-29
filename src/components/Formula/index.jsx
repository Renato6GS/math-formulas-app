import React from 'react';
import { Link } from 'wouter';
import './styles.css';

export default function Formula({ formula }) {
  return (
    <Link to='/pow'>
      <div className='formula--link-container'>
        <a className='formula--link'>{formula}</a>
      </div>
    </Link>
  );
}
