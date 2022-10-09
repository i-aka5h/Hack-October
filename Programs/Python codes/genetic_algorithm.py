# imports
import numpy as np
from numpy import random
from numpy.random import randint

'''
The first step is to create an initial population of beetles.
we could use boolean values, strings or integer values.
for our problem, I will use integer values from 0 to 255.
'''

population = [] # defines a list that will receive the generated pseudo population.
qtd_gen = 100  # defines the number of mutations the population will undergo.
population_size = 100  # the population has 100 beetles.
fitness_population = [] # defines a list that will receive the rating of each generated beetle.


def generate_population():
    '''
    This function will generate a population of beetles each time it is called. Integer values from 0 to 255, 100 times will be generated.
    The generated array has three columns.

    ex:
        population = generate_population()
        print(population[0])

        ~ [122 44 99]
    '''
    return np.random.randint(255, size=(population_size, 3))


def fitness_function(x, index):
    '''
    Function that returns the rgb combination of a beetle,
    the sum of all values and what position it occupies

    ex:
        print(arr[index])
        print(sum)
        print(index)

        ~ [122, 44, 99]
        ~ 265
        ~ 0
    '''
    return [x[0], x[1], x[2]], x[0] + x[1] + x[2], index


def rating_fitness_population(population):
    '''
    This function sums the values of the three columns in each of the 100 rows.
    In this way, it shows the evaluation of each individual.

    ex:
        fit = rating_fitness_population(pop)
        print (fit)

        ~ [265, 234, 411, 409, 371, ...]
    '''
    for index in range(population_size):
        fitness_population.append(
            fitness_function(population[index], index)[1])
    return fitness_population


def roulette(population, fitness_population):
    '''
    Roulette selection is a stochastic selection method, where the probability for selection
    of an individual is proportional to its fitness.
    The method is inspired by real-world roulettes but possesses important distinctions from them.
    As we know, roulettes always have slots with the same size.
    That means, however, that all slots have the same probability of being selected.
    Instead, we can implement a weighted version of the roulette.
    With it, the larger the fitness of an individual is, the more likely is its selection.
    '''

    s = sum(fitness_population)  # Sum all fitness values
    # find the ratio between fitness values and the cumulative
    prop = [x/s for x in fitness_population]
    prop_360 = prop * 360  # turns the proportion into a circle: 360°

    # start an array the same size as the population
    prop_acc = np.zeros(population_size)
    a = 0
    for i in range(population_size):
        a += prop_360[i]
        prop_acc[i] = a

    index_selected = 0
    bid = random.uniform(0, 1) * 360.0

    for k in range(population_size):
        if prop_acc[k] > bid:
            index_selected = k
    return population[index_selected]


def crossover(p1, p2):
    '''
    All individuals, each with their own chromosome, start to operate in the environment. 
    As they do, each receives a measure of fitness f_i, according to its performances. 
    Then, after we compute the fitness for all individuals in a population, 
    we proceed with the recombination phase.
    During this phase, we select some individuals to act as parents. 
    These parents, in turn, mix their chromosomes according to a procedure called crossover or recombination.
    '''
    c1, c2 = p1.copy(), p2.copy()
    c1 = [p1[0], p2[1], p2[2]]
    c2 = [p2[0], p1[1], p1[2]]
    return [c1, c2]


def genetic_algorithm():
    population = generate_population()
    print(population)
    best_beetle, best_score, best_position = fitness_function(population[0], 0)
    for gen in range(qtd_gen):
        fitness_population = rating_fitness_population(population)

        # check for the best beetle
        for i in range(population_size):
            if fitness_population[i] < best_score:
                best_beetle, best_score, best_position = population[i], fitness_population[i], i
                print(best_beetle, "It is the best beetle, in position %d, with score %d." % (
                    best_position, best_score))

        # select the best from the population and perform new generation
        selected = [roulette(population, fitness_population)
                    for _ in range(population_size)]

        children = list()

        for i in range(0, population_size, 2):
            p1, p2 = selected[i], selected[i+1]
            for child in crossover(p1, p2):
                children.append(child)
        population = children
    print("Genetic Algorithm:")
    print(population)
    return [best_beetle, best_score]


best_beetle, best_score = genetic_algorithm()
print('Best beetle: %s; Best score: %d' % (best_beetle, best_score))
