/* eslint-disable no-constant-condition */
export const factorialOperator = ({ values }) => {
  let [numero] = values;

  if (numero < 0) {
    return 'Err: Ingrese un número que no sea negativo.';
  } else if (numero === '0') {
    return 1;
  }

  let aux = numero - 1;
  factorialCiclo: while (true) {
    if (aux > 1) {
      numero *= aux;
      aux--;
      continue;
    }
    break factorialCiclo;
  }

  return numero;
};

// forma correcta:
// while (aux > 1) {
//   numero *= aux;
//   aux--;
// }
