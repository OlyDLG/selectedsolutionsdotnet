<style>
body {font-family: Palatino}
</style>
$\require{cancel}$

#### <center>Triola, M. F., 2018. <i>Elementary Statistics, 13th Edition.</i> Pearson, Boston
#### <center>Chapter 5, Section 2: Binomial Probability Distributions
#### <center>to be included in the main Chapter write up

__3__) In a survey of 1009 customers, 42% said they were comfortable receiving deliveries by drones.&nbsp; Consider the probability that, of 30 customers randomly selected without replacement from the 1009, ___at least___ 10 will be OK with drone deliveries: are the 30 selections independent?&nbsp; Can they be treated as independent?&nbsp; Can the probability be found by using the binomial probability formula?&nbsp; Why or why not?

__Sln__: Since the customers are selected without replacement, the selections are not independent (selection of one customer reduces the size of the sample space, and thus affects the probability of selecting subsequent customers).&nbsp; However, $\displaystyle \frac{30}{1009} \doteq 0.0297 \lt 0.05$, so according to the Text, we may treat the samples as independent without incurring significant error (which is how the Reader should think of it: the results will not be exact, but they will be "close enough").&nbsp; With that "idealization," $\boxed{\text{yes}}$ this is a "binomial experiment," so one could calculate the stated probability using the binomial distribution formula...but it would require using said formula either 21 times to calculate the probability directly, i.e., to calculate the probabilities of each of the results "precisely 10 OK," "precisely 11 OK,"..."precisely 30 OK"; or, more efficiently, using it 10 times to calculate the complementary probability&mdash;given by the probability of "precisely 9 OK" or "precisely 8 OK" or..."precisely 0 OK"&mdash;and subtracting that result from 1 (or using technology capable of calculating the <i>cumulative</i> binomial probability; see, e.g., our solution to Exercise 39c below, and then use that method to calculate the stated probability: you should get approximatley 0.875 or 87.5%).  
<br>

In Exercises __6__, __9__, and __12__, determine whether the given procedure results in a binomial distribution (or equivalent), and if it doesn’t give at least one reason why?

__6__) 291 couples give birth to 291 babies and the gender of each baby is recorded.

__Sln__: We must consider the following:

i. Does the "procedure" have a fixed number of trials?&nbsp; Yes: 291.

ii. Are the trials independent?&nbsp; This is the problematic one: it depends on what we’re considering the underlying "population" to be.&nbsp; If the population is the 291 births, then no, the trials are not independent because we’re sampling without replacement and the sample size&mdash;100% of the population&mdash;is MUCH larger than the 5% the Text says is allowable for neglecting the resulting lack of independence; on the other hand, if the population is all births, then 291 births is much, MUCH smaller than 5% of the population and we may treat the trials as independent without significant error.&nbsp; So we are unable to resolve this issue with the information given.

iii. Is the result of each trial precisely one of precisely two options?&nbsp; Yes: (neglecting hermaphrodites), every birth results in precisely one of two possible genders, male or female.

iv. Is the probability of each result fixed from trial to trial?&nbsp; Yes: the probability of each result is (approximately) 0.5, regardless of which trial is being performed.

Thus, depending on what the underlying population is supposed to be, this may or may not be a binomial "experiment." 
<br><br>

__9__) Forty different Senators are randomly selected without replacement from a population of 80 males and 20 females, and the gender of each selected Senator is recorded.

__Sln__: This is essentially the same as Exercise 6, except that it is clear that the population is the 100 U. S. Senators, and consequently the sample size of 40 is 40% of the population, much too large a fraction to ignore the lack of independence created by the sampling without replacement (which is implied by the specification that forty <i>different</i> Senators are selected).
<br><br>

__12__) 1000 different people are randomly selected without replacement and their "yes" or "no" answer to a question is recorded.

__Sln__: i. Does the "procedure" have a fixed number of trials?&nbsp; Yes: 1000.

ii. Are the trials independent?&nbsp; Although the sampling is without replacement, the assumed population&mdash;potential TGI Friday’s customers, say&mdash;is so much larger than 1000 that we may treat the trials as independent without significant error.

iii. Is the result of each trial precisely one of precisely two options?&nbsp; Yes: "yes" or "no" (assuming everyone answers as prescribed, i.e., with no other responses or failures to respond).

iv. Is the probability of each result fixed from trial to trial?&nbsp; We don’t know, i.e., the problem statement doesn’t say one way or the other.

Consequently, this might be a binomial experiment, but we can’t be sure with the information provided. 
<br><br>

Henceforth, checking/verifying that the described "experiments" are binomial&mdash;a rather tedious chore, once one learns to recognize a binomial experiment simply from reading or thinking about it&mdash;is "left to the Reader."

In Exercises __17__ and __20__, the problems refer to an 8 question multiple-choice exam, each exam question having 5 alternatives, so the probability of getting each individual question correct by random selection is $p=0.2$.

__17__) Find the probability that the number of correct answers (from random guessing) is fewer than 3.

__Sln__: This is a binomial "experiment" with $n=8, p=0.2, q=1-0.2=0.8$, and let $x=$ the random variable "# correct"; thus:

$P(\text{# correct fewer than 3}) = P(x\lt3) = P(x=0\text{ OR }x=1\text{ OR }x=2) = P(x=0) + P(x=1) + P(x=2) =$

$\displaystyle{8\choose0}(0.2)^0(0.8)^8 +\displaystyle{8\choose1}(0.2)^1(0.8)^7 + \displaystyle{8\choose2}(0.2)^2(0.8)^6 = (1)(1)(0.8)^8 + 8(0.2)(0.8)^7 + 28(0.04)(0.8)^6 = $

$(0.8)^6\left[(0.8)^2 + 1.6(0.8) + 28(0.04)\right] = (0.8)^6(0.64+1.28+1.12) = (0.8)^6(3.04) \doteq \boxed{0.797}$
<br><br>

__20__) Find the probability of guessing at least one answer correctly.

__Sln__: $P(\text{guessing at least one correctly}) = P(x \gt0) = 1-P(x=0)$ (make sure you understand why this equality is true; hint: what is the complementary event of "at least one correct"?&nbsp; Is it possible to get a negative number correct, i.e., can $x$ be less than zero?)

$ = 1 - \displaystyle{8\choose0}(0.2)^0(0.8)^8 = 1 - (0.8)^8 \doteq \boxed{0.832}$
<br><br>

__24__) 54% of adult smartphone users (admit to) using them in meetings or classes: find the probability that, of 12 randomly selected smartphone users, fewer than 3 of them (admit to) using their smartphones in meetings or classes.

__Sln__: This is a binomial experiment with $n=12, p=0.54, q=1-0.54=0.46$, so letting $x=$ the random variable "number of selected smartphone users who admit to using their cellphones in meetings or classes," we have:

$P(x \lt 3) = P(x = 0\text{ OR } x = 1 \text{ OR } x = 2) = P(x=0) + P(x=1) +P(x=2) = $

$\displaystyle{12\choose0}(0.54)^0(0.46)^{12} + \displaystyle{12\choose1}(0.54)^1(0.46)^{11} + \displaystyle{12\choose2}(0.54)^2(0.46)^{10} =$

$(1)(1)(0.46)^{12} + 12(0.54)(0.46)^{11} + 66(0.2916)(0.46)^{10} \doteq 0.009\,518 \doteq \boxed{0.010}$ or (a little less than) 1%.
<br><br>

__27__) 20% of adults believe in reincarnation; find the probability that, of 6 randomly selected adults:

__a__) Exactly 5 believe in reincarnation.

__Sln__: This is a binomial experiment with $n=6, p=0.2, q=1-0.2=0.8$; let $x = $ the random variable "number of adults out of 6 who believe in reincarnation"; we have:

$P(x=5) = \displaystyle{6\choose5}(0.2)^50.8)^{6-5} = 6(0.00032)(0.8) \doteq \boxed{0.00154}$
<br>

__b__) All 6 believe in reincarnation.

__Sln__: $P(x=6) = \displaystyle{6\choose6}(0.2)^6(0.8)^0 = (1)(6.4\times10^{-5})(1) = \boxed{6.4\times10^{-5}}$
<br>

__c__) At least 5 believe in reincarnation.

__Sln__: $P(x \ge 5) = P(x=5) + P(x=6) = 153.6\times10^{-5} + 6.4\times10^{-5} = \boxed{0.0016}$
<br>

__d__) Is five a significantly high number who believe in reincarnation?

__Sln__: The relevant probability is the last one we calculated; the fact that it is very small (less than 0.2%) means that it is <i>highly unlikely</i> that a survey of 6 adults would randomly encounter 5 (or more) adults who believe in reincarnation; thus 5 is a significantly high number: if we encountered such a result, we would be wise to suspect a "causal" explanation (e.g., a convention of such believers in the vicinity of our survey).
<br><br>

__30__) For 16 parental pairs (i.e., sixteen single birth events):

__a__) Find the mean and standard deviation of the number of girls in groups of 16 births.

__Sln__: This is a binomial experiment with $n=16, p=0.5, q=1-0.5=0.5$, and thus $\mu = np = (16)\left(\frac12\right) = \boxed{8}$ and $\sigma = \sqrt{npq} = \sqrt{16\left(\frac12\right)^2} = (4)\left(\frac12\right) = \boxed{2}$
<br>

__b__) Use the "range rule" to find the values separating significantly low and significantly high results.

__Sln__: Thus, using the "range rule," $\mu-2\sigma = 8-2(2) = \boxed{4}$ is the separating value for a significantly low number of girl births, and $\mu + 2\sigma = 8+2(2) = \boxed{12}$ is the separating value for a significantly high number of girl births.
<br>

__c__) Is 11 girls out of 16 (single) births significantly high?&nbsp; Interpret in terms of the effectiveness of the XSORT method of gender selection.

__Sln__: Based on the result in Part b, $\boxed{\text{no}}$, 11 girl births is not a significantly high number: there is a reasonable probability that such could happen due to random chance, and thus, at best, the effectiveness of the XSORT method of gender selection is indeterminate (more data may yet show its effectiveness convincingly, but 11 girls out of 16 single births does not.)
<br><br>

__33__) Worldwide, it is estimated that 1% of persons between the ages of 15 and 49 are infected with HIV.&nbsp; In blood tests for the virus, samples from 36 individuals are combined and tested: what is the probability that the combined sample tests positive; is this "unlikely"?

__Sln__: Neglecting the occurrence of false positives and false negatives, i.e., presence of the virus yields a positive test and absence of the virus yields a negative test, both with 100% accuracy,

$P(\text{36 pooled samples test positive}) = $

$P(\text{precisely one of the samples contains the virus OR precisely 2 of the samples do OR precisely 3 OR...precisely 36}) =$

a sum of 36 individual binomial probabilities: way too many to do, arguably, even with technology!&nbsp; Fortunately, there’s another way:

$P(\text{36 pooled samples test positive}) = 1 - P(\text{36 pooled samples test negative})$ 

(this is why we have to neglect the possibilities of false positives and false negatives: if we don’t do that, then we can’t assume that "36 pooled samples test positive" and "36 pooled samples test negative" are complementary events)

$= 1 - P(\text{0 of the 36 samples contain the virus})$ (ditto)

$= 1 - \displaystyle{36\choose0}(0.01)^0(1-0.01)^{36-0} = 1 - (1)(1)(0.99)^{36} \doteq 1 - 0.696\,413 \doteq \boxed{0.304}$, i.e., "on average," (about) 304 out of 1000 such pooled tests will test positive: I agree with the text author that this is "not unlikely."
<br><br>

__36__) A shipment of 2000 batteries contains 2% defective; such a shipment is accepted if, out of 50 randomly selected, at most 2 are found to be defective (i.e., the "acceptable number" of defectives is 0, 1, or 2).&nbsp; What is the probability that the shipment will be accepted?&nbsp; Will almost all such shipments be accepted, or will many be rejected?

__Sln__: Since the batteries are sampled without replacement (presumably, or we wouldn’t necessarily be sampling 50 different batteries!), the samples are not independent; however, the sample size of 50 is $\displaystyle\frac{50}{2000} = 0.025 = 2.5\%$ of the population size, so we may treat them as independent without significant error.

With that established:

$P(\text{shipment will be accepted}) = $ $P(\text{# of defectives out of 50 is precisely 0 or precisely 1 or precisely 2 | the probability of a battery being defective = 0.02}) = $ $P(\text{0 out of 50 such bats def.}) + P(\text{1 out of 50 such bats def.}) + P(\text{2 out of 50 such bats def.})$ (in going from the previous step to this one we have relied both on the selection of the batteries being independent events, and on precisely 0, precisely 1, and precisely 2 being mutually exclusive events)

$=\displaystyle{50\choose 0}(0.02)^0(1-0.02)^{50-0} + \displaystyle{50\choose 1}(0.02)^1(1-0.02)^{50-1} + \displaystyle{50\choose 2}(0.02)^2(1-0.02)^{50-2}$

$=(1)(1)(0.98)^{50} + (50)(0.02)(0.98)^{49} + (1225)(0.0004)(0.98)^{48}$

$\doteq 0.364\,170 + 0.371\,602 + 0.185\,801 \doteq \boxed{0.922\text{ or }92.2\%}$

In other words, "on average," 92.2%&mdash;922 out of 1000&mdash;such shipments would be accepted, 78 out of a 1000 rejected; this seems to us like a high number rejected (but it’s really an economic question: one has to weigh the costs of rejecting shipments&mdash;e.g., the costs of having less-than-anticipated inventory, etc.&mdash;against the costs of passing along bad product to the consumer, e.g., the possibility of reduced sales, etc.; if one is more worried about the latter costs, then rejecting 7.8% of shipments might be too little!)
<br><br>

__39__) Out of 611 randomly selected voters, 308 stated that they voted for the winning candidate in a Presidential election; the actual percentage of votes for the winning candidate was 43%.&nbsp; Assume that 43% of voters actually did vote for the winning candidate, and assume 611 voters are randomly selected.

__a__) Use the range rule to determine the limits separating values that are significantly high and significantly low; is the 308 out of 611 voters who said they voted for the winner significantly high?

__Sln__: 611 is a small sample (relative to the on-the-order-of 100 million voters who cast votes for President in a U. S. Presidential election), so although we are sampling without replacement, we may nevertheless treat this as a binomial experiment with $n=611$ trials and a probability of "success" $p=0.43$.&nbsp; Thus: $\mu = np = (611)(0.43) = 262.73$, $\sigma = \sqrt{np(1-p)} = \sqrt{(262.73)(0.57)} = \sqrt{149.7561}$, $\mu - 2\sigma = 262.73 - 2\sqrt{149.7561} \doteq \boxed{238.3}$ is the separating value for significantly low, and $\mu + 2\sigma =  262.73 + 2\sqrt{149.7561} \doteq \boxed{287.2}$ is the separating value for significantly high.&nbsp; Accordingly, 308 voters saying they voted for the winner $\boxed{\text{is}}$ significantly high.
<br>

__b__) Find the probability of exactly 308 voters who actually voted for the winner.

__Sln__: The exact probability is given by: $\displaystyle{ 611\choose308}(0.43)^{308}(0.57)^{611-308=303}$, which, to my pleasant surprise, my calculator&mdash;EduCalc Pro&mdash;can do!&nbsp; It is approximately equal to $\boxed{3.69\times 10^{-5}}$.
<br>

__c__) Find the probability of 308 or more voters who actually voted for the winner.

__Sln__: This is a cumulative binomial probability, for which EduCalc Pro does not have a function; but Google Sheets does: BINOMDIST, with the cumulative parameter&mdash;its fourth positional argument&mdash;set to TRUE.&nbsp; However, as with most cumulative probability distribution functions, the value returned by this function is for the value in question <i>or less</i> (the "left-tailed" cumulative probability).&nbsp; We want the probability for the value in question&mdash;308 "successes"&mdash;<i>or more</i>, i.e., the "right-tailed" probability, which is equivalent to 1 minus the left-tailed probability of the complementary event, i.e., 307 or fewer "successes."  In symbols: 

$P(308\text{ or more}) = 1 - P(307\text{ or less}) = 1 - $ BINOMDIST(307, 611, 0.43, TRUE).

Entering this into a cell in GSheets (preceded by an "=" to signify that it is a formula to be evaluated), yields $\boxed{1.36\times10^{-4}}$.
<br>

__d__) Which probability is relevant to deciding if 308 is significantly high, and what conclusion do we draw from that?

__Sln__: The probability of 308 or more is the relevant probability, and the result that it is so small strongly suggests that this result is probably not attributable to random variability: "something is (probably) going on" (e.g., the survey design, perhaps unknowingly, may have been biased/flawed, or perhaps respondents tend not to respond honestly to such questions.)
<br>

__e__) What does this say about the survey results? 

__Sln__: It calls them into question/makes them "suspect."  (But, again, without additional information, it is unclear whether this is due to flaws in the design and/or execution of the survey, or in the unreliability of the responses of people when asked these kinds of questions.&nbsp; For example, people might not to want to admit to having voted for the losing candidate, even if told the responses will remain anonymous.)
<br><br>

__42__) __The Multinomial Distribution__ applies to trials which are like binomial trials, except there are more than two possible outcomes.&nbsp; For example, suppose there are precisely three possible outcomes, called $A, B,$ and $C$, with probabilities $p_1, p_2,$ and $p_3,$ respectively.&nbsp; (Note that, if these are the only possible outcomes, then performing a trial is sure to result in one of them, so that $p_1+p_2+p_3 = 1$.) Then in $n$ independent trials, the probability of obtaining precisely $x_1$ occurrences of $A$, $x_2$ occurrences of $B$, and $x_3$ occurrences of $C$ ($x_1+x_2+x_3 = n$) is given by: $$\frac{n!}{x_1!x_2!x_3!}(p_1^{x_1})(p_2^{x_2})(p_3^{x_3})$$
Suppose a roulette wheel has 18 red slots, 18 black slots, and 2 green slots: find the probability of getting 7 red outcomes, 6 black outcomes, and 2 green outcomes (in $7+6+2=15$ trials).  

__Sln__: Here, $n=15, x_1 = 7, x_2 =6, x_3=2$, while $p_1 = p_2 = \displaystyle \frac{18}{18+18+2} = \frac9{19}, p_3 = \frac2{38} = \frac1{19}$.&nbsp; ($\checkmark: \frac9{19}+\frac9{19}+\frac1{19} = 1\checkmark$), so $$P(x_1=7,x_2=6,x_3=2) = \frac{15!}{(7!)(6!)(2!)}\left(\frac9{19}\right)^7\left(\frac9{19}\right)^6\left(\frac1{19}\right)^2 = \\ \boxed{(180,\!180)\left(\frac{9^{13}}{19^{15}}\right) \doteq 0.030}$$
<br><br>