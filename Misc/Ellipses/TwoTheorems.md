<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ TeX: { extensions: ["color.js"] }});
</script>
$\definecolor{red}{RGB}{255,0,0}
\definecolor{orange}{RGB}{255, 165, 0}
\definecolor{yellow}{RGB}{255,255,0}
\definecolor{green}{RGB}{0,255,0}
\definecolor{indigo}{RGB}{0,0,255}
\definecolor{violet}{RGB}{138,43,226}
\definecolor{black}{RGB}{0,0,0}$
<style>
body {font-family: Palatino}
</style>
#### <center><i>Two Theorems on Ellipses</i>
#### <center>&copy; 2017 by 
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>www.selectedsolutions.net

<br>
Note: Both of these Problems are exercises (not worked examples) from Kline, M., 1967.&nbsp; <i>Calculus: An Intuitive and Physical Approach.</i>&nbsp; Wiley, New York.; but are interesting and important enough results on their own to warrant independent presentation.&nbsp; (Plus, I had cause to work through them in my tutoring "adventures," and one of the points of selectedsolutions.net is to record and present non-trivial exercises I have the pleasure to complete.)

##### The (Geometric) Orthogonality of Confocal Ellipses and Hyperbolae
<u>Problem Statement</u>: 

$~~~~~$<i>Show that confocal ellipses and hyperbolae (i.e., ellipses and hyperbolae sharing the same foci) are orthogonal to one another, i.e., intersect one another at right angles.</i>

<u>Solution</u>: 

$~~~~~$First, let us recall what it means for two non-linear curves to intersect in a right angle: it means that the <i>tangent lines</i> to those curves at the point of intersection form a right angle.&nbsp; Of course, the derivative of a curve at a point gives the slope of the tangent line to the curve at that point.&nbsp; Finally, for oblique lines, i.e., lines parallel to neither the $x$ nor the $y$ axis, two such lines are perpendicular if and only if the product of their slopes is $-1$.&nbsp; (It is left to the Reader to show that, if an ellipse and a hyperbola are confocal, then the above restriction to considering only oblique lines doesn't limit the applicability of our proof.&nbsp;  Hint: where do these curves, suitably transformed, have non-oblique tangents?&nbsp; Can such points <i>ever</i> be points of intersection of <i>confocal</i> ellipses and hyperbolae?&nbsp; Proof?)

$~~~~~$The above lists the fundamental properties underlying our proof: we shall derive general formulae for the derivatives of the given curves, and formulae for the coordinates of the points of intersection; then we shall substitute the latter into the product of the former; finally, simplification will show that said product is identically equal to $-1$.

$~~~~~$Without loss of generality (w.l.o.g.), we may assume the curves rotated and translated such that the shared foci are at $(\pm c, 0)$ (for if not, start by doing that, which is always possible).&nbsp; Thus the general equations for each may be written as:

$$~~~~~~~~~~~~~~~~~~~~~\text{Ellipse: }\frac{x^2}{a_E^2} + \frac{y^2}{a_E^2 - c^2} = 1$$
$$\text{Confocal Hyperbola: }\frac{x^2}{a_H^2} - \frac{y^2}{c^2 - a_H^2} = 1$$

Using implicit differentiation on the ellipse equation yields:

$$\frac{2x}{a_E^2}dx + \frac{2y}{a_E^2 - c^2}dy = 0 \implies \frac{dy_E}{dx_E} = \frac{c^2 - a_E^2}{a_E^2}\frac{x_E}{y_E}$$
and using it on the confocal hyperbola equation yields:
$$\frac{2x}{a_H^2}dx - \frac{2y}{c^2 - a_H^2}dy = 0 \implies \frac{dy_H}{dx_H} = \frac{c^2 - a_H^2}{a_H^2}\frac{x_H}{y_H}$$

i.e., the expression for their derivatives is formally the same:

$$\frac{dy}{dx} = \frac{c^2 - a^2}{a^2}\frac{x}{y}$$

(The Reader surprised by this result should spend some effort to understand why this same formula gives qualitatively different results for the two distinct types of curves; hint: what's the difference in the relationship between $a$ and $c$ for the two different curves?)&nbsp; Thus the product of the slopes, $m_Em_H$, at a point of intersection, i.e., a point where both curves share the same $x$ and $y$ coordinates, is given by:

$$m_Em_H = \left(\frac{c^2 - a_E^2}{a_E^2}\right)\left(\frac{c^2 - a_H^2}{a_H^2}\right)\frac{x^2}{y^2}$$

At this point we observe that to compute the required product, we will not actually need the values of $x$ and $y$, but simply their squares; we will see momentarily why this is "fortunate."

$~~~~~$To find these squares, we first "clear the denominators," from the original equations, yielding:

$$(a_E^2 - c^2)x^2 + a_E^2y^2 = a_E^2(a_E^2 - c^2)$$
$$(c^2 - a_H^2)x^2 - a_H^2y^2 = a_H^2(c^2 - a_H^2)$$

then multiply the top equation through by $a_H^2$ and the bottom one through by $a_E^2$ yielding:

$$a_H^2(a_E^2 - c^2)x^2 + a_E^2a_H^2y^2 = a_E^2a_H^2(a_E^2 - c^2)$$
$$a_E^2(c^2 - a_H^2)x^2 - a_E^2a_H^2y^2 = a_E^2a_H^2(c^2 - a_H^2)$$

and then add these two equations to eliminate $y^2$, yielding:

$$c^2(a_E^2 - a_H^2)x^2 = a_E^2a_H^2(a_E^2 - a_H^2) \implies$$
$$x^2 = \frac{a_E^2a_H^2}{c^2}$$

(Note: why don't we have to worry about $a_E^2 - a_H^2 = 0$?)

$~~~~~$Substituting this into the first "denominator-cleared" equation and dividing through by $a_E^2$ yields:

$$(a_E^2 - c^2)\frac{a_H^2}{c^2} + y^2 = (a_E^2 - c^2) \implies$$
$$y^2 = (a_E^2 - c^2)\left[1 - \frac{a_H^2}{c^2}\right] \implies$$
$$\frac{x^2}{y^2} = \frac{a_E^2a_H^2}{(a_E^2 - c^2)(c^2 - a_H^2)}$$

Substituting this into our formula for $m_Em_H$ yields:

$$m_Em_H = \left(\frac{c^2 - a_E^2}{a_E^2}\right)\left(\frac{c^2 - a_H^2}{a_H^2}\right)\left[\frac{a_E^2a_H^2}{(a_E^2 - c^2)(c^2 - a_H^2)}\right] = -1$$

$\blacksquare$

$~~~~~$But what's the big deal?&nbsp; So confocal ellipses and hyperbolas intersect at right angles, big whoop, who cares?&nbsp; Well, aside from the fact that there need be no other relationship between a given ellipse and a given hyperbola for this to hold (which, in the Author's opinion, is, in and of itself, quite remarkable), let's make sure we understand the "breadth" of this result.&nbsp; Look at Figure 1 below, showing members of families of confocal ellipses and hyperbolae, and observe that it's not just the "center" ellipse that's orthogonal to just the "center" hyperbola, nor just the outer-most (inner-most) ellipse that's orthogonal to just the outer-most (inner-most) hyperbola: because <i>all</i> the ellipses and <i>all</i> the hyperbolae in Figure 1 are confocal, <i>each</i> ellipse is orthogonal to <i>each</i> hyperbola at their points of intersection!&nbsp; I don't know about you, but I consider this exceedingly remarkable!


<center><img src="http://www.selectedsolutions.net/Misc/ConfocalEllipsesHyperbolae.JPG"></center>
<center>Figure 1: Confocal Ellipses and Hyperbolae</center>

<center>-------------------------------</center>
<center><img src="http://www.selectedsolutions.net/Misc/Ellipse/ERP_annot.jpeg"></center>
<center>Figure 2: The Ellipse Reflection Property</center></a>

##### The "Reflection Property" of Ellipses
<u>Problem Statement</u>:<br> 

$~~~~~$(Backstory from Optics: a light ray, traveling in a straight line and bouncing off a "perfect," flat mirror, obeys the famous law "(Acute) Angle of Incidence = (Acute) Angle of Reflection"* (AAI=AAR), i.e., whatever angle, $a$, the ray makes with the mirror "coming in", is also the (acute) angle it makes with the mirror "coming out."&nbsp; This Law extends to curved mirrors, where the angles of incidence and reflection are measured relative to the tangent to the curve of the mirror at the point of incidence.&nbsp; With this background, and making reference to Figure 2 above, we can now state the Property:)

$~~~~~$<i>A light ray, obeying AAI=AAR and passing through one focus of a mirror with elliptical cross-section, will be reflected by said mirror through the ellipse's other focus</i> (<i>ad infinitum</i>, if the mirror is a complete ellipse).

<u>Solution</u>:

$~~~~~$Since we are to assume AAI=AAR, where the angles are measured relative to the tangent, $T$, to the ellipse at the point of incidence, $P$, what we need to show is: given line $M$ as that between one focus and $P$; and line $L$ as that through $P$ and having slope such that its (acute) angle with $T$ is the same as that between $M$ and $T$; this $L$ passes through the other focus, regardless of $P$'s position on the ellipse.**&nbsp; Equivalently (why?), we can show that if we define $M$ the same, but $L$ as the line between $P$ and the other focus, then $M$ and $L$ make the same (acute) angle with $T$.&nbsp; For the fun of it, we will show it both ways, starting with the second.

<u>Proof 1</u><br>

$~~~~~$As above, we may assume, w.l.o.g., that the ellipse is translated and rotated such that its foci are at $(\pm c,0).~$ In Analytic Geometry we learn that the tangent (function) of the angle between two (oblique) lines is:<br>

$~~~~~\tan \theta_{L_1L_2} = \frac{m_2 - m_1}{1 + m_1m_2}$, where $\theta_{L_1L_2}$ is the angle <i>from</i> line $L_1$ <i>to</i> line $L_2$, and $m_i$ is the slope of line $i$.

Now, as derived in the previous Problem, the slope of the tangent (line) at $P$, $m_T(P)$, is:

$$m_T(P) = \frac{dy}{dx}\big|_P = \frac{c^2 - a^2}{a^2}\frac{x_P}{y_P} = - \frac{b^2}{a^2}\frac{x_P}{y_P};$$

the slope of $M$, $m_M$, is $\frac{y_p - 0}{x_p - c} = \frac{y_p}{x_p - c}$; and the slope of $L$, $m_L$, is assumed to be $\frac{y_p - 0}{x_p - (-c)} = \frac{y_p}{x_p + c}.~$ (Henceforth, except where noted otherwise, $x_P$ and $y_P$ will be the only $x$ and $y$ we need, so we will now "drop the $P$'s.")

$~~~~~$Thus $$\tan\theta_{TM} = \frac{m_M - m_T}{1+m_Mm_T} = \frac{\frac{y}{x - c} + \frac{b^2x}{a^2y}}{1-\frac{\color{red}y\color{black}}{x - c}\frac{b^2x}{a^2\color{red}y\color{black}}} = \frac{\color{red}\frac{1}{a^2(x-c)}}{\color{red}\frac{1}{a^2(x-c)}}\frac{a^2y+b^2\frac{x(x-c)}{y}}{a^2(x-c)-b^2x} = \frac{a^2y^2+b^2x^2-b^2cx}{((a^2-b^2)x-a^2c)y} = \frac{a^2y^2+b^2x^2-b^2cx}{(c^2x-a^2c)y}$$

whereas $$\tan\theta_{LT} = \frac{m_T - m_L}{1+m_Lm_T} = \frac{-\frac{b^2x}{a^2y}-\frac{y}{x + c}}{1-\frac{\color{red}y}{x + c}\frac{b^2x}{a^2\color{red}y}} =\frac{\color{red}\frac{1}{a^2(x+c)}}{\color{red}\frac{1}{a^2(x+c)}}\frac{-b^2\frac{x(x+c)}{y}-a^2y}{a^2(x+c)-b^2x} = -\frac{a^2y^2+b^2x^2+b^2cx}{((a^2-b^2)x+a^2c)y} = \color{violet}-\color{black}\frac{a^2y^2+b^2x^2+b^2cx}{(c^2x+a^2c)y}$$

where we've highlighted factors which cancel in red.&nbsp; (Note the "$-$" out in front of the second result, highlighted in violet.)

$~~~~~$Now, we haven't really used the fact that we're talking about an ellipse yet, i.e., that $x$ and $y$ are related by:
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \implies y^2 = b^2\left(1 - \frac{x^2}{a^2}\right)$$so it's high time we do!
(Yes, we used the derivative of this relationship, but recall from the previous Problem that this, by itself, left open the question of whether we're talking about an ellipse or a hyperbola.)&nbsp; Substituting in for $y^2$ in the first ratio yields:
$$\frac{a^2y^2+b^2x^2-b^2cx}{(c^2x-a^2c)y} = \frac{a^2b^2\left(1-\frac{x^2}{a^2}\right)+b^2x^2-b^2cx}{(c^2x-a^2c)y} = \frac{a^2b^2\color{red}-b^2x^2+b^2x^2\color{black}-b^2cx}{(c^2x-a^2c)y} = \frac{b^2\color{red}(a^2-cx)}{cy\color{red}(cx-a^2)} = -\frac{b^2}{cy}$$

while doing so in the second ratio yields:
$$-\frac{a^2y^2+b^2x^2+b^2cx}{(c^2x+a^2c)y} = -\frac{a^2b^2\left(1-\frac{x^2}{a^2}\right)+b^2x^2+b^2cx}{(c^2x+a^2c)y} = -\frac{a^2b^2\color{red}-b^2x^2+b^2x^2\color{black}+b^2cx}{(c^2x+a^2c)y} = -\frac{b^2\color{red}(a^2+cx)}{cy\color{red}(cx+a^2)} = -\frac{b^2}{cy}$$

$\blacksquare$

<u>Proof 2</u><br>

$~~~~~$Here's the other way I promised, namely, by showing that the line passing through $P$ and making the same angle, $a$, with the tangent, $T$, as the incident ray, $M$, passes through the other focus, $(-c,0).~$ We shall find the equation of that line, using the "point-slope" form, $\frac{y-y_0}{x-x_0} = m$, ($(x,y)$ here being generic, i.e., not $(x_P,y_P)$), since a point and a slope are the two pieces of information we are "given" (in quotes because we aren't actually given the slope, but we can calculate it from the given information), and then we will show that $(-c,0)$ makes that equation a true statement.

$~~~~~$Now, in $\frac{y-y_0}{x-x_0} = m$, given the data of our problem, $(x_0,y_0) = (x_P,y_P)$, i.e., the point the line is stipulated to pass through, and we want to show that $(x,y) = (-c, 0)$ makes the equation a true statement, i.e., we want to show:
$$\frac{0-y_P}{-c-x_P} = \frac{y_P}{x_P+c} = m_L.$$
(Now back to $(x,y) = (x_P,y_P)$.)&nbsp; To independently find $m_L$, we note that: 
$$\tan a = \frac{m_T - m_M}{1+m_Tm_M} = \frac{-\frac{b^2x}{a^2y}-\frac{y}{x-c}}{1-\frac{b^2xy}{a^2(x-c)y}} = \frac{b^2x^2-b^2cx + a^2y^2}{[b^2x - a^2(x-c)]y} = \frac{\color{red}b^2x^2\color{black}+b^2\color{blue}(a^2 - cx)\color{red}-b^2x^2}{c\color{blue}(a^2 - cx)\color{black}y} = \frac{b^2}{cy}$$
whereas, by hypothesis, it also equals:
$$\tan a = \frac{m_L - m_T}{1+m_Tm_L}.$$
Equating these results, we have:
$$\frac{m_L - m_T}{1+m_Tm_L} = \frac{b^2}{cy}$$
and solving for $m_L$ yields:
$$m_L = \frac{b^2 + m_Tcy}{cy - b^2m_T} = \frac{b^2-\frac{b^2cx\color{red}y}{a^2\color{red}y}}{cy + \frac{b^4x}{a^2y}} = \frac{b^2(a^2-cx)y}{a^2cy^2 + b^4x} = \frac{\color{red}b^2\color{black}(a^2-cx)y}{a^2\color{red}b^2\color{black}c(1-x^2/a^2) + \color{red}b^2\color{black}b^2x} = \frac{(a^2-cx)y}{a^2c-cx^2 + a^2x - c^2x}$$
$$= \frac{\color{blue}(a^2 - cx)\color{black}y}{\color{blue}(a^2 - cx)\color{black}(x+c)}$$
$$ = \frac{y}{x + c}$$

$\blacksquare$

##### Notes

<footnote>* Specifying "Acute" means that one always takes the "$\lt \frac{\pi}2$" measure of an angle.</footnote>

<footnote>** There are two points on the ellipse that have to be treated separately: which points and why?</footnote>

##### Credits
Document created on a Mac with <a src="http://lightpaper.42squares.in/">LightPaper</a> by 42 Squares, graphs created on an iPhone with <a src="https://itunes.apple.com/us/app/scientific-graphing-calculator-2/id1128480893?mt=12">Scientific Graphing Calculator 2</a> by William Jockusch.

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
