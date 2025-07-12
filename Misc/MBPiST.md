1.1) $N(t) = N(0)\exp\{(\lambda - \mu)t\}$

Fig. 1.1

1.2) $N(t+1) = N(t)[a-bN(t)]$

1.3) $\dot{N}(t) = rN(t)[1-N(t)/K]$

1.4) $\dot{N}(t) = rN(t-t_G)[1-N(t-t_D)/K]$

1.5a) $\dot{N}_1 = N_1(r_1 + a_{11}N_1 + a_{12}N_2) $ 
1.5b) $\dot{N}_2 = N_2(r_2 + a_{21}N_1 + a_{22}N_2) $

1.6a) $\dot{N}_1 = N_1(r_1 - b_1N_2)$ (prey)
1.6b) $\dot{N}_2 = N_2(-r_2 + b_2N_1)$ (predator)

1.7) $\dot{N}_1 = N_1(r_1 - cN_1 - b_1N_2)$

1.8a)  $\dot{N}_1 = -\beta N_1 N_2~~$ (susceptibles)
1.8b)  $\dot{N}_2 = N_2(-\gamma_2 + \beta N_1)~~~$(infectives)


Fig. 2.1

2.1) $N(t+h) = N(t) + \lambda h N(t)$

2.2) $\dot{N}(t) = \lambda N(t)$

2.3) $N(t) = N(0)\exp(\lambda t)$

2.4) $\log[N(t)] = \log[N(0)] + \lambda t$

$p_N (t) = P(\text{pop} = N @ t) $ 

2.5) $p_N (t+h) = p_N(t) \times (1-\lambda Nh) + p_{N-1}(t) \times \lambda (N-1)h$

2.6) $\dot{p}_N(t) = -\lambda N p_N(t) + \lambda (N-1)p_{N-1}(t)$

2.7) $p_N(t) = _{N-1}C_{n_0-1} \exp(-\lambda n_0 t) [1-\exp(-\lambda t)]^{N-n_0}~~~~~(N = n_0, n_0+1,...)$

2.8) $m(t) = n_0 e^{\lambda t} \text{ and } V(t) = n_0 e^{\lambda t}(e^{\lambda t} - 1)$

2.9) $p_N(t) = e^{-\lambda t}(1 - e^{-\lambda t})^{N-1}~~~~~(N \in \mathbb{N})$

Fig. 2.2

2.10) $p_N(t)/p_{N-1}(t) = [(N-1)/(N-n_0)](1-e^{-\lambda t})$

2.11) $N_m = (n_0 - 1)e^{\lambda t} + 1$

2.12) $\surd \{ V(t)\}/m(t) = \surd \{ n_0 e^{\lambda t} (e^{\lambda t} - 1)\}/n_0 e^{\lambda t}$
$= \surd(1-e^{-\lambda t})/\surd(n_0) \sim 1/\surd (n_0) $

2.13) $P(S \ge s) = \exp(-\lambda N s)~~~(s \in \mathbb{R} \ge 0)$

Table 2.1

2.14) $\exp(-\lambda N s) = Y$

2.15) $s = -[log(Y)]/(\lambda N)$

Fig. 2.3

2.16) $P(T_a \le t) = P(N(t) \ge a)$

2.17) $P(T_a \le t) = \sum_{N=a}^{\infty} _{N-1}C_{n_0 - 1} exp(-\lambda n_0 t)(1-e^{-\lambda t})^{N-n_0}$

2.18) $P(T_a \le t) = \sum_{N=a}^{\infty} e^{-\lambda t} (1 - e^{-\lambda t})^{N-1} = (1 - e^{-\lambda t})^{a-1}$

2.19) g(t) = \lambda (a-1) e^{-\lambda t}(1-e^{-\lambda t })^{a-2}

 



