function sum(X) {
  return X.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

module.exports = sum;
