<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>
$\definecolor{red}{RGB}{255,0,0}$
<style>
body {font-family: Palatino}
</style>
$\require{cancel}$

#### <center><i>Miscellaneous Theorems (with Proofs)
#### <center>&copy; 2017 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>www.selectedsolutions.net</i></center>

##### Preface

This is just a place for me to "bank" proofs of various "intermediate" level  theorems I've had occasion to figure out over the years; they don't necessarily have any relation to one another, and, though I figured them out without (conscious) reference to any other work, I make no claim of any kind of originality.&nbsp;  Also, "use at your own risk": no warranty, expressed or implied, etc., etc., etc.
<br><br>

##### An "n-choose-k" Identity 
$$\sum_{i=k}^{N \ge k} \left(\!
  \begin{array}{c}
    i \\
    k
  \end{array}
  \!\right) = 
  \left(\!
  \begin{array}{c}
    N+1 \\
    k+1
  \end{array}
  \!\right)$$

<b>Remark</b>: Just to be clear regarding the sum we're discussing, note that 
$$\sum_{i=k}^{N \ge k} \left(\!
  \begin{array}{c}
    i \\
    k
  \end{array}
  \!\right) = 
  \left(\!
  \begin{array}{c}
    k \\
    k
  \end{array}
  \!\right) + 
  \left(\!
  \begin{array}{c}
    k+1 \\
    k
  \end{array}
  \!\right) +  
  \left(\!
  \begin{array}{c}
    k+2 \\
    k
  \end{array}
  \!\right) + ... +
  \left(\!
  \begin{array}{c}
    N-1 \\
    k
  \end{array}
  \!\right) + 
  \left(\!
  \begin{array}{c}
    N \\
    k
  \end{array}
  \!\right)$$
  Thus the claim is that this sum equals
  $\left(\!
  \begin{array}{c}
    N+1 \\
    k+1
  \end{array}
  \!\right)$.
<br>  

<b>Proof</b>: By induction (though with a slightly different "look" from what the Reader might be used to): 
it's true for $N=k: \sum_{i=k}^k \left(\!
  \begin{array}{c}
    i \\
    k
  \end{array}
  \!\right) = \left(\!
  \begin{array}{c}
    k \\
    k
  \end{array}
  \!\right) = 1 = \left(\!
  \begin{array}{c}
    k+1 \\
    k+1
  \end{array}
  \!\right)~\forall k \in \mathbb{W}$<br>
  
Now assume true for $N \in \mathbb{W}$; we'll show this implies true for $N+1$:

$\sum_{i=k}^{N+1} \left(\!
  \begin{array}{c}
    i\\
    k
  \end{array}
  \!\right) = 
  \sum_{i=k}^{N} \left(\!
  \begin{array}{c}
    i\\
    k
  \end{array}
  \!\right) + 
  \left(\!
  \begin{array}{c}
    N + 1\\
    k
  \end{array}
  \!\right) = 
  \left(\!
  \begin{array}{c}
    N + 1\\
    k +1
  \end{array}
  \!\right) +
  \left(\!
  \begin{array}{c}
    N + 1\\
    k
  \end{array}
  \!\right)$ (this is where we've used the assumption that the identity is true for $N$)
  $=\displaystyle \frac{(N+1)!}{(k+1)!(N+1-(k+1))!} + \frac{(N+1)!}{k!(N+1-k)!} =
  \frac{(N+1)!\color{red}(N-k+1)}{(k+1)!(N-k)!\color{red}(N-k+1)} + \frac{(N+1)!\color{red}(k+1)}{k!(N+1-k)!\color{red}(k+1)} =
  \frac{(N+1)!(N-k+1+k+1)}{(k+1)!(N-k+1))!} = 
  \frac{(N+2)!}{(k+1)!(N+2-(k+1))!} =$
  $$\left(\!
  \begin{array}{c}
    N + 2\\
    k +1
  \end{array}
  \!\right) = 
  \left(\!
  \begin{array}{c}
    (N + 1) + 1\\
    k +1
  \end{array}
  \!\right)$$Q.E.D.
<br><br>

##### Generalization of the Irrationality of $\sqrt2$

<b>Remark</b>: the "problem" with the standard <i>reductio ad absurdum (RAA)</i> proof of the irrationality of $\sqrt2$ is that, in the interest of simplicity (I assume), it begs the questions: "Okay, so, which other (rational) numbers have irrational square-roots?&nbsp; Does one have to separately prove the (ir)rationality of any particular number one wants to know this about?&nbsp; And what about other roots?"&nbsp; Fortunately, the result generalizes rather readily:

$q^{\large{1/k}} = \displaystyle\frac mn,~ k, m, n \in \mathbb{Z}^+ \iff q = (m^{\large k}) / (n^{\large k})$, i.e., $q^{\large{1/k}} \in \mathbb{Q} \iff q$ is a ratio of $k$-th powers of integers.

<b>Proof</b>: (The crux of the matter is the same as that in the <i>RAA</i> proof for $2^{1/2}$&mdash;we may assume that $m, n$ are <i>relatively prime</i>, $m \perp n$, and then the fact that they have no common factors leads to a contradiction precisely when $q \ne (m^{\large k}) / (n^{\large k})$ for some $k, m, n \in \mathbb{Z}^+$&mdash;but, as we're trying to be general and comprehensive, we structure the proof somewhat differently, and we have to be a little more careful.)

Let $q^{\large{1/k}} = m/n,~k, m, n \in \mathbb{Z}^+$; without loss of generality, we may assume that $m, n$ are relatively prime, i.e., have no common factors (for if they do, start by cancelling these out and renaming).&nbsp; By the so-called <a href=http://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic>Fundamental Theorem of Arithmetic</a>, we may uniquely write $$m = \prod_{i=1}^{M \lt \infty} p_i^{\alpha_i},~~~n =\prod_{j=1}^{N \lt \infty} \rho _j ^{\beta_j}$$
where $M, N, \alpha_i, \beta_j \in \mathbb{Z}^+$ and $p_i$ and $\rho_j$ are, among themselves, distinct primes.&nbsp; Moreover, $\because m \perp n$ relatively prime,  (to be completed)
<br><br>

##### If $P:\mathbb{R}\rightarrow \mathbb{R} \setminus \{0\}, \in C^1,$ then $P(x+y) = P(x)P(y) \iff dP/dx \propto P$

<b>Proof</b>: $\Rightarrow$<br>
$\because P(x) \ne 0~\forall x$, we have, $\forall x$,

$0 = \frac d{dx}P(y) = \frac d{dx}\frac{P(x+y)}{P(x)} = \frac{P(x)P'(x+y)-P'(x)P(x+y)}{P^2(x)}$ (the assumption that $P \in C^1$ ensures that the derivative exists) $\implies P(x)P'(x+y) = P'(x)P(x+y) \implies \frac{P'(x+y)}{P(x+y)} = \frac{P'(x)}{P(x)}$, a function of $x$ only.&nbsp; Similarly (or simply by symmetry), $\frac{P'(x+y)}{P(x+y)} = \frac{P'(y)}{P(y)}$, a function of $y$ only.&nbsp; Thus $\frac{P'(x+y)}{P(x+y)} = \frac{P'}{P} = $ a constant, i.e., $dP/dx \propto P$.<br>

$\Leftarrow$<br>
Left to the reader.  (Hint/sketch: a fundamental theorem of ODE's ensures that the solution of $dP/dx = kP,~k$ constant, exists and is unique up to an additive constant; that ensures that the solution you should have learned&mdash;or should be able to derive using, e.g., the separation of variables technique&mdash;is the only solution; the desired implication is one of that solution's fundamental algebraic properties.)<br>
Q.E.D.
<br><br>

##### Given $a_0, b_0 \in \mathbb{N}, c \in \mathbb{R}^+,\rightarrow\lim_{n\rightarrow\infty} \frac{a_{n+1}}{b_{n+1}} = \frac{a_n+b_nc}{a_n+b_n} = \sqrt c$

Proof: The numerator and denominator of the given recursion are modeled by the 2-D discrete dynamical system $\begin{bmatrix}
    a_{n+1} \\
    b_{n+1}
  \end{bmatrix} = 
  \begin{bmatrix}
    1  &  c \\
    1  &  1
  \end{bmatrix}
  \begin{bmatrix}
    a_{n} \\
    b_{n}
  \end{bmatrix} = $ (after diagonalization)
$  \begin{bmatrix}
    \sqrt c  & -\sqrt c \\
       1  &  1
  \end{bmatrix}
  \begin{bmatrix}
    1+\sqrt c & 0 \\
    0 & 1-\sqrt c
  \end{bmatrix}
  \begin{bmatrix}
    1  & \sqrt c \\
    -1  & \sqrt c  
  \end{bmatrix}(1+\sqrt c - (1-\sqrt c))^{-1}
  \begin{bmatrix}
    a_{n} \\
    b_{n}
  \end{bmatrix} =
   S \begin{bmatrix}
    \lambda_+ & 0 \\
    0 & \lambda_-
  \end{bmatrix} S^{-1}
  \begin{bmatrix}
    a_{n} \\
    b_{n}
  \end{bmatrix},$ where $S = \begin{bmatrix}
    \sqrt c  & -\sqrt c \\
       1  &  1
  \end{bmatrix}, S^{-1} = $ its inverse, and $\lambda_{\pm} = 1 \pm \sqrt c$ are the eigenvalues of $\begin{bmatrix}
       1  &  c \\
       1  &  1
  \end{bmatrix}.~$  Induction gives us that 
$  \begin{bmatrix}
    a_{n} \\
    b_{n}
  \end{bmatrix} = S\begin{bmatrix}
    \lambda_+^n & 0 \\
    0 & \lambda_-^n
  \end{bmatrix} S^{-1}
  \begin{bmatrix}
    a_0 \\
    b_0
  \end{bmatrix} = 
  \begin{bmatrix}
    \sqrt c  & -\sqrt c \\
       1  &  1
  \end{bmatrix}
  \begin{bmatrix}
    \lambda_+^n & 0 \\
    0 & \lambda_-^n
  \end{bmatrix}
    \begin{bmatrix}
    1  & \sqrt c \\
    -1  & \sqrt c  
  \end{bmatrix}(2\sqrt c)^{-1}
  \begin{bmatrix}
    a_0 \\
    b_0
  \end{bmatrix} = 
  \frac12   \begin{bmatrix}
    \lambda_+^n\sqrt c & -\lambda_-^n\sqrt c\\
    \lambda_+^n & \lambda_-^n
  \end{bmatrix}
  \begin{bmatrix}
    1/\sqrt c & 1\\
    -1/\sqrt c & 1
  \end{bmatrix} 
  \begin{bmatrix}
    a_0 \\
    b_0
  \end{bmatrix}= 
$
<br>
$\frac12
\begin{bmatrix}
    \lambda_+^n + \lambda_-^n & (\lambda_+^n -\lambda_-^n)\sqrt c \\
    (\lambda_+^n -\lambda_-^n)/\sqrt c & \lambda_+^n + \lambda_-^n
  \end{bmatrix} 
    \begin{bmatrix}
    a_0 \\
    b_0
  \end{bmatrix}=\frac12
\begin{bmatrix}
    a_0(\lambda_+^n + \lambda_-^n) + b_0(\lambda_+^n -\lambda_-^n)\sqrt c \\
    a_0(\lambda_+^n -\lambda_-^n)/\sqrt c + b_0(\lambda_+^n + \lambda_-^n)
  \end{bmatrix} 
$ and thus $$\frac{a_n}{b_n} = \frac{a_0(\lambda_+^n + \lambda_-^n) + b_0(\lambda_+^n -\lambda_-^n)\sqrt c}{a_0(\lambda_+^n -\lambda_-^n)/\sqrt c + b_0(\lambda_+^n + \lambda_-^n)} = \frac{a_0(1 + (\lambda_-/\lambda_+)^n)\sqrt c + b_0(1 -(\lambda_-/\lambda_+)^n)c}{a_0(1 -(\lambda_-/\lambda_+)^n) + b_0(1 + (\lambda_-/\lambda_+)^n)\sqrt c}.$$

(Check and complete)
<br><br>

Let $X$ be a Poisson distributed random variable with mean $\mu$, let $c$ be the cost of an occurrence of $X$, and suppose we want to "self-insure" against losses due to the occurrence of $X$ by depositing into an account a fixed amount, $\kappa$, per period over which $\mu$ is given (e.g., one year), and that we also pay $c$ from that account each time $X$ occurs.  Give the resulting probability distribution of the per-period credit/debit, $d$, to the account, and show that $\kappa = c\mu$ (i.e., simply the expected cost per period) results in the expected value of $d$ being $0$, i.e., $c\mu$ is the "long-term, break-even self-insurance premium." 

__Pf__: To help us understand the sums involved, here, in tabular form, are the relevant probability distributions:

  $X=x$ | 0 | 1 | 2 | 3 | ... | $n$ | ...
  ---|---|---|---|---|---|---|---
  $d$ | $\kappa$ | $\kappa - c$ | $\kappa - 2c$ | $\kappa - 3c$ | ... | $\kappa-nc$ | ...
  $P(x) = P(d)$ | $e^{-\mu}$ | $\mu e^{-\mu}$ | $\mu^2 e^{-\mu}/(2!)$ | $\mu^3 e^{-\mu}/(3!)$ | ... | $\mu^n e^{-\mu}/(n!)$ | ...
  
Thus $\displaystyle E(d) = \kappa e^{-\mu} + (\kappa-c)\mu e^{-\mu} + (\kappa-2c)\frac{\mu^2e^{-\mu}}{2!} + (\kappa-3c)\frac{\mu^3e^{-\mu}}{3!} + ... + (\kappa-nc)\frac{\mu^ne^{-\mu}}{n!} + ... =$

$\displaystyle \kappa\left[1 + \mu + \frac{\mu^2}{2!} + \frac{\mu^3}{3!} +...+ \frac{\mu^n}{n!} + ... \right]e^{-\mu} - c\mu\left[1 + \frac{2\mu}{2!} + \frac{3\mu^2}{3!} + ... + \frac{n\mu^{n-1}}{n!} + ... \right]e^{-\mu} = $

$\displaystyle \kappa e^{\mu}e^{-\mu} - c\mu\left[1 + \mu + \frac{\mu^2}{2!} + ... + \frac{\mu^{n-1}}{(n-1)!} + ... \right]e^{-\mu} = $ 

$\kappa - c\mu e^{\mu}e^{-\mu} = \kappa - c\mu$ 

$\therefore \kappa = c\mu \implies E(d) = 0.~~\blacksquare$ 
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>

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
