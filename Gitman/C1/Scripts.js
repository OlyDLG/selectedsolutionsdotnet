function G1P4a() {
  const x = dgEBIiH("G1P4aDatum");
  dsEBIiH("G1P4aAns", GitmanTax(x).toFixed(2));
}

function G1P4b() {
  const x = dgEBIiH("G1P4aDatum");
  dsEBIiH("G1P4b1Ans", GitmanTax(x));
  dsEBIiH("G1P4b2Ans", (x - GitmanTax(x)).toFixed(2));
}

function G1P4c() {
  const x = dgEBIiH("G1P4aDatum");
  dsEBIiH("G1P4c1Ans", GitmanTax(x).toFixed(0));
  dsEBIiH("G1P4c2Ans", GitmanAvTax(x).toFixed(3));
  dsEBIiH("G1P4c3Ans", (100*GitmanAvTax(x)).toFixed(1));
}

function G1P4d() {
  const x = dgEBIiH("G1P4aDatum");
  dsEBIiH("G1P4dAns", (100*GitmanMargTax(x)).toFixed(0));
}

function G1P5() {
  const x = [dgEBIiH("G1P5D1"),
           dgEBIiH("G1P5D2"),
           dgEBIiH("G1P5D3"),
           dgEBIiH("G1P5D4"),
           dgEBIiH("G1P5D5"),
           dgEBIiH("G1P5D6"),
           dgEBIiH("G1P5D7")];
 
  const ids = [["G1P5A11", "G1P5A12", "G1P5A13", "G1P5A14"],
             ["G1P5A21", "G1P5A22", "G1P5A23", "G1P5A24"],
             ["G1P5A31", "G1P5A32", "G1P5A33", "G1P5A34"],
             ["G1P5A41", "G1P5A42", "G1P5A43", "G1P5A44"],
             ["G1P5A51", "G1P5A52", "G1P5A53", "G1P5A54"],
             ["G1P5A61", "G1P5A62", "G1P5A63", "G1P5A64"],
             ["G1P5A71", "G1P5A72", "G1P5A73", "G1P5A74"]];

  const xtra_ids = [["G1P5A15", "G1P5A16", "G1P5A17", "G1P5A18"],
                  ["G1P5A25", "G1P5A26", "G1P5A27", "G1P5A28"]];

  for (i=0; i < x.length; i++) {
    dsEBIiH(ids[i][0], GitmanTax(x[i]));
    dsEBIiH(ids[i][1], x[i] - GitmanTax(x[i]));
    dsEBIiH(ids[i][2], GitmanAvTax(x[i]).toFixed(3));
    dsEBIiH(ids[i][3], (100*GitmanAvTax(x[i])).toFixed(1));
  }

  for (i=0; i < xtra_ids.length; i++) {
    dsEBIiH(xtra_ids[i][0], x[i]);
    dsEBIiH(xtra_ids[i][1], GitmanTax(x[i]));
    dsEBIiH(xtra_ids[i][2], GitmanTax(x[i]));
    dsEBIiH(xtra_ids[i][3], x[i]);
  }

// G1P5 chart
  const data = [['BTE', 'ATR']];
  for (i=0; i < x.length; i++) {
    data.push([x[i], GitmanAvTax(x[i])]);
  } 
  const dtable = google.visualization.arrayToDataTable(data);
  const options = {'title': 'Average Tax Rate v. Before-Tax Earnings',
                 'legend': 'none',
                 'width': 800, 'height': 400};
// Display the chart inside the <sp> element with id="G1P5chart"
  const chart = new google.visualization.ColumnChart(document.getElementById("G1P5chart"));
  chart.draw(dtable, options);
}
  
function G1P6() {
  const x = [dgEBIiH("G1P6D1"), dgEBIiH("G1P6D2"), dgEBIiH("G1P6D3"), 
           dgEBIiH("G1P6D4"), dgEBIiH("G1P6D5"), dgEBIiH("G1P6D6"),
           dgEBIiH("G1P6D7")];

  const ids = ["G1P6A1", "G1P6A2", "G1P6A3", "G1P6A4", 
             "G1P6A5", "G1P6A6", "G1P6A7"];

  for (i=0; i < x.length; i++) {
    dsEBIiH(ids[i], 100*GitmanMargTax(x[i]));
  }
// G1P6 chart
  const data = [['BTE', 'MTR']];
  for (i=0; i < x.length; i++) {
    data.push([x[i], GitmanMargTax(x[i])]);
  } 
  const dtable = google.visualization.arrayToDataTable(data);
  const options = {'title': 'Marginal Tax Rate v. Before-Tax Earnings',
                 'legend': 'none',
                 'width': 800, 'height': 400};
// Display the chart inside the <sp> element with id="G1P6chart"
  const chart = new google.visualization.ColumnChart(document.getElementById("G1P6chart"));
  chart.draw(dtable, options);
}

function G1P7() {
  const OBTEtax = dgEBIiH("G1P7BTR")*dgEBIiH("G1P7OBTE");
  const IntTax = dgEBIiH("G1P7BTR")*dgEBIiH("G1P7Int");
  const DivTax = dgEBIiH("G1P7BTR")*dgEBIiH("G1P7Div")*(1-dgEBIiH("G1P7DE"));
  dsEBIiH("G1P7a", OBTEtax);
  dsEBIiH("G1P7b1", IntTax);
  dsEBIiH("G1P7b2", IntTax);
  dsEBIiH("G1P7b3", dgEBIiH("G1P7Int") - IntTax);
  dsEBIiH("G1P7c1", DivTax.toFixed(0));
  dsEBIiH("G1P7c2", DivTax.toFixed(0));
  dsEBIiH("G1P7c3", (dgEBIiH("G1P7Div") - DivTax).toFixed(0));
  dsEBIiH("G1P7e1", OBTEtax);
  dsEBIiH("G1P7e2", IntTax);
  dsEBIiH("G1P7e3", DivTax.toFixed(0));
  dsEBIiH("G1P7e4", (OBTEtax + IntTax + DivTax).toFixed(0));
}
