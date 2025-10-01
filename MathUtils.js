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

const I = Complex(0.0, 1.0);

class Complex {
    constructor(a, b, prec=10) {
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

    mag2() {return this.a**2 + this.b**2;}

    mag() {return Math.sqrt(this.mag2());}

    arg() {return Math.atan2(this.b, this.a);}

    conj() {return Complex(this.a, -this.b);}

    add(z) {return Complex(this.a + z.real(), this.b + z.imag());}

    mult(z) {return Complex(this.a * z.real() - this.b * z.imag(),
                            this.a * z.imag() + this.b * z.real());}

    recip() {
      const r2 = this.mag2();
      return (r2 != 0) ? Complex(this.a / r2, -this.b / r2) : Complex(NaN,NaN);
    }

    div(z) {return (z.mag2() != 0) ? this.mult(z.recip()) : Complex(NaN,NaN);}

    log() {return (this.mag2() != 0) ? 
           Complex(Math.log(this.mag()), this.arg()) : Complex(NaN,NaN);
    }

    exp() {
      const r = Math.exp(this.a);
      return Complex(r * Math.cos(this.b), r * Math.sin(this.b));
    }

    expi() {
      return this.mult(I).exp()
    }

    pow(w) {return (w.mult(this.log())).exp();}
}

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

function RK42Dnonauton(f, x, t, h) {
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

function reverseBits(n) {
    let reversed = 0;
    if n.isInteger() {
      for (let i=0; i<32; i++) {
        ;
      }
    }
    return reversed; 
}

/* MATRIX FUNCTIONS */

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

function MinMax(data) {
    let rslt=[];
    if (isNumericalArray(data)) {
        rslt = [Math.min.apply(null, data), Math.max.apply(null, data)];
    }
    return rslt;
}

function range(data) {
    let rng = 0;
    if (isNumericalArray(data)) {
        let mM = MinMax(data);
        let rng = mM[1] - mM[0];
    }
    return rng;
}

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

