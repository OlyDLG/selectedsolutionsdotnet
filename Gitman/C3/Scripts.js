function G3P1() {
  // Asset A
    var Acost = Number(dgEBIiH("Acost"));
  // Year 1
    var Ap1 = Number(dgEBIiH("A%1"));
    var Adep1 =  Acost * Ap1 / 100;
    dsEBIiH("Adep1", Adep1);
  // Year 2
    var Ap2 = Number(dgEBIiH("A%2"));
    var Adep2 =  Acost * Ap2 / 100;
    dsEBIiH("Adep2", Adep2);
  // Year 3
    var Ap3 = Number(dgEBIiH("A%3"));
    var Adep3 =  Acost * Ap3 / 100;
    dsEBIiH("Adep3", Adep3);
  // Year 4
    var Ap4 = Number(dgEBIiH("A%4"));
    var Adep4 =  Acost * Ap4 / 100;
    dsEBIiH("Adep4", Adep4);    
// Totals
    var ApTot = Ap1 + Ap2 + Ap3 + Ap4;
    dsEBIiH("ApTot", ApTot);
    var AdepTot = Adep1 + Adep2 + Adep3 + Adep4;
    dsEBIiH("AdepTot", AdepTot);

  // Asset B
    var Bcost = Number(dgEBIiH("Bcost"));
  // Year 1
    var Bp1 = Number(dgEBIiH("B%1"));
    var Bdep1 =  Bcost * Bp1 / 100;
    dsEBIiH("Bdep1", Bdep1);
  // Year 2
    var Bp2 = Number(dgEBIiH("B%2"));
    var Bdep2 =  Bcost * Bp2 / 100;
    dsEBIiH("Bdep2", Bdep2);
  // Year 3
    var Bp3 = Number(dgEBIiH("B%3"));
    var Bdep3 =  Bcost * Bp3 / 100;
    dsEBIiH("Bdep3", Bdep3);
  // Year 4
    var Bp4 = Number(dgEBIiH("B%4"));
    var Bdep4 =  Bcost * Bp4 / 100;
    dsEBIiH("Bdep4", Bdep4);
  // Year 5
    var Bp5 = Number(dgEBIiH("B%5"));
    var Bdep5 =  Bcost * Bp5 / 100;
    dsEBIiH("Bdep5", Bdep5);
  // Year 6
    var Bp6 = Number(dgEBIiH("B%6"));
    var Bdep6 =  Bcost * Bp6 / 100;
    dsEBIiH("Bdep6", Bdep6);
  // Totals
    var BpTot = Bp1 + Bp2 + Bp3 + Bp4 + Bp5 + Bp6;
    dsEBIiH("BpTot", BpTot);
    var BdepTot = Bdep1 + Bdep2 + Bdep3 + Bdep4 + Bdep5 + Bdep6;
    dsEBIiH("BdepTot", BdepTot);
}
function G3P11() {
  var s = Number(removeCommas(dgEBIiH("2K4Sales")));
  dsEBIiH("Sales", s);
    // Cost of goods sold
  var cogs = Number(dgEBIiH("cogsp")) * s;
  dsEBIiH("cogs", "<sp class=sum>" + cogs + "</sp>");
    // Gross Profits
  var gp = s - cogs;
  dsEBIiH("gp", "<sp class=sum>" + gp + "</sp>");
    // Operating Expenses
  var opx = Number(dgEBIiH("opxp")) * s;
  dsEBIiH("opx", "<sp class=sum>" + opx.toFixed(1) + "</sp>");
    // Operating Profits
  var op = gp - opx;
  dsEBIiH("op", "<sp class=sum>" + op.toFixed(1) + "</sp>");
    // Interest
  var int = dgEBIiH("Int");
  dsEBIiH("int", int);
    // Profits before taxes
  var pb4t = op - int;
  dsEBIiH("pb4t", "<sp class=sum>" + pb4t.toFixed(1) + "</sp>");
    // Taxes
  var tax = Number(dgEBIiH("tr")) * pb4t;
  dsEBIiH("tax", "<sp class=sum>" + tax.toFixed(1) + "</sp>");
    // Profits after taxes
  var paft = pb4t - tax;
  dsEBIiH("paft", "<sp class=sum>" + paft.toFixed(1) + "</sp>");
    // Dividends
  var div = Number(dgEBIiH("Div"));
  dsEBIiH("div", div);
    // To retained earnings
  var tre = paft - div;
  dsEBIiH("tre", "<sp class=sum>" + tre.toFixed(1) + "</sp>");

   // Part b) Fixed vs. variable cost method
   // Variable cost of goods sold
  var vcogsr = 0.5; // 700 /1400
  var vcogs = vcogsr * s;
  dsEBIiH("vcogsr", "&nbsp;&nbsp;&nbsp;&nbsp;Variable (700/1400 = <sp class=sum>" + vcogsr + "</sp>)");
  dsEBIiH("vcogs", "<sp class=sum>" + vcogs + "</sp>");
    // Gross Profits
  var vgp = s - Number(dgEBIiH("fcogs")) - vcogs;
  dsEBIiH("vgp", "<sp class=sum>" + vgp + "</sp>");
   // Variable operating expenses
  var vopxr = 84 /1400;
  var vopx = vopxr * s;
  dsEBIiH("vopxr", "&nbsp;&nbsp;&nbsp;&nbsp;Variable (84/1400 = <sp class=sum>" + vopxr + "</sp>)");
  dsEBIiH("vopx", "<sp class=sum>" + vopx + "</sp>");
    // Operating profits
  var vop = vgp - Number(dgEBIiH("fopx")) - vopx;
  dsEBIiH("vop", "<sp class=sum>" + vop + "</sp>");
    // Profit before taxes
  var vpb4t = vop - int;
  dsEBIiH("vpb4t", "<sp class=sum>" + vpb4t + "</sp>");
    // Taxes
  var vtax = Number(dgEBIiH("tr")) * vpb4t;
  dsEBIiH("vtax", "<sp class=sum>" + vtax.toFixed(1) + "</sp>");
    // Profits after taxes
  var vpaft = vpb4t - vtax;
  dsEBIiH("vpaft", "<sp class=sum>" + vpaft.toFixed(1) + "</sp>");
    // To retained earnings
  var vtre = vpaft - div;
  dsEBIiH("vtre", "<sp class=sum>" + vtre.toFixed(1) + "</sp>");
}

function G3P12() {
  var sales = Number(removeCommas(dgEBIiH("G3P12Sales")));
  var cash = Number(dgEBIiH("Cash"));
  var ms = Number(dgEBIiH("MS"));
  var ar = Number(dgEBIiH("ARR")) * sales;
  var inv = Number(dgEBIiH("InvR")) * sales;
  var tca = cash + ms + ar + inv;
  var nfa = Number(dgEBIiH("2K4NFA"));
  var ta = tca + nfa;
  var ap = Number(dgEBIiH("APR")) * sales; 
  var aocl = Number(dgEBIiH("AOCL"));
  var tcl = ap + aocl;
  var dcs = Number(dgEBIiH("DCS"));
  var re = Number(dgEBIiH("RE"));
  var pnd = Number(dgEBIiH("PR")) * sales - Number(dgEBIiH("G3P12Div"));
  var tot = tcl + dcs + re + pnd;
  var efr = ta - tot;
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
  var s2K4 = Number(dgEBIiH("G3P14_2K4Sales"));
 // Income statement stuff
  var cogs = Number(dgEBIiH("G3P14_COGS%")) * s2K4; 
  var gp = s2K4 - cogs;
  var opx = Number(dgEBIiH("G3P14_OpX%")) * s2K4;
  var npb4t = gp - opx;
  var tax = Number(dgEBIiH("G3P14_TaxR")) * npb4t;
  var npat = npb4t - tax;
  var div = Number(dgEBIiH("G3P14_2K4Div"));
  var re = npat - div;
  
 // Balance sheet stuff
  var cash = Number(dgEBIiH("G3P14_2K4Cash"));
  var ap = Number(dgEBIiH("G3P14_2K4AP"));
  var ms = Number(dgEBIiH("G3P14_2K4MS"));
  var tp = Number(dgEBIiH("G3P14_2K4TF")) * tax;
  var ar = Number(dgEBIiH("G3P14_2K4ARR")) * s2K4;
  var ocl = Number(dgEBIiH("G3P14_2K4OCL"));
  var inv = Number(dgEBIiH("G3P14_2K4Inv"));
  var tcl = ap + tp + ocl;
  var tca = cash + ms + ar + inv;
  var ltd = Number(dgEBIiH("G3P14_2K4LTD"));
  var nfa = Number(dgEBIiH("G3P14_2K3NFA")) + 
  		    Number(dgEBIiH("G3P14_2K4CapPurch")) - 
  		    Number(dgEBIiH("G3P14_2K4Dep"));
  var cs = Number(dgEBIiH("G3P14_2K4CS"));
  var ta = tca + nfa;
  var bsre = Number(dgEBIiH("G3P14_2K3RE")) + re;
  var preEFRtot = tcl + ltd + cs + bsre;
  var efr = ta - preEFRtot;

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
