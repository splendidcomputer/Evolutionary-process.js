const sum = require("./built-in_funcs/sum");
const cumsum = require("./built-in_funcs/cumsum");

function RouletteWheelSelection(probes) {
  const r = Math.random() * sum(probes); // r: a random scalar.
  const c = cumsum(probes); // c: an array holding the cumulative sums in each element
  for (let i = 0; i < c.length; i++) {
    if (r <= c[i]) {
      return i;
    }
  }

  //   throw new Error("Roulette wheel failed to find a random index.");
}

module.exports = RouletteWheelSelection;
