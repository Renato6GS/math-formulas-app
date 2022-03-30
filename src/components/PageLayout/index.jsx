import React from 'react';
import { Link } from 'wouter';
import './styles.css';

export default function PageLayout({ children }) {
  return (
    <section className='pageLayout--container'>
      <Link to='/' className='pageLayout--link'>
        Volver
      </Link>
      <h3>Ingrese los siguientes valores:</h3>
      {children}
    </section>
  );
}
