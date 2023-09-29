function UniformCorssover(x1, x2, gamma) {
  const y1 = new Array(x1.length);
  const y2 = new Array(x1.length);

  let alpha = new Array(x1.length);

  for (let i = 0; i < x1.length; i++) {
    alpha[i] = Math.random() * (1 + 2 * gamma) - gamma;

    y1[i] = alpha[i] * x1[i] + (1 - alpha[i] * x2[i]);
    y2[i] = alpha[i] * x2[i] + (1 - alpha[i] * x1[i]);
  }

  return [y1, y2];
}

module.exports = UniformCorssover;
