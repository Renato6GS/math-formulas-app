import React from 'react';
import FormulaForm from '../../components/FormulaForm';
import PageLayout from '../../components/PageLayout';

export default function Pow() {
  return (
    <PageLayout>
      <FormulaForm fields={[{ label: 'Base', autofocus: true }, { label: 'Exponente' }]} typeOfOperation='pow' />
    </PageLayout>
  );
}
