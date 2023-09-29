// In the name of God, the compassionate, the merciful.
// Implementation of the Genetic Algorithm in JavaScript

// Import modules
const mean = require("./built-in_funcs/mean");
const Sphere = require("./Sphere.js");
const GenerateRandomPosition = require("./GenerateRandomPosition.js");
const RouletteWheelSelection = require("./RouletteWheelSelection.js");
const UniformCorssover = require("./UniformCrossover");
const Mutate = require("./Mutate");

// Problem Defenition
// Here we define the problem settings as an array of objects.

const problem = {
  CostFunction: function (x) {
    return Sphere(x);
  },

  nVar: 5,
  VarMin: [-10, -10, -5, -1, 5],
  VarMax: [10, 10, 5, 1, 8],
};

// GA Parameters
// Here we define the params an array of objects.

const params = {
  maxIt: 100,
  nPop: 100,
  beta: 1,
  pC: 1,
  gamma: 0.1,
  mu: 0.02,
  sigma: 0.1,
};

// Run GA
// Problem
const CostFunction = problem.CostFunction;
const nVar = problem.nVar;
const VarSize = [1, nVar];
const VarMin = problem.VarMin;
const VarMax = problem.VarMax;

// Params
const maxIt = params.maxIt;
const nPop = params.nPop;
const beta = params.beta;
const pC = params.pC;
const nC = Math.round((pC * nPop) / 2) * 2;
const gamma = params.gamma;
const mu = params.mu;
const sigma = params.sigma;

// Template for Empty Individuals
const empty_individual = {
  position: [],
  cost: null,
};

// Best solution ever found
bestSol = { ...empty_individual };
bestSol.cost = Infinity;
// const bestSol = {
//   cost: Infinity,
// };

// Initialization
let pop = new Array(nPop);

for (let i = 0; i < nPop; i++) {
  // Generate Random Solution
  pop[i] = { ...empty_individual };
  pop[i].position = GenerateRandomPosition(VarMin, VarMax, nVar);
  pop[i].cost = CostFunction(pop[i].position);

  if (pop[i].cost < bestSol.cost) {
    bestSol = { ...pop[i] };
  }
}

// Store the best cost of each iteration
let bestCost = new Array(maxIt);
let costs = new Array(nPop);

// GA main loop
for (let it = 0; it < maxIt; it++) {
  // Selection Probabilities
  costs = pop.map((individual) => individual.cost);
  let avgCost = mean(costs);

  if (avgCost !== 0) {
    costs = costs.map((cost) => cost / avgCost);
  }

  let probes = costs.map((sth) => Math.exp(-beta * sth));

  // Initialize the offspring population
  let popc = new Array(nC / 2);
  for (let i = 0; i < nC / 2; i++) {
    popc[i] = new Array(2);

    for (let j = 0; j < 2; j++) {
      popc[i][j] = { ...empty_individual };
    }
  }

  // Crossover
  for (let k = 0; k < nC / 2; k++) {
    // Select Parents
    let p1 = pop[RouletteWheelSelection(probes)];
    let p2 = pop[RouletteWheelSelection(probes)];

    // Perform Crossover
    [popc[k][0].position, popc[k][1].position] = UniformCorssover(
      p1.position,
      p2.position,
      gamma
    );
  }

  // Convert popc to single-column matrix
  const popcVec = popc.flatMap((sth) => sth);

  // Mutation
  for (let l = 0; l < nC; l++) {
    // Perform Mutation
    popcVec[l].position = Mutate(popcVec[l].position, mu, sigma);

    // Check for variable bounds
    for (let i = 0; i < popcVec[l].position.length; i++) {
      popcVec[l].position[i] = Math.max(VarMin[i], popcVec[l].position[i]);
      popcVec[l].position[i] = Math.min(VarMax[i], popcVec[l].position[i]);
    }

    // Evaluation
    popcVec[l].cost = CostFunction(popcVec[l].position);

    // Compare solution with the best solution ever found
    if (popcVec[l].cost < bestSol.cost) {
      bestSol = { ...popcVec[l] };
    }
  }

  // Merge populations
  let mergedPop = [...pop, ...popcVec];

  // Sort population
  let sortedPop = mergedPop.sort((a, b) => a.cost - b.cost);

  // Remove Extra Individuals
  pop = sortedPop.slice(0, nPop);

  // Update the best cost of the iteration
  bestCost[it] = bestSol.cost;

  // Display iteration information
  console.log(`Iteration ${it}: Best Cost = ${bestCost[it]}`);

  // console.table(pop);
  // debugger;
}

console.log("Finished");
