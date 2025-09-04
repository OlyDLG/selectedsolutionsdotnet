function FutValIntFac(r, n) {
    const FVIF = Math.pow((1+r), n);
    return FVIF;
}

function FutVal(p, r, n) {
    const FV = p * FutValIntFac(r, n);
    return FV;
}

function FutValn(p, f, r) {
    const n = Math.log(f / p) / Math.log(1+r);
    return n;
}

function FutValr(p, f, n) {
    const r = Math.pow(f / p, 1/n) - 1;
    return r;
}

function PresVal(f, r, n) {
    const PV = f / FutValIntFac(r, n);
    return PV;
}

function AnnFutValFac(r, n) {
    const AFVF = (Math.pow((1+r), n) - 1) / r;
    return AFVF;
}

function AnnFutVal(m, r, n) {
    const AFV = AnnFutValFac(r, n) * m;
    return AFV;
}

function AnnPmtFromFutVal(f, r, n) {
    const m = f / AnnFutValFac(r, n);
    return m;
}

function AnnFutValn(m, f, r) {
    const n = Math.log(r * f / m + 1) / Math.log(1 + r);
    return n;
}

function AnnPresValFac(r, n) {
    const APVF = (1 - 1 / Math.pow(1+r, n)) / r;
    return APVF;
}

function AnnPresVal(m, r, n) {
    const APV = AnnPresValFac(r, n) * m;
    return APV;
}

function AnnPmtFromPresVal(p, r, n) {
    const m = p / AnnPresValFac(r, n);
    return m;
}

function AnnPresValn(m, p, r) {
    const n =  - Math.log(1 - r * p / m) / Math.log(1 + r);
    return n;
}

/* Note: calculating r from the future and/or present value of (even) a simple annuity--in the general case--requires a high-order polynomial solver, e.g., Newton’s Method, which we may add later, but is presently (Sept., 2018) "out of scope" */

function PerpPresValFac(r) {
    const PPVF = 1/r;
    return PPVF;
}

function PerpPresVal(m, r) {
    const PPV = m * PerpPresValFac(r);
    return PPV;
}

function PerpPmt(p, r) {
    const m = p * r;
    return m;
}

function Perp_r(p, m) {
    const r = m / p;
    return r;
}

function MxdFutVal(M, r) {
    let FV = 0;
    for (i=0; i < M.length; i++) {
        FV += FutVal(M[i], r, M.length - 1 - i);
    }
    return FV;
}

function MxdPresVal(M, r) {
    let PV = 0;
    for (i=0; i < M.length; i++) {
        PV += PresVal(M[i], r, i+1);
    }
    return PV;
}

function GenCompFac(r, n, m) {
    const GCF = Math.pow((1+r/m), m*n);
    return GCF;
}

function GenCompFutVal(p, r, n, m) {
    const f = p * GenCompFac(r, n, m);
    return f;
}

function GenCompPresVal(f, r, n, m) {
    const p = f / GenCompFac(r, n, m);
    return p;
}

function ContCompFac(r, n) {
    const CCF = Math.exp(r*n);
    return CCF;
}

function ContCompFutVal(p, r, n) {
    const f = p * ContCompFac(r, n);
    return f;
}

function ContCompPresVal(f, r, n) {
    const p = f / ContCompFac(r, n);
    return p;
}

function EffAnnRate(r, m) {
    const EAR = Math.pow(1+r/m, m) - 1;
    return EAR;
}

function NomAnnRate(e, m) {
    const r = m * (Math.pow(1+e, 1/m) - 1);
    return r;
}
