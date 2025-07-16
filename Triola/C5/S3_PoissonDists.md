<style>
body {font-family: Palatino}
</style>
$\require{cancel}$

#### <center>Triola, M. F., 2018. <i>Elementary Statistics, 13th Edition.</i> Pearson, Boston
#### <center>Chapter 5, Section 3: Poisson Probability Distributions
#### <center>to be included in the main Chapter write up

__4__) In the Poisson probability formula $$P(x) = \frac{\mu^xe^{-\mu}}{x!},$$what does $P(0)$ represent?&nbsp; Simplify the formula for the case $x=0$.

__Sln__: $P(0)$ represents the probability of zero, i.e., no occurrences of the random event in the interval over which $\mu$ is expressed ($\mu$ is always a "rate," i.e., the average number of occurrences of something ___per___ some other unit).&nbsp; $P(0) = \displaystyle \frac{\mu^0e^{-\mu}}{0!} = (1)(e^{-\mu})/(1)$ (because $\mu^0 = 1$ for any value of $\mu$, and $0!=1$ by convention) $= e^{-\mu}$, i.e., $$\boxed{P(0) = e^{-\mu}}$$
(Note: this formula, along with the permutations and combinations formulae, is one of the reasons why we define $0!=1$.)
<br><br>

__7__) Assume that the mean number of (Atlantic) hurricanes per year is 6.1, and that the actual number in a year is a random variable with a Poisson distribution.

__a__) Find the probability of 7 hurricanes in a given year.

__Sln__: Given the information stated, we have:

$P(x=7) = \displaystyle\frac{(6.1)^7e^{-6.1}}{7!} \doteq \frac{(3.14274\times10^5)(2.24287\times10^{-3})}{5040} \doteq 0.139\,856 \doteq \boxed{0.140}$
<br>

__b__) Given that result, in a 55 year period, how many years are expected to have 7 hurricanes?

__Sln__: Using the more precise value in the intermediate calculation, we have: 

$(0.139\,856)(55) \doteq \boxed{7.69}$ out of the 55 years are expected to have 7 hurricanes.&nbsp; (Note: using the less precise value of 0.14 gives 7.7, i.e., the same result, after rounding to one decimal place.)
<br>

__c__) How does this compare to the actual result of 7 out of the 55 years having had 7 hurricanes?&nbsp; Does the Poisson distribution appear to be a good model in this particular instance?

__Sln__: The difference of 0.7 years is $\displaystyle \frac{0.7}{55} \doteq 0.013 = 1.3\%$ of the 55 years, i.e., a really small fraction thereof; therefore, based on this "sample of one," the Poisson distribution does appear to be a good model in this particular instance (but see the comment following Problem 13c below).
<br><br>

__10__) A recent year in New York City saw 333 murders; assuming the actual number of murders on any given day is a Poisson distributed random variable with mean given by that data, find the probability of a day without any murders?&nbsp; Are there expected to be many days with no murders in NYC?

__Sln__: The mean number of murders per day is $\mu = \displaystyle \frac{333}{365} \doteq 0.912\,329$; therefore, letting $x = $ the random variable "number of murders on a given day," we have:

 $P(\text{a day with no murders}) = P(x=0) = e^{-\mu} \doteq \boxed{ 0.402}$ and the expected number of days with no murders is $(0.402)(365) \doteq 147$ days, or just about 2 out of every 5 days with no murders.&nbsp; (If this seems like too many days, given that the average is almost one per day, remember that the complement of 0 or 1 murders is 2 or 3 or 4 or...so even though on a majority of days there are only 0 or 1 murders, there are "enough" days with multiple murders to "make up for" that.) 
<br><br>

__13__) In South London in WWII, a total of 535 bombs fell on an area which was divided into 576 regions of 0.25 km^2 each.&nbsp; Assuming the actual number of bombs to hit a region is a Poisson distributed random variable with mean given by the above data:

__a__) Find the probability of a randomly-selected region receiving exactly 2 hits.

__Sln__: The first thing to recognize is that, since the unit of interest is number of hits per region (not number of hits per square km), the fact that each region is 0.25 km^2 is "red herring" data, i.e., irrelevant (unless/until we are asked to convert a number of hits per region result into units of number of hits per area). 

With that clarified, we see that the mean number of hits per region is $\mu = \displaystyle \frac{535\text{ hits}}{576\text{ regions}} \doteq 0.928819 \frac{\text{hits}}{\text{region}}$.&nbsp; Assuming, as instructed, that the number of hits in any given region is a Poisson distributed random variable, the required probability is thus: $$P(x=2) = (\mu^2 e^{-\mu})/2! \doteq (0.862\,706)(0.395\,020)/2 \doteq 0.170\,393 \doteq \boxed{0.170}$$

__b__) Of the 576 regions, what is the expected number to have received exactly 2 hits?

__Sln__: This is obtained by multiplying the number of regions, 576, by the probability of each region receiving exactly 2 hits, i.e., the result obtained in Part b: $$(576)(0.170393) \doteq \boxed{98.1}$$
or 98 rounded to the nearest whole number of regions.&nbsp; (Note that if you use the less precise estimate of 0.170 for the probability, you obtain 97.92, which still gives you 98 as the nearest whole number of regions.)
<br>

__c__) How does this compare to the actual result of 93 such regions?

__Sln__: The difference &mdash; $98.1-93=5.1$ &mdash; is only $\displaystyle \frac{5.1}{576} \doteq 0.009 = 0.9\%$ of the 576 total number of regions.&nbsp; Therefore we conclude that the absolute difference of (very nearly) 5 regions is actually ___relatively___ quite small, and this one piece of evidence would tend to support the appropriateness of the Poisson distribution in this instance.&nbsp; (However, this is what we would call "in the biz" "a sample of one," which proves absolutely nothing in statistics: we would need to perform the same analysis for at least 0, 1, 3, and 4 hits (and perhaps more, if there are regions with that many hits) to say with reasonable confidence that the Poisson distribution is a good model for all the data; in Chapter 12 we learn how to ask and answer this question more precisely, at which time this problem is revisited.)
<br><br>

__16__) In a recent year, the Text author wrote 181 checks; assuming the number of checks written on a given day is a Poisson distributed random variable with mean given by the above data, what is the probability that on a randomly selected day, the author wrote at least one check?

__Sln__: The mean we need for the Poisson distribution formula is $\mu =\displaystyle \frac{181\text{ checks}}{365\text{ days}} \doteq 0.496$ checks per day, and the "event" "wrote at least one check" is the complement of the event "wrote no, i.e., zero checks," so: 

$P(\text{wrote at least one check}) = 1 - P(\text{wrote zero checks}) = 1-\displaystyle e^{\large{-181/365}} \doteq 1 - e^{-0.496} \doteq \boxed{0.391}$
<br><br>

