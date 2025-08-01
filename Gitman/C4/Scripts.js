function G4P2() {
  var FVIF1 = FutValIntFac(Number(dgEBIiH("P2r1"))/100, Number(dgEBIiH("P2n1")));
  dsEBIiH("P2f1", "<sp class=sum>" + FVIF1.toFixed(3) + "</sp>");

  var FVIF2 = FutValIntFac(Number(dgEBIiH("P2r2"))/100, Number(dgEBIiH("P2n2")));
  dsEBIiH("P2f2", "<sp class=sum>" + FVIF2.toFixed(3) + "</sp>");
  
  var FVIF3 = FutValIntFac(Number(dgEBIiH("P2r3"))/100, Number(dgEBIiH("P2n3")));
  dsEBIiH("P2f3", "<sp class=sum>" + FVIF3.toFixed(3) + "</sp>");
  
  var FVIF4 = FutValIntFac(Number(dgEBIiH("P2r4"))/100, Number(dgEBIiH("P2n4")));
  dsEBIiH("P2f4", "<sp class=sum>" + FVIF4.toFixed(3) + "</sp>");
}

function G4P3() {
  var r1 = Number(dgEBIiH("P3r1"))/100;
  var DT1 = FutValn(1, 2, r1);
  dsEBIiH("P3D1", "<sp class=sum>" + DT1.toFixed(1) + "</sp>");
  var QT1 = FutValn(1, 4, r1);
  dsEBIiH("P3Q1", "<sp class=sum>" + QT1.toFixed(1) + "</sp>");

  var r2 = Number(dgEBIiH("P3r2"))/100;
  var DT2 = FutValn(1, 2, r2);
  dsEBIiH("P3D2", "<sp class=sum>" + DT2.toFixed(1) + "</sp>");
  var QT2 = FutValn(1, 4, r2);
  dsEBIiH("P3Q2", "<sp class=sum>" + QT2.toFixed(1) + "</sp>");

  var r3 = Number(dgEBIiH("P3r3"))/100;
  var DT3 = FutValn(1, 2, r3);
  dsEBIiH("P3D3", "<sp class=sum>" + DT3.toFixed(1) + "</sp>");
  var QT3 = FutValn(1, 4, r3);
  dsEBIiH("P3Q3", "<sp class=sum>" + QT3.toFixed(1) + "</sp>");

  var r4 = Number(dgEBIiH("P3r4"))/100;
  var DT4 = FutValn(1, 2, r4);
  dsEBIiH("P3D4", "<sp class=sum>" + DT4.toFixed(1) + "</sp>");
  var QT4 = FutValn(1, 4, r4);
  dsEBIiH("P3Q4", "<sp class=sum>" + QT4.toFixed(1) + "</sp>");
}

function G4P5() {
    var r = Number(dgEBIiH("P5r")) / 100;
    var y3 = Number(dgEBIiH("P5Y3"));
    var Y0B = Number(dgEBIiH("P5B0"));
    var Y3B = FutVal(Y0B, r, y3);
    dsEBIiH("P5B3", "<sp class=sum>" + addCommas(Y3B.toFixed(2)) + "</sp>");    
    dsEBIiH("P5D3", "<sp class=sum>" + (Y3B - Y0B).toFixed(2) + "</sp>");    
    var Y6B = FutVal(Y0B, r, 2*y3);
    dsEBIiH("P5B6", "<sp class=sum>" + addCommas(Y6B.toFixed(2)) + "</sp>");    
    dsEBIiH("P5D6", "<sp class=sum>" + (Y6B - Y3B).toFixed(2) + "</sp>");    
    var Y9B = FutVal(Y0B, r, 3*y3);
    dsEBIiH("P5B9", "<sp class=sum>" + addCommas(Y9B.toFixed(2)) + "</sp>");
    dsEBIiH("P5D9", "<sp class=sum>" + (Y9B - Y6B).toFixed(2) + "</sp>");    
}

function G4P9() {
  var PVIF1 = 1 / FutValIntFac(Number(dgEBIiH("P9r1"))/100, Number(dgEBIiH("P9n1")));
  dsEBIiH("P9f1", "<sp class=sum>" + PVIF1.toFixed(3) + "</sp>");

  var PVIF2 = 1 / FutValIntFac(Number(dgEBIiH("P9r2"))/100, Number(dgEBIiH("P9n2")));
  dsEBIiH("P9f2", "<sp class=sum>" + PVIF2.toFixed(3) + "</sp>");
  
  var PVIF3 = 1 / FutValIntFac(Number(dgEBIiH("P9r3"))/100, Number(dgEBIiH("P9n3")));
  dsEBIiH("P9f3", "<sp class=sum>" + PVIF3.toFixed(3) + "</sp>");
  
  var PVIF4 = 1 / FutValIntFac(Number(dgEBIiH("P9r4"))/100, Number(dgEBIiH("P9n4")));
  dsEBIiH("P9f4", "<sp class=sum>" + PVIF4.toFixed(3) + "</sp>");
}

function G4P14() {
  var n = [Number(dgEBIiH("P14n1")), Number(dgEBIiH("P14n2"))];
  var r = [Number(dgEBIiH("P14r1"))/100, Number(dgEBIiH("P14r2"))/100, Number(dgEBIiH("P14r3"))/100];
  var cells = [["P14f11", "P14f12"], ["P14f21", "P14f22"], ["P14f31", "P14f32"]];
  for (i=0; i < n.length; i++)
    for (j=0; j < r.length; j++) {
      dsEBIiH(cells[j][i], "<sp class=sum>" + (1/FutValIntFac(r[j], n[i])).toFixed(3) + "</sp>");  
    }
  dsEBIiH("P14f12-11", "<sp class=sum>" + (-1/FutValIntFac(r[0], n[1]) + 1/FutValIntFac(r[0], n[0])).toFixed(3) + "</sp>");
  dsEBIiH("P14f22-21", "<sp class=sum>" + (-1/FutValIntFac(r[1], n[1]) + 1/FutValIntFac(r[1], n[0])).toFixed(3) + "</sp>");
  dsEBIiH("P14f32-31", "<sp class=sum>" + (-1/FutValIntFac(r[2], n[1]) + 1/FutValIntFac(r[2], n[0])).toFixed(3) + "</sp>");

  dsEBIiH("P14f21-11", "<sp class=sum>" + (-1/FutValIntFac(r[1], n[0]) + 1/FutValIntFac(r[0], n[0])).toFixed(3) + "</sp>");
  dsEBIiH("P14f22-12", "<sp class=sum>" + (-1/FutValIntFac(r[1], n[1]) + 1/FutValIntFac(r[0], n[1])).toFixed(3) + "</sp>");
  dsEBIiH("P14f31-21", "<sp class=sum>" + (-1/FutValIntFac(r[2], n[0]) + 1/FutValIntFac(r[1], n[0])).toFixed(3) + "</sp>");
  dsEBIiH("P14f32-22", "<sp class=sum>" + (-1/FutValIntFac(r[2], n[1]) + 1/FutValIntFac(r[1], n[1])).toFixed(3) + "</sp>");
}

function G4P17() {
  var d, r, n, f;
  for (var i=0; i<5; i++) {
    d = Number(removeCommas(dgEBIiH("P17d" + (i+1).toFixed(0))));
    r = Number(dgEBIiH("P17r" + (i+1).toFixed(0))) /100;
    n = Number(dgEBIiH("P17n" + (i+1).toFixed(0)));
    f = AnnFutVal(d, r, n).toFixed(2);
    dsEBIiH("P17f" + (i+1).toFixed(0), "<sp class=sum>" + addCommas(f) + "</sp>");
  }
}

function G4P18() {
  var d, r, n, p;
  for (var i=0; i<5; i++) {
    d = Number(removeCommas(dgEBIiH("P18d" + (i+1).toFixed(0))));
    r = Number(dgEBIiH("P18r" + (i+1).toFixed(0))) /100;
    n = Number(dgEBIiH("P18n" + (i+1).toFixed(0)));
    p = AnnPresVal(d, r, n).toFixed(2);
    dsEBIiH("P18p" + (i+1).toFixed(0), "<sp class=sum>" + addCommas(p) + "</sp>");
  }
}

function G4P21() {
  var p = AnnPresVal(20000, 0.11, 30);
  dsEBIiH("P21a", "<sp class=sum>" + addCommas(p.toFixed(2)) + "</sp>");
  p = PresVal(p, 0.09, 20);
  dsEBIiH("P21b", "<sp class=sum>" + addCommas(p.toFixed(2)) + "</sp>");
  var p2 = PresVal(181818.18, 0.09, 20);
  dsEBIiH("P21b2", "<sp class=sum>" + addCommas(p2.toFixed(2)) + "</sp>");
  var d = p2 - p;
  dsEBIiH("P21b3", "<sp class=sum>" + addCommas(d.toFixed(2)) + "</sp>");
}

function G4P22() {
  var f = FutVal(500000, 0.05, 25);
  dsEBIiH("P22a5", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = AnnFutVal(40000, 0.05, 25);
  dsEBIiH("P22a4", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = FutVal(500000, 0.07, 25);
  dsEBIiH("P22b5", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = AnnFutVal(40000, 0.07, 25);
  dsEBIiH("P22b4", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = FutVal(500000, 0.06, 25);
  dsEBIiH("P22c65", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = AnnFutVal(40000, 0.06, 25);
  dsEBIiH("P22c64", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = FutVal(500000, 0.062, 25);
  dsEBIiH("P22c625", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = AnnFutVal(40000, 0.062, 25);
  dsEBIiH("P22c624", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = FutVal(500000, 0.064, 25);
  dsEBIiH("P22c645", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = AnnFutVal(40000, 0.064, 25);
  dsEBIiH("P22c644", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = FutVal(500000, 0.063, 25);
  dsEBIiH("P22c635", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = AnnFutVal(40000, 0.063, 25);
  dsEBIiH("P22c634", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = FutVal(500000, 0.0625, 25);
  dsEBIiH("P22c6255", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
  
  f = AnnFutVal(40000, 0.0625, 25);
  dsEBIiH("P22c6254", "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>"); 
}

function G4P28() {
  var r = Number(dgEBIiH("P28r")) /100;
  var pvif, m, pv, idx, Asum = 0, Bsum = 0;
//  var Asum = 0;
 // var Bsum = 0;
  for (var i=1; i < 6; i++) {
    I = i.toFixed(0);
    pvif = 1/FutValIntFac(r, i);
    dsEBIiH("P28PVIF" + I, 
      "<sp class=sum>" + pvif.toFixed(3) + "</sp>");
//
      m = Number(removeCommas(dgEBIiH("P28CFA" + I)));
    pv = pvif * m;
    dsEBIiH("P28PVA" + I, 
      "<sp class=sum>" + addCommas(pv.toFixed(2)) + "</sp>");
    Asum += pv;
//    
    m = Number(removeCommas(dgEBIiH("P28CFB" + I)));
    pv = pvif * m;
    dsEBIiH("P28PVB" + I, 
      "<sp class=sum>" + addCommas(pv.toFixed(2)) + "</sp>");
    Bsum += pv;    
  }
  dsEBIiH("P28Asum", "<sp class=sum>" + addCommas(Asum.toFixed(2)) + "</sp>");
  dsEBIiH("P28Bsum", "<sp class=sum>" + addCommas(Bsum.toFixed(2)) + "</sp>");
}

function G4P33() {
  var I, p, r, m, n, f, e, d;
  for (var i=1; i < 5; i++) {
    I = i.toFixed(0);
    p = Number(removeCommas(dgEBIiH("P33p" + I)));
    r = Number(dgEBIiH("P33r" + I)) / 100;
    m = Number(dgEBIiH("P33m" + I));
    n = Number(dgEBIiH("P33n" + I));
    f = GenCompFutVal(p, r, n, m);
    e = EffAnnRate(r, m);
    d = 100 * (e - r);
    dsEBIiH("P33fv" + I, "<sp class=sum>" + addCommas(f.toFixed(2)) + "</sp>");
    dsEBIiH("P33ear" + I, "<sp class=sum>" + (100 * e).toFixed(2) + "</sp>");
    dsEBIiH("P33dar" + I, "<sp class=sum>" + d.toFixed(3) + "</sp>");
  }
}

function G4P38() {
  var I, f, n, r, m;
  for (var i=1; i < 5; i++) {
    I = i.toFixed(0);
    f = Number(removeCommas(dgEBIiH("P38f" + I)));
    n = Number(dgEBIiH("P38n" + I));
    r = Number(dgEBIiH("P38r" + I)) / 100;
    m = AnnPmtFromFutVal(f, r, n);
    dsEBIiH("P38m" + I, "<sp class=sum>" + addCommas(m.toFixed(2)) + "</sp>");
  }
}

function G4P53() {
  var I, p, f, r, n;
  for (var i=1; i < 6; i++) {
    I = i.toFixed(0);
    p = Number(removeCommas(dgEBIiH("P53p" + I)));
    f = Number(removeCommas(dgEBIiH("P53f" + I)));
    r = Number(dgEBIiH("P53r" + I)) / 100;
    n = FutValn(p, f, r);
    dsEBIiH("P53n" + I, "<sp class=sum>" + n.toFixed(2) + "</sp>");
  }
}