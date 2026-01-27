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
#### <center>Chapter 10, Section 5: The Dot Product
#### <center>to be included in the main Chapter write up

__12__, __14__, \& __16__) For the given pair of vectors, __a__) find their dot product; __b__) find the angle between them; and __c__) state whether they are parallel, orthogonal, or neither.

__12__) $\mathbf{v} = \mathbf{i} + \sqrt3\mathbf{j}, \mathbf{w} = \mathbf{i} - \mathbf{j}$

__Sln__: __a__) $\mathbf{v} \cdot \mathbf{w} = (1)(1)+(\sqrt3)(-1) = \boxed{1 - \sqrt3}$;
__b__) $\displaystyle \theta = \cos^{-1}\left(\frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{v}\| \|\mathbf{w}\|}\right) = \cos^{-1}\left(\frac{1-\sqrt3}{\sqrt4 \sqrt2}\right) = \cos^{-1}\left(\frac{1-\sqrt3}{2\sqrt2}\right) = \boxed{105^{\circ}}$;
__c__) so, $\boxed{\text{neither}}$.
<br><br>

__14__) $\mathbf{v} = 3\mathbf{i} - 4\mathbf{j}, \mathbf{w} = 9\mathbf{i} - 12\mathbf{j}$

__Sln__: __a__) $\mathbf{v} \cdot \mathbf{w} = (3)(9)+(-4)(-12) = 27 + 48 = \boxed{75}$; __b__) $\displaystyle \theta = \cos^{-1}\left(\frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{v}\| \|\mathbf{w}\|}\right) = \cos^{-1}\left(\frac{75}{\sqrt{25} \sqrt{225}}\right) = \cos^{-1}\left(\frac{75}{5(15)}\right) = \cos^{-1}(1) = \boxed{0^{\circ}}$; __c__) so, $\boxed{\text{parallel}}$. 
<br><br>

__16__) $\mathbf{v} = \mathbf{i}, \mathbf{w} = -3\mathbf{j}$

__Sln__: __a__) $\mathbf{v} \cdot \mathbf{w} = (1)(0)+(0)(-3) = \boxed{0}$; __b__) $\theta = \cos^{-1}(0) = \boxed{90^{\circ}}$; __c__) so, $\boxed{\text{orthogonal}}$.
<br><br>

__18__) Find $b$ so that the vectors and $\mathbf{v} = \mathbf{i} + \mathbf{j}$ and $\mathbf{w} = \mathbf{i} + b\mathbf{j}$ are orthogonal.

__Sln__: (We’re doing this one because students always seem to have a particular problem doing this kind of problem, i.e., "Find such-and-such so that such-and-such satisfies such-and-such.")

The condition for two vectors to be orthogonal is that their dot product equal zero; therefore, we need to find the value of the unknown $b$, such that $\mathbf{v} \cdot \mathbf{w} = (1)(1)+(1)(b) = 0$, i.e., we simply need to solve $1+b=0$ for $b$; doing so yields $\boxed{b=-1}$ as the required value.
<br><br>

__24__) Given $\mathbf{w}=4\mathbf{i}-\mathbf{j}$, decompose $\mathbf{v}=\mathbf{i}-3\mathbf{j}$ into two vectors $\mathbf{v}_{1,2}$ such that $\mathbf{v}_1 \parallel \mathbf{w}, \mathbf{v}_2 \perp \mathbf{w}$.

__Sln__: As in the book: $\mathbf{v}_1=\displaystyle \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{w}\|^2}\mathbf{w}= \frac{(1)(4)+(-3)(-1)}{(4)^2+(-1)^2}\mathbf{w}=\frac7{17}(4\mathbf{i}-\mathbf{j}) = \frac{28}{17}\mathbf{i}-\frac7{17}\mathbf{j}$ and $\mathbf{v}_2=\mathbf{v}-\mathbf{v}_1=\displaystyle \left(1-\frac{28}{17}\right)\mathbf{i}+\left(-3-\frac{-7}{17}\right)\mathbf{j} = -\frac{11}{17}\mathbf{i}-\frac{44}{17}\mathbf{j}$, i.e., $$\boxed{\mathbf{v} = \left(\frac{28}{17}\mathbf{i}-\frac7{17}\mathbf{j}\right) + \left(-\frac{11}{17}\mathbf{i}-\frac{44}{17}\mathbf{j}\right)}$$

Check: $\left(\frac{28}{17}\mathbf{i}-\frac7{17}\mathbf{j}\right) + \left(-\frac{11}{17}\mathbf{i}-\frac{44}{17}\mathbf{j}\right) = \frac{17}{17}\mathbf{i}-\frac{51}{17}\mathbf{j} = \mathbf{i}-3\mathbf{j}~\checkmark$

$\mathbf{v}_2 \cdot \mathbf{w} = -\frac{11}{17}(4) + \frac{-44}{17}(-1) = -\frac{44}{17}+\frac{44}{17} = 0$ so $\mathbf{v}_2 \perp \mathbf{w}~\checkmark$

$\frac7{17}\mathbf{w} = \frac7{17}(4)\mathbf{i}+\frac7{17}(-1)\mathbf{j} = \frac{28}{17}\mathbf{i}-\frac7{17}\mathbf{j} = \mathbf{v}_1~\checkmark$
<br><br>

__32__) 

__Sln__:
<br><br>

__34__) Prove the distributive property for the dot product: $$\mathbf{u} \cdot (\mathbf{v}+\mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$$

__Pf__: $\mathbf{u} \cdot (\mathbf{v}+\mathbf{w}) = (u_1\mathbf{i} + u_2\mathbf{j}) \cdot (v_1\mathbf{i} + v_2\mathbf{j} + w_1\mathbf{i} + w_2\mathbf{j}) = (u_1\mathbf{i} + u_2\mathbf{j}) \cdot ((v_1+w_1)\mathbf{i}+(v_2+w_2)\mathbf{j}) = $ $u_1(v_1+w_1) + u_2(v_2+w_2) = u_1v_1+u_1w_1 + u_2v_2+u_2w_2 = u_1v_1+u_2v_2 + u_1w_1+u_2w_2 = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}.~~~\blacksquare$
<br><br>

__36__) Given: $\mathbf{v} : \|\mathbf{v}\|=1, \alpha =$ angle between $\mathbf{v}, \mathbf{i}$; show: $\mathbf{v}=\cos\alpha\mathbf{i} + \sin\alpha\mathbf{j}$.

__Pf__: Basically, we are being asked to show that if $\mathbf{v}$ is decomposed into $\mathbf{v}_1=v_1\mathbf{i}$ and $\mathbf{v}_2=v_2\mathbf{j}$, then $v_1=\cos\alpha, v_2=\sin\alpha.~$ From the book, we know that the required $v_1 = \displaystyle \frac{\mathbf{v} \cdot \mathbf{i}}{\|\mathbf{v}\|\|\mathbf{i}\|}$; but this is also the formula for the cosine of the angle between $\mathbf{v}$ and $\mathbf{i}$, so under the given circumstances, $v_1= \cos \alpha.~$ Similarly, $v_2 = \displaystyle \frac{\mathbf{v} \cdot \mathbf{j}}{\|\mathbf{v}\|\|\mathbf{j}\|} = \cos \beta$, where $\beta$ is the angle between $\mathbf{v}$ and $\mathbf{j}$; but $\alpha+\beta = \frac{\pi}2$ (why? hint: draw a picture of the situation) so $v_2 = \cos(\frac{\pi}2-\alpha) = \sin \alpha.~~~\blacksquare$ 
<br><br>

__40__) Show that, for $\mathbf{v}, \mathbf{w} \ne \mathbf{0}$, $\mathbf{u} = \mathbf{v} - \displaystyle \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{w}\|^2}\mathbf{w}$ is orthogonal to $\mathbf{w}$.

__Pf__: It suffices to show that $\mathbf{u} \cdot \mathbf{w} = 0$; note that the assumption that $\mathbf{w} \ne \mathbf{0}$ is necessary for $\mathbf{u}$ to be well defined, and the assumption that $\mathbf{v} \ne \mathbf{0}$ is made because if $\mathbf{v} = \mathbf{0}$, the result is "trivial."&nbsp; We have:

$ \mathbf{u} \cdot \mathbf{w} = 
\left(\mathbf{v} - \displaystyle \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{w}\|^2}\mathbf{w}\right) \cdot \mathbf{w} = \mathbf{v} \cdot \mathbf{w} -\displaystyle \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{w}\|^2}\mathbf{w} \cdot \mathbf{w} = 
\mathbf{v} \cdot \mathbf{w} - \displaystyle \frac{\mathbf{v} \cdot \mathbf{w}}{\cancel{\|\mathbf{w}\|^2}}\cancel{\|\mathbf{w}\|^2} = 
\mathbf{v} \cdot \mathbf{w} - \mathbf{v} \cdot \mathbf{w} = 0.~~~\blacksquare$
<br><br>

__42__) What is the work done by a force, $\mathbf{F}$, applied orthogonal to the displacement, $\overset{\longrightarrow}{AB}$?

__Sln__: By definition, the work, $W$, is $\mathbf{F} \cdot \overset{\longrightarrow}{AB} \equiv \boxed{0}$ if $\mathbf{F}$ and $\overset{\longrightarrow}{AB}$ are orthogonal.&nbsp; (Note: this result is __very__ important in physics!)
