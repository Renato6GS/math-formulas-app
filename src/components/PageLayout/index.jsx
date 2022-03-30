import React from 'react';
import { Link } from 'wouter';
import './styles.css';

export default function PageLayout({ children, title }) {
  return (
    <section className='pageLayout--container'>
      <Link to='/' className='pageLayout--link'>
        Volver
      </Link>
      <h2>{title}</h2>
      <h3>Ingrese los siguientes valores:</h3>
      {children}
    </section>
  );
}
