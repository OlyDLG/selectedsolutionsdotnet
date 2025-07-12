$\require{cancel}$
<style>
body {font-family: Palatino}
</style>
#### <center>A Discrete Dynamical System (DDS) Algorithm for Approximating the Square Root
#### <center>&copy; 2022 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>www.selectedsolutions.net

##### Preface

I first saw the subject algorithm circa 1980, in some "math education" periodical I do not recall the title of and have been unable to re-find; the article included some proof/explanation as to why it works, but I do not recall that either.&nbsp; Thus I do not claim any "priority" for the following results: I know that the algorithm, at the very least,  exists somewhere in the literature, but I have been unable to determine exactly where; and although the given proof of its validity may be original, it hardly constitutes "deep" or "advanced" mathematics (indeed, it is probably not even the most "elegant" way to prove the result; but it does furnish an interesting example and application of a 2-D linear DDS, as discussed, e.g., in [Strang](#Strang)).

A variant of the algorithm was given on [Quora](https://www.quora.com) by [Gowtham Kumar Tangirala](https://www.quora.com/profile/Gowtham-Kumar-Tangirala), originally in answer to the question "How can I find the square root of 22 without a calculator" and now appearing as an answer to the question ["What is the method to calculate a square root by hand?"](https://www.quora.com/What-is-the-method-to-calculate-a-square-root-by-hand/answer/Gowtham-Kumar-Tangirala)&nbsp; An interesting thing about "Tangirala’s variant" is that it is based on a nonlinear DDS, whereas "our" DDS is linear; we thus begin our exposition with a demonstration of the equivalence of the two algorithms, and a discussion of what our "linearization" "buys" us.
<br><br>

##### "Tangirala’s Algorithm" and "Our" Linearization 

The task at hand is to approximate, to arbitrary precision, the positive square-root of a positive real number, $c.~$ Tangirala gives the following algorithm (T’s algo): choose an initial estimate $x_0$ of $\sqrt c$; then iteration of $x_{n+1} = f(x_n) = \displaystyle \frac{x_n + c}{x_{n}+1}$ yields an ever-closer estimate of $\sqrt c.~$ It is not difficult to see why this might work, because $\sqrt c$ is a fixed-point (fp) of this nonlinear DDS: $\displaystyle \frac{\sqrt c + c}{\sqrt c +1} = \frac{\sqrt c\cancel{(1 + \sqrt c)}}{\cancel{\sqrt c + 1}} = \sqrt c.~$ Thus whether or not this algorithm works depends on the [asymptotic stability](https://en.wikipedia.org/wiki/Lyapunov_stability) of this fp; and how close one’s initial estimate needs to be&mdash;if the fp is asymptotically stable&mdash;depends on the fp’s [basin of attraction](https://en.wikipedia.org/wiki/Attractor#Basins_of_attraction).

Unfortunately, there are no general methods for the (global) stability analysis of a nonlinear DDS.[$^1$](#Note1) However, there is a linear DDS-based algorithm, essentially equivalent to T’s algo.&nbsp; The advantage of this is that a global solution of a linear DDS can be determined "in closed form," potentially enabling an explicit determination of the basin(s) of attraction.&nbsp; The algorithm is: choose an initial <i>rational</i>[$^2$](#Note2) estimate, $\displaystyle \frac{a_0}{b_0}$, of $\sqrt c$; then the sequence of ratios $\displaystyle \frac{a_{n+1}}{b_{n+1}} = \frac{a_n + cb_n}{a_n + b_n}$ converges to $\sqrt c.~$ To see that this is equivalent to T’s algo, factor $b_n$ from the numerator and denominator and let $a_n/b_n = x_n$: $\displaystyle \frac{a_{n+1}}{b_{n+1}} = x_{n+1} =  \frac{a_n+cb_n}{a_n+b_n} = \frac{\cancel{b_n}}{\cancel{b_n}}\frac{(a_n/b_n) + c}{(a_n/b_n) + 1} = \frac{x_n + c}{x_n + 1}$
, which is T’s algo.

This can be cast as a 2-D <i>linear</i> discrete dynamical system:
$\left(\begin{array}{c}
a_{n+1} \\ 
b_{n+1} 
\end{array}\right) =
\left(\begin{array}{c c}
 1 & c \\ 1 & 1
\end{array}\right)
\left(\begin{array}{c}
a_n \\ 
b_n 
\end{array}\right)$; the claim is that $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n} = \sqrt c$. A (theoretical) advantage of this approach is that one can establish this claim directly, i.e., without having to explicitly exhibit the stability of the fixed-point of the equivalent nonlinear DDS (which can be "gnarly"). Briefly (I intend to publish a more detailed proof on my Website, selectedsolutions.net), the "transition" matrix $\left(\begin{array}{c c}
 1 & c \\ 1 & 1
\end{array}\right)$ can be diagonalized so that we can write the $n$-th term of the system as: 
$\left(\begin{array}{c}
a_n \\ 
b_n 
\end{array}\right) =
S \Lambda^n S^{-1}
\left(\begin{array}{c}
a_0 \\ 
b_0 
\end{array}\right)$. Multiplying out $S\Lambda^nS^{-1}(a_0,b_0)^T$ enables us to write an explicit expression for $\displaystyle \frac{a_n}{b_n}$; after some factoring/cancelling, we find that this equals an expression of the form $\displaystyle \sqrt c \frac{1 + f g^n}{1 - f g^n}$, where $f$ is a rational function of $a_0, b_0,$ and $\sqrt c$; and $ g = \displaystyle \frac{1-\sqrt c}{1 + \sqrt c}$. (Neglecting the "measure zero" case $f g^n = 1$ for some $n$ and an "unfortunate" choice of $a_0, b_0$) $c \gt 0 \implies |g| \lt 1 \implies \displaystyle \lim_{n\to\infty} g^n = 0 \implies \lim_{n\to\infty} \sqrt c \frac{1 + f g^n}{1 - f g^n} = \sqrt c.$

##### Notes

<a name="Note1" onclick="window.history.back()">1.</a> Sayama, H., 2019.&nbsp; [<i>Introduction to the Modeling and Analysis of Complex Systems</i>](https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Book%3A_Introduction_to_the_Modeling_and_Analysis_of_Complex_Systems_(Sayama)/05%3A_DiscreteTime_Models_II__Analysis/5.07%3A_5.7_Linear_Stability_Analysis_of_Discrete-Time_Nonlinear_Dynamical_Systems).&nbsp; 

<a name="Note2" onclick="window.history.back()">2.</a> This results in no loss of generality, either practically or theoretically, since any practical, numerically-produced estimate of an irrational root will actually always be a rational number; and every irrational can be approximated arbitrarily-closely by a convergent sequence of rationals (so as long as we can show that the limit of our sequence of rationals approaches $\sqrt c$, "we’re fine.")

##### References

<a name="Strang" onclick="window.history.back()">Strang</a>, G., 2006.&nbsp; <i>Linear Algebra and Its Applications, Fourth Edition</i>.&nbsp; Cengage Leaning, Boston.

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
