<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>
$\definecolor{red}{RGB}{255,0,0}$
<style>
body {font-family: Palatino}
</style>
#### <center><i>Global Radial Symmetry of Collinear Coefficient<br>Polynomial Mandelbrot ("Polybrot") Sets</i>
#### <center>&copy; 2017 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>www.selectedsolutions.net

<br>
## <b>Note to the adequately-prepared student</b>: Omitted steps are an invitation for the Reader to supply them.

#### Introduction
$~~~~~$Unless you're a geometer (or, perhaps, an algebraist), probably the last thing you notice about the "traditional" Mandelbrot set (see, e.g., http://mathworld.wolfram.com/MandelbrotSet.html or http://en.wikipedia.org/wiki/Mandelbrot_set) is that it appears to be symmetric about the $x$-axis: whatever color is assigned to $z=x+iy$, also appears to be assigned to $\bar{z}=x-iy$; this aspect of "the" M-set never struck me until I started generating M-sets of higher-order polynomials (I shall clarify what I mean by this in due course).&nbsp; But then it did, because I quickly discovered&mdash;empirically&mdash;that higher-order polynomials (appear to) produce M-sets with analogous symmetry.&nbsp; For example, third-order polynomials (appear to) produce M-sets with [two axes of symmetry](https://www.facebook.com/photo.php?fbid=137840015143&set=a.137480960143.227005.876460143&type=3&l=2c6cafb62e&size=604%2C483), fourth-order polynomials (a.t.) produce M-sets with [three axes of symmetry](https://www.facebook.com/photo.php?fbid=137840010143&set=a.137480960143.227005.876460143&type=3&l=2c6cafb62e&size=604%2C483), etc., i.e., $n^{th}$-order polynomials (a.t.) produce M-sets with $n-1$ axes of symmetry.&nbsp; I've been careful to say that they "appear to" have this property because looks can be deceiving, especially when dealing with an object, most of the "structure" of which can't be "seen" at any given magnification&mdash;the only rigorous way to verify the apparent relationship is to provide a proof, independent of any specific examples.&nbsp; Furthermore, the pattern as I've stated it is actually too general: it turns out that $n^{th}$-order polynomials produce M-sets with such symmetry if and only if all their coefficients are <i>collinear</i>.&nbsp; The purpose of this essay is to "expose" a proof of this claim.

$~~~~~$Let us start with a brief recap of how colorful pictures of the traditional M-set (TMS) are created.&nbsp; Starting with the polynomial function $f(z) = z^2 + c, z~\&~c \in \mathbb{C}$, we evaluate it at $z = 0 = f_0$, which gives us $c = f_1(0)$, then evaluate $f(f_1(0)) = f(z=c) = c^2 + c = f_2(0)$, then evaluate $f(f_2(0)) = f(c^2 + c) = (c^2 + c)^2 + c = c^4 + 2c^3 + c^2 + c = f_3(0)$, etc.: $f_n(0)$, which, by an "abuse of notation" reflecting the importance of $c$, we will henceforth write as $f_n(c)$,  represents $f$ composed with itself $n-1$ times (following the initial evaluation at $z=0$).&nbsp; The TMS consists of those $c$ such that $\lim_{n \rightarrow \infty} \|f_n\| \lt \infty$, i.e., $\|f_n\|$ remains bounded as $n \rightarrow \infty.~$ (To see that this defines a non-empty set, simply consider $c=0$.)&nbsp; Computationally, of course, one can't iterate forever to guarantee that $\|f_n\|$ remains bounded for any particular (non-zero) $c$; but a key theorem (see, e.g., Holmgren, 1996) states that if $\exists n :\|f_n\| \ge 2$, then $\lim_{n \rightarrow \infty} \|f_n\|$ diverges.&nbsp; So what one does is iterate composition of $f$ with itself, keeping track of $n$, until either: a) $\|f_n\| \ge 2$ (equivalently, $\|f_n\|^2 = f_n\bar{f}_n \ge 4$), or b) $n = $ some pre-selected cut-off, say $n =$ 25, 50, or 100: the first value of $n$ when one of these conditions is met is stored "at" $c$'s grid-point, and each value of $n$ is mapped to some color.&nbsp; What results is a monochrome "center," corresponding to all the $c$ that didn't meet the "$\ge 2$" divergence criterion within the cut-off number of iterations&mdash;a(n approximate) "graph" of the TMS&mdash;surrounded by "color-fields" representing the differing rapidities with which various regions of $c$ scamper off to infinity.

$~~~~~$Note that in $\mathbb{C}$, as briefly mentioned above, "symmetry with respect to the $x$-axis" is equivalent to "invariance with respect to conjugation": whatever the "fate" of $c$, must also be the fate of $\bar{c}.~$ Moreover, since we're not actually iterating to infinity, but we appear to have conjugate invariance (c.i.) anyway, <i>regardless of the number of iterates we actually do take</i> (if you don't believe me, code up the algorithm&mdash;I use Python, with NumPy for the arrays and MatPlotLib for the graphics&mdash;and and check for yourself), our conjecture is that we have c.i. <i>for all </i> $n.~$ In other words:$$\forall~n,~\|f_n(c)\| = \|f_n(\bar{c})\|~\text{or, equivalently, }\|f_n(c)\|^2 = \|f_n(\bar{c})\|^2.$$

Leveraging the "work" we already did above, in order to develop some "respect" for this claim, let's write out, in full glory, $\|f_n(c)\|^2$ for some early iterates, i.e., small $n$, of the TMS.&nbsp; We have:<br>

$~~~\|f_1(c)\|^2 = \|c\|^2 = c\bar{c}$<br>
$~~~\|f_2(c)\|^2 = \|c^2 + c\|^2 = (c^2 + c)(\bar{c}^2 + \bar{c}) = \|c\|^4 + \bar{c}c^2 + c\bar{c}^2 + \|c\|^2 = \|c\|^4 + 2\Re(\bar{c}c^2)  + \|c\|^2~(\Re = \text{real part of})$<br>
$~~~\|f_3(c)\|^2 = (c^4 + 2c^3 + c^2 + c)(\bar{c}^4 + 2\bar{c}^3 + \bar{c}^2 + \bar{c}) =~...$<br>

Ah, well, you get the picture: the expressions for $\|f_n(c)\|^2$ which we've charged ourselves with establishing as $= \|f_n(\bar{c})\|^2$ <i>for all</i> $n$, get <i>really</i> complicated <i>really</i> fast!&nbsp; (Lest one think that the problem is that we've chosen to try to establish that the square-magnitudes are equal instead of trying to show that the magnitudes are equal, think: what is the expression for the magnitude itself?)

$~~~~~$At this point perhaps the Reader has noticed the algebraic symmetry in the expressions we have so far, i.e.,<br>

$~~~\|f_1(c)\|^2 = \|c\|^2 = c\bar{c} = \|\bar{c}\|^2 ~(\because c = \bar{\bar{c}}) = \|f_1(\bar{c})\|^2$<br>
$~~~\|f_2(c)\|^2 = \|c\|^4 + \bar{c}c^2 + c\bar{c}^2 + \|c\|^2 = \|\bar{c}\|^4 + c\bar{c}^2 + \bar{c}c^2 + \|\bar{c}\|^2 = \|f_2(\bar{c})\|^2$<br>
$~~~\|f_3(c)\|^2 = (c^4 + 2c^3 + c^2 + c)(\bar{c}^4 + 2\bar{c}^3 + \bar{c}^2 + \bar{c}) = (\bar{\bar{c}}^4 + 2\bar{\bar{c}}^3 + \bar{\bar{c}}^2 + \bar{\bar{c}})(\bar{c}^4 + 2\bar{c}^3 + \bar{c}^2 + \bar{c}) = \|f_3(\bar{c})\|^2$<br>

and indeed, the identity $\bar{\bar{z}} = z$ is crucial to establishing the c.i. of the TMS...but, anticipating the direction in which we want to head, we have to be a bit careful: what if, instead of $f(z) = z^2 + c$, we have $f(z) = iz^2 + c$?&nbsp; In this case we have:<br>

$~~~f_1(c) = i0^2 + c = c \therefore \|f_1(c)\|^2 = c\bar{c} = \|f_1(\bar{c})\|^2$, so far so good, but<br>
$~~~f_2(c) = ic^2 + c \therefore \|f_2(c)\|^2 = (ic^2 + c)(-i\bar{c}^2 + \bar{c}) = \|c\|^4 + i\bar{c}c^2 - ic\bar{c}^2 +\|c\|^2~$ whereas<br>
$~~~f_2(\bar{c}) = i\bar{c}^2 + \bar{c} \implies  \|f_2(\bar{c})\|^2 = (i\bar{c}^2 + \bar{c})(-ic^2 + c) = \|c\|^4 - i\bar{c}c^2 + ic\bar{c}^2 + \|c\|^2 \therefore$<br>
$~~~\|f_2(c)\|^2 - \|f_2(\bar{c})\|^2 = (i\bar{c}c^2 - ic\bar{c}^2) - (-i\bar{c}c^2 + ic\bar{c}^2) = 2i(\bar{c}c^2 - c\bar{c}^2) = (2i)^2\Im(\bar{c}c^2) = -2\|c\|^2\Im(c)$,
($\Im = $imaginary part of)<br>

i.e., for this $f$:<br> $$\|f_2(c)\|^2 - \|f_2(\bar{c})\|^2 = 0 \iff \Im(c) = 0,$$ 
i.e., on the real axis&mdash;this $f$ is c.i. "effectively nowhere" (meaning, nowhere where it counts).<br>

$~~~~~$Clearly we're not going to be able establish c.i. for arbitrarily high iterates of arbitrary starting polynomials (even if we restrict ourselves, as necessary, to starting polynomials which at least have c.i.): even the low-number  iterates of the simplest polynomial get too complicated too quickly.

###### Lemma

$~~~~~$Given $p(z \in \mathbb{C}) = \sum_{n=0}^Na_nz^n,~ a_n \in \mathbb{C}~\forall n,~a_N \ne 0$,$$\|p(z)\|^2 = \|p(\bar{z})\|^2 \iff \forall n,~\Im(a_n/a_N) = 0, \text{i.e., }a_n/a_N \in \mathbb{R}$$.

Proof: $\Leftarrow: \Im(a_n/a_N) = \Im(\|a_n\|/\|a_N\|\exp[i(\arg{a_n}-\arg{a_N})] = \|a_n\|/\|a_N\|\sin(\arg{a_n}-\arg{a_N}) = 0~\forall n \implies$ either<br>$a_n = 0$ (so such terms contribute nothing to either magnitude), or $\sin(\arg{a_n}-\arg{a_N}) = 0 \implies \arg{a_n}-\arg{a_N} = k\pi, k \in \{0,1\},$ i.e., all the $a_n$ are collinear.&nbsp; Thus we may rotate the co-ordinate system such that all the coefficients are real, i.e., multiply $p(z)$ by $e^{-i\arg{a_N}}$&mdash;which, having unit magnitude, also preserves all magnitudes&mdash;and thereby, w.l.o.g., we are reduced to the case of all the $a_n \in \mathbb{R}.~$ In that case, the rest of the proof&mdash;in this direction of implication&mdash;is "ABT": all-but-trivial; we have:<br>
$~~~\|p(z)\|^2 = p(z)\overline{p(z)} = \left[\sum a_nz^n \right]\overline{\left[\sum a_mz^m\right]} = \left[\sum a_nz^n \right]\left[\sum \bar{a}_m\bar{z}^m\right] = \left[\sum \bar{a}_n\bar{\bar{z}}^n \right]\left[\sum a_m\bar{z}^m\right] (\because a_n \in \mathbb{R}) $<br>
$~~~= \overline{\left[\sum a_n\bar{z}^n \right]}\left[\sum a_m\bar{z}^m\right] = \overline{p(\bar{z})}p(\bar{z}) = \|p(\bar{z})\|^2$.

(In other words, if all the coefficients are real, the implication is ABT; but the important aspect of them all being real is that they are thus collinear; thus if they are not real, but are nevertheless collinear, they can all be made real, simultaneously, by a single, suitably chosen, rotation.)

$\Rightarrow$: In this direction of implication, we start out with $\|p(z)\|^2 = \|p(\bar{z})\|^2 \implies \|p(z)\|^2 - \|p(\bar{z})\|^2 = 0$ and proceed as follows:<br>
$~~~0 = \|p(z)\|^2 - \|p(\bar{z})\|^2 = p(z)\overline{p(z)} - p(\bar{z})\overline{p(\bar{z})} = \left[\sum_0^N a_mz^m\right]\overline{\left[\sum_0^Na_nz^n\right]} - \left[\sum_0^Na_m\bar{z}^m\right]\overline{\left[\sum_0^Na_n\bar{z}^n\right]}$<br>

$~~~= \left[\sum_0^N a_mz^m\right]\left[\sum_0^N\bar{a}_n\bar{z}^n\right] - \left[\sum_0^Na_m\bar{z}^m\right]\left[\sum_0^N\bar{a}_n z^n\right]$<br>

$~~~= \sum_{m=n=0}^N a_m\bar{a}_n z^m\bar{z}^n - \sum_{m=n=0}^N \bar{a}_m a_n \bar{z}^m z^n + \sum_{n<m=1}^N a_n\bar{a}_mz^n\bar{z}^m + \sum_{m<n=1}^N a_n\bar{a}_mz^n\bar{z}^m$<br>$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~- \sum_{n<m=1}^N a_n\bar{a}_m\bar{z}^n z_m - \sum_{m<n=1}^N a_n\bar{a}_m\bar{z}^n z^m~$ (here, we've "strategically" expanded the sums)<br>

$~~~= 0 + \sum_{n<m=1}^N a_n\bar{a}_mz^n\bar{z}^m + \sum_{n<m=1}^N a_m\bar{a}_n z^m\bar{z}^n -
\sum_{n<m=1}^N a_n\bar{a}_m\bar{z}^n z^m - \sum_{n<m=1}^N a_m\bar{a}_n\bar{z}^m z^n~$ (here, we swapped the summation indices $m$ and $n$ in the second from last and last sums)<br>

$~~~= \sum_{n<m=1}^N \left[a_n \bar{a}_m (z^n \bar{z}^m - \bar{z}^n z^m) + \bar{a}_n a_m (z^m \bar{z}^n - \bar{z}^m z^n)\right] = 2i\sum_{n<m=1}^N \left[a_n \bar{a}_m \Im(z^n \bar{z}^m) + \bar{a}_n a_m \Im(z^m \bar{z}^n)\right]$<br>

$~~~= 2i\sum_{n<m=1}^N\|z\|^{n+m}\left[a_n\bar{a}_m\Im(e^{i(n-m)\arg z}) + \bar{a}_n a_m \Im(e^{i(m-n)\arg z}) \right]$<br>

$~~~=2i\sum_{n<m=1}^N\|z\|^{n+m}(a_n\bar{a}_m - \bar{a}_n a_m) \sin[(n-m)\arg z].$<br>

For this to equal 0 for all $z$, as assumed, $a_n\bar{a}_m - \bar{a}_n a_m = 2i\Im(a_n\bar{a}_m) = 0~\forall m, n \in {0,...,N} \implies $<br>
$~~~\|a_n\|\|a_m\|\sin(\arg{a_n}-\arg{a_m}) = 0 \implies$ at least one of: $a_n=0~\forall~m, n \in {}$
<br>
<br>
<br>
#### References

Holmgren, R. A., 1996.&nbsp;  <i>A First Course in Discrete Dynamical Systems, 2nd Ed.</i>&nbsp; Springer, New York.&nbsp; pg. 200.