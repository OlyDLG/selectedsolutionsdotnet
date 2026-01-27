<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>
$\definecolor{red}{RGB}{255,0,0}
\definecolor{orange}{RGB}{245, 165, 0}
\definecolor{yellow}{RGB}{255,215,0}
\definecolor{green}{RGB}{0,255,0}
\definecolor{indigo}{RGB}{0,0,255}
\definecolor{violet}{RGB}{138,43,226}
\definecolor{black}{RGB}{0,0,0}$
$\require{cancel}$
<style>
body {font-family: Palatino}
.top{border-bottom:solid black 1px; display:inline-block; float:left}
.bottom{ display:inline-block; clear:left; float:left}
</style>

#### <center>Sullivan, M., 2012. <i>Algebra & Trigonometry, Ninth Edition.</i> Prentice Hall, Boston
#### <center>Chapter 10, Section 3: The Complex Plane; DeMoivre’s Theorem
#### <center>to be included in the main Chapter write up
__22__) Express $z=\sqrt5-i$ in polar form, argument in degrees (plotting is left to the Reader).

__Sln__: $r = \sqrt{(\sqrt5)^2+(-1)^2} = \sqrt6 \doteq 2.45$, $\theta = 360^{\circ}+\tan^{-1}\frac{-1}{\sqrt5} \doteq 336^{\circ}$ so $$\boxed{z_{\text{polar}}=\sqrt6\left[\cos(360^{\circ}+\tan^{-1}\frac{-1}{\sqrt5})+i\sin(360^{\circ}+\tan^{-1}\frac{-1}{\sqrt5})\right] \doteq 2.45\left[\cos(336^{\circ})+i\sin(336^{\circ})\right]}$$
<br><br>

[__Bonus Problem from Quora__](https://www.quora.com/How-do-I-solve-the-equation-in-C-x-8-12x-4-13-0)

We are now in a position to find all eight solutions of the "quadratic in form" problem $x^8+12x^4-13 = 0$, asked of us on Quora, and first considered by us "here" in Chapter 1, Section 4 (where we were able to give only the real solutions).

__Sln__: We leave it to the reader to arrive at the point: $x^4=-13$ or $x^4 = 1.~$ We now know that, in $\mathbb{C}$, both of these equations have four solutions each: $x^4=1$ has solutions $\pm1, \pm i$ ("discovery" and check is left to the reader); while $x^4=-13$ has as its solutions the principal fourth-roots of $-13$, which we now know how to calculate: $(-13)^{1/4} = (13)^{1/4}(-1)^{1/4} = \sqrt[\large4]{13} \left(e^{i(2k+1)\pi}\right)^{1/4},~k$ an integer $=~\sqrt[\large4]{13} \left(e^{i(2k+1)\pi/4}\right),~k$ an integer; but this last factor corresponds to only four distinct complex numbers, given by, for example, $k=0,1,2,3$, corresponding to $e^{i\pi/4} = \displaystyle \frac1{\sqrt2}(1+i), e^{3i\pi/4} = \frac1{\sqrt2}(-1+i), e^{5i\pi/4} = \frac1{\sqrt2}(-1-i), e^{7i\pi/4} = \frac1{\sqrt2}(1-i).~$ Thus the full solution set is:
$$\boxed{x=\pm1, \pm i, \frac{\sqrt[\large4]{13}}{\sqrt2}\left(\pm1 \pm i\right) = \sqrt[\large4]{13}\left(e^{i(2k+1)\pi/4}\right), k=0,1,2,3}$$
where we have written the last four solutions the way we have to facilitate the: 

__Chk__: $\displaystyle \left[\sqrt[\large4]{13}\left(e^{i(2k+1)\pi/4}\right)\right]^8 + 12\left[\sqrt[\large4]{13}\left(e^{i(2k+1)\pi/4}\right)\right]^4 - 13 = (13)^{8/4}\left(e^{i(2k+1)\pi8/4}\right) + 12(13)^{4/4}\left(e^{i(2k+1)\pi4/4}\right) - 13 =$ $13^2\left(e^{i(2k+1)2\pi}\right) + 12(13)\left(e^{i(2k+1)\pi}\right) - 13 = 13^2(1) + 12(13)(-1) - 13$ (why?) $=~13(13-12-1) = 0~\checkmark$; the check for $\pm1, \pm i$ is left to the reader.
<br><br>

