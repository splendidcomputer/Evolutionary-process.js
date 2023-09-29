function GenerateRandomPosition(VarMin, VarMax, nVar) {
  const position = [];

  for (let i = 0; i < nVar; i++) {
    position[i] = VarMin[i] + Math.random() * (VarMax[i] - VarMin[i]);
  }
  return position;
}

module.exports = GenerateRandomPosition;
