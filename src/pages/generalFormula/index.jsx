import React from 'react';
import FormulaForm from '../../components/FormulaForm';
import PageLayout from '../../components/PageLayout';

export default function GeneralFormula() {
  return (
    <PageLayout title='Fórmula general'>
      <FormulaForm
        fields={[{ label: 'a', autofocus: true }, { label: 'b' }, { label: 'c' }]}
        typeOfOperation='generalFormulaOperation'
      />
    </PageLayout>
  );
}
