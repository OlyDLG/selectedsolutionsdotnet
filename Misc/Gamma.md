and a lemma: 
$$\frac{(2n)!}{n!n!} = \frac{2^{2n}\Gamma(n+1/2)}{\sqrt{\pi}\Gamma(n+1)},$$
where $\Gamma(x) = \int_0^{\infty}t^{x-1}e^{-t}dt $ is the [gamma function](https://en.wikipedia.org/wiki/Gamma_function); and 


satisfying the "factorial property": $\Gamma(x+1) = x\Gamma(x)$; together with $\Gamma(1) = 1$, for positive integer $n$ we have $\Gamma(n) = (n-1)!, (0! \equiv 1)$ or $\Gamma(n+1) = n!$.
$\displaystyle \frac{(2n)!}{n!n!} = \frac{\prod_{k=1}^n [2(k-\frac12)][2(k)]}{n!n!} = \frac{2^{2n}\prod_{k=1}^n(k-\frac12)n!}{n!n!} = \frac{2^{2n}\prod_{k=1}^n(k-\frac12)}{\Gamma(n+1)} = \frac{2^{2n}\Gamma(n+1/2)}{\Gamma(\frac12)\Gamma(n+1)},$ (where $\displaystyle \prod_{k=1}^n(k-\frac12) = \frac{\Gamma(n+\frac12)}{\Gamma(\frac12)}$ may be "discovered" by trial and shown by induction) $= \displaystyle \frac{2^{2n}\Gamma(n+1/2)}{\sqrt{\pi}\Gamma(n+1)}.$&nbsp; 

$\Gamma(x+1) - x\Gamma(x) = 0, \Gamma(1) = 1$

What if $\Gamma(x) = \lambda^x$?  $0 = \lambda^{x+1}-x\lambda^x = \lambda^x(\lambda-x) \implies \lambda = x$; then either $\Gamma(x) = \lambda^{\lambda}$ and $\Gamma(1) = 1 \implies \lambda^{\lambda} = 1 \implies \lambda = 1\text{ or }0$; or $\Gamma(x) = x^x$ and again the solution is 1 or 0: not very interesting.