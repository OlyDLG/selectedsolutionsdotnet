function FutValIntFac(r, n) {
    var FVIF = Math.pow((1+r), n);
    return FVIF;
}

function FutVal(p, r, n) {
    var FV = p * FutValIntFac(r, n);
    return FV;
}

function FutValn(p, f, r) {
    var n = Math.log(f / p) / Math.log(1+r);
    return n;
}

function FutValr(p, f, n) {
    var r = Math.pow(f / p, 1/n) - 1;
    return r;
}

function PresVal(f, r, n) {
    var PV = f / FutValIntFac(r, n);
    return PV;
}

function AnnFutValFac(r, n) {
    var AFVF = (Math.pow((1+r), n) - 1) / r;
    return AFVF;
}

function AnnFutVal(m, r, n) {
    var AFV = AnnFutValFac(r, n) * m;
    return AFV;
}

function AnnPmtFromFutVal(f, r, n) {
    var m = f / AnnFutValFac(r, n);
    return m;
}

function AnnFutValn(m, f, r) {
    var n = Math.log(r * f / m + 1) / Math.log(1 + r);
    return n;
}

function AnnPresValFac(r, n) {
    var APVF = (1 - 1 / Math.pow(1+r, n)) / r;
    return APVF;
}

function AnnPresVal(m, r, n) {
    var APV = AnnPresValFac(r, n) * m;
    return APV;
}

function AnnPmtFromPresVal(p, r, n) {
    var m = p / AnnPresValFac(r, n);
    return m;
}

function AnnPresValn(m, p, r) {
    var n =  - Math.log(1 - r * p / m) / Math.log(1 + r);
    return n;
}

/* Note: calculating r from the future and/or present value of (even) a simple annuity--in the general case--requires a high-order polynomial solver, e.g., Newton’s Method, which we may add later, but is presently (Sept., 2018) "out of scope" */

function PerpPresValFac(r) {
    var PPVF = 1/r;
    return PPVF;
}

function PerpPresVal(m, r) {
    var PPV = m * PerpPresValFac(r);
    return PPV;
}

function PerpPmt(p, r) {
    var m = p * r;
    return m;
}

function Perp_r(p, m) {
    var r = m / p;
    return r;
}

function MxdFutVal(M, r) {
    var FV = 0;
    for (var i=0; i < M.length; i++) {
        FV += FutVal(M[i], r, M.length - 1 - i);
        }
    return FV;
}

function MxdPresVal(M, r) {
    var PV = 0;
    for (var i=0; i < M.length; i++) {
        PV += PresVal(M[i], r, i+1);
        }
    return PV;
}

function GenCompFac(r, n, m) {
    var GCF = Math.pow((1+r/m), m*n);
    return GCF;
}

function GenCompFutVal(p, r, n, m) {
    var f = p * GenCompFac(r, n, m);
    return f;
}

function GenCompPresVal(f, r, n, m) {
    var p = f / GenCompFac(r, n, m);
    return p;
}

function ContCompFac(r, n) {
    var CCF = Math.exp(r*n);
    return CCF;
}

function ContCompFutVal(p, r, n) {
    var f = p * ContCompFac(r, n);
    return f;
}

function ContCompPresVal(f, r, n) {
    var p = f / ContCompFac(r, n);
    return p;
}

function EffAnnRate(r, m) {
    var EAR = Math.pow(1+r/m, m) - 1;
    return EAR;
}

function NomAnnRate(e, m) {
    var r = m * (Math.pow(1+e, 1/m) - 1);
    return r;
}
