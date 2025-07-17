<style>
body {font-family: Palatino}
</style>
## <center><i>Binomial Expansion Formula & Corollaries</i>
#### <center>&copy; 2017, 2025 by 
#### <center>David Lawrence Goldsmith
#### <center>for
## <center>[SelectedSolutionsDotNet](https://olydlg.github.io/selectedsolutionsdotnet/)

##### Preface

These are all "elementary" results, and the first three are "Standard" as well (see, e.g., <i>CRC Standard Mathematical Tables</i>) and I make no claim to originality of statement or of proof. I provide them here simply as a "public service"; my only request is that if you utilize this content in some way, please cite this document properly.
<br><br>

##### Binomial Expansion Formula 
$$(1+b)^N = \sum_{n=0}^N \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) b^{N-n}$$
(Taking $0!$ and $0^0 \equiv 1.$)  
<b>Proof</b>: By induction: it's true for $\displaystyle N=0: \sum_{n=0}^0 \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right)b^{N-n} = \left(\!
  \begin{array}{c}
    0 \\
    0
  \end{array}
  \!\right)b^{0-0} = 1 = (1+b)^0~\forall b$.<br>
  
Now we show that true for $N \in \mathbb{W}$ implies true for $N+1$:

$$\sum_{n=0}^{N+1} \left(\!
  \begin{array}{c}
    N + 1\\
    n
  \end{array}
  \!\right)b^{N-n+1} = \left(\!
  \begin{array}{c}
    N + 1\\
    0
  \end{array}
  \!\right) b^{N+1} + \sum_{n=1}^{N} \left(\!
  \begin{array}{c}
    N + 1\\
    n
  \end{array}
  \!\right)b^{N-n+1} + \left(\!
  \begin{array}{c}
    N + 1\\
    N + 1
  \end{array}
  \!\right) b^0 =$$
  <br>
  $$b^{N+1} + \sum_{n=1}^{N} \frac{(N+1)!}{n!(N+1-n)!} b^{N+1-n} + 1 = b^{N+1} + \sum_{n=1}^{N} \frac{(N - n + 1 + n)N!}{n!(N+1-n)!} b^{N+1-n} + 1 =$$<br>
$$b^{N+1} + \sum_{n=1}^{N} \left[\frac{(N-n+1)N!}{n!(N-n+1)!} + \frac{nN!}{n!(N-(n-1))!}\right] b^{N+1-n} + 1 =$$
<br>
$$b^{N+1} + \sum_{n=1}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) b^{N-n+1} + \sum_{n=1}^{N}\left(\!
  \begin{array}{c}
    N \\
    n-1
  \end{array}
  \!\right) b^{N-(n-1)} + 1 =$$
  <br>
  $$b\left[b^N + \sum_{n=1}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) b^{N-n}\right] + \left[\sum_{n=0}^{N-1}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) b^{N-n} + 1\right] = b \sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) b^{N-n} + \sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) b^{N-n} =$$
  <br>
  $$(b+1)(b+1)^N~(\because \sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) b^{N-n} = (1+b)^N \text{ by assumption}) =(1+b)^{N+1}.~~~\blacksquare$$ 
<br>

##### Corollary 1
$$(a+b)^N = \sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) a^n b^{N-n}
  $$
  
<b>Proof</b>: If $a = 0$, it's true by (careful) inspection (and our definition $0^0 \equiv 1$), so assume $a \ne 0$. Then 
$$(a + b)^N = a^N (1+(b/a))^N = a^N \sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) 1^n \left(\frac{b}{a}\right)^{N-n} = \sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) a^{N-(N-n)} b^{N-n} = \sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) a^n b^{N-n}.~~~\blacksquare$$
  Note: this is why one proves the binomial expansion formula (BEF) as above, and then derives the "general" result as a corollary; alternatively, if one insists on calling our "Corollary 1" the BEF, one can call our BEF a "Lemma" (but the Reader should recognize that it's really "six one way, half-a-dozen the other.") 
<br><br>

##### Corollary 2
$$\sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) = 2^N$$
  <br>
<b>Proof</b>: $$\sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) = \sum_{n=0}^{N}\left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) 1^n 1^{N-n} = (1+1)^N = 2^N.~~~\blacksquare$$
  <br>
  Note: this "explains" why the sum of each row of [Pascal's Triangle](https://en.wikipedia.org/wiki/Pascal's_triangle) is 2 raised to the power of the-row-number-minus-one (or simply the row number, if one starts numbering from zero).
<br><br>

(You'll probably never have to use these next two&mdash;except perhaps in an exam of some sort or another&mdash;they're just given to show some of the "creative" ways one can use this little tidbit of mathematics in combination with [Euler's Formula](https://en.wikipedia.org/wiki/Euler%27s_formula).)
<br><br>

##### Corollary 3

$$\sum_{n=0}^N \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) \cos{[(2n-N)\theta]} = (2\cos\theta)^N$$
  $$\sum_{n=0}^N \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) \sin{[(2n-N)\theta]} = 0$$
<b>Proof</b>: For $\theta \in \mathbb{R}$,
$$(2\cos \theta)^N = \left(e^{i\theta} + e^{-i\theta}\right)^N = \sum_{n=0}^N \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) e^{in\theta}e^{-i(N-n)\theta} = \sum_{n=0}^N \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) e^{i(2n-N)\theta} =$$ $$\sum_{n=0}^N \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right) \cos{[(2n-N)\theta]} + i\sin{[(2n-N)\theta]} \implies \text{both our results.}~~~\blacksquare$$
<br><br>

##### Corollary 4

$$\Re{[(2i\sin{\theta})^N]} = \sum_{n=0}^N \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right)(-1)^{N-n}\cos{[(2n-N)\theta]}$$
$$\Im{[(2i\sin{\theta})^N]} = \sum_{n=0}^N \left(\!
  \begin{array}{c}
    N \\
    n
  \end{array}
  \!\right)(-1)^{N-n}\sin{[(2n-N)\theta]}$$
(where $\Re$ and $\Im$ are, respectively, the real and imaginary parts of their argument.)

<b>Proof</b>: Left to the Reader. (Hint: use the method used to prove "Corollary 3," but don't "stop" as soon.)
<br><br>

##### References

Beyer, W. H., 1985. <i>CRC Standard Mathematical Tables, $27^{th}$Edition</i>. CRC Press, Inc., Boca Raton, FL.