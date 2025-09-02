function G2P3() {
 // Income and Initial Balance //
  dsEBIiH("Income", dgEBIiH("G2P3rcvbls"));
  dsEBIiH("Bal", dgEBIiH("Income"));

 // Less Salaries //
  const salaries = 12 * dgEBIiH("G2P3CCsal") + Number(dgEBIiH("G2P3BkprSal")) + Number(dgEBIiH("G2P3AstSal"));
  dsEBIiH("TotalSals", (salaries));
  const BmS = dgEBIiH("G2P3rcvbls") - salaries;
  dsEBIiH("Bal-Sals", BmS);
 
 // Less Employment Expenses //
  const EEs = dgEBIiH("G2P3EmpExp");
  dsEBIiH("EEs", EEs);
  const BmE = BmS - EEs;
  dsEBIiH("Bal-EEs", BmE);
 
 // Less Office Expenses //
  const OEs = dgEBIiH("G2P3OfcExp");
  dsEBIiH("OEs", OEs);
  const BmO = BmE - OEs;
  dsEBIiH("Bal-OEs", BmO);
 
 // Less Other Operating Expenses //
  const OOE = dgEBIiH("G2P3OOpExp");
  dsEBIiH("OOEs", OOE);
  const BalmOOE = BmO - OOE;
  dsEBIiH("Bal-OOEs", BalmOOE);
 
 // Less Lease //
  const Ls = 12 * dgEBIiH("G2P3Lease")
  dsEBIiH("Lease", Ls);
  const BmL = BalmOOE - Ls;
  dsEBIiH("Bal-Les", BmL);

 // Less Depreciation //
  const Dep = dgEBIiH("G2P3Dep");
  dsEBIiH("Dep", Dep);
  const BmD = BmL - Dep;
  dsEBIiH("Bal-Dep", BmD);

 // Less Interest //
  const Int = dgEBIiH("G2P3Int");
  dsEBIiH("Int", Int);
  const BmI = BmD - Int;
  dsEBIiH("Bal-Int", BmI);

 // Less Taxes //
  const Tax = Number(dgEBIiH("G2P3TaxRate")) * BmI /100;
  dsEBIiH("Tax", Tax);
  const BmT = BmI - Tax;
  dsEBIiH("Bal-Tax", BmT);

 // Final Balance //
  dsEBIiH("NEI", dgEBIiH("Bal-Tax"));
}

function G2P4() {
  const NSO = Number(dgEBIiH("G2P4NSO"));
  const NEA4CS = (1-Number(dgEBIiH("G2P4TR"))) * Number(dgEBIiH("G2P4NEBT")) - Number(dgEBIiH("G2P4PSD"));
  const locEPS = EPS(NEA4CS, NSO).toFixed(2);
  dsEBIiH("G2P4a1", NEA4CS.toFixed(0)); 
  dsEBIiH("G2P4a2", locEPS);
  dsEBIiH("G2P4b1", NSO.toFixed(0));
  dsEBIiH("G2P4b2", locEPS);
  dsEBIiH("G2P4b3", (NSO*(Number(locEPS) - Number(dgEBIiH("G2P4DivPd")))).toFixed(0));
}

function G2P5() {
  const cash = Number(dgEBIiH("G2P5Cash"));
  const securities = Number(dgEBIiH("G2P5Securities"));
  const recvbls = Number(dgEBIiH("G2P5Recable"));
  const inventory = Number(dgEBIiH("G2P5Inventory"));
  const tca = cash + securities + recvbls + inventory;
  const lnb = Number(dgEBIiH("G2P5Land")) + Number(dgEBIiH("G2P5Builds"));
  const mne = Number(dgEBIiH("G2P5Machinery")) + Number(dgEBIiH("G2P5Equip"));
  const fnf = Number(dgEBIiH("G2P5Furn"));
  const veh = Number(dgEBIiH("G2P5Vehic"));
  const depre = Number(dgEBIiH("G2P5Deprecia")); 
  const tgfa = lnb + mne + fnf + veh;
  const nfa = tgfa - depre;
  const ta = tca + nfa; 
  const pybl = Number(dgEBIiH("G2P5Payable"));
  const notes = Number(dgEBIiH("G2P5NotesPay"));
  const accru = Number(dgEBIiH("G2P5Accru"));
  const tcl = pybl + notes + accru;
  const ltd = Number(dgEBIiH("G2P5LtD"));
  const tl = tcl + ltd;
  const ps = Number(dgEBIiH("G2P5PrefStk"));
  const cs = Number(dgEBIiH("G2P5CSaP"));
  const pdcp = Number(dgEBIiH("G2P5PaidCap"));
  const re = Number(dgEBIiH("G2P5RetEarns"));
  const tse = ps + cs +pdcp + re;
  const tlse = tl + tse;
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
  const CRs = [Current(dgEBIiH("G2P92kTCA"), dgEBIiH("G2P92kTCL")),
             Current(dgEBIiH("G2P92k1TCA"), dgEBIiH("G2P92k1TCL")),
             Current(dgEBIiH("G2P92k2TCA"), dgEBIiH("G2P92k2TCL")),
             Current(dgEBIiH("G2P92k3TCA"), dgEBIiH("G2P92k3TCL"))];

  const QRs = [Quick(dgEBIiH("G2P92kTCA"), dgEBIiH("G2P92kInv"), dgEBIiH("G2P92kTCL")),
             Quick(dgEBIiH("G2P92k1TCA"), dgEBIiH("G2P92k1Inv"), dgEBIiH("G2P92k1TCL")),
             Quick(dgEBIiH("G2P92k2TCA"), dgEBIiH("G2P92k2Inv"), dgEBIiH("G2P92k2TCL")),
             Quick(dgEBIiH("G2P92k3TCA"), dgEBIiH("G2P92k3Inv"), dgEBIiH("G2P92k3TCL"))];

  dsEBIiH("G2P92kCR", "<b>" + CRs[0].toFixed(2) + "</b>");
  dsEBIiH("G2P92k1CR", "<b>" + CRs[1].toFixed(2) + "</b>");
  dsEBIiH("G2P92k2CR", "<b>" + CRs[2].toFixed(2) + "</b>");
  dsEBIiH("G2P92k3CR", "<b>" + CRs[3].toFixed(2) + "</b>");
  dsEBIiH("G2P92kQR", "<b>" + QRs[0].toFixed(2) + "</b>");
  dsEBIiH("G2P92k1QR", "<b>" + QRs[1].toFixed(2) + "</b>");
  dsEBIiH("G2P92k2QR", "<b>" + QRs[2].toFixed(2) + "</b>");
  dsEBIiH("G2P92k3QR", "<b>" + QRs[3].toFixed(2) + "</b>");
 // G2P9 chart
  const year = [2000, 2001, 2002, 2003];
  const data = [['Year', 'Current Ratio', 'Quick Ratio']];
  for (i=0; i < year.length; i++) {
    data.push([year[i].toFixed(0), CRs[i], QRs[i]]);
  } 
  const dtable = google.visualization.arrayToDataTable(data);
  const options = {'title': "Bauman Co.’s Annual Current & Quick Ratios",
                 'width': 600, 'height': 400};
 // Display the chart inside the <sp> element with id="G2P9chart"
  const chart = new google.visualization.LineChart(document.getElementById("G2P9chart"));
  chart.draw(dtable, options);
}

function G2P11() {
  const avColPer = AvColPer(Number(dgEBIiH("G2P11AR")), Number(dgEBIiH("G2P11Sales")));
  dsEBIiH("G2P11ACP", "<b>" + avColPer.toFixed(0) + " days</b>");
}

function G2P12() {
  const debtRatio = Debt(Number(dgEBIiH("G2P12TL")), Number(dgEBIiH("G2P12TA")));
  dsEBIiH("G2P12Debt", "<b>" + debtRatio.toFixed(2) + "</b>");

  const op = Number(dgEBIiH("G2P12OP"));
  const int = Number(dgEBIiH("G2P12Int"));
  dsEBIiH("G2P12TIE", "<b>" + (TimesIntEarned(op, int)).toFixed(2) + "</b>");

  const lease = Number(dgEBIiH("G2P12LP"));
  const ppl = Number(dgEBIiH("G2P12PP"));
  const psd = Number(dgEBIiH("G2P12PSD"));
  const tr = Number(dgEBIiH("G2P12TaxRate"));
  dsEBIiH("G2P12FPC", "<b>" + (FixedPaymentCoverage(op, lease, int, ppl, psd, tr)).toFixed(2) + "</b>");
}