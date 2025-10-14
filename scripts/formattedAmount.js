export function formatAmount(amount) {
  if (isNaN(amount)) return null;
  amount = Number(amount);

  if (amount < 1000) return amount.toString();

  let formatted = (amount / 1000).toFixed(1);
  formatted = formatted.replace(/\.0$/, "");

  return `${formatted}k`;
}
