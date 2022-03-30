import React from 'react';
import FormulaForm from '../../components/FormulaForm';
import './styles.css';

export default function GeneralFormula() {
  return (
    <section className='generalFormula--container'>
      <h3>Ingrese los siguientes valores:</h3>
      <FormulaForm
        fields={[{ label: 'a', autofocus: true }, { label: 'b' }, { label: 'c' }]}
        typeOfOperation='generalFormulaOperation'
      />
    </section>
  );
}
