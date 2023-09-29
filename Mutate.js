function Mutate(x, mu, simga) {
  let y = x;

  for (let i = 0; i < x.length; i++) {
    if (Math.random() < mu) {
      y[i] = x[i] + simga * Math.random();
    }
  }

  return y;
}

module.exports = Mutate;
