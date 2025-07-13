<style>
body {font-family: Palatino}
</style>
#### <center><i>The "Mortgage" Difference Equation: Derivation, Solution, and Commentary</i>
#### <center>&copy; 2016, 2025 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>SelectedSolutionsDotNet

<br>
$~~~~~$If you've ever shopped for a mortgage (and you're like me) you probably wondered how they figure out your monthly mortgage payment. Why is this even "a thing"? Well, they arrange it so that you pay the same amount every month, for a pre-determined number of months, and each such payment is divided (unevenly) between interest and principal; but the interest portion is always calculated only on the remaining principal, which means it goes down every payment; this in turn means, because the total payment is fixed, that the amount that goes toward paying down your principal increases every month. If you think about it, or, more educationally, actually try to figure out how to make this work using trial-and-error (i.e., "guess, check, revise, repeat"; "Exercise 0": figure out "by hand" the monthly payment and each month's interest and principal portions, for a 12 month, $10,000 "mortgage" at a nominal annual interest rate of 6%) it seems like it would be too tedious (at best) to calculate these "payment schedules" on a regular-but-custom basis (which is why one way that mortgage lenders have at their disposal to figure these out is to use pre-printed tables). (The first time I applied for a mortgage, I asked our loan agent how our payment schedule was calculated and she said: "I have a special calculator that figures it out." "OK," I said, "but how does it figure it out? Is there a formula or procedure I can look up and use to check the calculation myself?" "Oh, I have no idea about that: I just punch in the numbers and believe what it tells me," was her reply. Me being me, that set me on a mission, to figure out how a mortgage schedule is calculated.)

$~~~~~$It wasn't too difficult to find the formula that is used:
$$p = P\frac{r(1 + r)^N}{(1 + r)^N - 1}$$where:

$p = $ the fixed monthly payment;

$P = $ the amount originally borrowed (i.e., the initial "principal");

$r = $ the MONTHLY interest rate (i.e., the nominal annual rate, which is what is usually advertised, divided by 12); and

$N = $ the total number of months over which the loan is "amortized," i.e., the number of months the borrower needs to make the monthly payment for the mortgage to be paid off. 

Thus, for example, the monthly payment you should have found for the data of "Exercise 0" is: $\displaystyle10000\frac{(0.06/12)(1 + 0.06/12)^{12}}{(1 + 0.06/12)^{12} - 1} = \$860.66/\text{mo.}$ On the other hand, finding a derivation of this formula&mdash;so as to understand the origin of this unintuitive beast&mdash;was much more difficult...so much so that I gave up and decided to try to derive it myself.

$~~~~~$Using the variables defined above, we add the following definitions:

$n =$ the number of months elapsed $=$ the number of payments made since borrowing, e.g., $n =$ 0 corresponds to the taking of the loan; $n =$ 1 after the first month has elapsed $=$ the first payment has been made; and $n = N$ corresponds to the last payment $=$ the loan being paid in full.

$P_n = $ principal owed <i>after</i> the $n$-th month, e.g., $P_0 = P, P_1 =$ principal owed after the first month's payment, and $P_N = 0$ (or close: due to rounding, $P_N$ is almost never exactly 0, typically requiring the last month's payment to be either a little more, or a little less, than $p$).

$i_n = rP_{n-1}$, i.e., the interest portion of $n$-th payment; note that the $n$-th interest payment is calculated using the previous month's principal owed, e.g., the first interest payment is calculated using the original loan amount, $P_0$, etc.

$~~~~~$With these additional variables, we can now derive an equation describing the entirety of the mortgage. To do this, observe that the portion of the $n$-th payment that goes toward reducing the principal is the total monthly payment, $p$, minus that portion that goes toward interest, $i_n = rP_{n-1}$. Thus, the difference between the principal before a payment is made and after a payment is made, $P_{n-1} - P_n$, is $p - i_n = p - rP_{n-1}$, or, after equating the first difference and the last difference and rearranging with a little algebra: $$P_n - (1 + r)P_{n-1} = -p.$$
This is called a <i>difference</i> equation, and like its close cousin, the much-more-studied <i>differential</i> equation, its "solution" is not a single number, but rather a "function" (for our purposes, a formula) giving $P_n$ (and through that, all the other unknown values for the problem) in terms of $n$, i.e., the means to calculate $P_n$ given any $n$. Important attributes of our difference equation are that it is: <i>first-order</i> (due to the largest difference between subscripts being $n-(n-1) = 1$); <i>inhomogeneous</i> (a.k.a. <i>non-homogeneous</i>, due to the right-hand-side of the equation, in this form, being non-zero, which we assume $p$ is [why? hint: it's the monthly payment: what would happen if it was 0?]); and, most importantly for solving it, <i>linear</i> (due to all of the $P_j$'s in the equation occurring in no more "complicated" form than to the first power, which is implied by their having no [explicit] exponents whatsoever).

$~~~~~$Now, due to the equation's linearity, its solution is the sum of two "pieces": a piece that solves the equation "as-is" (i.e., with its inhomogeneity), and a piece that solves the "corresponding <i>homogeneous</i> equation," which is the same equation except with a right-hand-side of zero:$$P_n - (1 + r)P_{n-1} = 0.$$Though in this particular case it's easier to solve the inhomogeneous equation, it's traditional to first solve the corresponding homogeneous equation&mdash;plus, it's more interesting&mdash;so we shall do that first.

$~~~~~$It turns out that a method that works well for solving linear differential equations, also works well for solving linear difference equations, namely, we "guess" a solution of the form $P_n = cx^n$ (where $c$ is a constant we determine later so as to make the final solution match the requirement that $P_0 = P$), substitute our guess into the equation, and see if we can solve for a (non-trivial) value of $x$ that makes the equation true for all $n$. In other words, we proceed as follows:

$$0 = P_n - (1+r)P_{n-1} = cx^n - (1+r)cx^{n-1} = cx^{n-1}(x - (1+r)).$$ 

$~~~~~$Now, for this to be true for all $n$, either: a) $cx = 0$, implying $P_n = 0$ for all $n$, which means we borrowed \$0&mdash;this is the so-called "trivial solution" which, being not very interesting, we ignore&mdash;or b) $x - (1+r) = 0$, implying $x = 1 + r$, which, as long as $r \ne 0$, yields a "non-trivial," i.e., "interesting" solution to the (corresponding homogeneous) equation:$$P_n = c(1+r)^n.$$
At this point we stop and check what we have so far:

$P_n - (1+r)P_{n-1} = c(1+r)^n - (1+r)c(1+r)^{n-1} = c(1+r)^n - c(1+r)^{(n-1) + 1} = c(1+r)^n - c(1+r)^n = 0$ for all $c$, $r$, and $n$: so far, so good. (Note that we appear to be on the right track, in as much as our solution involves $(1+r)$ raised to a power, the presence of which in our known answer may have seemed mysterious&mdash;until now.)

$~~~~~$Now we will find the other piece, the solution of the inhomogeneous equation. There are a number of methods for doing so; fortunately, due to the simple nature of our inhomogeneity, namely, that it is a constant, the method of "choosing an appropriate general form, e.g., from a table, substituting that into the equation, and solving for the unknown(s) in that form so that the equation is a true statement" works well (and easily) here. This is because, for a constant inhomogeneity, the form we need is simply...a(n undetermined) constant, which, for the purpose of solving for it, we'll call $C$. Substituting, we find we need to solve for $C$ in:

$$-p = P_n - (1+r)P_{n-1} = C - (1+r)C = -rC$$

implying $C = p/r$. (Check: $p/r - (1+r)(p/r) = (p - p - rp)/r = -rp/r = -p$: check!) Thus our "complete solution" (not yet "fit" to our "initial condition," $P_0 = P$) is:$$P_n = c(1 + r)^n + p/r.$$

("Exercise 1": confirm that this sum solves the inhomogeneous equation.)

$~~~~~$Now we determine the value of $c$ using the requirement that $P_0 = P$: $$P = P_0 = c(1+r)^0 + p/r = c(1) + p/r = c + p/r$$ implying $c = P - p/r$, implying $$P_n = (P - \frac{p}{r})(1+r)^n + \frac{p}{r}.$$

("Exercise 2": confirm that this solves the inhomogeneous equation <i>and</i> that $P_0 = P$.)

$~~~~~$Great, we have a formula for the remaining principal owed after $n$  months, i.e., payments, but it doesn't really look like our "known" solution. In particular, our known solution doesn't involve $P_n$: is there some way we can "check" our solution against our known solution?  Yes: in addition to the requirement that $P_0 = P$, we have another similar requirement involving data we haven't yet used, namely, that the loan is to be paid-off after $N$ payments, i.e., $$P_N = 0.$$This gives $0 = (P - p/r)(1+r)^N + p/r$, which no longer depends on $P_n$, and which we can solve for $p$ to compare to our known solution.

$~~~~~$Multiplying through by $r$ (which we can do because it is non-zero) gives:

$0 = (rP - p)(1+r)^N + p = Pr(1+r)^N - p((1+r)^N - 1) \Rightarrow$

$$p = P\frac{r(1+r)^N}{(1+r)^N -1}$$

which <i>is</i> our "known" solution!

$~~~~~$That's it, that's the derivation of the (simple) mortgage monthly payment formula as the solution of a linear, first-order, inhomogeneous difference equation (with "boundary conditions," which is what the conditions $P_0 = P$ and $P_N = 0$ are called). However, there is a little more to it: remember, I said that all this is "a thing" because what's really interesting is not so much that your payment is the same each month, but that within that constant payment, the portions that go toward interest and principal  each month, change&mdash;the monthly amount that pays down your principal goes up, while, correspondingly, the amount that is interest, goes down. I also claimed that our solution (the actual monthly solution, $P_n$, not the constant monthly payment, $p$) is sufficient to figure out these other amounts that vary month-to-month: it's all we need to calculate the complete "mortgage schedule," i.e., the "table" of monthly interest and principal payments. Let's see how this works.

$~~~~~$It's not complicated: the $n$-th month's interest is always simply the (monthly) interest rate times the just-past month's principal still owed:$$i_n = rP_{n-1} = (rP - p)(1+r)^{n-1} + p,$$

and the amount of the $n$-th payment that goes toward principal is:$$p - i_n = (p - rP)(1+r)^{n-1}.$$(As an additional check, we'll confirm that all our payments toward principal add up to $P$:

$\displaystyle\sum_{n=1}^N(p-i_n) = \sum_{n=1}^N(p-rP)(1+r)^{n-1} = (rP\frac{(1+r)^N}{(1+r)^N - 1} - rP)\sum_{n=0}^{N-1}(1+r)^n$

$\displaystyle= rP\left(\frac{(1+r)^N}{(1+r)^N - 1} - 1\right)\frac{(1+r)^N - 1}{(1+r) -1} = rP((1+r)^N - (1+r)^N + 1)/r = P$: check!)

To conclude, here's the "solution" (computed using our results, not trial-and-error) to "Exercise 0":

| Month | Payment | Interest | Pmt to Principal | Remaining Principal Owed |
|----------|--------------|-----------|-----------------------|----------------------------------------------|
|  0 | - | - | - | 10,000.00 |
|  1 | 860.66 | 50.00 | 810.66 | 9,189.34 |
|  2 | 860.66 | 45.95 | 814.71 | 8,374.63 |
|  3 | 860.66 | 41.88 | 818.78 | 7,555.85 |
|  4 | 860.66 | 37.78 | 822.88 | 6,732.97 |
|  5 | 860.66 | 33.67 | 827.00 | 5,905.97 |
|  6 | 860.66 | 29.53 | 831.13 | 5,074.84 |
|  7 | 860.66 | 25.38 | 835.28 | 4,239.56 |
|  8 | 860.66 | 21.20 | 839.46 | 3,400.10 |
|  9 | 860.66 | 17.00 | 843.66 | 2,556.44 |
|10 | 860.66 | 12.79 | 847.87 | 1,708.57 |
|11 | 860.66 |   8.55 | 852.11 |    856.46 |
|12 | 860.66 |   4.29 | 856.37 |        0.09 |

(So the last payment the lender would require would actually be $860.75. Note: in computing the table above, I assumed that the lender would always round to "take the penny," i.e., I always rounded the interest up to the nearest penny, and I rounded the monthly payment down to 860.66&mdash;as opposed to up to 860.67&mdash;because paying the loan off slower yields more (albeit, just marginally) money for the lender.)

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
