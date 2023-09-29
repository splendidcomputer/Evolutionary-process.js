// Import sum
const sum = require("./sum.js");

function mean(X) {
  return sum(X) / X.length;
}

module.exports = mean;
