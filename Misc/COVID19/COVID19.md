<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>
$\definecolor{green}{RGB}{0,175,0}
  \definecolor{violet}{RGB}{138,43,226}
  \definecolor{normal}{RGB}{110,110,110}
  \require{cancel}$
<style>
body {font-family: Palatino}
</style>
#### <center><i>Modeling Initial U. S. A. COVID-19 Case Growth:<br>An "Exercise" in Exponential and Logistic Regression,<br>With an Emphasis on the Concept of Doubling Time</i>
#### <center>&copy; 2020, 2025 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>SelectedSolutionsDotNet

<i>Note:  This content is provided "as-is," for educational purposes only, with no warranty of any kind, expressed or implied, including that of correctness, adequacy, and/or suitability for any purpose, whatsoever.</i> Corrections are welcome and should be emailed to selectedsolutionsdotnet@gmail.com.

This Exercise was partially inspired by questions on Quora ([here](https://www.quora.com/How-do-you-use-a-logarithmic-trendline-equation-e-g-y-c-Ln-X-b-to-calculate-concentrations-in-ELISA-assays/answer/David-Goldsmith-9) and [here](https://www.quora.com/How-do-you-find-the-logarithmic-regression-equation/answer/David-Goldsmith-9)).

__Exercise__: Using simple linear regression on appropriately transformed values of the (cumulative) daily number of reported COVID-19 cases in the United States of America for the month of March, 2020,[$^0$](#Note0)find and graph base-2 (i.e., "doubling-time"): __a__) exponential; and __b__) logistic[$^1$](#Note1)models; __c__) remark on your results; __d__) (on a new graph) use those models to plot predicted case numbers through: (for the exponential model) the number of cases equaling the April, 2020 U.S. population (approximately 329,485,000 people); and (for the logistic model) the number of cases equaling 99% of the U.S. population; and give the expected calendar dates for those "milestones"; and __e__) for the logistic model, the date when the predicted number of cases will reach half the U.S. population. __Calculus Extra Credit__: For the logistic model, show that this "half-population time" is when the instantaneous rate of change (IROC) of the model begins to decrease, i.e., up to that point in time, the IROC is increasing, but after it, the IROC is decreasing.

__Solution__:

Supporting content&mdash;raw data, "scratch" work, regression results, and plots&mdash;are available at ["the reference sheet"](http://bit.ly/selsolCOVID19GS) (note: external link to a viewable Google Sheet). Nevertheless, we shall reproduce some of it here as part of a (hopefully) cogent narrative, beginning with the raw data:

<table>
  <tr><th>Date<br>(March, 2020)<td>1<td>2<td>3<td>4<td>5<td>6<td>7<td>8<td>9<td>10</td></tr>
  <tr><th>Day #<td>0<td>1<td>2<td>3<td>4<td>5<td>6<td>7<td>8<td>9</tr>
  <tr><th># of Cases<td>89<td>110<td>130<td>160<td>229<td>333<td>446<td>545<td>702<td>1010   
  <tr><td colspan=11>
  <tr><th>Date<td>11<td>12<td>13<td>14<td>15<td>16<td>17<td>18<td>19<td>20
  <tr><th>Day #<td>10<td>11<td>12<td>13<td>14<td>15<td>16<td>17<td>18<td>19
  <tr><th># of Cases<td>1265<td>1664<td>2167<td>2776<td>3387<td>4419<td>6080<td>8265<td>13479<td>18860 
  <tr><td colspan=11>
  <tr><th>Date<td>21<td>22<td>23<td>24<td>25<td>26<td>27<td>28<td>29<td>30<td>31
  <tr><th>Day #<td>20<td>21<td>22<td>23<td>24<td>25<td>26<td>27<td>28<td>29<td>30
  <tr><th># of Cases<td>23432<td>34221<td>43151<td>53548<td>65418<td>83372<td>101624<td>121006<td>141921<td>162837<td>186258
</table>

__a__) A general exponential growth model is of the form: $$N(t) = N_0a^{kt}$$
where:<br>
$~~~~N$ is the number of things that’s increasing;<br>
$~~~~t$ is the time elapsed since some time $t=0$;<br>
$~~~~N_0$ is the number of things at time $t=0$ (a.k.a. the initial value); and <br>
$~~~~a, k$ are real numbers, where the "base" $a$ is $\gt 1$ and the "growth rate" $k$ is $\gt 0$ (for growth; different inequalities hold for exponential "decay").

When the concept of doubling time&mdash;the amount of time it takes for $N$ to double, i.e., increase by a <i>factor</i> of two&mdash;is of interest, it is convenient to choose $a=2$ and to write the model in the form: $$N(t) = N_0 \left(2^{(t/d)}\right)$$ 

because in this form, $d~(\ne 0)$ <i>is</i> the doubling time. Observe:
$N(0) = N_0\left(2^{0/d}\right) = N_0(2^0) = N_0(1) = N_0$ (this shows, incidentally, that $N_0$ is indeed the value of $N$ at time $t=0$); $N(t=d) = N_0(2^{d/d}) = N_0(2^1) = 2N_0;$ $N(t=2d) = N_0(2^{2d/d}) = N_0(2^2) = 4N_0 = 2(N(d));$ $N(t=3d) = N_0(2^{3d/d}) = N_0(2^3) = 8N_0 = 2N(2d);$ and each passing of another $d$ units of time results in another doubling of $N$. (We assume that the reader is familiar enough with the properties of exponents that the above heuristic argument is clear; but if more clarity is required, "experiment": choose an $N_0$, say 3, a $d$, say 5 days, and, provisionally taking my word for it that the appropriate doubling time model is then $N(t) = 3(2^{t/5}), t$ measured in days, calculate $N$ for one doubling time $(d)$, two doubling times $(2d)$, three doubling times $(3d)$, etc.; do this as many times and with as many different choices for $N_0$ and $d$ as it takes to convince yourself that $N(t) = N_0 \left(2^{(t/d)}\right)$ <i>is</i> "the right way" to write an exponential growth model when doubling time is of interest.)

Fitting this model to data using regression means finding "best" values of $N_0$ and $d$, where we mean "best" in the least-squares sense.[$^2$](#Note2)We assume the Reader has already been exposed to least-squares regression, as well as its execution using some sort of technology (e.g., a graphing calculator, a spreadsheet program, or an app), to fit data to the simple linear model, $y = mx +b.$ We will now demonstrate how that method can be used to calculate least-squares best fit values for $N_0$ and $d$ in our exponential model. 

Observe what happens if we take the $\log_2$ ("log base 2") of both sides of our model: $$\log_2(N) \color{violet}= \log_2(N_0(2^{t/d})) = \log_2(N_0) + \log_2(2^{t/d}) \color{normal} = \log_2(N_0) + \frac{t}d~~~~~~~~~~~~(\text{Eq. 1})$$

Making the identifications $y = \log_2 N, b = \log_2(N_0), t = x,$ and $\displaystyle m = \frac1d$, we see that our model is now in the "linear regression friendly" form $y = mx + b$.

So what does this mean procedurally? Well, the black parts of Eq. (1) above tell us that $\log_2 N$ (not $N$ itself) is a linear function of $t$ (itself, not $\log_2 t$)[$^3$](#Note3)with "slope" $m = 1/d$ and "$y$-intercept" $b = \log_2 N_0$. Thus we can get linear least-squares estimates for $m$ and $b$&mdash;and thus for $d = 1/m$ and $N_0 = 2^b$&mdash;by applying simple linear regression to the paired data $(t, \log_2 N)$.

Column D of [the reference sheet](http://bit.ly/selsolCOVID19GS) has $\log_2 N$ for each of the above $N$, so we will not reproduce that here, and Column B has the corresponding day numbers, i.e., $t$. With those values available, the Google Sheets function [LINEST](https://support.google.com/docs/answer/3094249?hl=en&authuser=0) (which is in cell A35, with the resulting $m$ in that cell, $b$ in cell B35, and other "fit" statistics in the range A36:B39, e.g., $R^2$ is in cell A37), performs simple linear least-squares regression on those paired data.[$^4$](#Note4)</a> The results for the month of March, 2020 are: $m=0.392 \implies d=$ a "regression average" doubling-time of $\boxed{2.55\text{ days}}$, $b = 6.395 \implies$ an $N_0 = 2^{6.395} \doteq \boxed{84.1\text{ reported cases}}$ with a resulting model of:$$\boxed{N(t) = 84.1\left(2^{t/2.55}\right)}$$
(with, for the linearized model, an $R^2 = 0.996$). The required plot is provided at the end of the solution to Part __b__.
<br><br>

__b__) Here’s where it really begins to get fun! But before diving in, "recall" that the "standard form" of the logistic model[$^5$](#Note5)is:$$N(t) = \frac{N_{\infty}}{1+Ae^{-kt}}$$

where $N, t,$ and $k$ are as above for the exponential model; $N_{\infty}$ is the value $N$ approaches as time increases without end, i.e., as "$t$ approaches infinity"; and $A = \displaystyle \frac{N_{\infty}}{N_0} - 1$, $N_0$ is, as above, the value of $N$ at $t=0$. Now, using the fact that $e = 2^{\log_2 e}$, we can write the standard logistic model in "doubling time" form:
$$N(t) = \frac{N_\infty}{1+A\left(2^{\log_2 e}\right)^{-kt}} = \frac{N_{\infty}}{1+A\left(2^{-t/d}\right)}$$
(where $d$ is related to the standard model parameter $k$ by $d = \displaystyle \frac1{k\log_2 e}$, but that isn’t really important: regression will enable us to determine $d$ directly, without having to "go through" $k$).

As discussed in [Note 1](#Note1), logistic regression is not usually "do-able" using simple linear regression; that is because the model itself is non-linear, and there is no transformation, such as was available for the exponential model, to render it so. However, for U.S.A. COVID-19 cases, we can rationalize an <i>a priori</i> estimate for the "carrying capacity," $N_{\infty}$, namely, the population of the United States. In other words, within U.S. borders, the virus can’t infect <i>more</i> than everyone within U.S. borders: the population of the United States establishes a maximum carrying capacity for the virus (within U. S. borders). A continuously updated estimate of the U.S. population is available from the U.S. Census Bureau’s ["Population Clock"](#popclock); as of April 6, 2020, it is right around 329,485,000, so that is what we will use for $N_{\infty}$.

But so what: how does having a value for $N_{\infty}$ help us? It  changes the regression picture entirely: "knowing" $N_{\infty}$ beforehand, we can divide each of our measured counts by it, giving:$$\frac{N}{N_{\infty}} = \left[1+A\left(2^{-t/d}\right)\right]^{-1} \implies \frac{N_{\infty}}{N} - 1 = A\left(2^{-t/d}\right).$$
Now we can pull the $\log_2$ "trick":$$\log_2\left(\frac{N_{\infty}}{N} - 1\right) = \log_2 A - \frac td.$$
Making the identifications $y = \log_2\left(\frac{N_{\infty}}{N} - 1\right)$, $b = \log_2 A$, $m = -1/d$, and $x = t$, we see that we’ve managed to transform the logistic model into a linear model! Thus, by assuming a value for $N_{\infty}$, transforming the "measured" counts $N$ to $\log_2\left(\frac{N_{\infty}}{N} - 1\right)$ and linearly regressing those against the corresponding $t$’s (untransformed), we can obtain linear least-squares estimates for $\log_2 A$ and $-1/d$ (and thus for $A$ and $d$); compared to what one usually has to do to get regression estimates for the logistic model parameters, this is "child’s play"! (I can’t over-emphasize how contingent this is on having an <i>a priori</i> estimate for $N_{\infty}$: ordinarily, $N_{\infty}$ is unknown&mdash;it is one of the things that gets estimated by the regression procedure&mdash;and thus there is no way we could execute the transformation of the dependent variable which makes the above "linearization" possible.) 

Column H of [the reference sheet](http://bit.ly/selsolCOVID19GS) has the appropriately transformed $N$. Cell H35 has the LINEST function, as well as the $m$ value of $-0.392$, yielding $d = 2.55$ days; cell I35 contains $\log_2 A = 21.90 \implies A \doteq 3.917\times 10^6$; with the resulting "doubling-time form" of the logistic model:
$$\boxed{N(t) = \frac{3.29485\times 10^8}{1+3.917\times 10^6\left(2^{-t/2.55}\right)}}$$
(remember that in this instance the value of $3.29485\times 10^8$ for $N_{\infty}$ was chosen, not calculated by the regression) yielding a model initial value of $N(0) = \displaystyle \frac{3.29485\times 10^8}{1+3.917\times 10^6(2^0)} \doteq 84.1$ cases. (Regression statistics for the linearized model, including the $R^2$ value of $0.996$, are in range H36:I39 of the reference sheet.)

Here is the plot required for Parts __a__ and __b__: 

<iframe width="834" height="651" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRoH4jjM--HhtqsLmOz0AyDVTN5_vuk4S7dRZmP8VdnQUNgTqMZDIAehP6ENGbO34-0pA10L1wnPytp/pubchart?oid=1000071324&amp;format=image"></iframe>

The values for the model curves are in the reference sheet in column F (exponential) and I (logistic), with <i>relative</i> errors in columns G and J, respectively.
<br><br>

__c__) Are you wondering why the "regression average" doubling time and model initial values are the same for the two different models? That perhaps that means one of the results is wrong? Quite the opposite: it just means that, as of the end of March, with respect to the logistic model, we’re still (quite) early in the growth of this thing. The "attraction" of the logistic model is that, for "small" $t$, it very closely approximates the exponential model it shares a growth rate and initial value with. (__Exercise__ for those who know Taylor Series: show that formally.) It’s only later, as the modeled thing begins to "feel" "push back" from the limitations of its environment that it begins to deviate from its corresponding exponential growth model. So, the fact that we got the same results out of each regression actually serves as a check that both results are right, and tells us that, at the end of March, "the worst" was "still to come."
<br><br>

__d__) To determine when the exponential model says the number of cases will equal the entire U.S. population, we need to solve: $$3.29485\times 10^8 = 84.1\left(2^{t/2.55}\right).$$

Dividing through by $84.1$ and taking the $\log_2$ of both sides gives: $$\log_2 \left(\frac{3.29485\times 10^8}{84.1}\right) = \frac t{2.55} \implies$$ $$\boxed{t = 2.55\log_2 \left(\frac{3.29485\times 10^8}{84.1}\right) \doteq 55.85\text{ days}.}$$

With March 1 being "Day 0," March 31 = "Day 30," so subtract 30 from 55.85 to give 25.85, i.e., if exponential spread of the infection continues with an average doubling time of 2.55 days, the entire population of the U.S. will be confirmed to have COVID-19 by $\boxed{\text{April 26}}$.

To determine when the logistic model says the number of reported cases will equal 99% of the population (__Question__: why don’t we ask this question for 100%?) we need to solve the equation: $$0.99N_{\infty} = \frac{N_{\infty}}{1+A\left(2^{-t/d}\right)} \implies 1+A\left(2^{-t/d}\right) = \frac1{0.99} = \frac{100}{99} \implies$$ $$A\left(2^{-t/d}\right) = \frac{100-99}{99} = \frac1{99} \implies 2^{-t/d} = \frac1{99A} \implies$$ $$2^{t/d} = 99A \implies t = d\log_2 (99A) \doteq 2.55\log_2[99(3.917\times 10^6)]$$ $$\boxed{\doteq 72.75\text{ days, or late on May 11.}}$$

The required plots are given below:

<iframe width="834" height="651" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRoH4jjM--HhtqsLmOz0AyDVTN5_vuk4S7dRZmP8VdnQUNgTqMZDIAehP6ENGbO34-0pA10L1wnPytp/pubchart?oid=937769492&amp;format=image"></iframe>

the values for which are in columns M (exponential) and N (logistic) of [the reference sheet](http://bit.ly/selsolCOVID19GS).
<br><br>

__e__) To determine the day when the logistic model says the reported number of cases will equal half the U.S. population (and thus the day when it says "the curve will begin to flatten") we need to solve: $$\frac{N_{\infty}}2 = \frac{N_{\infty}}{1+A\left(2^{-t/d}\right)} \implies 2 = 1+A\left(2^{-t/d}\right) \implies 2^{-t/d} = \frac1A \implies \log_2 A = \frac td \implies$$ $$\boxed{t = d\log_2 A = 2.55\log_2(3.917\times 10^6) \doteq 55.85\text{ days, i.e., approximately April 25.}}$$

(Basically, the same day continuation of the exponential model would have the entire country reported as infected: coincidence? Nope: evaluate the exponential model at $t=d\log_2 A$, simplify, substitute in what $A$ is in terms of $N_0$ and $N_{\infty}$, simplify again, and then think about the relative magnitudes of $N_0$ and $N_{\infty}$, at least in this situation; that should clarify why this is no coincidence.)
<br><br>

__Extra Credit__: You should know that the instantaneous rate of change of a function is given by its (first) derivative (if you have not learned that yet, "turn back, my young apprentice," for one typically learns that <i>long</i> before one learns the derivative techniques required to do this exercise). So we wish to show that the value of the independent variable where the first derivative, $N’(t)$, goes from increasing to decreasing&mdash;let’s call that place $t_{\text{infl}}$&mdash;is the same as where $N=\displaystyle \frac{N_{\infty}}2$. Well, if $N’$ changes from increasing to decreasing at $t_{\text{infl}}$, then it must have a (local) maximum there (picture it), so $N’’(t_{\text{infl}}) = 0$. Reverting back to the natural exponential form (remember that our doubling time form of the logistic model is equivalent to the natural exponential form, with $k=\displaystyle \frac1{d\log_2 e}$) and calculating, we have:

$\begin{eqnarray}
N’(t) & = & \left[N_{\infty}\left(1+Ae^{-kt}\right)^{-1}\right]’ = -N_{\infty}\left(1+Ae^{-kt}\right)^{-2}\left(-kAe^{-kt}\right) = kAN_{\infty}e^{-kt}\left(1+Ae^{-kt}\right)^{-2} \implies \\
N’’(t) & = & kAN_{\infty}\left\{-ke^{-kt}\left(1+Ae^{-kt}\right)^{-2} + e^{-kt}\left[-2\left(1+Ae^{-kt}\right)^{-3}\left(-kAe^{-kt}\right)\right]\right\} \\
& = & k^2AN_{\infty}e^{-kt}\left(1+Ae^{-kt}\right)^{-3}\left[2Ae^{-kt}-\left(1+Ae^{-kt}\right)\right] \\
& = & k^2AN_{\infty}e^{-kt}\left(Ae^{-kt}-1\right)\left(1+Ae^{-kt}\right)^{-3}
\end{eqnarray}$

Setting this last equal to zero and "dividing through" by everything that can never equal zero yields: $$Ae^{-kt}-1=0 \implies t_{\text{infl}} = \frac1k\ln A.$$

Evaluating $N(t_{\text{infl}})$ gives $N(\frac1k\ln A) = N_{\infty}\left(1+Ae^{-\cancel{k}(\ln A/\cancel{k})}\right)^{-1} = N_{\infty}(1 + A/A)^{-1} = N_{\infty}(1 + 1)^{-1} = \displaystyle \frac{N_{\infty}}2.$

$\blacksquare$
<br><br>

__Extra, Extra Credit: Proposed Method for Updating the Carrying Capacity__

(In this section we will again work with the "natural" exponential and logarithmic functions; by now, the reader should understand that the only difference occurs when we want to extract numerical results.)

When the exponential and logistic models’ intrinsic growth rates and initial values agree as closely as they do in this instance, so that we may essentially take them as equal in the two models, observe what we can "extract" from considering their ratio, $\alpha$:

$\alpha = \displaystyle \frac{N_0e^{kt}\left[1+(N_{\infty}/N_0-1)e^{-kt}\right]}{N_{\infty}} = \frac{N_0e^{kt}+(N_{\infty}-N_0)}{N_{\infty}} \implies {N_{\infty}}(\alpha - 1) = N_0(e^{kt}-1)$. 

This is a linear relationship between $\alpha - 1$ and $e^{kt}-1$. If we "keep track" of $\alpha-1$ (which, admittedly, is a model-computed, not a "measured" value) and the values of $t$ at which they occur (which is a "measured" value), we can regress $\alpha-1$ against $N_0(e^{kt}-1)$ to get a new estimate for $N_{\infty}$!

Now, there is a "problem" with this: our reasoning is "circular"&mdash;we’re using a "guessed" value of $N_{\infty}$ to generate "data" which we then use to guess a new value of $N_{\infty}$. However, this isn’t necessarily a problem; rather, if we "lather, rinse, repeat," i.e., <i>iterate</i> the procedure&mdash;and we’re fortunate enough that the estimated $N_{\infty}$’s <i>converge</i> to a stable value, i.e., eventually remain constant from one iteration to the next&mdash;then we’re simply using a time-honored method of applied mathematics!

So to summarize, the proposed iteration is: 

Step A) From the models (not the raw data), for each time $t$ to be used in the regression for estimating the new $N_{\infty}$, compute: i) the ratio of the exponential model value to the logistic model value ($\alpha$) and subtract 1: $\beta = \alpha - 1$ (this serves as the independent or "explanatory" variable); ii) $\gamma = N_0(e^{kt}-1)$; 

Step B) Linearly regress $\gamma$ against $\beta$, <i>forcing the intercept to</i> $0$ (this is a standard type of linear regression, implemented in LINEST by setting the third argument to FALSE); the result is your new estimate for $N_{\infty}$; if it is "within tolerance" (up to the user to decide) of the "old" $N_{\infty}$, stop: you’ve achieved "convergence," i.e., you’ve found "the best" estimate obtainable by this algorithm; 

Step C) Otherwise, use this new $N_{\infty}$ in the regression used to calculate the logistic model parameters $k$ and $N_0$ (the latter through the parameter $A$); if the new $k$ and/or $N_0$ are significantly different from those of the exponential model (again, up to the user to judge), stop: the underlying assumption of the procedure&mdash;that the intrinsic growth rate and initial values of the two models are the same&mdash;is no longer valid, so any results from continuing the iteration are suspect; call this result "divergence"; 

Step D) Otherwise, go back to Step A, and continue the cycle until: i) one of the above "exit conditions" is met; or ii) a user-selected maximum number of iterations have been performed without achieving either convergence or divergence.

Enjoy! [$^6$](#Note6)

##### Notes

<a name="Note0" onclick="window.history.back()">0.</a> NBC News-sourced data, presented April 1, 2020 on "The Rachel Maddow Show," MSNBC.

<a name="Note1" onclick="window.history.back()">1.</a> Ordinarily fitting a logistic model to data requires non-linear regression, placing it far above the intended level of this essay (despite this, it is now implemented as a "black box" on many of today’s calculators, spreadsheets, and apps, and is thus penetrating the mathematics curriculum as "low" as "Algebra II" & "Precalculus"; see, e.g., [Sullivan, 2012](#Sullivan)). However, in this circumstance&mdash;namely, a new virus infecting an essentially universally-susceptible population&mdash;"knowing" the "carrying capacity"&mdash;namely, the population of the United States&mdash;makes possible a transformation of the data which, uncharacteristically, enables us to calculate the (remaining) logistic model parameters using simple linear regression. Thus the inclusion of logistic regression here, when usually the author would consider it too advanced for this essay’s intended audience.

<a name="Note2" onclick="window.history.back()">2.</a> A full exposition of least-squares regression requires multivariable Calculus; see, e.g., [Bain & Engelhardt, 1992](#Bain). We assume a familiarity and computational facility with simple linear least-squares regression at the level presented in, e.g., [Sullivan, 2012](#Sullivan) or [Triola, 2018](#Triola).

<a name="Note3" onclick="window.history.back()">3.</a> I emphasize that $t$ is <i>not</i> $\log$-transformed in this situation, because there is another, very similar-looking situation in which it is, namely, "power-law" regression. In power-law regression, $\log$-transformation of <i>both</i> the dependent <i>and</i> the independent variable is used to fit data to the model $y = px^q$. __Exercise__: take the $\log$&mdash;choice of base doesn’t matter&mdash;of both sides of the power-law model and state which two quantities are then linearly related to one another; what the "slope" is; what the "$y$-intercept" is; and how one then recovers the parameters $p$ and $q$ from those results. __Answer__: Assuming use of the natural $\log$, i.e., $\log_e$, $\log y$ is linearly related to $\log x$, with slope $m = q$, $y$-intercept $b = \log p$, and thus the linear regression result for $m$ gives $q$ directly (i.e., no "back transformation" is required), but to get $p$ we need to calculate $e^b$ (again, assuming we used the natural logarithm to transform the data).

<a name="Note4" onclick="window.history.back()">4.</a> If you study LINEST, you may note the perhaps counter-intuitive argument ordering: LINEST requires the dependent variable first, independent variable second; this is because specification of the independent variable is optional&mdash;if omitted, LINEST assumes equally spaced integers for the independent variable&mdash;and it is a standard programming convention that optional arguments follow required arguments.

<a name="Note5" onclick="window.history.back()">5.</a> The logistic model is a standard, "first-order" attempt to modify the exponential growth model for the notion of "carrying capacity," i.e., the fact that no environment can support exponential growth forever; a rudimentary discussion is given in [Sullivan, 2012](#Sullivan), while a more complete discussion, including the differential equation basis for the model and its derivation therefrom, may be found in, e.g., [Boyce & DiPrima, 1992](#Boyce). 

<a name="Note6" onclick="window.history.back()">6.</a> I’m all-but-certain there’s a way to implement the described algorithm completely within Google Sheets, and I am certain it’s possible to implement it in JavaScript (I imagine one way to implement it in Sheets would involve using JS), but I feel like I should leave <i>something</i> for the "inspired" reader to do...

##### Data Sources

NBC News, via "The Rachel Maddow Show," April 1, 2020, MSNBC, New York 

<a name="popclock" onclick="window.history.back()">U. S. Census "Population Clock"</a>, https://www.census.gov/popclock/

##### References

<a name="Bain" onclick="window.history.back()">Bain</a>, L. J. and M. Engelhardt, 1992, <i>Introduction to Probability and Mathematical Statistics, Second Edition</i>, Duxbury Press, Belmont, CA, USA.

<a name="Boyce" onclick="window.history.back()">Boyce</a>, W. E. and R. C. DiPrima, 1992, <i>Elementary Differential Equations and Boundary Value Problems, Fifth Edition</i>, John Wiley & Sons, New York.

<a name="Sullivan" onclick="window.history.back()">Sullivan</a>, M., 2012, <i>Algebra & Trigonometry, Ninth Edition</i>, Prentice Hall, Boston.

<a name="Triola" onclick="window.history.back()">Triola</a>, M. F., with L. Iossi, 2018, <i>Elementary Statistics, 13^th Edition</i>, Pearson, Boston.

### Credits
Numerical computations and graphs created using Google Sheets.

### Please Donate:
<form action="https://www.paypal.com/cgi-bin/webscr"
          method="post"><input name="cmd"
            value="_xclick" type="hidden"> <input name="business"
            value="dgoldsmith_89@alumni.brown.edu" type="hidden"> <input
            name="item_name" value="SelectedSolutions Donation"
            type="hidden"> <input name="cn" value="Special Instructions
            (optional" type="hidden"> <input
            src="https://www.paypal.com/images/x-click-but04.gif"
            name="submit" alt="Make payments with PayPal - it's fast,
            free and secure!" align="middle" border="0" type="image"></form>
