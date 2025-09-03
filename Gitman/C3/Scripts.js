function G3P1() {
  // Asset A
    const Acost = Number(dgEBIiH("Acost"));
    dsEBIiH("Acost1", Acost);
    dsEBIiH("Acost2", Acost);
    dsEBIiH("Acost3", Acost);

  // Year 1
    const Ap1 = Number(dgEBIiH("A%1"));
    const Adep1 =  Acost * Ap1 / 100;
    dsEBIiH("Adep1", Adep1);
  // Year 2
    const Ap2 = Number(dgEBIiH("A%2"));
    const Adep2 =  Acost * Ap2 / 100;
    dsEBIiH("Adep2", Adep2);
  // Year 3
    const Ap3 = Number(dgEBIiH("A%3"));
    const Adep3 =  Acost * Ap3 / 100;
    dsEBIiH("Adep3", Adep3);
  // Year 4
    const Ap4 = Number(dgEBIiH("A%4"));
    const Adep4 =  Acost * Ap4 / 100;
    dsEBIiH("Adep4", Adep4);    
// Totals
    const ApTot = Ap1 + Ap2 + Ap3 + Ap4;
    dsEBIiH("ApTot", ApTot);
    const AdepTot = Adep1 + Adep2 + Adep3 + Adep4;
    dsEBIiH("AdepTot", AdepTot);

  // Asset B
    const Bcost = Number(dgEBIiH("Bcost"));
    dsEBIiH("Bcost1", Bcost);
    dsEBIiH("Bcost2", Bcost);
    dsEBIiH("Bcost3", Bcost);
    dsEBIiH("Bcost4", Bcost);
    dsEBIiH("Bcost5", Bcost);

  // Year 1
    const Bp1 = Number(dgEBIiH("B%1"));
    const Bdep1 =  Bcost * Bp1 / 100;
    dsEBIiH("Bdep1", Bdep1);
  // Year 2
    const Bp2 = Number(dgEBIiH("B%2"));
    const Bdep2 =  Bcost * Bp2 / 100;
    dsEBIiH("Bdep2", Bdep2);
  // Year 3
    const Bp3 = Number(dgEBIiH("B%3"));
    const Bdep3 =  Bcost * Bp3 / 100;
    dsEBIiH("Bdep3", Bdep3);
  // Year 4
    const Bp4 = Number(dgEBIiH("B%4"));
    const Bdep4 =  Bcost * Bp4 / 100;
    dsEBIiH("Bdep4", Bdep4);
  // Year 5
    const Bp5 = Number(dgEBIiH("B%5"));
    const Bdep5 =  Bcost * Bp5 / 100;
    dsEBIiH("Bdep5", Bdep5);
  // Year 6
    const Bp6 = Number(dgEBIiH("B%6"));
    const Bdep6 =  Bcost * Bp6 / 100;
    dsEBIiH("Bdep6", Bdep6);
  // Totals
    const BpTot = Bp1 + Bp2 + Bp3 + Bp4 + Bp5 + Bp6;
    dsEBIiH("BpTot", BpTot);
    const BdepTot = Bdep1 + Bdep2 + Bdep3 + Bdep4 + Bdep5 + Bdep6;
    dsEBIiH("BdepTot", BdepTot);
}

function G3P8() {
    const Mon0ARR = dgEBIiH("Mon0ARR");
    const Nov03Sales = dgEBIiH("Nov03Sales")
    let str = Mon0ARR + "(" + Nov03Sales + ") = <b id=\"NovLag0Rec\">" + 
              Number(dgEBIiH("Mon0ARR")) * Number(dgEBIiH("Nov03Sales")) + "</b>";
//    dsEBIiH("Nov03CashSales", str);
}

function G3P11() {
  const s = Number(removeCommas(dgEBIiH("2K4Sales")));
  dsEBIiH("Sales", s);
    // Cost of goods sold
  const cogs = Number(dgEBIiH("cogsp")) * s;
  dsEBIiH("cogs", "<sp class=sum>" + cogs + "</sp>");
    // Gross Profits
  const gp = s - cogs;
  dsEBIiH("gp", "<sp class=sum>" + gp + "</sp>");
    // Operating Expenses
  const opx = Number(dgEBIiH("opxp")) * s;
  dsEBIiH("opx", "<sp class=sum>" + opx.toFixed(1) + "</sp>");
    // Operating Profits
  const op = gp - opx;
  dsEBIiH("op", "<sp class=sum>" + op.toFixed(1) + "</sp>");
    // Interest
  const int = dgEBIiH("Int");
  dsEBIiH("int", int);
    // Profits before taxes
  const pb4t = op - int;
  dsEBIiH("pb4t", "<sp class=sum>" + pb4t.toFixed(1) + "</sp>");
    // Taxes
  const tax = Number(dgEBIiH("tr")) * pb4t;
  dsEBIiH("tax", "<sp class=sum>" + tax.toFixed(1) + "</sp>");
    // Profits after taxes
  const paft = pb4t - tax;
  dsEBIiH("paft", "<sp class=sum>" + paft.toFixed(1) + "</sp>");
    // Dividends
  const div = Number(dgEBIiH("Div"));
  dsEBIiH("div", div);
    // To retained earnings
  const tre = paft - div;
  dsEBIiH("tre", "<sp class=sum>" + tre.toFixed(1) + "</sp>");

   // Part b) Fixed vs. variable cost method
   // variable cost of goods sold
  const vcogsr = 0.5; // 700 /1400
  const vcogs = vcogsr * s;
  dsEBIiH("vcogsr", "&nbsp;&nbsp;&nbsp;&nbsp;Variable (700/1400 = <sp class=sum>" + vcogsr + "</sp>)");
  dsEBIiH("vcogs", "<sp class=sum>" + vcogs + "</sp>");
    // Gross Profits
  const vgp = s - Number(dgEBIiH("fcogs")) - vcogs;
  dsEBIiH("vgp", "<sp class=sum>" + vgp + "</sp>");
   // Variable operating expenses
  const vopxr = 84 /1400;
  const vopx = vopxr * s;
  dsEBIiH("vopxr", "&nbsp;&nbsp;&nbsp;&nbsp;Variable (84/1400 = <sp class=sum>" + vopxr + "</sp>)");
  dsEBIiH("vopx", "<sp class=sum>" + vopx + "</sp>");
    // Operating profits
  const vop = vgp - Number(dgEBIiH("fopx")) - vopx;
  dsEBIiH("vop", "<sp class=sum>" + vop + "</sp>");
    // Profit before taxes
  const vpb4t = vop - int;
  dsEBIiH("vpb4t", "<sp class=sum>" + vpb4t + "</sp>");
    // Taxes
  const vtax = Number(dgEBIiH("tr")) * vpb4t;
  dsEBIiH("vtax", "<sp class=sum>" + vtax.toFixed(1) + "</sp>");
    // Profits after taxes
  const vpaft = vpb4t - vtax;
  dsEBIiH("vpaft", "<sp class=sum>" + vpaft.toFixed(1) + "</sp>");
    // To retained earnings
  const vtre = vpaft - div;
  dsEBIiH("vtre", "<sp class=sum>" + vtre.toFixed(1) + "</sp>");
}

function G3P12() {
  const sales = Number(removeCommas(dgEBIiH("G3P12Sales")));
  const cash = Number(dgEBIiH("Cash"));
  const ms = Number(dgEBIiH("MS"));
  const ar = Number(dgEBIiH("ARR")) * sales;
  const inv = Number(dgEBIiH("InvR")) * sales;
  const tca = cash + ms + ar + inv;
  const nfa = Number(dgEBIiH("2K4NFA"));
  const ta = tca + nfa;
  const ap = Number(dgEBIiH("APR")) * sales; 
  const aocl = Number(dgEBIiH("AOCL"));
  const tcl = ap + aocl;
  const dcs = Number(dgEBIiH("DCS"));
  const re = Number(dgEBIiH("RE"));
  const pnd = Number(dgEBIiH("PR")) * sales - Number(dgEBIiH("G3P12Div"));
  const tot = tcl + dcs + re + pnd;
  const efr = ta - tot;
  dsEBIiH("AR", "<sp class=sum>" + ar + "</sp>");
  dsEBIiH("Inv", "<sp class=sum>" + inv + "</sp>");
  dsEBIiH("TCA", "<sp class=sum>" + tca + "</sp>");
  dsEBIiH("TA", "<sp class=sum>" + ta + "</sp>");
  dsEBIiH("AP", "<sp class=sum>" + ap.toFixed(0) + "</sp>");
  dsEBIiH("TCL", "<sp class=sum>" + tcl.toFixed(0) + "</sp>");
  dsEBIiH("PnD", "<sp class=sum>" + pnd.toFixed(0) + "</sp>");
  dsEBIiH("Tot", "<sp class=sum>" + tot.toFixed(0) + "</sp>");
  dsEBIiH("EFR", "<sp class=sum>" + efr.toFixed(0) + "</sp>");
}

function G3P14() {
  const s2K4 = Number(dgEBIiH("G3P14_2K4Sales"));
 // Income statement stuff
  const cogs = Number(dgEBIiH("G3P14_COGS%")) * s2K4; 
  const gp = s2K4 - cogs;
  const opx = Number(dgEBIiH("G3P14_OpX%")) * s2K4;
  const npb4t = gp - opx;
  const tax = Number(dgEBIiH("G3P14_TaxR")) * npb4t;
  const npat = npb4t - tax;
  const div = Number(dgEBIiH("G3P14_2K4Div"));
  const re = npat - div;
  
 // Balance sheet stuff
  const cash = Number(dgEBIiH("G3P14_2K4Cash"));
  const ap = Number(dgEBIiH("G3P14_2K4AP"));
  const ms = Number(dgEBIiH("G3P14_2K4MS"));
  const tp = Number(dgEBIiH("G3P14_2K4TF")) * tax;
  const ar = Number(dgEBIiH("G3P14_2K4ARR")) * s2K4;
  const ocl = Number(dgEBIiH("G3P14_2K4OCL"));
  const inv = Number(dgEBIiH("G3P14_2K4Inv"));
  const tcl = ap + tp + ocl;
  const tca = cash + ms + ar + inv;
  const ltd = Number(dgEBIiH("G3P14_2K4LTD"));
  const nfa = Number(dgEBIiH("G3P14_2K3NFA")) + 
  		    Number(dgEBIiH("G3P14_2K4CapPurch")) - 
  		    Number(dgEBIiH("G3P14_2K4Dep"));
  const cs = Number(dgEBIiH("G3P14_2K4CS"));
  const ta = tca + nfa;
  const bsre = Number(dgEBIiH("G3P14_2K3RE")) + re;
  const preEFRtot = tcl + ltd + cs + bsre;
  const efr = ta - preEFRtot;

 // Income statement writes
  dsEBIiH("G3P14_2K4COGS", cogs);
  dsEBIiH("G3P14_2K4GP", gp);
  dsEBIiH("G3P14_2K4OpX", opx);
  dsEBIiH("G3P14_2K4NPB4T", npb4t);
  dsEBIiH("G3P14_2K4Tax", tax);
  dsEBIiH("G3P14_2K4NPAT", npat);
  dsEBIiH("G3P14_2K42RE", re);
  
 // Balance sheet writes
  dsEBIiH("G3P14_2K4AR", ar);
  dsEBIiH("G3P14_2K4TP", tp);
  dsEBIiH("G3P14_2K4TCL", tcl);
  dsEBIiH("G3P14_2K4TCA", tca);
  dsEBIiH("G3P14_2K4NFA", nfa);
  dsEBIiH("G3P14_2K4TA", ta);
  dsEBIiH("G3P14_2K4ISRE", 1000*re);
  dsEBIiH("G3P14_2K4BSRE", bsre);
  dsEBIiH("G3P14_2K4PreEFR", preEFRtot);
  dsEBIiH("G3P14_2K4EFR", efr);
  dsEBIiH("G3P14_2K4TLSE", ta);
}
