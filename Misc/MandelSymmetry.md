<style>
body {font-family: Palatino}
</style>
#### <center><i>Global Radial Symmetry of Polynomial Mandelbrot Sets</i>
#### <center>&copy; 2017 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>www.selectedsolutions.net

<br>
<b>Note to the adequately-prepared student</b>: Omitted steps are an invitation to the Reader to supply them.

#### Introduction
$~~~~~$Unless you're a geometer (or, perhaps, an algebraist), probably the last thing you notice about the "traditional" Mandelbrot set (see, e.g., http://mathworld.wolfram.com/MandelbrotSet.html or http://en.wikipedia.org/wiki/Mandelbrot_set) is that it appears to be symmetric about the $x$-axis: whatever color is assigned to $z=x+iy$, also appears to be assigned to $\bar{z}=x-iy$; this aspect of "the" M-set never struck me until I started generating M-sets of higher-order polynomials (I shall clarify what I mean by this in due course).&nbsp; But then it did, because I quickly discovered&mdash;empirically&mdash;that higher-order polynomials (appear to) produce M-sets with analogous symmetry.&nbsp; For example, third-order polynomials (appear to) produce M-sets with two (actually four) axes of symmetry, fourth-order polynomials (a.t.) produce M-sets with three axes of symmetry, etc., i.e., $n^{th}$-order polynomials (a.t.) produce M-sets with $n-1$ axes of symmetry (actually $2(n-1)$ if $n$ is odd, so that $n-1$ is even).&nbsp; (I've been careful to say that they "appear to" have this property because looks can be deceiving, especially when dealing with an object, most of the "structure" of which can't be "seen" at any given magnification; the only rigorous way to verify the apparent relationship is to provide a proof, and doing such is, indeed, the ultimate purpose of this essay.)

$~~~~~$Let us start with a brief recap of how colorful pictures of the traditional M-set (TMS) are created.&nbsp; Starting with the polynomial function $f(z) = z^2 + c, z~\&~c \in \mathbb{C}$, we evaluate it at $z = 0 = f_0$, which gives us $c$, then evaluate $f(c) = c^2 + c = f_1$, then evaluate $f(c^2 + c) = (c^2 + c)^2 + c = c^4 + 2c^3 + c^2 + c = f_2$, etc.; $f_n$ represents $f$ composed with itself $n$ times following the initial evaluation at $z=0.$ The TMS consists of those $c$ such that $\lim_{n \rightarrow \infty} \|f_n\| \lt \infty$, i.e., $\|f_n\|$ remains bounded as $n \rightarrow \infty.~$ Computationally, of course, one can't iterate forever to guarantee that $\|f_n\|$ remains bounded for any particular (non-zero) $c$; but a key theorem (see, e.g., Holmgren, 1987) states that if $\exists n :\|f_n\| \ge 2$, then $\lim_{n \rightarrow \infty} \|f_n\|$ diverges.&nbsp; Algorithmically, then, what one does is decide on a "cut-off"&mdash;e.g., $n =$ 25, 50, or 100, say&mdash;and, for a grid of $c$ values, iterate composition of $f$ with itself until either: a) $\|f\| \ge 2$, or b) $n = $ the pre-selected cut-off.