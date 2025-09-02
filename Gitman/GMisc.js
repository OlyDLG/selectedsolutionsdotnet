function OpCashFlow(EBIT, Tax, Dep) {
  const OCF = EBIT - Tax + Dep;
  return OCF;
}

function NetFixAssInv(dFA, Dep) {
  const NFAI = dFA + Dep;
  return NFAI;
}

function SponCurLiab(AccPay, Accru) {
  const SCL = AccPay + Accru;
  return SCL;
}

function NetCurAssInv(dCA, dSCL) {
  const NCAI = dCA - dSCL;
  return NCAI;
}

function FreeCashFlow(OCF, NFAI, NCAI) {
  const FCF = OCF - NFAI - NCAI;
  return FCF;
}
