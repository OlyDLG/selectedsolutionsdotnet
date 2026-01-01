/* NR as a citation = Press, W. H., et al. (2007) "Numerical Recipes: The Art of Scientific Computing, 3rd Ed." Cambridge University Press, Cambridge, UK */  

/* GENERAL MATH FUNCTIONS */

function AbsChange(beg, end) {
    let d = end - beg;
    return d;
}

function ChangeRelBeg(beg, end) {
    let r = (beg != 0) ? (end - beg)/beg : NaN;
    return r;
}

function ChangeRelEnd(beg, end) {
    let r = (end != 0) ? (end - beg)/end : NaN;
    return r;
}

function ChangeRelMid(beg, end) {
    let b = Number(beg); let e = Number(end);
    let r = (b + e != 0) ? 2*(e - b)/(b + e) : NaN;
    return r;
}

function twoDvecComps(r, t) {// t in radians from standard position
    return [r * Math.cos(t), r * Math.sin(t)];
}

function twoDvecPolar(x,y) {
    return [Math.sqrt(x*x + y*y), Math.atan2(y, x)];
}

function dydx(y2, y1, x2, x1) {
    let dydx = (x2 != x1) ? (y2 - y1) / (x2 - x1) : NaN;
    return dydx;
}

function isNumericalArray(data) {
    let test = Array.isArray(data) && (typeof data[0] == "number");
    return test;
}

Number.prototype.zeroIfClose = function(prec) {
  const test = Math.pow(10, prec) * this.valueOf();
  if (Math.round(test)==0) return 0;
  else return this.valueOf();
};

Number.prototype.intIfClose = function(prec) {
  const temp1 = this.valueOf();
  const temp2 = Math.round(temp1);
  const test = temp1 - temp2;
  return (test.zeroIfClose(prec)==0) ? temp2 : temp1;
};

Array.prototype.someClose = function(val, prec) {
  if (isNumericalArray(this)) {
    return this.some((e) => (e-val).zeroIfClose(prec) == 0);
  }
  else {
    return this.some((e) => e==val);
  }
}

/* COMPLEX NUMBERS */

class Complex {
    constructor(a, b, prec=12) {
      this.a = a.zeroIfClose(prec); 
      this.b = b.zeroIfClose(prec);
    }
    
    print() {
      return this.a.toFixed() + " + " + this.b.toFixed() + "i";
    }

    printpolar() {
      return "r: " + this.mag().toFixed() + ", arg: " + this.arg().toFixed();
    }

    real() {return this.a;}

    imag() {return this.b;}

    mag() {// After NR
      const absa = Math.abs(this.a),
            absb = Math.abs(this.b),
            aovb2 = (absa/absb)**2;
      return (absb > absa) 
             ? absb * Math.sqrt(1+aovb2)
             : absa * Math.sqrt(1+1/aovb2);
    }

    mag2() {const temp = this.mag(); return temp * temp;}

    arg() {return Math.atan2(this.b, this.a);}

    conj() {return Complex(this.a, -this.b);}

    rmult(x) {// Multiplication by real x
      return Complex(x * this.a, x * this.b);
    }

    imult(y) {// Multiplication by pure imaginary iy
      return Complex(-y * this.b, y * this.a);
    }

    recip() {
      return ((this.a != 0) && (this.b != 0)) 
           ? this.conj().rmult(1 / this.mag2())
           : Complex(NaN,NaN);
    }

    add(z) {return Complex(this.a + z.real(), this.b + z.imag());}

    mult(z) {// After NR
      const tempac = this.a * z.real(),
            tempbd = this.b * z.imag();
      return Complex(tempac - tempbd,
             (this.a + this.b) * (z.real() + z.imag()) - tempac - tempbd
                    );
    }

    div(z) {// After NR
      let result = Complex(NaN, NaN);
      const c = z.real(), d = z.imag();
      if ((c != 0) && (d != 0)) {
        const a = this.a, b = this.b,
              cd = c / d, dc = d / c;
        if (Math.abs(d) > Math.abs(c)) {
          const denom = c * cd + d;
          result = Complex((a*cd+b)/denom, (b*cd-a)/denom);
        }
        else {
          const denom = c + d * dc;
          result = Complex((a+b*dc)/denom, (b-a*dc)/denom);
        }
      }
      return result;
    }

    log() {return ((this.a != 0) && (this.b != 0))
                ? Complex(Math.log(this.mag()), this.arg()) 
                : Complex(NaN,NaN);
    }

    exp() {
      const r = Math.exp(this.a);
      return Complex(r * Math.cos(this.b), r * Math.sin(this.b));
    }

    expi() {
      return this.mult(I).exp();
    }

    rpow(x) {// z^x, x real
      return this.log().rmult(x).exp();
    }

    pow(w) {// z^w, w complex
      return this.log().mult(w).exp();
    }
}

const I = new Complex(0.0, 1.0);

/* NUMERICAL METHODS FUNCTIONS */

  /* Zero Finding */

function simpleBisection(f, L, U, prec, tries) {
  let res = NaN;
  let fL = f(L).zeroIfClose(prec);
  let fU = f(U).zeroIfClose(prec);
  let count = 0, newGuess;
  
  while (isNaN(res) && count < tries) {
    if (fL*fU == 0) { // at least one of L or U is a root
      if (fL==0) res = L;
      else res = U;
    }
    else { // find a root
      if (fL*fU < 0) { // the guesses are on either side of a zero
        newGuess = (L+U)/2; 
		if (Math.abs(fL) < Math.abs(fU)) { // if fL is closer to zero
          U = newGuess;
          fU = f(U).zeroIfClose(prec);
        }
        else {
          L = newGuess;
          fL = f(L).zeroIfClose(prec);
        }
	  }
      else { // both guesses are on the same side of a zero        
        newGuess = Math.abs(U-L)/Math.sqrt(2);
        if (Math.abs(fL) < Math.abs(fU)) { // if fL is closer to zero
			L -= newGuess;
            fL = f(L).zeroIfClose(prec);
        }
        else {
			U += newGuess;
            fU = f(U).zeroIfClose(prec);
        }
      }
    }
    count += 1;
  }
  return res.zeroIfClose(prec);
}

  /* ODE Solvers */

function dt(tMax, n) {
    return tMax / n;
}

function ExplicitEuler(df, dt, fn, tn, params) {
    [dfA, dfB] = df(fn, tn, params);
    return [fn[0] + dt * dfA, fn[1] + dt * dfB];
}

function EulerCromer2D(f, x, t, dt) {
  // x = [x1, x2], dx1 = x2dt, dx2 = f(x,t)dt 
    [x1, x2] = x;
    x2 += f(x, t)[1] * dt; // update x2 first
    x1 += x2 * dt; // update x1 using updated x2
    return [x1, x2];
}

function RK22D(f, x, t, dt) {
  // x = [x1, x2], dx1 = x2dt, dx2 = f(x,t)dt 
    [x1, x2] = x;
    x1p = x1 + 0.5 * x2 * dt;
    x2p = x2 + 0.5 * f(x1, t) * dt;
    tp  = t  + 0.5 * dt;
    x1 += x2p * dt;
    x2 += f(x1p, tp) * dt;
    return [x1, x2];
}

function RK4nonauton(f, x, t, h) {
  function k1() {return f(x,t);} 
  function k2() {
    k2x = vecsum(x, scalarmult(h2, k1()));
    return f(k2x,th2);
  } 
  function k3() {
    k3x = vecsum(x, scalarmult(h2, k2()));
    return f(k3x,th2);
  } 
  function k4() {
    k4x = vecsum(x, scalarmult(h, k3()));
    return f(k4x,t + h);
  } 
    h2 = h/2;
    th2 = t + h2;
    temp = vecsum(k1(), scalarmult(2,k2()));
    temp = vecsum(temp, scalarmult(2,k3()));
    temp = vecsum(temp, k4());
    temp = scalarmult(h/6, temp);
    return vecsum(x, temp);    
}

function RKN42Dauton(f, x, h) {
  /* 4-th order Runge-Kutta-Nystrom method for 2-D autonomous system, i.e., for
     x=[x1,x2], x'=f(x), x(0)=A, x'(0)=B
     Ref: Qin, M-Z & W-J Zhu, 1991,"Canonical Runge-Kutta-Nystrom (RKN) Methods for 
          Ordinary Differential Equations," Computers Math. Applic. 22(9), pp 85-95. 
  */
    const rt3 = Math.sqrt(3), a21 = (2-rt3)/12, a32 = rt3/6;
    const b1 = (3-2*rt3)/12, b2 = 0.5, b3 = (3+2*rt3)/12;
    const bb1 = (5-3*rt3)/24, bb2 = (3+rt3)/12, bb3 = (1+rt3)/24;
    const c1 = 2 * bb2, c2 = (3-rt3)/6, c3 = c1;
    const h2 = h*h;

    [x1, x2] = x;
    g1 = x1 + c1*h*x2, f1 = f(g1);
    g2 = x1 + c2*h*x2 + h2*a21*f(g1), f2 = f(g2);
    g3 = x1 + c3*h*x2 + h2*a32*f(g2), f3 = f(g3);
    x1 += h*x2 + h2*(bb1*f1 + bb2*f2 + bb3*f3);
    x2 += h*(b1*f1 + b2*f2 + b3*f3);
    return [x1, x2];
}

  /* FFT */

function FFT(input) { //data, isign=1, real=false, doubledUp=false) {
/* Discrete Fourier Transform of numerical array input.data ("data"), 
   n*InvDFT if input.isign ("isign") = -1; n = data.length/2 (see below).
 
   data is overwritten by the transform, so if that is not desired, data should be a
   deep copy made prior to calling FFT.

   input.real ("real") = true => data is real, false implies complex; 
   input.doubledUp ("doubledUp") = true => data consists of two real data series, 
   "series 1" in the even-index elements, "series 2" in the odd index elements.

   As a length 2n array of real numbers, data represents a length n array of complex #'s, the
   even-index elements being the real parts, odd-index elements being the resp. imag. parts,
   i.e., z(0)=data[0]+i*data[1], z(1)=data[2]+i*data[3],...,z(n)=data[2n-2]+i*data[2n-1].

   In the "forward direction"--isign=1--the result of the DFT is stored in data as follows
   (d=sampling interval):

   data[0,1]=(Re,Im)A(f=0), data[2,3]=(Re,Im)A(f=1/(nd)),..,data[n-2,n-1]=(Re,Im)A(f=(n/2-1)/(nd)),
   data[n,n+1]=(Re,Im)A(f=+/-1/(2d)) ("combination"; meaning TBD),
   data[n+2,n+3]=(Re,Im)A(f=(1-n/2)/(nd)),..,data[2n-4,2n-3]=(Re,Im)A(f=-2/nd),
   data[2n-2,2n-1]=(Re,Im)A(f=-1/nd)

   That ordering is subsumed for the input in the "inverse" direction," i.e., 
   FFT(FFT(input.isign=1).isign=-1)=input.

   If data.length != a positive integer power of 2, data will be lengthened to be so.
   NOTE: the farther n is from the next higher power of 2, the worse will be the 
   tranform results, and this effect is exacerbated by n being "small" to begin with.
   For example, n=1025 gives worse results than n=1023, and n=33 gives worse results than
   either of those. 

   Adapted from Press, et al. 2007 "Numerical Recipes, 3rd Ed." Cambridge U. Press
*/

/* "Unpack" input */

  const data = input.data,
        isign = input.isign,
        real = input.real,
        doubledUp = input.doubledUp;

/* Ensure data.length is a power of two */
  const N = Math.pow(2, Math.ceil(Math.log2(data.length)));      
  while (data.length < N) {data.push(0);}

  const stp = isign * 2 * Math.PI,
        nn = data.length,
        n = nn / 2;

  let mmax, m, j, istep, i,
      wtemp, wr, wpr, wpi, wi,
      theta, tempr, tempi;
  
/* Bit reversal Section */
  j = 1;
  for (i=1; i<nn; i+=2) {
    if (j > i) {
      data.swap(j-1, i-1);
      data.swap(j, i);
    }
    m = n;
    while ((m>=2) && (j>m)) {
      j -= m;
      m >>= 1;
    }
    j += m;
  }

/* Danielson-Lanczos Section */
  mmax = 2;
  while (nn > mmax) {
    istep = mmax << 1;
    theta = stp / mmax;
    wtemp = Math.sin(0.5 * theta);
    wpr = -2.0 * wtemp * wtemp;
    wpi = Math.sin(theta);
    wr = 1.0;
    wi = 0.0;
    for (m=1; m<mmax; m+=2) {
      for (i=m; i<=nn; i+=istep) {
        j = i + mmax;
        tempr = wr*data[j-1] - wi*data[j];
        tempi = wr*data[j] + wi*data[j-1];
        data[j-1] = data[i-1] - tempr;
        data[j] = data[i] - tempi;
        data[i-1] += tempr;
        data[i] += tempi;
      }
      wr = (wtemp=wr)*wpr - wi*wpi + wr;
      wi = wi*wpr + wtemp*wpi + wi;
    }
    mmax = istep;
  }
  if (isign==-1) {
    data.forEach((datum, index) => {data[index] /= n;});
  }  
}

function powerSpectrum(ft) {
/* Returns the "power spectrum" of DFT "ft", 
   with the same result indexing structure produced by FFT 
*/
  const N=ft.length, ps = [];
  for (let n=0; n < N; n+=2) {
    ps.push( Math.sqrt(ft[n]*ft[n] + ft[n+1]*ft[n+1]) );
  }
}

/* MATRIX FUNCTIONS */

function getColumn(M, j) {
/* Returns column j of nrows by ncols(<j+1) matrix M
   as an nrows x 1 array, i.e., an nrows column vector
*/
  const col = [];
  for (let i=0; i < M.length; i++) {
    col[i] = M[i][j];
  }
  return col;
}

function transpose(M) { 
/* M is an nrows by ncols matrix to be transposed to 
   an ncols x nrows matrix Mt
*/
  const nrows = M.length, 
        ncols = M[0].length,
        Mt = [];
    
  // Give new array the right number of rows
  for (let i=0; i < ncols; i++) {
    Mt[i] = [];
  }

  // Populate Mt
  for (let i=0; i < nrows; i++) {
    for (let j=0; j < ncols; j++) {
      Mt[j][i] = M[i][j];
    }
  }
  return Mt;
}

function scalarmult(a, u) {
    let rslt = [];
    if (isNumericalArray(u)) {
        for (i=0; i < u.length; i++) {
            rslt[i] = a * u[i]; 
        }
    }
    return rslt;
}

function vecsum(u, v) {
    let sum = [];
    if (isNumericalArray(u) &&
         isNumericalArray(v) &&
         u.length == v.length) {
        for (i=0; i < u.length; i++) {
            sum[i] = u[i] + v[i];
        }
    }
    return sum;
}

function dot(u, v) {
    let rslt = Number.NaN;
    if (isNumericalArray(u) &&
         isNumericalArray(v) &&
         u.length == v.length) {
         rslt = u[0] * v[0];
         for (i=1; i<u.length; i++) {
             rslt += u[i] * v[i];
         }
    }
    return rslt;
}

function sqmag(v) {
    return dot(v, v);
}

function mag(v) {
    return Math.sqrt(sqmag(v));
}

function arrayMult(u, v) {
    rslt = [];
    if (isNumericalArray(u) &&
         isNumericalArray(v) &&
         u.length == v.length) {
         for (i=0; i < u.length; i++) {
             rslt[i] = u[i] * v[i];
         }
     }
     return rslt;
}

function Xprod(u, v) {
    return [u[1] * v[2] - u[2] * v[1],
                 u[2] * v[0] - u[0] * v[2],
                 u[0] * v[1] - u[1] * v[0] ]; 
}

/* STATISTICAL FUNCTIONS */

function MinMaxRng(data) {
    let rslt = [];
    if (isNumericalArray(data)) {
        rslt = [Math.min.apply(null, data), Math.max.apply(null, data), 0];
        rslt[rslt.length-1] = rslt[1] - rslt[0];
    }
    return rslt;
}

/*
function range(data) {
    let rng = 0;
    if (isNumericalArray(data)) {
        let mM = MinMax(data);
        let rng = mM[1] - mM[0];
    }
    return rng;
}
*/

function EV(data, prob) {
    let rslt = Number.NaN;
    if (isNumericalArray(data)) {
        if (typeof prob === "undefined") {
            rslt = data[0] / data.length;
            for (i=1; i<data.length; i++) {
                rslt += data[i] /data.length;
            }
        }
        else {
	    rslt = dot(data, prob);
        }
    }
    return rslt; 
}

function subcnst(data, cnst) {
    let rslt = [];
    if (isNumericalArray(data)) {
        for (i=0; i < data.length; i++) {
            rslt[i] = data[i] - cnst;
        }
    }
    return rslt;
}

function SD(data, prob) {
    let rslt, ev, tmp, temp, ttmp;
    ev = (typeof prob === "undefined") ? EV(data) : EV(data,prob);
    tmp = subcnst(data, ev);
    temp = (typeof prob === "undefined") ? scalarmult(1/(data.length-1), tmp) : arrayMult(tmp, prob);
    ttmp = dot(tmp, temp);
    rslt = Math.sqrt(ttmp);
    return rslt; 
}

function CoV(data, prob) {
    let rslt;
    let ev = EV(data, prob);
    if (ev != Number.NaN) {
        rslt = SD(data,prob) / ev;
    }
    return rslt;
}

/* Unit Conversions */
function feet2Meters(ft) {return 0.3048 * ft;}

function meters2Feet(m) {return m / 0.3048;}

function miles2Feet(mi) {return 5280 * mi;}

function miles2Meters(mi) {return 1609.34 * mi;}

function miph2Metps(mph) {return 0.44704 * mph;}

function deg2Rad(deg) {return Math.PI * deg / 180;}

function rpm2Radps(rpm) {return 2 * Math.PI * rpm / 60;}

