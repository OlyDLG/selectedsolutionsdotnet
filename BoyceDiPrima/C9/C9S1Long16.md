$\require{cancel}$
<style>
body {font-family: Palatino}
</style>

#### <center>Boyce, W. E. & R. C. DiPrima, 1992. <i>Elementary Differential Equations and</i><br><i>Boundary Value Problems, Fifth Edition</i>. John Wiley & Sons, New York.
#### <center>Selected Problem Solutions
#### <center>from
#### <center>Chapter 9: "Nonlinear Differential Equations and Stability"
#### <center>Section 1: "The Phase Plane: Linear Systems"
#### <center>&copy; 2019 by
#### <center>David Lawrence Goldsmith
#### <center>for
#### <center>www.selectedsolutions.net

<i>Note:  These solutions are provided "as-is," for informational purposes only, with no warranty of any kind, expressed or implied, including that of correctness, adequacy, and/or suitability for any purpose, whatsoever.</i>&nbsp; Corrections are welcome and should be emailed to d.l.goldsmith@gmail.com.

<b>12)</b> For $\dot{\mathbf{x}}$$ = 
\left(\begin{array}{c c}
  2 & \displaystyle \scriptsize{-\frac52} \\
 \displaystyle \scriptsize{\frac95} & -1 \\
\end{array}\right) \mathbf{x}$

<b>a)</b> Calculate the eigenvalues and eigenvectors

<b>Sln</b>: The characteristic equation is: $0 =\mathbf{det}\left(\begin{array}{c c}
  \lambda - 2 & \displaystyle \scriptsize{\frac52} \\
 \displaystyle \scriptsize{-\frac95} & \lambda + 1 \\
\end{array}\right) = (\lambda - 2)(\lambda + 1) + \frac92 = \lambda^2 - \lambda + \frac52 \implies \lambda_{\pm} = \displaystyle \frac{1 \pm \sqrt{1-10}}{2} = \boxed{\frac{1 \pm 3i}2}$.

To find eigenvectors $\boldsymbol{\Lambda}_{\pm}$ we solve either equation of the system 
$\left(\begin{array}{c c}
  2 & \displaystyle \scriptsize{-\frac52} \\
 \displaystyle \scriptsize{\frac95} & -1 \\
\end{array}\right) \left(
\begin{array}{c}
x_1(t) \\ x_2(t)
\end{array}
\right)$$ = \lambda_{\pm}\left(
\begin{array}{c}
x_1(t) \\ x_2(t)
\end{array}
\right).$&nbsp; (Reader exercise: verify that it doesn’t matter which of the two equations of the system we use to find the eigenvectors.)

$\lambda_+$: $(2-\lambda_+)x_1 = \frac{3 - 3i}2 x_1 =  \frac52 x_2 \implies (3 - 3i) x_1 = 5x_2 \implies \boxed{\boldsymbol{\Lambda}_+ = 
\left(\begin{array}{c}
  5 \\ 3 - 3i 
\end{array}\right)}
$<br>

$\lambda_-$: $(2-\lambda_-)x_1 = \frac{3 + 3i}2 x_1 = \frac52 x_2 \implies (3 + 3i) x_1 = 5x_2 \implies \boxed{\boldsymbol{\Lambda}_- = 
\left(\begin{array}{c}
  5 \\ 3 + 3i 
\end{array}\right)}$<br>
(Reader exercise: do the check step, i.e., verify that 
$\left(\begin{array}{c c}
  2 & -\frac52 \\
  \frac95 & -1
\end{array}\right)
\left(\begin{array} {c}
  5 \\ 3 \mp 3i
\end{array}\right)
= \lambda_{\pm}
\left(\begin{array} {c}
  5 \\ 3 \mp 3i
\end{array}\right)
$)
<br>

<b>b)</b> Classify the c. p. $\mathbf{0}$ as to type and determine whether it is stable, asymptotically stable, or unstable

<b>Sln</b>: $\lambda_{\pm} = a \pm bi \implies \mathbf{0}$ is a spiral point; and $a = \frac12 \gt 0 \implies $ it’s an <b>unstable spiral point</b>.

<b>c)</b> (In lieu of the stated) Give the general formula for the solution for initial condition $\mathbf{x}(0) = (x_0, y_0)^T$

<b>Sln</b>: (In 2019, the technology to graph the trajectories, given any initial $(x_0, y_0)^T,$ is readily available for free for essentially any computing platform, (the graphs below were produced on an Apple MacBook Air using its OSX-included "Grapher" app) so producing computer-generated plots of the trajectories should not be optional; but generating precise plots still requires formulae for specific trajectories, which requires finding these for specific initial conditions.&nbsp; That is the rationale behind deriving the following formula, as a substitute for this part of the problem as it is given in the text.)

Based on the results of part a), we can write the general solution as:

$\displaystyle \mathbf{x}(t) = c_+ \boldsymbol{\Lambda}_+\exp(\lambda_+ t) + c_- \boldsymbol{\Lambda}_-\exp(\lambda_- t) = (x_+ + iy_+)\left(\begin{array} {c}
  5 \\ 3-3i 
\end{array}\right)
\exp\left(\displaystyle \frac{1+3i}{2} t\right) +(x_- + iy_-)
\left(\begin{array} {c}
  5 \\ 3+3i 
\end{array}\right)
\exp\left(\displaystyle \frac{1-3i}{2} t\right)$.&nbsp; (Reader exercise: verify this solution explicitly, i.e., calculate $\mathbf{Ax}(t)$ and $\displaystyle \frac{d\mathbf{x}(t)}{dt}$ and exhibit that they are equal.)&nbsp; Now suppose $\mathbf{x}(0) = (x_0, y_0)$ given; combining that with 
$\mathbf{x}(0) = (x_+ + iy_+)\left(\begin{array}{c} 5 \\ 3-3i
\end{array}\right) + (x_- + iy_-)\left(\begin{array}{c} 5 \\ 3+3i
\end{array}\right)
$
(using the general formula), we obtain the following four equations for the four unknowns $x_+, x_-, y_+, y_-$:
$$
\begin{eqnarray}
  x_0 & = & 5(x_+ + x_-) & \implies & x_+ + x_- & = & x_0/5 &&& (1) \\
  0 & = & 5(y_+ + y_-) & \implies & y_+ + y_- & = & 0 &&& (2) \\  
  y_0 & = & 3(x_+ + x_- + y_+ - y_-) & \implies & x_+ + x_- + y_+ - y_- & = & y_0 / 3 &&& (3) \\  
  0 & = & 3(y_+ + y_- - x_+ + x_-) & \implies & y_+ + y_- - x_+ + x_- & = & 0 &&& (4) \\  
\end{eqnarray}
$$
Eq. 2 immediately gives $y_+ = -y_-$, and combining Eqs. 2 and 4 yields $x_+ = x_-$, which, in combination with Eq. 1, gives $x_+ = x_- = \displaystyle \frac{x_0}{10}$; combining these results in Eq. 3 yields $y_+ = \displaystyle \frac{y_0}6 - \frac{x_0}{10}$ and $y_- = -\left(\displaystyle \frac{y_0}6 - \frac{x_0}{10}\right)$.&nbsp; Putting it all together yields:
$$
  \boxed{\mathbf{x} (t) = \left[\frac{x_0}{10} + i\left(\frac{y_0}6 - \frac{x_0}{10}\right)\right]\left(\begin{array}{c} 5 \\ 3-3i \end{array}\right)\exp\left(\frac{1+3i}{2}t\right) + \left[\frac{x_0}{10} - i\left(\frac{y_0}6 - \frac{x_0}{10}\right)\right]\left(\begin{array}{c} 5 \\ 3+3i \end{array}\right)\exp\left(\frac{1-3i}{2}t\right)}
$$
as the solution fitting arbitrary initial condition $\mathbf{x}(0) = (x_0, y_0)^T$.&nbsp; (Reader exercise: verify explicitly that $\mathbf{x}(0) = (x_0, y_0)^T$.)

<b>d)</b> Graph, using, e.g., a graphing calculator app, several trajectories in the phase plane, and $x_1(t)$ 

<b>Sln</b>: In order to get a graphing calculator to plot trajectories, we need to be able to precisely specify which curves to plot, and for that we need to specify, i.e., choose, some initial conditions; given that we have a formula for the solution for any particular choice of initial condition, said choice is rather arbitrary, but we will nevertheless choose "easy" points (but not (0,0)&mdash;why?):

$\begin{eqnarray}
  \mathbf{x}(0) = (1,0)^T \implies \mathbf{x}(t) 
  & = & \frac{1}{10} 
    \left[ 
      (1 - i) \left(\begin{array}{c} 5 \\ 3-3i \end{array}\right) 
    \exp\left(\frac{1+3i}{2} t \right) + 
      (1 + i) \left(\begin{array}{c} 5 \\ 3+3i \end{array}\right)
     \exp\left(\frac{1-3i}{2} t \right)
     \right] \\
  & = & \frac{e^{\displaystyle t/2}}{10} 
    \left[ 
      \left(\begin{array}{c} 5-5i \\ -6i \end{array}\right) 
    \exp\left(\frac{3i}{2} t \right) + 
      \left(\begin{array}{c} 5+5i \\ 6i \end{array}\right)
     \exp\left(\frac{-3i}{2} t \right)
     \right] \\
  & = & \frac{e^{\displaystyle t/2}}{10} 
  \left(\begin{array}{c}
  	10(\cos\left(3t/2\right) + \sin\left(3t/2\right)) \\
  	12\sin(3t/2)\\
  \end{array}\right)  =  
   \left(\begin{array}{c}
  	e^{\displaystyle t/2}\left[\cos\left(3t/2\right) + \sin\left(3t/2\right)\right] \\
  	1.2e^{\displaystyle t/2}\sin(3t/2)
  \end{array}\right)  = 
  \left(\begin{array}{c} x_{(1,0)}(t) \\ y_{(1,0)}(t) \end{array}\right)
\end{eqnarray}$

To get $\left(\begin{array}{c} x_{(-1,0)}(t) \\ y_{(-1,0)}(t) \end{array}\right)$ we rotate by $\pi$ radians, i.e., multiply by $-1$:

$\left(\begin{array}{c} x_{(-1,0)}(t) \\ y_{(-1,0)}(t) \end{array}\right) = \left(\begin{array}{c}
  	-e^{\displaystyle t/2}\left[\cos\left(3t/2\right) + \sin\left(3t/2\right)\right] \\
  	-1.2e^{\displaystyle t/2}\sin(3t/2)
  \end{array}\right)$

$\begin{eqnarray}
  \mathbf{x}(0) = (0,1)^T \implies \mathbf{x}(t) 
  & = & \frac{e^{\displaystyle t/2}}6\left[
    \left(\begin{array}{c} 5i \\ 3+3i \end{array}\right)
    \exp\left(\frac{3i}2 t\right) + 
    \left(\begin{array}{c} -5i \\ 3-3i \end{array}\right)
    \exp\left(\frac{-3i}2 t\right)
  \right] \\
  & = & \frac{e^{\displaystyle t/2}}6\left(
  \begin{array}{c}
     -10\sin(3t/2) \\
     6[\cos(3t/2) - \sin(3t/2)]
  \end{array}
  \right) =
  \left(\begin{array}{c}
    -\frac53e^{\displaystyle t/2}\sin(3t/2) \\
    e^{\displaystyle t/2}(\cos(3t/2) - \sin(3t/2))
  \end{array}\right) = 
  \left(\begin{array}{c} x_{(0,1)}(t) \\ y_{(0,1)}(t) \end{array}\right)
\end{eqnarray}$

and again we simply multiply by $-1$ to obtain $\left(\begin{array}{c} x_{(0,-1)}(t) \\ y_{(0,-1)}(t) \end{array}\right) = 
  \left(\begin{array}{c}
    \frac53e^{\displaystyle t/2}\sin(3t/2) \\
    e^{\displaystyle t/2}(\sin(3t/2) - \cos(3t/2))
  \end{array}\right)$
  
So, without further ado, we present these trajectories:
<br>

<img src="http://www.selectedsolutions.net/BoyceDiPrima/C9/BDiP9.1.12Trajectories.jpg"></img>

and their $x_1(t)$’s:
<br>
<img src="http://www.selectedsolutions.net/BoyceDiPrima/C9/BDiP9.1.12x_1.jpg"></img>
<br><br>

<b>16)</b> For $\dot{\mathbf{x}} = \left(\begin{array}{c c} 0 & -\beta \\ \delta & 0 \end{array}\right) \mathbf{x} + \left(\begin{array}{c} \alpha \\ \gamma \end{array}\right)$; $\alpha, \beta, \gamma, \delta \gt 0$, determine the critical point $\mathbf{x}^*$ and classify its type and stability.

<b>Sln</b>: Setting $\dot{\mathbf{x}}$$ = 0$, the system is equivalent to: 
$\begin{eqnarray}
-\beta y & = & -\alpha \\
\delta x & = & -\gamma 
\end{eqnarray} \implies \boxed{\mathbf{x}^* = \left(\displaystyle -\frac{\gamma}{\delta}, \frac{\alpha}{\beta}\right)^T}$.&nbsp; Making the change of variable $\boldsymbol{\xi} = \mathbf{x} - \mathbf{x}^*$, we have $\dot{\boldsymbol{\xi}} = \dot{\mathbf{x}}$ and $\dot{\boldsymbol{\xi}} = \left(\begin{array}{c c} 0 & -\beta \\ \delta & 0 \end{array}\right)(\boldsymbol{\xi} + \mathbf{x}^*) + (\alpha, \gamma)^T = \left(\begin{array}{c c} 0 & -\beta \\ \delta & 0 \end{array}\right) \boldsymbol{\xi} + \left(-\beta \displaystyle \frac{\alpha}{\beta}, \delta \frac{-\gamma}{\delta}\right)^T + (\alpha, \gamma)^T = \left(\begin{array}{c c} 0 & -\beta \\ \delta & 0 \end{array}\right)\boldsymbol{\xi}$, i.e., an equivalent system, but one whose critical point $\boldsymbol{\xi}$$^* = \mathbf{0}$.&nbsp; The characteristic equation is: $0 = \mathbf{det}\left(\begin{array}{c c} -\lambda & -\beta \\ \delta & -\lambda \end{array}\right) = \lambda^2 + \beta\delta \implies \lambda_{\pm} = \pm \sqrt{-\beta\delta} = \pm i\sqrt{\beta\delta}~(\because \beta, \delta \text{ assumed } \gt 0)$, and the eigenvalues being pure imaginary implies $\mathbf{x}^*$ is a <b>stable center</b>.

<br><br>

<b>18)</b> Consider the system $\mathbf{x}’= \mathbf{Ax}$ and suppose that $\mathbf{A}$ has one zero eigenvalue.

<b>a)</b> Show that $\mathbf{x} = \mathbf{0}$ is a critical point, but not an isolated one.

<b>Pf</b>: $\mathbf{0}$ is clearly a critical point (since $\mathbf{A0} = \mathbf{0}$).&nbsp; Now consider the given that $0$ is an eigenvalue of $\mathbf{A}$: this implies $\exists \boldsymbol{\xi} \ne \mathbf{0} : \mathbf{A} \boldsymbol{\xi} = 0\boldsymbol{\xi} = \mathbf{0}= 0 \times c\boldsymbol{\xi} = c \times 0 \boldsymbol{\xi} = c \times \mathbf{A}\boldsymbol{\xi} = \mathbf{A}(c\boldsymbol{\xi})$ for arbitrary (real or complex) $c$, <i>no matter how small</i> (in magnitude).&nbsp; Thus, for $c$ arbitrarily close to zero, $c\boldsymbol{\xi}$ is also a critical point of the system, and therefore $\mathbf{0}$ is not an isolated critical point.&nbsp; $\blacksquare$<br><br>(Note that at no point in our proof did we need to specify or rely on the dimension of the system; therefore, this result is valid for any (albeit finite-sized) system.)

<b>b)</b> Let $r_1 = 0, r_2 \ne 0$ be the eigenvalues of $\mathbf{A}$, and $\boldsymbol{\xi}^{(1)} = (x_1,y_1)^T, \boldsymbol{\xi}^{(2)} = (x_2,y_2)^T$ be corresponding eigenvectors.&nbsp; Show that the trajectories are as indicated in text Figure 9.1.8, and indicate the direction of movement along said trajectories.

<b>Sln</b>: First, for convenient reference, we note that the pictured trajectories are: (1) a (single) straight line along $\boldsymbol{\xi}^{(1)}$ passing through the origin, and (2) the one-parameter family of straight lines parallel to $\boldsymbol{\xi}^{(2)}$ with arbitrary $y$-intercept.

Now, the general solution (Reader exercise: verify) is: 

$\displaystyle \mathbf{x}(t) = a \boldsymbol{\xi}^{(1)} + b \boldsymbol{\xi}^{(2)}e^{r_2 t} = \left( \begin{array}{c} 
  ax_1 + bx_2e^{r_2t} \\
  ay_1 + by_2e^{r_2t}
\end{array} \right) $ where $a,b$ are integration constants, determined by an initial condition, e.g., $\mathbf{x}(0) = (x_0,y_0)^T.~$ This gives us two equations in the two variables $a,b$:
$\begin{eqnarray}
  ax_1 + bx_2 = x_0 \\
  ay_1 + by_2 = y_0
\end{eqnarray}$, yielding $\displaystyle a = \frac{x_0y_2 - x_2y_0}{x_1y_2 - x_2y_1}$ (we may assume $x_1y_2 - x_2y_1 \ne 0$&mdash;why?), $\displaystyle b = \frac{x_0 - ax_1}{x_2} = \frac{y_0 - ay_1}{y_2}$, and before proceeding, we note that if $\mathbf{x}(0) = \mathbf{0}$, then $a = b = 0$, i.e., $\mathbf{x}(t) \equiv \mathbf{0}~\forall t$; consequently, henceforth we will assume that $x_0, y_0$ are not both zero.

Substituting our expressions for $b$ back into the coordinate expression for $\mathbf{x}(t)$ yields: $\left(\begin{array}{c}
  x(t) \\ y(t)
\end{array}\right) = \left( \begin{array}{c} 
  ax_1 + (x_0 - ax_1)e^{r_2t} \\
  ay_1 + (y_0 - ay_1)e^{r_2t}
\end{array} \right)$; eliminating $e^{r_2t}$ yields: $\displaystyle \frac{y - ay_1}{y_0 - ay_1} = \frac{x - ax_1}{x_0 - ax_1}$, i.e., a general equation for the trajectories, independent of $t$, which we immediately note is a linear equation, whose slope $m =\displaystyle \frac{y_0 - ay_1}{x_0 - ax_1}$.&nbsp; Substituting $\displaystyle \frac{x_0y_2 - x_2y_0}{x_1y_2 - x_2y_1}$ in for $a$ yields: 

$\displaystyle m = \frac{y_0 - \frac{x_0y_2 - x_2y_0}{x_1y_2 - x_2y_1}y_1}{x_0 - \frac{x_0y_2 - x_2y_0}{x_1y_2 - x_2y_1}x_1} = \frac{x_1y_0y_2 - \cancel{x_2y_0y_1} - x_0y_1y_2 + \cancel{x_2y_0y_1}}{\cancel{x_0x_1y_2} - x_0x_2y_1 - \cancel{x_0x_1y_2} + x_1x_2y_0} = \frac{(x_1y_0 - x_0y_1)y_2}{(x_1y_0 - x_0y_1)x_2} = \frac{y_2}{x_2} = $ the slope of $\boldsymbol{\xi}^{(2)}$, <i>unless </i>$\displaystyle \frac{y_0}{x_0} = \frac{y_1}{x_1}$.

If the latter is the case, i.e., if the initial condition happens to lie on the line $\displaystyle y = \frac{y_1}{x_1}x$ (the case of it being on this line with $x_0 = 0$ already having been excluded&mdash;where and why?), i.e., on the line passing through the origin with direction the same as the eigenvector corresponding to the zero eigenvalue, then, substituting $\displaystyle \frac{x_1}{x_0}y_0$ in for $y_1$ in our general trajectory equation yields: $\displaystyle \frac{x - ax_1}{x_0 - ax_1} = \frac{y - ax_1y_0/x_0}{y_0 - ax_1y_0/x_0} = \frac{x_0y - ax_1y_0}{x_0y_0 - ax_1y_0} = \frac{x_0y - ax_1y_0}{y_0(x_0 - ax_1)} \overset{x_0 \ne ax_1}{\implies} y_0x -\cancel{ax_1y_0} = x_0y - \cancel{ax_1y_0} \implies y = \frac{y_0}{x_0}x$, i.e., if $\displaystyle \frac{y_0}{x_0} = \frac{y_1}{x_1}$, then $\mathbf{x}(t)$ remains on this line for all $t$.&nbsp; (The "sub-case" of $x_0 = ax_1$, as well as indicating the direction of motion on the trajectories, are left for the Reader.)$~~\blacksquare$
<br><br>

<b>19)</b> For $\left(\begin{array}{c} x \\ y \end{array}\right)’ = \left(\begin{array}{c c} p & q \\ r & s\end{array}\right) \left(\begin{array}{c} x \\ y \end{array}\right)$

<b>a)</b> Show that $\lambda_{\pm} = \gamma i,~\gamma \in \mathbb{R} \iff p + s = 0, ps - qr \gt 0$.

<b>Pf</b>: The characteristic equation of the system is: $0 = \mathbf{det}\left(\begin{array}{c c} p-\lambda & q \\ r & s-\lambda \end{array}\right) = (p-\lambda)(s-\lambda) - qr = \lambda^2 - (p+s)\lambda + (ps-qr)$.&nbsp; Now if&mdash;and only if&mdash;$p+s = 0$, we have $\lambda^2 + (ps - qr) = 0$ or $\lambda^2 = -(ps-qr)$; thus if&mdash;and only if&mdash;$ps-qr \gt 0, \lambda_{\pm} = \pm \gamma i$ for some $\gamma \in \mathbb{R}$, i.e., $\lambda_{\pm}$ are pure imaginary.
$~~\blacksquare$

<b>b)</b> Show that (at least formally) the system is equivalent to $\displaystyle \frac{dy}{dx} = \frac{rx + sy}{px + qy}$ ("Eq. 1") and that this equation is exact.

<b>Pf</b>: We have $\displaystyle \frac{dx}{dt} = px + qy, \frac{dy}{dt} = rx + sy \implies \frac{rx + sy}{px + qy} = \frac{dy/dt}{dx/dt} = \frac{dy}{dx}$ (at least formally).&nbsp; Assuming $p, q$ not both zero (which is reasonable&mdash;why?), we then have $(rx + sy)dx = (px +qy)dy \implies rxdx - qydy = d(\frac12(rx^2 - qy^2)) = pxdy - sydx = p(xdy + ydx)$ (using the assumption that $p + s = 0$, i.e., that $p = -s$) $= d(pxy)$, or, multiplying by 2 and clearing away the work:
$$d(rx^2 - qy^2) = d(2pxy)~~~~~\text{(Eq. 2)}$$ 
$\blacksquare$

<b>c)</b> Show that the conditions shown in part a) to guarantee pure imaginary eigenvalues further imply that: i) the general solution of Eq. 2 is $rx^2 + 2sxy - qy^2 = k$ ($k$ a constant); and ii) this is the equation of an ellipse.

<b>Pf</b>: Integrating both sides of Eq. 2 yields: $rx^2 - qy^2 = 2pxy + k$ ($k$ a constant of integration) $\implies rx^2 + 2sxy - qy^2 = k$ (where we have again used $s = -p$).&nbsp; To show that this is the equation of an ellipse, we utilize a theorem from Analytic Geometry (see, e.g., Leithold, L., 1981.&nbsp; <i>The Calculus with Analytic Geometry, Fourth Edition.</i>&nbsp; Harper & Row, New York.) which states that, given the equation $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$, its graph is an ellipse if $B^2 - 4AC \lt 0$.&nbsp; In our case, we need to examine $(2s)^2 - 4(r)(-q) = 4(s^2 + rq) = 4(rq - ps)~(\because p = -s) \lt 0 \iff ps - rq > 0.~~~\blacksquare$


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br>

### Credits
Text layout, MathJax (LaTeX), HTML, CSS, and any JavaScript composed using <a href="http://lightpaper.42squares.in/">LightPaper for Mac by 42Squares</a>

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
<br>
<br>
<br>
<br>
<br>
<br>

