import React from 'react';
import FormulaForm from '../../components/FormulaForm';
import PageLayout from '../../components/PageLayout';

export default function Factorial() {
  return (
    <PageLayout>
      <FormulaForm fields={[{ label: 'Número', autofocus: true }]} typeOfOperation='factorialOperation' />
    </PageLayout>
    // <section className='factorial--container'>
    //   <Link to='/' className='factorial--link'>Volver</Link>
    //   <h3>Ingrese los siguientes valores:</h3>
    //   <FormulaForm fields={[{ label: 'Número', autofocus: true }]} typeOfOperation='factorialOperation' />
    // </section>
  );
}
