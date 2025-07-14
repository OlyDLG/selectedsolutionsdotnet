<style>
body {font-family: Palatino}
</style>
#### <center><i>The Fibonacci Difference Equation: Derivation, Solution, and Commentary<br> (Abridged Version)</i>
#### <center>&copy; 2016, 2025 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>SelectedSolutionsDotNet

$~~~~$The famous Fibonacci Sequence (named for the Thirteenth Century Italian mathematician Leonardo of Pisa, c. 1175 - c. 1250) is defined such that the $n^{\text{th}}$ element of the sequence, $F_n$, is the sum of the previous two elements, $F_{n-1}, F_{n-2}$, i.e., $$F_n = F_{n-1} + F_{n-2},$$with $F_0 = F_1 =1$. Thus the first ten elements of the sequence are: $1, 1, 2, 3, 5, 8, 13, 21, 34, 55$.  ("Exercise 0": using the definition, calculate the next ten elements of the sequence, $F_{10}$ through $F_{19}$.)

$~~~~$This defining equation is an example of a <i>difference equation</i> (not to be confused with its "cousin," the differential equation). A <i>solution</i> of a difference equation is a formula for the $n^{\text{th}}$ element that depends on $n$, but not on any of the sequence elements (as does the difference equation).  Our "mission" herein is to find the solution of the Fibonacci-sequence-defining difference equation; said solution will thus be a formula for $F_n$ in terms of $n$. In other words, such a formula will enable us to calculate any element of the Fibonacci sequence, without having to calculate all the elements preceding it.

$~~~~$Due to the close relationship between difference and differential equations, and based on knowledge that a solution of the form $y = a^x,~a \ne 0$ or $1$ works for the latter, we try that kind of solution for our defining difference equation.   In other words, we GUESS that $$F_n = cG^n$$ is a solution, where $c$ and $G$ are constants, the determination of which will give us what we want: a formula for $F_n$ in terms of the variable $n$, but no other unknowns.   

$~~~~$By definition, what it means for $cG^n$ to be a solution of the difference equation is that substituting $cG^n$ in for $F_n$ makes the difference equation a true statement for all $n$ (for which the equation is well-defined). Performing said substitution and rearranging, we obtain:$$F_n - F_{n-1} - F_{n-2} = 0 = cG^n - cG^{n-1} - cG^{n-2}.$$ The trivial solutions  $c=0,G=0,$ are not what we're after, so we assume $c \ne 0, G \ne 0$ and "divide through" by $cG^{n-2}$, yielding:$$G^{n-(n-2)} - G^{(n-1)-(n-2)} - G^{(n-2)-(n-2)} = G^2 - G - 1 = 0.$$This quadratic equation in $G$ has solutions:$$G = \frac{-(-1) \pm \sqrt{(-1)^2 - 4(1)(-1)}}{2(1)} = \frac{1 \pm \sqrt5}{2}.$$Thus we have two "candidate solutions": $\displaystyle F_p(n) = c_p\left(\frac{1+\sqrt5}{2}\right)^n$ and $\displaystyle F_m(n) = c_m\left(\frac{1-\sqrt5}{2}\right)^n$.

$~~~~$Because the difference equation is <i>linear</i>, any sum of candidate solutions is itself a candidate solution. So we consolidate our candidates into one guess:$$F_n = c_p\left(\frac{1+\sqrt5}{2}\right)^n + c_m\left(\frac{1-\sqrt5}{2}\right)^n.$$Before we substitute this into the original difference equation to check, we use the auxiliary "initial" conditions to solve for $c_p$ and $c_m$: <br>
  $\displaystyle F_0 = c_p\left(\frac{1+\sqrt5}{2}\right)^0 + c_m\left(\frac{1-\sqrt5}{2}\right)^0 =  c_p(1) + c_m(1) = c_p + c_m = 1$ and<br>
  $\displaystyle F_1 = c_p\left(\frac{1+\sqrt5}{2}\right)^1+ c_m\left(\frac{1-\sqrt5}{2}\right)^1 = c_p\left(\frac{1+\sqrt5}{2}\right) + c_m\left(\frac{1-\sqrt5}{2}\right) = 1$.<br>
Using the substitution method to solve for $c_p$ and $c_m$ we find:<br>
$\displaystyle \left(\frac{1+\sqrt5}{2}\right)c_p + \left(\frac{1-\sqrt5}{2}\right)(1-c_p) = 1 \Rightarrow \frac{1+\sqrt5 - 1 +\sqrt5}{2}c_p = 1 - \frac{1-\sqrt5}{2} \Rightarrow $ $$c_p = \frac{1}{\sqrt5}\frac{1+\sqrt5}{2}$$ $\displaystyle \Rightarrow c_m = 1 - \frac{1}{\sqrt5}\frac{1+\sqrt5}{2} = \frac{2\sqrt5 - 1 - \sqrt5}{2\sqrt5} \Rightarrow$
$$c_m = -\frac{1}{\sqrt5}\frac{1-\sqrt5}{2}.$$<br>
So our final candidate solution&mdash;our candidate for the formula for the $n^{\text{th}}$ Fibonacci number in terms of $n$&mdash;is:
$$F_n = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)\left(\frac{1+\sqrt5}{2}\right)^n - \left(\frac{1-\sqrt5}{2}\right)\left(\frac{1-\sqrt5}{2}\right)^n\right] =$$
$$\boxed{\frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{n+1} - \left(\frac{1-\sqrt5}{2}\right)^{n+1}\right]}
$$<br>
$~~~~$Now we check/confirm:

$\displaystyle F_0 = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{(0+1)} - \left(\frac{1-\sqrt5}{2}\right)^{(0+1)}\right] = \frac{1+\sqrt5-1+\sqrt5}{2\sqrt5} = 1~~\checkmark$<br>

$\displaystyle F_1 = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{(1+1)} - \left(\frac{1-\sqrt5}{2}\right)^{(1+1)}\right] = \frac{1 + 2\sqrt5 +5 - 1 + 2\sqrt5 - 5}{4\sqrt5} = 1~~\checkmark$<br>

And now for the hard one&mdash;we need to show that:<br>

$\displaystyle F_n - F_{n-1} - F_{n-2} = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{n+1} - \left(\frac{1-\sqrt5}{2}\right)^{n+1} - \left(\frac{1+\sqrt5}{2}\right)^{n} + \left(\frac{1-\sqrt5}{2}\right)^{n} - \left(\frac{1+\sqrt5}{2}\right)^{n-1} + \left(\frac{1-\sqrt5}{2}\right)^{n-1}\right] = 0,$<br>which is only true if the factor inside the square brackets $=0$. Factoring it suitably and using the fact that $\displaystyle \left(\frac{1+\sqrt5}{2}\right)^{-1} = \frac{\sqrt5-1}{2} \Rightarrow \left(\frac{1-\sqrt5}{2}\right)^{-1} = -\frac{1+\sqrt5}{2}$, we see that said factor equals:<br>
$\displaystyle \left(\frac{1+\sqrt5}{2}\right)^n\left[\frac{1+\sqrt5}{2} - 1 - \left(\frac{1+\sqrt5}{2}\right)^{-1}\right] - \left(\frac{1-\sqrt5}{2}\right)^n\left[\frac{1-\sqrt5}{2} - 1 - \left(\frac{1-\sqrt5}{2}\right)^{-1}\right] = $<br>
$\displaystyle \left(\frac{1+\sqrt5}{2}\right)^n\left(\frac{1+\sqrt5 - 2 -\sqrt5 + 1}{2}\right) - \left(\frac{1-\sqrt5}{2}\right)^n\left(\frac{1-\sqrt5 - 2 + 1 + \sqrt5}{2}\right) = 0$ for all $n.~~\checkmark$

("Exercise 1": use the formula to verify that it is at least valid for $n=3, 4, 5$, i.e., calculate $F_n$ using the formula for these three values of $n$. Hint: you should get $F_3 = 2$, $F_4 = 3$, and...what for $F_5$?)

$~~~~$Take a moment to contemplate this result: again, the Fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … Because one is always adding an integer to an integer, all the Fibonacci numbers are integers. Despite this, the formula for the $n^{\text{th}}$ Fibonacci number involves the square root of 5, in two different sums, each raised to the $n^{\text{th}}$ power! Almost miraculously (or so it might seem), somehow, the integer portions of those “powered sums” are always “zeroed-out” by each other, and the sum of the $\sqrt5$ terms always “manages” to equal the $n^{\text{th}}$ Fibonacci number times $\sqrt5$&mdash;so that the $\sqrt5$ cancels with the factor of $\displaystyle \frac{1}{\sqrt5}$ out in front of the whole expression&mdash;leaving just the $n^{\text{th}}$ Fibonacci number: really quite remarkable!

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

