function GiorCPC3E16() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 16
    const g = 9.8;
    const pi = Math.PI;
    const npi = -1 * pi;
    const tpi = 2 * pi;
    const FDForm = document.getElementById("C3E16FD");
    const WDForm = document.getElementById("C3E16WD");
    const qForm = document.getElementById("C3E16q");
    const elForm = document.getElementById("C3E16el");
    const hForm = document.getElementById("C3E16h");
    const tmForm = document.getElementById("C3E16tmin");
    const NForm = document.getElementById("C3E16N");

    function makeC3E16Graph() {
        function dxdt(x, t) { // For use with RK42Dnonauton
            let [x1, x2] = x;
            let temp = -1*gol*Math.sin(x1) - q*[x2] + FD*Math.sin(WD*t);
            return [x2, temp];
        }
        const N = Number(NForm[0].value);
        const swtch = (N < 7500);
        if (swtch) {
          document.getElementById("E16tsppGraphTable").hidden = false;
          document.getElementById("E16saTitleID").hidden = true;
          document.getElementById("GiorCPC3E16saChart").hidden = true;
        }
        else {
          document.getElementById("E16tsppGraphTable").hidden = true;
          document.getElementById("E16saTitleID").hidden = false;
          document.getElementById("GiorCPC3E16saChart").hidden = false;
        }
        const h = Number(hForm[0].value);
        const h2 = h / 2;
        const tmin = Number(tmForm[0].value);
        const tmax = tmin + N * h;
        const FD = Number(FDForm[0].value);
        const WD = Number(WDForm[0].value) / 48;
        const WDo2pi = WD / tpi;
        const q = Number(qForm[0].value);
        const gol = g / Number(elForm[0].value);
        let t = 0;
        let fn = [0.2, 0];
        let fnp1 = [0, 0];
        const tdData = [['t', '\u03B8(t)', '\u03C9(t)']];
        const ppData = [['\u03B8', '\u03C9']];
        const saData = [['\u03B8', '\u03C9']];
        let lb = 0, ub = 0;
        while (t < tmax) {
          if (t >= tmin) {
            if (swtch) {
              tdData.push([t, fn[0], fn[1]]);
              ppData.push([fn[0], fn[1]]);
            }
            else {
              lb = WDo2pi * (t-h2); ub = WDo2pi * (t+h2);
              if (Math.ceil(lb) == Math.floor(ub)) {
                saData.push([fn[0], fn[1]]);
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
        if (swtch) { // Time domain chart creation and placement
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
        }
        const title = "<center><h3>Solutions of Physical Pendulum Model</h3></center>";
        dsEBIiH("GiorCPC3E16Title", title);
    }
    makeC3E16Graph();
    return makeC3E16Graph;
}