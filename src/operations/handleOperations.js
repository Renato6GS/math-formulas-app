/* eslint-disable indent */
import { generalFormulaOperator } from './generalFormulaOperator';
import { powOperator } from './powOperator';
import { factorialOperator } from './factorialOperator';

export const handleOperations = ({ typeOfOperation = '', values = [] }) => {
  switch (typeOfOperation) {
    case 'pow':
      return powOperator({ values });

    case 'generalFormulaOperation':
      return generalFormulaOperator({ values });

    case 'factorialOperation':
      return factorialOperator({ values });

    default:
      console.error('Se ha seleccionado una opción inválida.');
  }
};
