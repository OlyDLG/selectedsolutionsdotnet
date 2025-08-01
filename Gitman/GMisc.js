function OpCashFlow(EBIT, Tax, Dep) {
    var OCF = EBIT - Tax + Dep;
    return OCF;
}

function NetFixAssInv(dFA, Dep) {
    var NFAI = dFA + Dep;
    return NFAI;
}

function SponCurLiab(AccPay, Accru) {
    var SCL = AccPay + Accru;
    return SCL;
}

function NetCurAssInv(dCA, dSCL) {
    var NCAI = dCA - dSCL;
    return NCAI;
}

function FreeCashFlow(OCF, NFAI, NCAI) {
    var FCF = OCF - NFAI - NCAI;
    return FCF;
}
