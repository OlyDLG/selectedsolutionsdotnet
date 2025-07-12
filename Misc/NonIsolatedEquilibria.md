Boyce & DiPrima, 5th Ed. 1992.  
Problem 9.1.18
Consider the system $\mathbf{x}’=\mathbf{Ax}$, and suppose that $\mathbf{A}$ has one zero eigenvalue.
a) Show that $\mathbf{x}=\mathbf{0}$ is a critical point, but not an isolated one.

Pf: $\mathbf{A0} = \mathbf{0}~\forall \mathbf{A}$ so $\mathbf{0}$ is a critical point.&nbsp; Now, zero an eigenvalue of $\mathbf{A} \implies \exists \mathbf{\xi} \ne \mathbf{0} : \mathbf{A}\mathbf{\xi} = 0 \mathbf{\xi} = \mathbf{0}.~$ Let $c$ be an arbitrary constant (real or complex); $\mathbf{0} = c\mathbf{0} = c(0)\mathbf{\xi} = \mathbf{A}(c\mathbf{\xi}) \therefore$ every neighborhood of $\mathbf{0}$, no matter how small, contains a critical point $\ne \mathbf{0}$.

Conversely, suppose $\mathbf{0}$ is a critical point, but not an isolated one; then $\exists \delta > 0 : 0 \lt r \lt \delta \implies \exists \mathbf{\xi}, |\mathbf{\xi}| = r, \mathbf{A}\mathbf{\xi} = \mathbf{0}$; but $\mathbf{0} = 0\mathbf{\xi} = \mathbf{A}\mathbf{\xi} \therefore 0$ is an eigenvalue of $\mathbf{A}$. 

Now suppose $\mathbf{x}’ = \mathbf{F}(\mathbf{x}) = \mathbf{A}\mathbf{x} + \mathbf{N}(\mathbf{x}) : \mathbf{N}(\mathbf{x})$ is entirely non-linear, but $\mathbf{N}(\mathbf{0}) = \mathbf{0}$, so that $\mathbf{0}$ is still a critical point of the system.&nbsp; The question is, what are necessary and sufficient conditions on $\mathbf{N}$ for us to conclude that this $\mathbf{A}$ has a zero eigenvalue iff $\mathbf{0}$ is not an isolated critical point?  Does it matter if $\mathbf{A}$ is the zero matrix, i.e., $\mathbf{F}$ is purely non-linear?&nbsp; 

It seems reasonably clear that if $|\mathbf{N}(\mathbf{x})| = o(|\mathbf{x}|)$, then the desired conclusion holds, but is that the weakest condition on $\mathbf{N}$ for which it does?&nbsp; Does $\mathbf{N}$ need to be continuous?&nbsp; Continuously differentiable?&nbsp; Twice continuously differentiable?&nbsp; Just Lipschitz?&nbsp; It seems like as soon as we allow the "critical manifold" to be not an $n$-flat, then there are too many ways for things to "go wrong" for this to be an "elementary" problem.