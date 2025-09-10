function GiorCPC3E20() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 20
  const g = 9.8;
  const pi = Math.PI;
  const npi = -1 * pi;
  const tpi = 2 * pi;
  const WD = 2.0 / 3;
  const T = tpi / WD;
  const tmin = 0, tmax = 400 * T, Xient = 300 * T;
  const h = 0.001 * T, h2 = h / 2;
  const FDmin = 1.42;
  const FDmax = 1.49;
  const dFDmain = 0.001;
  const dFDdetail = 0.0001;
//  let FD2 = 1.424;
//  const FD4 = 1.459;
//  const FD8 = 1.476;
//  const FD16 = 1.4775;
  
  function makeC3E20Graph() {
    function dxdt(x, t) { // For use with RK42Dnonauton
      let [x1, x2] = x;
      let temp = -1*Math.sin(x1) - [x2]/2 + FD*Math.sin(WD*t);
      return [x2, temp];
    }
    const mainData = [['FD', 'theta']];
    const detData = [['FD', 'theta']];
    let fn = [0.2, 0];
    let fnp1 = [0, 0];
    let lb = 0, ub = 0;
    let FD = FDmin;
    while (FD < FDmax) {
      if (t >= tmin) {
        if (!swtch) {
          tdData.push([t, fn[0], fn[1]]);
          ppData.push([fn[0], fn[1]]);
        }
        else {
          lb = WDo2pi * (t-h2); ub = WDo2pi * (t+h2);
          if (Math.ceil(lb) == Math.floor(ub)) {
            saData.push([fn[0], fn[1]]);
            if (!sadetswtch && fn[0] > 2) {
              sadetswtch = true;
            }
          }
        }
      }
      fnp1 = RK42Dnonauton(dxdt, fn, t, h); // 4th order RK for non-autonomous 2D system
      if (fnp1[0] > pi) {
        fnp1[0] -= tpi;
      }
      else if (fnp1[0] < npi) {
        fnp1[0] += tpi;
      }
      t += h;
      fn = fnp1;
    }
      // Main chart creation and placement
    const mainTable = google.visualization.arrayToDataTable(mainData);
    const mainOptions = {...globalChartOptions,
                         hAxis: {title: 'F<sub>D</sub>'},
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
                         hAxis: {title: 'F<sub>D</sub>'},
                                 viewWindowMode: 'explicit',
                                 viewWindow: {min: 1.46, max: 1.48}},
                         vAxis: {title: '\u03B8 (radians)',
                                 viewWindowMode: 'explicit',
                                 viewWindow: {min: 1, max: 3}},
                         pointSize: 1, lineWidth: 0, legend: 'none', 
                         width: 500, height: 400};
      const detChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E20bddetChart"));
      detChart.draw(detTable, detOptions);
    const title = "<center><h3>Solutions of Physical Pendulum Model</h3></center>";
    dsEBIiH("GiorCPC3E20Title", title);
  }
  makeC3E20Graph();
  return makeC3E20Graph;
}