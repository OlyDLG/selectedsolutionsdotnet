function G5P1() {
  let XCMV = Number(removeCommas(dgEBIiH("G5P1XCMV")));
  let XPMV = Number(removeCommas(dgEBIiH("G5P1XPMV")));
  let XCF = Number(dgEBIiH("G5P1XCF"));
  let YCMV = Number(removeCommas(dgEBIiH("G5P1YCMV")));
  let YPMV = Number(removeCommas(dgEBIiH("G5P1YPMV")));
  let YCF = Number(dgEBIiH("G5P1YCF"));

  dsEBIiH("G5P1XCFsol", XCF.toFixed(0));
  dsEBIiH("G5P1XCMVsol", XCMV.toFixed(0));
  dsEBIiH("G5P1XPMVsol", XPMV.toFixed(0));
  dsEBIiH("G5P1XPMVsol2", XPMV.toFixed(0));
  dsEBIiH("G5P1XRoR", (100*RateOfRet(XCF, XPMV, XCMV)).toFixed(2));

  dsEBIiH("G5P1YCFsol", YCF.toFixed(0));
  dsEBIiH("G5P1YCMVsol", YCMV.toFixed(0));
  dsEBIiH("G5P1YPMVsol", YPMV.toFixed(0));
  dsEBIiH("G5P1YPMVsol2", YPMV.toFixed(0));
  dsEBIiH("G5P1YRoR", (100*RateOfRet(YCF, YPMV, YCMV)).toFixed(2));
}

function G5P13() { // G5P13 chart
  const data = [['Number of Stocks', 'Total Risk', 'Diversifiable Risk', 'Nondiversifiable Risk']];
  for (i=1; i < 21; i++) {
    data.push([Number(i), 
               Number(dgEBIiH("G5P13r" + i.toFixed(0))),
               Number(dgEBIiH("G5P13r" + i.toFixed(0))) - Number(dgEBIiH("G5P13r20")),
               Number(dgEBIiH("G5P13r20"))]);
  } 
  const dtable = google.visualization.arrayToDataTable(data);
  const options = {title: 'Risk v. Number of Assets',
                   hAxis: {title: 'Stocks in Portfolio (#)'},
                   vAxis: {title: 'Risk (%)'},
                   legend: 'bottom',
                   width: 800, height: 400};
// Display the chart inside the <sp> element with id="G5P13chart"
  const chart = new google.visualization.LineChart(document.getElementById("G5P13chart"));
  chart.draw(dtable, options);
}

function G5P23() { // G5P23 chart
  const data = [['Nondiversifiable Risk', 'Required Return']];
  for (i=1; i < 7; i++) {
    data.push([Number(dgEBIiH("G5P23b" + i.toFixed(0))),
             Number(dgEBIiH("G5P23k" + i.toFixed(0)))]);
  } 
  const dtable = google.visualization.arrayToDataTable(data);
  const options = {title: 'Required Return vs. Beta (Security Market Line)',
                   pointSize: 5,
                   hAxis: {title: 'Beta'},
                   vAxis: {title: 'Return (%)'},
                   legend: 'none',
                   width: 800, height: 400};
// Display the chart inside the <sp> element with id="G5P23chart"
  const chart = new google.visualization.LineChart(document.getElementById("G5P23chart"));
  chart.draw(dtable, options);
}