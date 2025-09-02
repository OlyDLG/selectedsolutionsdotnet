function G3P1() {
  // Asset A
    let Acost = Number(dgEBIiH("Acost"));
  // Year 1
    let Ap1 = Number(dgEBIiH("A%1"));
    let Adep1 =  Acost * Ap1 / 100;
    dsEBIiH("Adep1", Adep1);
  // Year 2
    let Ap2 = Number(dgEBIiH("A%2"));
    let Adep2 =  Acost * Ap2 / 100;
    dsEBIiH("Adep2", Adep2);
  // Year 3
    let Ap3 = Number(dgEBIiH("A%3"));
    let Adep3 =  Acost * Ap3 / 100;
    dsEBIiH("Adep3", Adep3);
  // Year 4
    let Ap4 = Number(dgEBIiH("A%4"));
    let Adep4 =  Acost * Ap4 / 100;
    dsEBIiH("Adep4", Adep4);    
// Totals
    let ApTot = Ap1 + Ap2 + Ap3 + Ap4;
    dsEBIiH("ApTot", ApTot);
    let AdepTot = Adep1 + Adep2 + Adep3 + Adep4;
    dsEBIiH("AdepTot", AdepTot);

  // Asset B
    let Bcost = Number(dgEBIiH("Bcost"));
  // Year 1
    let Bp1 = Number(dgEBIiH("B%1"));
    let Bdep1 =  Bcost * Bp1 / 100;
    dsEBIiH("Bdep1", Bdep1);
  // Year 2
    let Bp2 = Number(dgEBIiH("B%2"));
    let Bdep2 =  Bcost * Bp2 / 100;
    dsEBIiH("Bdep2", Bdep2);
  // Year 3
    let Bp3 = Number(dgEBIiH("B%3"));
    let Bdep3 =  Bcost * Bp3 / 100;
    dsEBIiH("Bdep3", Bdep3);
  // Year 4
    let Bp4 = Number(dgEBIiH("B%4"));
    let Bdep4 =  Bcost * Bp4 / 100;
    dsEBIiH("Bdep4", Bdep4);
  // Year 5
    let Bp5 = Number(dgEBIiH("B%5"));
    let Bdep5 =  Bcost * Bp5 / 100;
    dsEBIiH("Bdep5", Bdep5);
  // Year 6
    let Bp6 = Number(dgEBIiH("B%6"));
    let Bdep6 =  Bcost * Bp6 / 100;
    dsEBIiH("Bdep6", Bdep6);
  // Totals
    let BpTot = Bp1 + Bp2 + Bp3 + Bp4 + Bp5 + Bp6;
    dsEBIiH("BpTot", BpTot);
    let BdepTot = Bdep1 + Bdep2 + Bdep3 + Bdep4 + Bdep5 + Bdep6;
    dsEBIiH("BdepTot", BdepTot);
}
function G3P11() {
  let s = Number(removeCommas(dgEBIiH("2K4Sales")));
  dsEBIiH("Sales", s);
    // Cost of goods sold
  let cogs = Number(dgEBIiH("cogsp")) * s;
  dsEBIiH("cogs", "<sp class=sum>" + cogs + "</sp>");
    // Gross Profits
  let gp = s - cogs;
  dsEBIiH("gp", "<sp class=sum>" + gp + "</sp>");
    // Operating Expenses
  let opx = Number(dgEBIiH("opxp")) * s;
  dsEBIiH("opx", "<sp class=sum>" + opx.toFixed(1) + "</sp>");
    // Operating Profits
  let op = gp - opx;
  dsEBIiH("op", "<sp class=sum>" + op.toFixed(1) + "</sp>");
    // Interest
  let int = dgEBIiH("Int");
  dsEBIiH("int", int);
    // Profits before taxes
  let pb4t = op - int;
  dsEBIiH("pb4t", "<sp class=sum>" + pb4t.toFixed(1) + "</sp>");
    // Taxes
  let tax = Number(dgEBIiH("tr")) * pb4t;
  dsEBIiH("tax", "<sp class=sum>" + tax.toFixed(1) + "</sp>");
    // Profits after taxes
  let paft = pb4t - tax;
  dsEBIiH("paft", "<sp class=sum>" + paft.toFixed(1) + "</sp>");
    // Dividends
  let div = Number(dgEBIiH("Div"));
  dsEBIiH("div", div);
    // To retained earnings
  let tre = paft - div;
  dsEBIiH("tre", "<sp class=sum>" + tre.toFixed(1) + "</sp>");

   // Part b) Fixed vs. variable cost method
   // variable cost of goods sold
  let vcogsr = 0.5; // 700 /1400
  let vcogs = vcogsr * s;
  dsEBIiH("vcogsr", "&nbsp;&nbsp;&nbsp;&nbsp;Variable (700/1400 = <sp class=sum>" + vcogsr + "</sp>)");
  dsEBIiH("vcogs", "<sp class=sum>" + vcogs + "</sp>");
    // Gross Profits
  let vgp = s - Number(dgEBIiH("fcogs")) - vcogs;
  dsEBIiH("vgp", "<sp class=sum>" + vgp + "</sp>");
   // Variable operating expenses
  let vopxr = 84 /1400;
  let vopx = vopxr * s;
  dsEBIiH("vopxr", "&nbsp;&nbsp;&nbsp;&nbsp;Variable (84/1400 = <sp class=sum>" + vopxr + "</sp>)");
  dsEBIiH("vopx", "<sp class=sum>" + vopx + "</sp>");
    // Operating profits
  let vop = vgp - Number(dgEBIiH("fopx")) - vopx;
  dsEBIiH("vop", "<sp class=sum>" + vop + "</sp>");
    // Profit before taxes
  let vpb4t = vop - int;
  dsEBIiH("vpb4t", "<sp class=sum>" + vpb4t + "</sp>");
    // Taxes
  let vtax = Number(dgEBIiH("tr")) * vpb4t;
  dsEBIiH("vtax", "<sp class=sum>" + vtax.toFixed(1) + "</sp>");
    // Profits after taxes
  let vpaft = vpb4t - vtax;
  dsEBIiH("vpaft", "<sp class=sum>" + vpaft.toFixed(1) + "</sp>");
    // To retained earnings
  let vtre = vpaft - div;
  dsEBIiH("vtre", "<sp class=sum>" + vtre.toFixed(1) + "</sp>");
}

function G3P12() {
  let sales = Number(removeCommas(dgEBIiH("G3P12Sales")));
  let cash = Number(dgEBIiH("Cash"));
  let ms = Number(dgEBIiH("MS"));
  let ar = Number(dgEBIiH("ARR")) * sales;
  let inv = Number(dgEBIiH("InvR")) * sales;
  let tca = cash + ms + ar + inv;
  let nfa = Number(dgEBIiH("2K4NFA"));
  let ta = tca + nfa;
  let ap = Number(dgEBIiH("APR")) * sales; 
  let aocl = Number(dgEBIiH("AOCL"));
  let tcl = ap + aocl;
  let dcs = Number(dgEBIiH("DCS"));
  let re = Number(dgEBIiH("RE"));
  let pnd = Number(dgEBIiH("PR")) * sales - Number(dgEBIiH("G3P12Div"));
  let tot = tcl + dcs + re + pnd;
  let efr = ta - tot;
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
  let s2K4 = Number(dgEBIiH("G3P14_2K4Sales"));
 // Income statement stuff
  let cogs = Number(dgEBIiH("G3P14_COGS%")) * s2K4; 
  let gp = s2K4 - cogs;
  let opx = Number(dgEBIiH("G3P14_OpX%")) * s2K4;
  let npb4t = gp - opx;
  let tax = Number(dgEBIiH("G3P14_TaxR")) * npb4t;
  let npat = npb4t - tax;
  let div = Number(dgEBIiH("G3P14_2K4Div"));
  let re = npat - div;
  
 // Balance sheet stuff
  let cash = Number(dgEBIiH("G3P14_2K4Cash"));
  let ap = Number(dgEBIiH("G3P14_2K4AP"));
  let ms = Number(dgEBIiH("G3P14_2K4MS"));
  let tp = Number(dgEBIiH("G3P14_2K4TF")) * tax;
  let ar = Number(dgEBIiH("G3P14_2K4ARR")) * s2K4;
  let ocl = Number(dgEBIiH("G3P14_2K4OCL"));
  let inv = Number(dgEBIiH("G3P14_2K4Inv"));
  let tcl = ap + tp + ocl;
  let tca = cash + ms + ar + inv;
  let ltd = Number(dgEBIiH("G3P14_2K4LTD"));
  let nfa = Number(dgEBIiH("G3P14_2K3NFA")) + 
  		    Number(dgEBIiH("G3P14_2K4CapPurch")) - 
  		    Number(dgEBIiH("G3P14_2K4Dep"));
  let cs = Number(dgEBIiH("G3P14_2K4CS"));
  let ta = tca + nfa;
  let bsre = Number(dgEBIiH("G3P14_2K3RE")) + re;
  let preEFRtot = tcl + ltd + cs + bsre;
  let efr = ta - preEFRtot;

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
