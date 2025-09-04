function RateOfRet(c, p0, p1) {
  return (c + p1 - p0) / p0;
}

function Riskier(p1, p2) {
    let riskier = (p1 == p2);
    if (riskier) {
        riskier = "equally risky";
    }
    else {
        riskier = (p1 > p2) ? "Portfolio A" : "Portfolio B";
    }
    return riskier
}

function PB(weights, betas) {
    let rslt = Number.NaN;
    if ((weights.length==betas.length) &&
         isNumericalArray(weights) &&
         isNumericalArray(betas)) {
        rslt = dot(weights, betas);
    }
    return rslt;
}