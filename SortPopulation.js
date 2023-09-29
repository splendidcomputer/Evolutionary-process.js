function SortPopulation(pop) {
  return pop.sort((a, b) => a.cost - b.cost);
}

module.exports = SortPopulation;
