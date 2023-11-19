# Genetic Algorithm in JavaScript

Implementation of a Genetic Algorithm in JavaScript for solving optimization problems.

## Table of Contents

- [Genetic Algorithm in JavaScript](#genetic-algorithm-in-javascript)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Dependencies](#dependencies)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [Algorithm Overview](#algorithm-overview)
  - [License](#license)

## Introduction

This project demonstrates the implementation of a Genetic Algorithm (GA) in JavaScript. Genetic Algorithms are a family of optimization algorithms inspired by the process of natural selection. They are commonly used to solve complex optimization and search problems.

In this implementation, the GA is applied to an example optimization problem defined by a cost function and problem-specific parameters.

## Dependencies

This project relies on the following modules and libraries:

- [`mean`](https://www.npmjs.com/package/mean): For calculating the mean of an array.
- Problem-specific modules:
  - `Sphere.js`: Defines the cost function for the optimization problem.
  - `GenerateRandomPosition.js`: Generates random solutions within problem-specific bounds.
  - `RouletteWheelSelection.js`: Implements the selection mechanism for parents.
  - `UniformCrossover.js`: Performs uniform crossover between parent solutions.
  - `Mutate.js`: Implements mutation of solutions.

You can install the required modules using npm:

```bash
npm install mean
```

## Project Structure

The project is organized as follows:

- `built-in_funcs`: Contains utility functions for mean, sum, and cumsum.
- `Sphere.js`: Defines the cost function for the optimization problem.
- `GenerateRandomPosition.js`: Generates random solutions within problem-specific bounds.
- `RouletteWheelSelection.js`: Implements the selection mechanism for parents.
- `UniformCrossover.js`: Performs uniform crossover between parent solutions.
- `Mutate.js`: Implements mutation of solutions.
- `main.js`: The main script that initializes and runs the Genetic Algorithm.

## Usage

To run the Genetic Algorithm, execute the `main.js` script using Node.js:

```bash
node main.js
```

This script configures and runs the GA based on the provided problem definition and parameters. It logs the progress and results of each iteration.

## Algorithm Overview

The Genetic Algorithm in this project follows these key steps:

1. Problem Definition: The problem to be solved is defined, including the cost function and problem-specific parameters.

2. Initialization: An initial population of solutions is generated, and the best solution is initialized.

3. Main Loop: The GA's main loop iterates for a specified number of generations. In each iteration, the following steps occur:

   - Selection: Parents are selected based on their fitness using Roulette Wheel Selection.
   - Crossover: Parents are paired and perform uniform crossover to produce offspring.
   - Mutation: Offspring solutions undergo mutation.
   - Evaluation: The cost of each solution is calculated.
   - Population Update: The population is updated, and the best solution is recorded.

4. Termination: The algorithm terminates after a specified number of iterations.

5. Results: The best solution found and the cost history are logged.

