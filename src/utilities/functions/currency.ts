export function exchange(amount: number, ratio: number, minUnit: number, minAmount: number) {
  let amount_ex = Math.abs(amount) * ratio;
  amount_ex =
    (Math.floor(amount_ex / minUnit) + Math.round((amount_ex % minUnit) / minUnit)) * minUnit;
  if (amount_ex < minAmount) amount_ex = minAmount;
  //service zero fee
  if (amount == 0) amount_ex = 0;
  if (amount < 0) {
    amount_ex = amount_ex * -1;
  }
  return amount_ex;
}

export function roundUp(amount: number, minUnit: number, minAmount: number) {
  let amount_ex = amount;
  amount_ex =
    (Math.floor(amount_ex / minUnit) + Math.round((amount_ex % minUnit) / minUnit)) * minUnit;
  if (amount_ex < minAmount) amount_ex = minAmount;
  return amount_ex;
}
