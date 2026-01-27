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
</style>

#### <center>Johnson, D. E. & Johnson, J. R., 1982. <i>Mathematical Methods in Engineering and Physics.</i> Prentice-Hall, Englewood Cliffs.
#### <center>Chapter 1, Section 1: Introduction
#### <center>to be included in the main Chapter write up

__Note__: For efficiency of notation, we shall use the mathematician’s conventions of denoting the Laplacian by $\Delta$ (since we will not need to use that symbol for any other meaning), and denoting partial differentiation by subscripting the differentiation variable, e.g., $u_x = \frac{\partial u}{\partial x}$ and $u_{xx} = \frac{\partial^2u}{\partial x^2}$.&nbsp; Additionally, we will follow the "mature" convention&mdash;equivalent to choosing suitable units&mdash;of setting $c=1$ in the wave equation and $k=1$ in the diffusion equation.
<br><br>

__2__) Show that for spherical coordinates $x=r\sin\theta\cos\phi, y=r\sin\theta\sin\phi, z=r\cos\theta$ ($r \in [0, \infty), \theta \in [0, \pi], \phi \in [0,2\pi)$), the Laplacian becomes: $$\Delta\psi(r,\theta,\phi) = \psi_{rr} + \frac2r\psi_r  + \frac1{r^2}\psi_{\theta\theta} + \frac{\cot\theta}{r^2}\psi_{\theta} + \frac1{r^2\sin^2\theta}\psi_{\phi\phi}$$

__Pf__: We use Text formulas 1.1.7: $$\Delta\psi = \frac1{h_1h_2h_3}\left[\left(\frac{h_2h_3}{h_1}\psi_{q_1}\right)_{q_1} + \left(\frac{h_1h_3}{h_2}\psi_{q_2}\right)_{q_2} + \left(\frac{h_1h_2}{h_3}\psi_{q_3}\right)_{q_3}\right]$$ and 1.1.8: $$h_i^2=(x_{q_i})^2 + (y_{q_i})^2 + (z_{q_i})^2$$ where $q_1 = r, q_2 = \theta, q_3 = \phi.~$ We calculate: 

$\left.\begin{eqnarray}
(x_r)^2 & = & \sin^2\theta\cos^2\phi \quad & (y_r)^2 & = & \sin^2\theta\sin^2\phi \quad & (z_r)^2 & = & \cos^2\theta & \implies & (h_1)^2 & = & 1 \\
(x_{\theta})^2 & = & r^2\cos^2\theta\cos^2\phi \quad & (y_{\theta})^2 & = & r^2\cos^2\theta\sin^2\phi \quad & (z_{\theta})^2 & = & r^2\sin^2\theta & \implies & (h_2)^2 & = & r^2 \\
(x_{\phi})^2 & = & r^2\sin^2\theta\sin^2\phi \quad & (y_{\phi})^2 & = & r^2\sin^2\theta\cos^2\phi \quad & (z_{\phi})^2 & = & 0 & \implies & (h_3)^2 & = & r^2\sin^2\theta \\
\end{eqnarray}\right\}\implies$

$h_1h_2h_3 = \sqrt{r^4\sin^2\theta} = r^2\sin\theta$ (where an absolute value operation, here and below, is not required because of the domain of $\theta$),

$\displaystyle \frac{h_2h_3}{h_1} = r^2\sin\theta,\quad \frac{h_1h_3}{h_2} = \sin\theta,\quad \frac{h_1h_2}{h_3} = \csc\theta$ and

$\begin{eqnarray} 
\left(\frac{h_2h_3}{h_1}\psi_{q_1}\right)_{q_1} & = & (r^2\sin\theta\,\psi_r)_r & = & \sin\theta\,(2r\,\psi_r + r^2\psi_{rr}) \\\left(\frac{h_1h_3}{h_2}\psi_{q_2}\right)_{q_2} & = & (\sin\theta\,\psi_{\theta})_{\theta} & = & \cos\theta\,\psi_{\theta} + \sin\theta\,\psi_{\theta\theta} \\
\left(\frac{h_1h_2}{h_3}\psi_{q_3}\right)_{q_3} & = & (\csc\theta\,\psi_{\phi})_{\phi} & = & \csc\theta\,\psi_{\phi\phi} \\
\end{eqnarray}$

Putting it all together yields:

$\begin{eqnarray} 
\Delta\psi & = & \frac1{r^2\sin\theta}\left[\sin\theta\,(2r\,\psi_r + r^2\psi_{rr}) + \cos\theta\,\psi_{\theta} + \sin\theta\,\psi_{\theta\theta} + \csc\theta\,\psi_{\phi\phi}\right] \\
& = & \psi_{rr} + \frac2r\psi_r + \frac1{r^2}\psi_{\theta\theta} + \frac{\cot\theta}{r^2}\psi_{\theta} + \frac1{r^2\sin^2\theta}\psi_{\phi\phi} \\
\end{eqnarray}$

$\blacksquare$
<br><br>

__4__) Show that wave equation, $\Delta\psi = \psi_{tt}$, is separable in rectangular coordinates.

__Pf__: Let $\psi(x,y,z,t) = X(x)Y(y)Z(z)T(t)$, i.e., a product of single-variable functions.&nbsp; Then $\psi_{xx}(x,y,z,t) = X’’(x)Y(y)Z(z)T(t)$, where $’$ denotes ordinary differentiation with respect to the applicable function’s single variable, and similarly for $y,z,$ and $t.~$ Thus $\Delta\psi = \psi_{tt} \to X’’YZT + XY’’ZT + XYZ’’T = XYZT’’.~$ Noting that we would need to treat $X,Y,Z,T = 0$ as separate cases, we divide through by $XYZT$, obtaining: $$\frac XX’’ + \frac YY’’ + \frac ZZ’’ = \frac TT’’$$
This last equation states that a function of only $t$ (the right hand side, RHS) equals something that doesn’t depend on $t$, <i>for any value of</i> $t$; the only way this could be true is if that function of $t$ is a constant, $$\frac TT’’ (t) = \tau \to T’’ = \tau\,T.$$

This further gives: $$\frac XX’’ + \frac YY’’ + \frac ZZ’’ = \tau \to \frac XX’’ + \frac YY’’ = \tau -\frac ZZ’’ $$

where the RHS is now a function of $z$ only, while the left hand side (LHS) is independent of $z.~$ As before, this can only be true if they both equal some constant: $$\frac XX’’ + \frac YY’’ = \tau -\frac ZZ’’ =\zeta \to Z’’ = \kappa\,Z,~\kappa = \tau - \zeta.$$

Similarly, we find that $\displaystyle \frac YY’’ = \lambda$ and $\displaystyle \frac XX’’ = \mu$ for suitable constants $\lambda$ and $\mu.~$ Thus, ___if such a___ $\psi(x,y,z,t)$ ___exists as a solution to the wave equation___, the (partial differential) wave equation in rectangular coordinates can be "separated" into a system of second order, linear, constant coefficient ordinary differential equations, each dependent on only one of the independent variables.

$\blacksquare$
<br><br>

__5__) Show that the diffusion equation, $\Delta\psi = \psi_t$, is separable in cylindrical coordinates.

__Pf__: As before we postulate a solution $\psi(r,\theta,z,t) = R(r)\Theta(\theta)Z(z)T(t)$, substitute this into the equation, and "see what happens."&nbsp; The derivatives we need are: $\psi_{r} = R’\Theta ZT, \psi_{rr} = R’’\Theta ZT, \psi_{\theta\theta} = R\Theta’’ZT, \psi_{zz} = R\Theta Z’’T,$ and $\psi_t = R\Theta ZT’$, yielding: $$\Delta\psi = \psi_{rr} + \frac1r\psi_r + \frac1{r^2}\psi_{\theta\theta} + \psi_{zz} = \psi_t \to R’’\Theta ZT + \frac1r R’\Theta ZT + \frac1{r^2}R\Theta’’ZT + R\Theta Z’’T = R\Theta ZT’.$$

Again noting that $R, \Theta, Z, T = 0$ become separate cases, divide through by $R\Theta ZT$ yielding:

$$\frac RR’’ + \frac1r \frac RR’ +  \frac1{r^2}\frac{\Theta}{\Theta}’’ + \frac ZZ’’ = \frac TT’$$

Again, the RHS is a function of $t$ only, while the LHS is independent of $t$, so they must equal some constant, $\tau$: $\displaystyle \frac RR’’ + \frac1r \frac RR’ +  \frac1{r^2}\frac{\Theta}{\Theta}’’ + \frac ZZ’’ = \frac TT’ = \tau \to T’ = \tau\,T$ and $\displaystyle \frac RR’’ + \frac1r \frac RR’ +  \frac1{r^2}\frac{\Theta}{\Theta}’’ + \frac ZZ’’ = \tau \to \frac RR’’ + \frac1r \frac RR’ +  \frac1{r^2}\frac{\Theta}{\Theta}’’ = \tau - \frac ZZ’’ = \zeta$, a constant, because the RHS is a function of $z$ only $\to Z’’ = \kappa\,Z, \kappa = \tau - \zeta$, and $\displaystyle \frac RR’’ + \frac1r \frac RR’ +  \frac1{r^2}\frac{\Theta}{\Theta}’’ = \zeta.~$ Excluding $r=0$ (which the Laplacian in cylindrical coordinates requires us to do anyway), this gives $\displaystyle r^2 \frac RR’’ + r \frac RR’ + \frac{\Theta}{\Theta}’’ = \zeta r^2 \to r^2 \frac RR’’ + r \frac RR’ - \zeta r^2 = - \frac{\Theta}{\Theta}’’.~$ Now the LHS is a function of $r$ only while the RHS is a function of $\theta$ only, so they must both equal some constant, $\lambda$, yielding $\Theta’’ = -\lambda\Theta$ and $\displaystyle r^2 R’’ + r R’ - (\zeta r^2 + \lambda)R = 0$: variables separated! 

$\blacksquare$
<br><br>

__6__) Show that Laplace’s equation, $\Delta\psi = 0$, is separable in spherical coordinates.

__Pf__: Laplace’s equation in spherical coordinates is:

$$\psi_{rr} + \frac2r\psi_r  + \frac1{r^2}\psi_{\theta\theta} + \frac{\cot\theta}{r^2}\psi_{\theta} + \frac1{r^2\sin^2\theta}\psi_{\phi\phi} = 0.$$

We note at the outset that $r=0$ or $\theta = k\pi, k \in \mathbb{Z}$, make the equation "singular" and thus require a separate analysis, i.e., we exclude these from our domain of consideration.&nbsp; We postulate a solution of the form $\psi(r,\theta,\phi) = R(r)\Theta(\theta)\Phi(\phi)$; the derivatives we need are $\psi_{r} = R’\Theta\Phi, \psi_{rr} = R’’\Theta\Phi, \psi_{\theta} = R\Theta’\Phi, \psi_{\theta\theta} = R\Theta’’\Phi,$ and $\psi_{\phi\phi} = R\Theta\Phi’’.~$ Substituting, we obtain:

$$R’’\Theta\Phi + \frac2rR’\Theta\Phi + \frac1{r^2}R\Theta’’\Phi + \frac{\cot\theta}{r^2}R\Theta’\Phi + \frac1{r^2\sin^2\theta}R\Theta\Phi’’ = 0.$$

Dividing through by $R\Theta\Phi$ (noting that this requires treatment of $R, \Theta,$ or $\Phi = 0$ as separate cases) yields:

$$\frac RR’’ + \frac2r\frac RR’ + \frac1{r^2}\frac{\Theta}{\Theta}’’ + \frac{\cot\theta}{r^2}\frac{\Theta}{\Theta}’ + \frac1{r^2\sin^2\theta}\frac{\Phi}{\Phi}’’ = 0.$$

Multiplying through by $r^2$ gives:

$$r^2\frac RR’’ + 2r\frac RR’ + \frac{\Theta}{\Theta}’’ + \cot\theta\frac{\Theta}{\Theta}’ + \csc^2\theta\frac{\Phi}{\Phi}’’ = 0 \implies$$

 $$r^2\frac RR’’ + 2r\frac RR’ = -\left[\frac{\Theta}{\Theta}’’ + \cot\theta\frac{\Theta}{\Theta}’ + \csc^2\theta\frac{\Phi}{\Phi}’’\right]$$

i.e., a function of $r$ only equals a function of $\theta$ and $\phi$ only, implying both must equal a constant, $\kappa$:

$$r^2\frac RR’’ + 2r\frac RR’ = \kappa \to r^2R’’ + 2rR’ - \kappa R = 0$$

and

$$\frac{\Theta}{\Theta}’’ + \cot\theta\frac{\Theta}{\Theta}’ + \csc^2\theta\frac{\Phi}{\Phi}’’ = -\kappa \implies$$

 $$\sin^2\theta\frac{\Theta}{\Theta}’’ + \sin\theta\cos\theta\frac{\Theta}{\Theta}’ + \kappa\sin^2\theta = -\frac{\Phi}{\Phi}’’$$

i.e., a function of $\theta$ only equals a function of $\phi$ only, implying both must equal a constant, $\lambda$:

$$\sin^2\theta\frac{\Theta}{\Theta}’’ + \sin\theta\cos\theta\frac{\Theta}{\Theta}’ + \kappa\sin^2\theta = \lambda \implies$$ 
$$\Theta’’ + \cot\theta\,\Theta’ + \left(\kappa - \frac{\lambda}{\sin^2\theta}\right)\Theta = 0$$

and
$$\frac{\Phi}{\Phi}’’ = -\lambda \to \Phi’’ + \lambda\Phi = 0.$$

$\blacksquare$
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>