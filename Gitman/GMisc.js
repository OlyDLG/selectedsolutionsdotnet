function OpCashFlow(EBIT, Tax, Dep) {
  let OCF = EBIT - Tax + Dep;
  return OCF;
}

function NetFixAssInv(dFA, Dep) {
  let NFAI = dFA + Dep;
  return NFAI;
}

function SponCurLiab(AccPay, Accru) {
  let SCL = AccPay + Accru;
  return SCL;
}

function NetCurAssInv(dCA, dSCL) {
  let NCAI = dCA - dSCL;
  return NCAI;
}

function FreeCashFlow(OCF, NFAI, NCAI) {
  let FCF = OCF - NFAI - NCAI;
  return FCF;
}
