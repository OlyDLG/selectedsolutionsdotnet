function GiorCPC3E20() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 20
  const g = 9.8, 
        pi = Math.PI, 
        npi = -1 * pi,
        tpi = 2 * pi,
        WD = 2.0 / 3, 
        T = tpi / WD,
        tmin = 0, 
        tmax = 400 * T, 
        Xient = 300 * T,
        FDmin = 1.42, 
        FDmax = 1.49,
        dFDmain = 0.001, 
        dFDdetail = 0.0001,
        swtchForm = document.getElementById("C3E20swtch"),
        mainData = [['FD', 'theta']],
//        mainTable = google.visualization.arrayToDataTable(mainData),
        mainOptions = {...globalChartOptions,
                       hAxis: {title: 'F_D',
                               viewWindowMode: 'explicit',
                               viewWindow: {min: 1.42, max: 1.49}},
                       vAxis: {title: '\u03B8 (radians)',
                               viewWindowMode: 'explicit',
                               viewWindow: {min: 1, max: 3}},
                       pointSize: 1, legend: 'none', //lineWidth: 0,  
                       width: 500, height: 400},
        mainChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E20bifdiaChart")),
//      mainChart.draw(mainTable, mainOptions);
        detData = [['FD', 'theta']],
//        detTable = google.visualization.arrayToDataTable(detData),
        detOptions = {...globalChartOptions,
                      hAxis: {title: 'F_D',
                              viewWindowMode: 'explicit',
                              viewWindow: {min: 1.46, max: 1.48}},
                      vAxis: {title: '\u03B8 (radians)',
                              viewWindowMode: 'explicit',
                              viewWindow: {min: 1, max: 3}},
                      pointSize: 1, legend: 'none', //lineWidth: 0, 
                      width: 500, height: 400},
        detChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E20bddetChart")),
//      detChart.draw(detTable, detOptions);
        title = "<center><h3>PPM Bifurcation Diagram & Detail</h3></center>";
        dsEBIiH("GiorCPC3E20Title", title);

  let FD = FDmin;
  
  function makeC3E20Graph() {
    function dxdt(x, t) { // For use with RK42Dnonauton
      let [x1, x2] = x;
      let temp = -1*Math.sin(x1) - [x2]/2 + FD*Math.sin(WD*t);
      return [x2, temp];
    }
    const swtch = swtchForm[0].checked;
    if (swtch) {
//      const mainData = [['FD', 'theta']];
//      const detData = [['FD', 'theta']];
      while (FD < FDmax) {
        let t = 0;
        let h = 0.01 * T;
        let fn = [0.2, 0];
        while (t < Xient) { // Calculate but "throw away" first 300 driving period results
          fn = RK42Dnonauton(dxdt, fn, t, h); // 4th order RK for non-autonomous 2D system
          if (fn[0] > pi) {
            fn[0] -= tpi;
          }
          else if (fn[0] < npi) {
            fn[0] += tpi;
          }
          t += h;
        }
        h /= 10;
        let h2 = h/2; 
        let nT = 301;
        while (t <= tmax) { // Begin accumulating results
          fn = RK42Dnonauton(dxdt, fn, t, h); // 4th order RK for non-autonomous 2D system
          if (fn[0] > pi) {
            fn[0] -= tpi;
          }
          else if (fn[0] < npi) {
            fn[0] += tpi;
          }
          if (Math.abs(t - nT * T) < h2) {
            mainData.push([FD, fn[0]]);
            detData.push([FD, fn[0]]);
//            mainChart.draw(google.visualization.arrayToDataTable(mainData), mainOptions);
//            detChart.draw(google.visualization.arrayToDataTable(detData), detOptions);
            nT += 1;
          }
          t += h;
        }
        FD += dFDmain;
//        let check = (Math.floor(200*FD)==Math.ceil(200*FD));
//        if (check) {
//          mainChart.draw(google.visualization.arrayToDataTable(mainData), mainOptions);
//          detChart.draw(google.visualization.arrayToDataTable(detData), detOptions);
//        }
      }
    // Main chart creation and placement
/*      const mainTable = google.visualization.arrayToDataTable(mainData);
      const mainOptions = {...globalChartOptions,
                           hAxis: {title: 'F_D'},
                           vAxis: {title: '\u03B8 (radians)',
                                   viewWindowMode: 'explicit',
                                   viewWindow: {min: 1, max: 3}},
                           pointSize: 1, lineWidth: 0, legend: 'none', 
                           width: 500, height: 400};
      const mainChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E20bifdiaChart"));
      mainChart.draw(mainTable, mainOptions);

    // Detail chart creation and placement
      const detTable = google.visualization.arrayToDataTable(detData);
      const detOptions = {...globalChartOptions,
                          hAxis: {title: 'F_D',
                                  viewWindowMode: 'explicit',
                                  viewWindow: {min: 1.46, max: 1.48}},
                          vAxis: {title: '\u03B8 (radians)',
                                  viewWindowMode: 'explicit',
                                  viewWindow: {min: 1, max: 3}},
                          pointSize: 1, lineWidth: 0, legend: 'none', 
                          width: 500, height: 400};
      const detChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E20bddetChart"));
      detChart.draw(detTable, detOptions);
      const title = "<center><h3>PPM Bifurcation Diagram & Detail</h3></center>";
      dsEBIiH("GiorCPC3E20Title", title);
*/
    }
    mainChart.draw(google.visualization.arrayToDataTable(mainData), mainOptions);
    detChart.draw(google.visualization.arrayToDataTable(detData), detOptions);
  }
  return makeC3E20Graph;
}