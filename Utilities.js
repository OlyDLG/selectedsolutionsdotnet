function removeCommas(s) {
    var noCommas = s.replace(/,/g , "");
    return noCommas;
}

function addCommas(s) {
    tmp = s.split(".");
    var mant = tmp[0];
    var dec = tmp[1]; 
    var res = "." + dec;
    for (i=0; i<mant.length; i++) {
      res = mant[mant.length-1-i] + res;
      if ((i % 3)==2 && (i != mant.length-1)) {
        res = "," + res;
      }
    }
    return res;
}

function dgEBIiH(id) {
    return document.getElementById(id).innerHTML; 
}

function dsEBIiH(id, val) {
    document.getElementById(id).innerHTML = val; 
}

function dgCheckBoxState(id) {
    return document.getElementById(id).checked; 
}

function toggleHidden(id) {
    element = document.getElementById(id);
    element.hidden = !element.hidden;
}

function supJS(s) {
    return String(s) + "<sup>JS</sup>";
}

function JSnote() {
    dsEBIiH("JSnote", supJS(""));
}

/* MATH FUNCTIONS */

function AbsChange(beg, end) {
    var d = end - beg;
    return d;
}

function ChangeRelBeg(beg, end) {
    var r = (beg != 0) ? (end - beg)/beg : NaN;
    return r;
}

function ChangeRelEnd(beg, end) {
    var r = (end != 0) ? (end - beg)/end : NaN;
    return r;
}

function ChangeRelMid(beg, end) {
    var b = Number(beg); var e = Number(end);
    var r = (b + e != 0) ? 2*(e - b)/(b + e) : NaN;
    return r;
}

function twoDvecComps(r, t) {// t in radians from standard position
    return [r * Math.cos(t), r * Math.sin(t)];
}

function twoDvecPolar(x,y) {
    return [Math.sqrt(x*x + y*y), Math.atan2(y, x)];
}

function dydx(y2, y1, x2, x1) {
    var dydx = (x2 != x1) ? (y2 - y1) / (x2 - x1) : NaN;
    return dydx;
}

function isNumericalArray(data) {
    var test = Array.isArray(data) && (typeof data[0] == "number");
    return test;
}

Number.prototype.zeroIfClose = function(prec) {
  var test = Math.pow(10, prec) * this.valueOf();
  if (Math.round(test)==0) return 0;
  else return this.valueOf();
};

function simpleBisection(f, L, U, prec, tries) {
  var res = NaN;
  var fL = f(L).zeroIfClose(prec);
  var fU = f(U).zeroIfClose(prec);
  var count = 0, newGuess;
  
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

/* NUMERICAL METHODS FUNCTIONS */

function dt(tMax, n) {
    return tMax / n;
}

function ExplicitEuler(df, dt, fn, tn, params) {
    [dfA, dfB] = df(fn, tn, params);
    return [fn[0] + dt * dfA, fn[1] + dt * dfB];
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

/* MATRIX FUNCTIONS */

function scalarmult(a, u) {
    var rslt = [];
    if (isNumericalArray(u)) {
        for (i=0; i < u.length; i++) {
            rslt[i] = a * u[i]; 
        }
    }
    return rslt;
}

function vecsum(u, v) {
    var sum = [];
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
    var rslt = Number.NaN;
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
    var rslt=[];
    if (isNumericalArray(data)) {
        rslt = [Math.min.apply(null, data), Math.max.apply(null, data)];
    }
    return rslt;
}

function range(data) {
    var rng = 0;
    if (isNumericalArray(data)) {
        var mM = MinMax(data);
        var rng = mM[1] - mM[0];
    }
    return rng;
}

function EV(data, prob) {
    var rslt = Number.NaN;
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
    var rslt = [];
    if (isNumericalArray(data)) {
        for (i=0; i < data.length; i++) {
            rslt[i] = data[i] - cnst;
        }
    }
    return rslt;
}

function SD(data, prob) {
    var rslt, ev, tmp, temp, ttmp;
    ev = (typeof prob === "undefined") ? EV(data) : EV(data,prob);
    tmp = subcnst(data, ev);
    temp = (typeof prob === "undefined") ? scalarmult(1/(data.length-1), tmp) : arrayMult(tmp, prob);
    ttmp = dot(tmp, temp);
    rslt = Math.sqrt(ttmp);
    return rslt; 
}

function CoV(data, prob) {
    var rslt;
    var ev = EV(data, prob);
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

/* Google Charts Support */
const globalChartOptions = {chartArea: {top: 10}, legend: 'bottom'};
/*
Not presently needed/used, development suspended

function addDataSeries(DataTable, newDataArray, newDataLabels) {
	var origNCols = DataTable.getNumberOfColumns();
	var origNRows = DataTable.getNumberOfRows();
	var newNCols = newDataArray[0].length-1; //Don’t count the ind. var. col.
	var newNRows = newDataArray.length;
	var nDAtype = typeof(newDataArray[0][0]);
	for (i=0; i < newDataLabels.length; i++) {
            DataTable.addColumn(nDAtype, newDataLabels[i]);
        }
	var newRow = [];
	for (i=0; i < newNRows; i++) {
	    newRow[0] = newDataArray[i][0];
	    for (j=1; j < origNCols; j++) {
	    	newRow[j] = NaN;
	    }
	    for (k=0; k < newNCols; k++) {
	        newRow[origNCols+k] = newDataArray[i][k+1];
	    }
	    DataTable.addRow(newRow);
	}
}

function create2DArray(rows, cols, value) {
  return Array.from({ length: rows }, () => Array(cols).fill(value));
}
*/