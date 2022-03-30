export const generalFormulaOperator = ({ values }) => {
  const DECIMALS = 1000;
  const [a, b, c] = values;

  let sq = Math.pow(b, 2) - 4 * a * c;

  if (sq < 0) return 'Error matemático: raíz cuadrada negativa.';

  const x1 = (-b - Math.sqrt(sq)) / (2 * a);
  const x2 = (-b + Math.sqrt(sq)) / (2 * a);

  return `x1: ${Math.round(x1 * DECIMALS) / DECIMALS}, x2: ${Math.round(x2 * DECIMALS) / DECIMALS}`;
};
