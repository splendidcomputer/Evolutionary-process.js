# Genetic Algorithm Implementation in JavaScript

This is a JavaScript implementation of a Genetic Algorithm (GA) for solving optimization problems. Genetic Algorithms are heuristic search algorithms that mimic the process of natural selection to find approximate solutions to optimization and search problems. This implementation provides a basic structure for solving optimization problems using a GA.

## Table of Contents

- [Genetic Algorithm Implementation in JavaScript](#genetic-algorithm-implementation-in-javascript)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Problem Definition](#problem-definition)
  - [GA Parameters](#ga-parameters)
  - [Initialization](#initialization)
  - [GA Main Loop](#ga-main-loop)
  - [Results](#results)
  - [License](#license)

## Introduction

This project implements a Genetic Algorithm in JavaScript for solving optimization problems. Genetic Algorithms are inspired by the process of natural selection and are widely used for optimization problems where traditional methods may not be suitable.

## Installation

1. Clone or download this repository.

2. Ensure you have Node.js installed on your system.

3. Install required dependencies:

   ```bash
   npm install
   ```

4. Run the Genetic Algorithm:
   ```bash
   node main.js
   ```

## Usage

This implementation is intended as a starting point for solving optimization problems using a Genetic Algorithm. You can customize the cost function, problem dimensions, and GA parameters according to your specific problem.

## Problem Definition

The problem to be optimized is defined in the `problem` object:

```javascript
const problem = {
  CostFunction: function (x) {
    return Sphere(x); // Example cost function (you can replace this)
  },
  nVar: 5, // Number of variables
  VarMin: [-10, -10, -5, -1, 5], // Minimum values for each variable
  VarMax: [10, 10, 5, 1, 8], // Maximum values for each variable
};
```

You should replace the `Sphere(x)` function with your own cost function. Modify `nVar`, `VarMin`, and `VarMax` to suit your problem's requirements.

## GA Parameters

GA parameters are defined in the `params` object:

```javascript
const params = {
  maxIt: 100, // Maximum number of iterations
  nPop: 100, // Population size
  beta: 1, // Selection pressure
  pC: 1, // Crossover probability
  gamma: 0.1, // Crossover parameter
  mu: 0.02, // Mutation probability
  sigma: 0.1, // Mutation parameter
};
```

You can adjust these parameters to fine-tune the GA's behavior for your specific problem.

## Initialization

The GA initializes a population of random solutions within the specified variable bounds. The best solution found is tracked throughout the optimization process.

## GA Main Loop

The main loop of the GA consists of the following steps:

1. Selection: Selects parents based on their fitness.

2. Crossover: Combines pairs of parents to create offspring.

3. Mutation: Introduces small random changes to the offspring.

4. Evaluation: Calculates the fitness of the offspring.

5. Population Update: Merges and sorts the population, keeping the best individuals.

6. Iteration Information: Displays information about the current iteration.

## Results

The best solution found by the GA and the progression of the best cost over iterations are displayed in the console.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
