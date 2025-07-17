<style>
body {font-family: Palatino}
</style>
## <center><i>The Fibonacci Difference Equation: Derivation, Solution, and Commentary<br>(Full Version)</i>
#### <center>&copy; 2016, 2025 by 
#### <center>David Lawrence Goldsmith
#### <center>for
## <center>[SelectedSolutionsDotNet](https://olydlg.github.io/selectedsolutionsdotnet/)

$~~~~$The famous Fibonacci sequence (named for an obscure-in-origin contraction of a name of the Thirteenth Century Italian mathematician Leonardo of Pisa, c. 1175 - c. 1250) is defined such that the $n^{\text{th}}$ element of the sequence, $F_n$, is the sum of the previous two elements, $F_{n-1}, F_{n-2}$, i.e., $$F_n = F_{n-1} + F_{n-2},$$with $F_0 = F_1 =1.$ Thus the first ten elements (including the so-called <i>initial conditions</i>) of the sequence are: $1, 1, 2, 3, 5, 8, 13, 21, 34, 55.$  ("Exercise 0": using the definition, calculate the next ten elements of the sequence, $F_{10}$ through $F_{19}$.)

$~~~~$Apart from the definition and the fact that the sequence is strictly increasing after the first element, this sequence looks rather random, in the sense that, if one were to ask what the $111^{\text{th}}$ element is, at first glance it would seem that the only way to find the answer would be to calculate all the Fibonacci numbers up through the $110^{\text{th}}$. This is in contrast to more familiar sequences, such as <i>arithmetic sequences</i>, which have the formula $a_n = a_0 + nd$, where $d$ is the constant difference between any two consecutive elements; and <i>geometric sequences</i>, which have the formula $g_n = g_0r^n$, $r$ being the the constant ratio between any two consecutive elements. For these, as well as many other examples, if one wants the $111^{\text{th}}$ element, all one has to do is plug $n=111$ into the the formula: $a_{111} = a_0 + 111d$, $g_{111} = g_0r^{111}$, respectively. (Of course, it is assumed that specific values for $a_0$ and $d$ (resp. $g_0$ and $r$) have been either given or determined from other elements of the sequence.)

$~~~~$It turns out, however, that there is a formula for $F_n$ in terms of $n$, but it is rather surprising, and not nearly so simple as the formula for arithmetic sequences and geometric sequences, and thus it is non-trivial to find it. To do so, we shall learn something about a less-taught area of mathematics called <i>difference equations</i> (not to be confused with their much more ubiquitously-taught "cousins," differential equations).

$~~~~$Difference equations are equations involving functions of elements of an unknown sequence&mdash;the <i>solution</i> of the difference equation&mdash;as well as, sometimes, the sequence <i>index</i>, i.e., (typically) $n$. For example, the difference equation for an arithmetic sequence is simply: $$a_n = a_{n-1} + d,$$or, equivalently,$$a_n - a_{n-1} = d.$$(It is this last form that gives difference equations their name: commonly&mdash;but far from necessarily&mdash;one tries to put difference equations in the form $$a_n - a_{n-1} = \text{difference between the }n^{\text{th}}~\text{and } (n-1)^{\text{th}}~\text{elements} = f(a_{i \ne n, n-1}; n)$$i.e., one tries to express the <i>difference</i> between consecutive elements as a function of other elements and the index; for arithmetic sequences, $f(a_i; n) = d$, the constant function, i.e., the difference between consecutive elements depends on neither the index nor other elements. Often, but not always, expressing the equation in this "standard" form facilitates solving it.)  

$~~~~$Note that the defining equation for the Fibonacci sequence is already a difference equation (though not in standard form, which would be $F_n - F_{n-1} = F_{n-2}$). In this case, however, standard form won't really help us; rather, the form we will want is: $$F_n - F_{n-1} - F_{n-2} = 0.$$

$~~~~$But first: difference equations share many attributes with their differential equation cousins. Both have a crucial characteristic called the <i>order</i> of the equation, which governs how many "auxiliary" (i.e., <i>boundary</i> or <i>initial</i>) "conditions" are necessary for the difference equation to have a <i>unique</i> solution. For difference equations, the order is the difference between the highest and the lowest indices occurring in the equation. So, for arithmetic sequences, this is $n - (n-1) = 1$: arithmetic sequence difference equations are <i>first</i> order, requiring one auxiliary condition for a unique solution. The order of the Fibonacci sequence difference equation, on the other hand, is $n - (n-2) = 2$: the Fibonacci sequence difference equation is <i>second</i> order, requiring two auxiliary conditions for a unique solution. The auxiliary conditions that give the Fibonacci sequence are $F_0 = F_1 = 1$ (other conditions are possible/allowable, and "make" the Fibonacci sequence difference equation "produce" other, Fibonacci-like&mdash;but not Fibonacci&mdash;sequences).

$~~~~$Another attribute of both difference equations and differential equations is the importance to their solution of the (general) exponential function, $f(x) = a^x,~a \ne 0$ or $1.$ However, unlike for the elementary first-order differential equation, $dy/dx = y$, whose solution $y = y_0e^x$ can be discovered by an analytical technique called "separation of variables," no analogous technique (to the author's knowledge) exists for difference equations. Rather, we appeal to: a) the rate of growth of the Fibonacci sequence (which one can better appreciate by graphing it, for example); and b) the other similarities between difference equations and differential equations (and the underlying reason for these similarities, which is "beyond our present scope") to motivate the following GUESS for a solution: $$F_n = cG^n,$$where $c$ and $G$ are constants to be determined, and see where this guess gets us. (To the student who is used to being shown explicit methods for arriving at solutions in math, guessing may seem "unmathematical"; but for difference equations and differential equations alike, the "analytical" methods we do have for "deriving" solutions often provide spurious solutions either instead of or in addition to valid solutions. In that sense, all we really have are more or less complicated ways of generating educated guesses, or what I like to call "candidate solutions," which we must <i>always check</i> anyway, by substituting back into the original equation and verifying&mdash;or refuting&mdash;that the candidate(s) make the original equation a true statement.)

$~~~~$Accordingly, we substitute our guess into the Fibonacci sequence difference equation in the last-given form above:$$F_n - F_{n-1} - F_{n-2} = 0 = cG^n - cG^{n-1} - cG^{n-2}.$$ Neither $c$ nor $G$ can equal $0$ (why?) so we may "divide through" by $cG^{n-2}$ yielding:$$G^{n-(n-2)} - G^{(n-1)-(n-2)} - G^{(n-2)-(n-2)} = G^2 - G - 1 = 0.$$This quadratic equation in $G$ has solutions:$$G = \frac{-(-1) \pm \sqrt{(-1)^2 - 4(1)(-1)}}{2(1)} = \frac{1 \pm \sqrt5}{2}.$$Thus we have two "candidate solutions": $\displaystyle F_p(n) = c_p\left(\frac{1+\sqrt5}{2}\right)^n$ and $\displaystyle F_m(n) = c_m\left(\frac{1-\sqrt5}{2}\right)^n.$ (The mathematically "well-read" reader may recognize our candidate $G$'s as the so-called "Golden Ratio" or "Section" and its reciprical).

$~~~~$Now it turns out that, because our difference equation has the property of being <i>linear</i>, any sum of candidate solutions is itself a candidate solution. So we consolidate our candidates into one guess:$$F_n = c_p\left(\frac{1+\sqrt5}{2}\right)^n + c_m\left(\frac{1-\sqrt5}{2}\right)^n.$$But before we substitute this into the original Fibonacci sequence difference equation to check, we use the auxiliary conditions to solve for $c_p$ and $c_m$; we require that:<br>
  $\displaystyle F_0 = c_p\left(\frac{1+\sqrt5}{2}\right)^0 + c_m\left(\frac{1-\sqrt5}{2}\right)^0 =  c_p(1) + c_m(1) = c_p + c_m = 1$ and<br>
  $\displaystyle F_1 = c_p\left(\frac{1+\sqrt5}{2}\right)^1+ c_m\left(\frac{1-\sqrt5}{2}\right)^1 = c_p\left(\frac{1+\sqrt5}{2}\right) + c_m\left(\frac{1-\sqrt5}{2}\right) = 1$,<br>
and use the substitution method to solve for $c_p$ and $c_m$:<br>
$\displaystyle \left(\frac{1+\sqrt5}{2}\right)c_p + \left(\frac{1-\sqrt5}{2}\right)(1-c_p) = 1 \Rightarrow \frac{1+\sqrt5 - 1 +\sqrt5}{2}c_p = 1 - \frac{1-\sqrt5}{2} \Rightarrow $ $$c_p = \frac{1}{\sqrt5}\frac{1+\sqrt5}{2}$$ $\displaystyle \Rightarrow c_m = 1 - \frac{1}{\sqrt5}\frac{1+\sqrt5}{2} = \frac{2\sqrt5 - 1 - \sqrt5}{2\sqrt5} \Rightarrow$
$$c_m = -\frac{1}{\sqrt5}\frac{1-\sqrt5}{2}.$$

$~~~~$So our final candidate solution&mdash;our candidate for the formula for the $n^{\text{th}}$ Fibonacci number in terms of $n$&mdash;is:
$$F_n = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)\left(\frac{1+\sqrt5}{2}\right)^n - \left(\frac{1-\sqrt5}{2}\right)\left(\frac{1-\sqrt5}{2}\right)^n\right] =$$
$$\boxed{\frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{n+1} - \left(\frac{1-\sqrt5}{2}\right)^{n+1}\right]}
$$

Now we check/confirm:

$\displaystyle F_0 = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{(0+1)} - \left(\frac{1-\sqrt5}{2}\right)^{(0+1)}\right] = \frac{1+\sqrt5-1+\sqrt5}{2\sqrt5} = 1~~\checkmark$<br>

$\displaystyle F_1 = \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{(1+1)} - \left(\frac{1-\sqrt5}{2}\right)^{(1+1)}\right] = \frac{1 + 2\sqrt5 +5 - 1 + 2\sqrt5 - 5}{4\sqrt5} = 1~~\checkmark$<br>

And now for the hard one&mdash;we need to show that:<br>

$F_n - F_{n-1} - F_{n-2} = \displaystyle \frac{1}{\sqrt5}\left[\left(\frac{1+\sqrt5}{2}\right)^{n+1} - \left(\frac{1-\sqrt5}{2}\right)^{n+1} - \left(\frac{1+\sqrt5}{2}\right)^{n} + \left(\frac{1-\sqrt5}{2}\right)^{n} - \left(\frac{1+\sqrt5}{2}\right)^{n-1} + \left(\frac{1-\sqrt5}{2}\right)^{n-1}\right] = 0,$<br>which is only true if the factor inside the square brackets $=0$. Factoring it suitably and using the fact that $\displaystyle \left(\frac{1+\sqrt5}{2}\right)^{-1} = \frac{\sqrt5-1}{2} \Rightarrow \left(\frac{1-\sqrt5}{2}\right)^{-1} = -\frac{1+\sqrt5}{2}$, we see that said factor equals:<br>
$\displaystyle \left(\frac{1+\sqrt5}{2}\right)^n\left[\frac{1+\sqrt5}{2} - 1 - \left(\frac{1+\sqrt5}{2}\right)^{-1}\right] - \left(\frac{1-\sqrt5}{2}\right)^n\left[\frac{1-\sqrt5}{2} - 1 - \left(\frac{1-\sqrt5}{2}\right)^{-1}\right] = $<br>
$\displaystyle \left(\frac{1+\sqrt5}{2}\right)^n\left(\frac{1+\sqrt5 - 2 -\sqrt5 + 1}{2}\right) - \left(\frac{1-\sqrt5}{2}\right)^n\left(\frac{1-\sqrt5 - 2 + 1 + \sqrt5}{2}\right) = 0$ for all $n.~~\checkmark$<br>("Exercise 1": use the formula to verify that it is at least valid for $n=3, 4, 5$, i.e., calculate $F_n$ using the formula for these three values of $n$. Hint: you should get $F_3 = 2$, $F_4 = 3$, and...what for $F_5$?)

$~~~~$Take a moment to contemplate this result: again, the Fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … Because one is always adding an integer to an integer, all the Fibonacci numbers are integers. Despite this, the formula for the $n^{\text{th}}$ Fibonacci number involves the square root of 5, in two different sums, each raised to the $n^{\text{th}}$ power! Almost miraculously (or so it might seem), somehow, the integer portions of those “powered sums” are always “zeroed-out” by each other, and the sum of the $\sqrt5$ terms always “manages” to equal the $n^{\text{th}}$ Fibonacci number times $\sqrt5$&mdash;so that the $\sqrt5$ cancels with the factor of $\frac{1}{\sqrt5}$ out in front of the whole expression&mdash;leaving just the $n^{\text{th}}$ Fibonacci number: really quite remarkable!

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
