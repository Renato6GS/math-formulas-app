export const powOperator = ({ values }) => {
  const [base, exponente] = values;
  if (exponente === 0) return 1;

  return Math.pow(base, exponente);
};
