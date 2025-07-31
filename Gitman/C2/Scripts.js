function G2P3() {
  // Income and Initial Balance //
 dsEBIiH("Income", dgEBIiH("G2P3rcvbls"));
 dsEBIiH("Bal", dgEBIiH("Income"));

 // Less Salaries //
 var salaries = 12 * dgEBIiH("G2P3CCsal") + Number(dgEBIiH("G2P3BkprSal")) + Number(dgEBIiH("G2P3AstSal"));
 dsEBIiH("TotalSals", (salaries));
 var BmS = dgEBIiH("G2P3rcvbls") - salaries;
 dsEBIiH("Bal-Sals", BmS);
 
 // Less Employment Expenses //
 var EEs = dgEBIiH("G2P3EmpExp");
 dsEBIiH("EEs", EEs);
 var BmE = BmS - EEs;
 dsEBIiH("Bal-EEs", BmE);
 
 // Less Office Expenses //
 var OEs = dgEBIiH("G2P3OfcExp");
 dsEBIiH("OEs", OEs);
 var BmO = BmE - OEs;
 dsEBIiH("Bal-OEs", BmO);
 
 // Less Other Operating Expenses //
 var OOE = dgEBIiH("G2P3OOpExp");
 dsEBIiH("OOEs", OOE);
 var BalmOOE = BmO - OOE;
 dsEBIiH("Bal-OOEs", BalmOOE);
 
 // Less Lease //
 var Ls = 12 * dgEBIiH("G2P3Lease")
 dsEBIiH("Lease", Ls);
 var BmL = BalmOOE - Ls;
 dsEBIiH("Bal-Les", BmL);

 // Less Depreciation //
 var Dep = dgEBIiH("G2P3Dep");
 dsEBIiH("Dep", Dep);
 var BmD = BmL - Dep;
 dsEBIiH("Bal-Dep", BmD);

 // Less Interest //
 var Int = dgEBIiH("G2P3Int");
 dsEBIiH("Int", Int);
 var BmI = BmD - Int;
 dsEBIiH("Bal-Int", BmI);

 // Less Taxes //
 var Tax = Number(dgEBIiH("G2P3TaxRate")) * BmI /100;
 dsEBIiH("Tax", Tax);
 var BmT = BmI - Tax;
 dsEBIiH("Bal-Tax", BmT);

 // Final Balance //
 dsEBIiH("NEI", dgEBIiH("Bal-Tax"));
}

function G2P4() {
  var NSO = Number(dgEBIiH("G2P4NSO"));
  var NEA4CS = (1-Number(dgEBIiH("G2P4TR"))) * Number(dgEBIiH("G2P4NEBT")) - Number(dgEBIiH("G2P4PSD"));
  var locEPS = EPS(NEA4CS, NSO).toFixed(2);
  dsEBIiH("G2P4a1", NEA4CS.toFixed(0)); 
  dsEBIiH("G2P4a2", locEPS);
  dsEBIiH("G2P4b1", NSO.toFixed(0));
  dsEBIiH("G2P4b2", locEPS);
  dsEBIiH("G2P4b3", (NSO*(Number(locEPS) - Number(dgEBIiH("G2P4DivPd")))).toFixed(0));
}

function G2P5() {
  var cash = Number(dgEBIiH("G2P5Cash"));
  var securities = Number(dgEBIiH("G2P5Securities"));
  var recvbls = Number(dgEBIiH("G2P5Recable"));
  var inventory = Number(dgEBIiH("G2P5Inventory"));
  var tca = cash + securities + recvbls + inventory;
  var lnb = Number(dgEBIiH("G2P5Land")) + Number(dgEBIiH("G2P5Builds"));
  var mne = Number(dgEBIiH("G2P5Machinery")) + Number(dgEBIiH("G2P5Equip"));
  var fnf = Number(dgEBIiH("G2P5Furn"));
  var veh = Number(dgEBIiH("G2P5Vehic"));
  var depre = Number(dgEBIiH("G2P5Deprecia")); 
  var tgfa = lnb + mne + fnf + veh;
  var nfa = tgfa - depre;
  var ta = tca + nfa; 
  var pybl = Number(dgEBIiH("G2P5Payable"));
  var notes = Number(dgEBIiH("G2P5NotesPay"));
  var accru = Number(dgEBIiH("G2P5Accru"));
  var tcl = pybl + notes + accru;
  var ltd = Number(dgEBIiH("G2P5LtD"));
  var tl = tcl + ltd;
  var ps = Number(dgEBIiH("G2P5PrefStk"));
  var cs = Number(dgEBIiH("G2P5CSaP"));
  var pdcp = Number(dgEBIiH("G2P5PaidCap"));
  var re = Number(dgEBIiH("G2P5RetEarns"));
  var tse = ps + cs +pdcp + re;
  var tlse = tl + tse;
  dsEBIiH("G2P5bsCash", cash);
  dsEBIiH("G2P5bsSecurities", securities);
  dsEBIiH("G2P5bsRecvbles", recvbls);
  dsEBIiH("G2P5bsInventory", inventory);
  dsEBIiH("G2P5TCA", "<b>" + tca.toString() + "</b>");
  dsEBIiH("G2P5LnB", lnb);
  dsEBIiH("G2P5MnE", mne);
  dsEBIiH("G2P5FnF", fnf);
  dsEBIiH("G2P5bsVehi", veh);
  dsEBIiH("G2P5TGFA", "<b>" + tgfa.toString() + "</b>");
  dsEBIiH("G2P5bsDeprecia", depre);
  dsEBIiH("G2P5NFA", nfa);
  dsEBIiH("G2P5TA", "<b>" + ta.toString() + "</b>");  
  dsEBIiH("G2P5bsPayables", pybl);  
  dsEBIiH("G2P5bsNotes", notes);  
  dsEBIiH("G2P5bsAccru", accru);  
  dsEBIiH("G2P5TCL", "<b>" + tcl.toString() + "</b>");  
  dsEBIiH("G2P5bsLtD", ltd);  
  dsEBIiH("G2P5TL", "<b>" + tl.toString() + "</b>");  
  dsEBIiH("G2P5PS", ps);
  dsEBIiH("G2P5CS", cs);
  dsEBIiH("G2P5bsPaidCap", pdcp);  
  dsEBIiH("G2P5RE", re);  
  dsEBIiH("G2P5TSE", "<b>" + tse.toString() + "</b>");    
  dsEBIiH("G2P5TLnSE", "<b>" + tlse.toString() + "</b>");  
}

function G2P9() {
  var CRs = [Current(dgEBIiH("G2P92kTCA"), dgEBIiH("G2P92kTCL")),
  		       Current(dgEBIiH("G2P92k1TCA"), dgEBIiH("G2P92k1TCL")),
  		       Current(dgEBIiH("G2P92k2TCA"), dgEBIiH("G2P92k2TCL")),
  		       Current(dgEBIiH("G2P92k3TCA"), dgEBIiH("G2P92k3TCL"))
                     ];
  var QRs = [Quick(dgEBIiH("G2P92kTCA"), dgEBIiH("G2P92kInv"), dgEBIiH("G2P92kTCL")),
                      Quick(dgEBIiH("G2P92k1TCA"), dgEBIiH("G2P92k1Inv"), dgEBIiH("G2P92k1TCL")),
                      Quick(dgEBIiH("G2P92k2TCA"), dgEBIiH("G2P92k2Inv"), dgEBIiH("G2P92k2TCL")),
                      Quick(dgEBIiH("G2P92k3TCA"), dgEBIiH("G2P92k3Inv"), dgEBIiH("G2P92k3TCL"))
                      ];
  dsEBIiH("G2P92kCR", "<b>" + CRs[0].toFixed(2) + "</b>");
  dsEBIiH("G2P92k1CR", "<b>" + CRs[1].toFixed(2) + "</b>");
  dsEBIiH("G2P92k2CR", "<b>" + CRs[2].toFixed(2) + "</b>");
  dsEBIiH("G2P92k3CR", "<b>" + CRs[3].toFixed(2) + "</b>");
  dsEBIiH("G2P92kQR", "<b>" + QRs[0].toFixed(2) + "</b>");
  dsEBIiH("G2P92k1QR", "<b>" + QRs[1].toFixed(2) + "</b>");
  dsEBIiH("G2P92k2QR", "<b>" + QRs[2].toFixed(2) + "</b>");
  dsEBIiH("G2P92k3QR", "<b>" + QRs[3].toFixed(2) + "</b>");
    // G2P9 chart
  var year = [2000, 2001, 2002, 2003];
  var data = [['Year', 'Current Ratio', 'Quick Ratio']];
        for (i=0; i < year.length; i++) {
            data.push([year[i].toFixed(0), CRs[i], QRs[i]]);
        } 
        var dtable = google.visualization.arrayToDataTable(data);
        var options = {'title': "Bauman Co.’s Annual Current & Quick Ratios",
        			    'width': 600, 'height': 400};
        // Display the chart inside the <sp> element with id="G2P9chart"
        var chart = new google.visualization.LineChart(document.getElementById("G2P9chart"));
        chart.draw(dtable, options);
}

function G2P11() {
  var avColPer = AvColPer(Number(dgEBIiH("G2P11AR")), Number(dgEBIiH("G2P11Sales")));
  dsEBIiH("G2P11ACP", "<b>" + avColPer.toFixed(0) + " days</b>");
}

function G2P12() {
  var debtRatio = Debt(Number(dgEBIiH("G2P12TL")), Number(dgEBIiH("G2P12TA")));
  dsEBIiH("G2P12Debt", "<b>" + debtRatio.toFixed(2) + "</b>");

  var op = Number(dgEBIiH("G2P12OP"));
  var int = Number(dgEBIiH("G2P12Int"));
  dsEBIiH("G2P12TIE", "<b>" + (TimesIntEarned(op, int)).toFixed(2) + "</b>");

  var lease = Number(dgEBIiH("G2P12LP"));
  var ppl = Number(dgEBIiH("G2P12PP"));
  var psd = Number(dgEBIiH("G2P12PSD"));
  var tr = Number(dgEBIiH("G2P12TaxRate"));
  dsEBIiH("G2P12FPC", "<b>" + (FixedPaymentCoverage(op, lease, int, ppl, psd, tr)).toFixed(2) + "</b>");
}