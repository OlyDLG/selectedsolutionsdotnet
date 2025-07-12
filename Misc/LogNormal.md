<style>
body {font-family: Palatino}
</style>
#### <center><i>Whence Comes the Lognormal Distribution: a Heuristic Explanation</i>
#### <center>&copy; 2016 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>www.selectedsolutions.net

<br>
$~~~~~$First, what is the lognormal distribution?&nbsp; The term is used in two closely related ways.&nbsp; It is used to describe the distribution of the "magnitudes" (e.g., size) of some measurable property of the individuals in a population (used in the statistical sense).&nbsp; It is also the name of a specific (parameterized family of) probability distribution(s).&nbsp; Since this is a math Website, I'm going to describe the second usage first and then further motivate it by describing the first usage in that context.

<br>
$~~~~~$In words, a random variable $X$ has the lognormal distribution if not the variable itself, but its logarithm (to any base), $\log(X)$, is normally distributed; in other words, $X$ is lognormally distributed if $\log(X)$ has pdf (probability density function) $f(x)=\exp\{-[(x-\mu)/\sigma]^2\}$ for some real numbers $\mu$ and $\sigma.~$ If you were to sample a lognormal random variable, you'd find that you'd need to take the logarithm of each datum to observe the normal distribution within the results.

<br>
$~~~~~$How does this relate to the other usage of the term?&nbsp; For concreteness, let's consider a specific type of population that is frequently found to exhibit the lognormal distribution: particle size, $s$, of debris gathered from a river bed.&nbsp; If we scoop up a handful of such debris, how would we determine if the sizes are lognormally distributed.&nbsp; Well, a "rough" way of determining if a population is normally distributed, given a sufficiently large sample from the population, is to plot a histogram of the relative frequencies of occurrence of and <i>count</i> all the particles in each of the following size classes:

| Size Range  (grams)| Class "Index" |
|----------|--------------|
| $~~~~~~~~~~~s \lt 2^{-5}$ | -6 |
| $2^{-5} \le s \lt 2^{-3}$ | -4 = 0.5(\log(min))|
| $2^{-3} \le s \lt 2^{-1}$ | -2 |
| $2^{-1} \le s \lt 2^{1}$ | 0 |
| $~~2^1 \le s \lt 2^3$ | 2 |
| $~~2^3\le s \lt 2^5$ | 4 |
| $~~2^5 \le s$ | 6 |

If particle size is lognormally distributed, we would find something like the following counts:

| Size Range  (grams)| Class "Index" | Observed Count |
|----------|--------------|----------------|
| $~~~~~~~~~~~s \lt 2^{-5}$ | -6 | 2 |
| $2^{-5} \le s \lt 2^{-3}$ | -4 |23 |
| $2^{-3} \le s \lt 2^{-1}$ | -2 | 87 |
| $2^{-1} \le s \lt 2^{1}$ | 0 | 122 |
| $~~2^1 \le s \lt 2^3$ | 2 | 71
| $~~2^3\le s \lt 2^5$ | 4 | 27 |
| $~~2^5 \le s$ | 6 | 1 |

If we were to plot a histogram of these counts 