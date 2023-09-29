function cumsum(X) {
  let cumulativeSum = 0;
  return X.map((sth) => (cumulativeSum += sth));
}

module.exports = cumsum;
