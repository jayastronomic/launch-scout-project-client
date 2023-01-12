let values = [0];

export function calculateTotal(newValue, index, deletingItem = false) {
  if (!deletingItem) {
    if (values[index] || values[index] === 0) {
      values[index] = newValue;
      return values.reduce((total, num) => total + num, 0);
    }
    values.push(newValue);
    return values.reduce((total, num) => total + num, 0);
  }
  values = [
    ...values.slice(0, index).concat(values.slice(index + 1, values.length)),
  ];
  return values.reduce((total, num) => total + num, 0);
}
