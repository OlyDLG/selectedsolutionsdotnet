<style>
body {font-family: Palatino}
</style>
$\require{cancel}$

#### <center>Triola, M. F., 2018. <i>Elementary Statistics, 13th Edition.</i> Pearson, Boston
#### <center>Chapter 5, Section 1: Probability Distributions
#### <center>to be included in the main Chapter write up

__4__) For 100 births, $P(\text{exactly 56 girls}) = 0.0390$, $P(\text{56 or more girls}) = 0.136$: is 56 girls in 100 births a ___significantly___ high number of girls, and which probability is the relevant one in answering that question?

__Sln__: The relevant probability is $P(\text{56 or more girls}) = 0.136$; since this is greater than $0.05$, by the Text’s standard, 56 girls out of 100 births is not a significantly high number.&nbsp; (It might reasonably be considered a high number, but significantly high number?&nbsp; Well, even that may be a matter of opinion, varying with  one’s criteria for making that judgement; what the Text author is communicating is kind of the "industry standard" for what constitutes "significantly" high and low.)
<br><br>

__6__) State (with explanation) whether each of the following is a discrete random variable, a continuous random variable, or not a random variable.

__a__) Grades (A, B, C, D, F) earned in statistics classes.

__Sln__: By "the letter of the law" (no pun intended), this is $\boxed{\text{not}}$ a random variable, because the outcomes are not numerical values; however, as is relatively "common knowledge," each of these letter grades has a customary numerical value associated with it: A=4, B=3, C=2, D=1, F=0; so one could "transform" this into a $\boxed{\text{discrete}}$ random variable.
<br>

__b__) Heights of students in statistics classes.

__Sln__: Here we run into a grey area: to the precision typically recorded, i.e., to either the nearest centimeter or nearest half-inch, certainly there are only a finite, and therefore countable number of possible heights; however, in principle, if we had sufficiently good measuring equipment, we could refine such measurements to as much precision as we might desire; that principle, together with the "inconvenient" number of possible heights we would need to keep track of if we treated this as a discrete random variable, have led to the convention that such heights are typically treated as a $\boxed{\text{continuous}}$ random variable.
<br>

__c__) Number of students in statistics classes.

__Sln__: The outcome is an (integer) numerical value, typically limited to a reasonable number of possibilities, so this is a $\boxed{\text{discrete}}$ random variable.
<br>

__d__) Eye color of statistics students.

__Sln__: The outcomes are non-numeric, with no useful conversion to numeric values, so this is $\boxed{\text{not}}$ a random variable.
<br>

__e__) Number of times statistics students must toss a coin before getting heads.

__Sln__: Here, the possible outcomes are (integer) numerical values, so, even though there are conceivably an unlimited number of possible values (however, most aren’t "realistic," of course), their number is "countable," and therefore this is a $\boxed{\text{discrete}}$ random variable.
<br><br>

In Exercises __8__, __11__, and __14__ determine whether a probability distribution is given; if so, find its mean and standard deviation; if not, state why it isn’t.

__8__) This data is for a study of male color blindness: $x$ represents the number of males in a random group of 5 who exhibit some form of color blindness, $P(x)$ is the relative frequency of observing $x$.

  $x$ | 0 | 1 | 2 | 3 | 4 | 5 | Total
     ---|---|---|---|---|---|---|---
$P(x)$|0.659|0.287|0.050|0.004|0.001|0+|1.001  

__Sln__: A valid probability (i.e., a real number between 0 and 1, inclusive) is given for each possible value of x; and the sum of those probabilities is 1.0 (the "excess" 0.001 in the sum may reasonably be assumed to be due to rounding one or more of the individual probabilities); so $\boxed{\text{yes}}$, this is a valid probability distribution.  

Its mean, $\mu = (0)(0.659) + (1)(0.287) + (2)(0.050) + (3)(0.004) + (4)(0.001) + (5)(0) = \boxed{0.403}$

Its variance $\sigma^2 = (0)^2(0.659) + (1)^2(0.287) + (2)^2(0.050) + (3)^2(0.004) + (4)^2(0.001) + (5)^2(0) - (0.403)^2 = 0.376\,591$ and thus its standard deviation, $\sigma = \sqrt{0.376\,591} \doteq \boxed{0.614}$

(Note the "oddity" that, the standard deviation being larger than the mean, $\mu - \sigma \lt 0$, i.e., an impossible value for the random variable; this is not unheard of in statistics and is in no way erroneous or "pathological"&mdash;it is similar to the fact that the mean of a discrete distribution is seldom a possible value of the random variable.)
<br><br>

__11__) $x$ represents the number of subjects in a random group of 3 who say that "in person" is the most fun way to flirt, $P(x)$ is the relative frequency of observing $x$.

  $x$ | 0 | 1 | 2 | 3 | Total
     ---|---|---|---|---|---|---|---
$P(x)$|0.091|0.334|0.408|0.166|0.999  

__Sln__: Again, there is a valid probability for each of the possible values of the random variable, and the probabilities sum to 1 (again the difference of $-0.001$ may reasonably be attributed to rounding), so $\boxed{\text{yes}}$, this is a valid probability distribution.  

Its mean, $\mu = (0)(0.091) + (1)(0.334) + (2)(0.408) + (3)(0.166) = \boxed{1.648}$

Its standard deviation, $\sigma = \sqrt{(0)^2(0.091) + (1)^2(0.334) + (2)^2(0.408) + (3)^2(0.166) - (1.648)^2} = \sqrt{0.744\,096} \doteq \boxed{0.863}$
<br><br>

__14__) $x$ represents the number of "pass line" craps table bets which must be placed before a win, $P(x)$ is the relative frequency of observing $x$.

  $x$ | 1 | 2 | 3 | 4 | Total
     ---|---|---|---|---|---|---|---
$P(x)$|0.493|0.250|0.127|0.064|0.934  

__Sln__: This is $\boxed{\text{not}}$ a probability distribution, both because not all possible values of $x$ are included (it’s certainly possible that 5 or more bets are required before a win, even if the casino doesn’t want to call attention to that fact); and because the probabilities don’t sum (close enough) to 1 (for the difference to be attributable to round-off error; in fact, the "missing probability" is probably precisely that attributable to the "missing" values of $x$).
<br><br>

__18__) The following table gives the probability of obtaining $x$ number of girls out of 8 (single) births:

 $x$ | 0 | 1 | 2 | 3 | 4 |  5 | 6 | 7 | 8 | Total
     ---|---|---|---|---|---|---|---|---|---|---|---|---
$P(x)$|0.004|0.031|0.109|0.219|0.273|0.219|0.109|0.031|0.004|0.999

__a__) Find the probability of getting exactly 7 girls in 8 births.

 __Sln__: This is simply the value "below" 7 in the table: $\boxed{0.031}$
 <br>
 
__b__) Find the probability of getting 7 or more girls in 8 births.

 __Sln__: $P(7\text{ or more girls}) = P(\text{precisely 7 girls OR precisely 8 girls}) = P(x=7) + P(x=8) = 0.031 + 0.004 = \boxed{0.035}$
 <br>

__c__) Which of the above probabilities is relevant for determining whether 7 is a ___significantly high___ number of girls in 8 births?

 __Sln__: 7 <i>or more</i>, i.e., the one calculated in Part b.
 <br>
 
__d__) Is 7 a significantly high number of girls in 8 births?&nbsp; Why or why not?

 __Sln__: Using the Text’s "0.05 standard," since 0.035 < 0.05, i.e., the probability of 7 or more girl births out of 8 (due to random chance) is less than 5%, $\boxed{\text{yes}}$, 7 out of 8 is a "significantly high" number of girl births.
 <br><br>

For Exercises __21__ and __24__, $x$ represents the number of adults in random groups of 5 who reported sleepwalking.

  $x$ | 0 | 1 | 2 | 3 | 4 | 5 | Total
     ---|---|---|---|---|---|---|---
$P(x)$|0.172|0.363|0.306|0.129|0.027|0.002|0.999  

__21__) Find the mean and standard deviation of the number of sleepwalkers in a random group of 5.

__Sln__: We (are to) assume that the total of the probabilities not equaling 1.0 precisely is due to rounding of the individual probabilities, and thus this is a valid probability distribution.&nbsp; Thus the mean is given by: 

$(0.172)(0) + (0.363)(1) + (0.306)(2) + (0.129)(3) + (0.027)(4) + (0.002)(5) = \boxed{1.48}$

and the standard deviation is given by:

$\sqrt{(0.172)(0)^2 + (0.363)(1)^2 + (0.306)(2)^2 + (0.129)(3)^2 + (0.027)(4)^2 + (0.002)(5)^2-(1.48)^2} = \boxed{\sqrt{3.23} \doteq 1.797}$
<br><br>

__24__) __a__) Find the probability of getting exactly 4 sleepwalkers among 5 adults.

__Sln__: This is precisely the probability value entry in the table under the observed value of 4, i.e., $\boxed{0.027}$
<br>

__b__) Find the probability of getting 4 or more sleepwalkers among 5 adults.

__Sln__: Since the maximum number of sleepwalkers we could get among 5 adults is 5, 

$P(4\text{ or more}) = P(\text{exactly } 4\text{ or exactly } 5) = (\text{since there is no "overlap" of the events "exactly 4" and "exactly 5"})$

$P(\text{exactly 4}) + P(\text{exactly 5}) = 0.027 + 0.002 = \boxed{0.029}$
<br>

__c__) Which probability is relevant for determining whether 4 is a significantly high number of sleepwalkers in a group of 5 adults?

__Sln__: The probability of "4 or more." (This is just straight out of the text.)
<br>

__d__) Is 4 a significantly high number of sleepwalkers in a group of 5 adults?&nbsp; Why or why not?

__Sln__: $\boxed{\text{Yes}}$, because 0.029&mdash;the probability of it occurring due to random chance&mdash;is pretty low (as a percent, it’s 2.9%, i.e., if we took many, many samples of 5 adults, we would expect 4 or more sleepwalkers in only about 3% of such samples due to random chance), so if we actually observe it, the logical conclusion is that it may not be due to random chance, i.e., there is probably (though not definitely) some "not random" explanation.
<br><br>

__27__) In Virginia’s "Pick 3" lottery game, one pays \$1 to pick a three digit number (i.e., a number between 000 and 999) and wins \$500 if one’s pick matches exactly the number "drawn" by the lottery agency.

__a__) How many different "picks" are possible?

__Sln__: 10 possibilities (one of 0 through 9) for the the first digit, same for the second and third digit, so $(10)(10)(10) = \boxed{1000}$.
<br>

__b__) What is the probability of winning?

__Sln__: Since only an exact match&mdash;same digits in the same order&mdash;wins, there is only one "way to win," so the probability is $\displaystyle\frac1{1000} = \boxed{0.001}$.
<br>

__c__) What is a winner’s net profit?

__Sln__: One wins \$500, but one paid \$1 to play, so the winner’s net profit is $\boxed{\$499}$.
<br>

__d__) Find the expected value.

__Sln__: Let $x = $ the random variable "net profit from playing VA’s Pick 3."  Then, in tabular form, the probability distribution of $x$ is:

  $x$ | $-\$1$ | \$499 | Total
     ---|---|---|---
$P(x)$|0.999|0.001|1.0

and so the expected profit is $(-1)(0.999)+(499)(0.001) = \boxed{-\$0.50}$
<br>

__e__) Which is better for the bettor: VA’s Pick 3 game, or VA’s Pick 4 game, which has an expected profit of $-50$&cent;?

__Sln__: $-50$&cent; $= -\$0.50$, so $\boxed{\text{neither}}$ is better for the bettor, they both have the same expected loss.
<br><br>

__30__) Fidelity life charges \$226 for a life insurance policy that pays \$50,000 in the event of the purchaser’s death within the year; the purchaser has a 0.9968 probability of surviving the year.

__a__) From the perspective of the purchaser, what are the (monetary) values corresponding to the two events surviving the year vs. not surviving?

__Sln__: From the perspective of the purchaser, the monetary value of surviving the year is $-$\$226, i.e., the cost of the policy; whereas the monetary value (to her estate/heirs) of not surviving the year is +\$50,000$-$\$226 $=$\$49,774, i.e., the policy "payout" minus the cost of the policy.
<br>

__b__) What is the purchaser’s expected value (or return) on the policy?

__Sln__: By Part a) the value of the policy after one year is a random variable with the following distribution:

  <i>x</i> | &ndash;$226 | $49,774  | Total
     ---|---|---|---|---|---|---|---
$P(x)$|0.9968|1-0.9968 $=$ 0.0032|1.0  

and thus the purchaser’s expected value of the policy after one year is: $$(0.9968)(-\$226) + (0.0032)(\$49,\!774)) = \boxed{-\$66}$$ 
<br>

__c__) Can the insurance company expect to make a profit from selling many such policies?&nbsp; Why (or why not)?

__Sln__: The insurance company’s perspective is precisely the opposite of the buyer’s perspective: they <i>gain</i> $+\$226$ with a probability of 0.9968, and lose $-$\$49,774 with probability 0.0032.&nbsp; Thus their expected value of the policy after one year is +\$66, which is how much they stand to make, "on average," per policy sold.&nbsp; So $\boxed{\text{yes}}$, they can expect to make a profit from selling many such policies.
<br><br>