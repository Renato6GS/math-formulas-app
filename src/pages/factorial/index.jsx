import React from 'react';
import FormulaForm from '../../components/FormulaForm';
import PageLayout from '../../components/PageLayout';

export default function Factorial() {
  return (
    <PageLayout title='Factorial'>
      <FormulaForm fields={[{ label: 'Número', autofocus: true }]} typeOfOperation='factorialOperation' />
    </PageLayout>
  );
}
