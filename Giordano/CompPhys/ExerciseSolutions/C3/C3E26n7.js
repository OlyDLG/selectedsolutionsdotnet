function GiorCPC3E26n7() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 26/27
  const s = 10.0;
  const b = 8.0/3;
/*
  const rForm = document.getElementById("C3E26n7r");
  const x0Form = document.getElementById("C3E26n7x0");
  const y0Form = document.getElementById("C3E26n7y0");
  const z0Form = document.getElementById("C3E26n7z0");
*/

  function makeC3E26n7Graph() {
    function dxdt(x, t) { // For use with RK4nonauton
      let [x1, x2, x3] = x;
      let x1dot = s*(x2 - x1);
      let x2dot = (r - x3)*x1 - x2;
      let x3dot = x1*x2 - b*x3);
      return [x1dot, x2dot, x3dot];
    }
    const r = 5,//Number(rForm[0].value),
          x0 = 1,//Number(x0Form[0].value),
          y0 = 0,//Number(y0Form[0].value),
          z0 = 0,//Number(z0Form[0].value),
    const h = 0.01,
//    const h2 = h / 2;
    const tXient = 30,
//    const N = (!swtch) ? 1500 : 150000;
    const tmax = 60;
    let t = 0;
    let fn = [0.2, 0];
    let fnp1 = [0, 0];
    const tdData = [['t', '\u03B8(t)', '\u03C9(t)']];
    const ppData = [['\u03B8', '\u03C9']];
    const saData = [['\u03B8', '\u03C9']];
    let sadetswtch = false;
    let lb = 0, ub = 0;
    while (t < tmax) {
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
      fnp1 = RK4nonauton(dxdt, fn, t, h); // 4th order RK for non-autonomous 2D system
      if (fnp1[0] > pi) {
        fnp1[0] -= tpi;
      }
      else if (fnp1[0] < npi) {
        fnp1[0] += tpi;
      }
      t += h;
      fn = fnp1;
    }
    if (!swtch) { // Time domain chart creation and placement
      const tdTable = google.visualization.arrayToDataTable(tdData);
      const tdOptions = {...globalChartOptions,
                         hAxis: {title: 'Time'},
                         vAxis: {title: '\u03B8: radians, \u03C9: rad/sec',
                                 viewWindowMode: 'explicit',
                                 viewWindow: {min: -3.5, max: 3.5}},
                         width: 500, height: 400};
      const tdChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E16tdChart"));
      tdChart.draw(tdTable, tdOptions);

        // Phase plane chart creation and placement
      const ppTable = google.visualization.arrayToDataTable(ppData);
      const ppOptions = {...globalChartOptions,
                         hAxis: {title: '\u03B8 (radians)',
                                 ticks: [{v: npi, f: '-\u03C0'},
                                         {v: 0, f: '0'},
                                         {v: pi, f: '\u03C0'}]},
                         vAxis: {title: '\u03C9 (rad/sec)',
                                 viewWindowMode: 'explicit',
                                 viewWindow: {min: -2.5, max: 2.5}},
                         pointSize: 1, lineWidth: 0, legend: 'none', 
                         width: 500, height: 400};
      const ppChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E16ppChart"));
      ppChart.draw(ppTable, ppOptions);
    }
    else { // Strange attractor chart creation and placement
      const saTable = google.visualization.arrayToDataTable(saData);
      const saOptions = {...globalChartOptions,
                         hAxis: {title: '\u03B8 (radians)',
                                 ticks: [{v: npi, f: '-\u03C0'},
                                         {v: 0, f: '0'},
                                         {v: pi, f: '\u03C0'}]},
                         vAxis: {title: '\u03C9 (rad/sec)',
                                 viewWindowMode: 'explicit',
                                 viewWindow: {min: -2, max: 1}},
                         pointSize: 1, lineWidth: 0, legend: 'none', 
                         width: 500, height: 400};
      const saChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E16saChart"));
      saChart.draw(saTable, saOptions);

        // Strange attractor detail chart creation and placement
      if (sadetswtch) {
        const detOptions = {...globalChartOptions,
                            hAxis: {title: '\u03B8 (radians)',
                                    ticks: [{v: 2, f: '2'},
                                            {v: pi, f: '\u03C0'}],
                                    viewWindowMode: 'explicit',
                                    viewWindow: {min: 2.0, max: pi}
                                    },
                            vAxis: {title: '\u03C9 (rad/sec)'//,
				 },
                            pointSize: 1, lineWidth: 0, legend: 'none', 
                            width: 500, height: 400};
        const detChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E16sadetChart"));
        detChart.draw(saTable, detOptions);
      }
      else {
        dsEBIiH("GiorCPC3E16sadetChart", "No Points in phase with \u03A9 = " + WD.toFixed(3) + "\nwith \u03B8 > 2");
      }
    }
    const title = "<center><h3>Solutions of Physical Pendulum Model</h3></center>";
    dsEBIiH("GiorCPC3E16Title", title);
  }
  makeC3E16Graph();
  return makeC3E16Graph;
}