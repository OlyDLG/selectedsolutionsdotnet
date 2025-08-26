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
    const tMForm = document.getElementById("C3E16tmax");
    
    function makeC3E16Graph() {
        function dxdt(x, t) { // For use with RK42Dnonauton
            let [x1, x2] = x;
            let temp = -1*gol*Math.sin(x1) - q*[x2] + FD*Math.sin(WD*t);
            return [x2, temp];
        }
//        const t0 = 0;
        const h = Number(hForm[0].value);
        const tmin = Number(tmForm[0].value);
        const tmax = tmin + Number(tMForm[0].value);
        const FD = Number(FDForm[0].value);
        const WD = Number(WDForm[0].value) / 48;
        const q = Number(qForm[0].value);
        const gol = g / Number(elForm[0].value);
        let t = 0;
        let fn = [0.2, 0];
        let fnp1 = [0, 0];
        const tdData = [['t', '\u03B8(t)', '\u03C9(t)']];
        const ppData = [['\u03B8', '\u03C9']];
        while (t < tmax) {
            if (t >= tmin) {
                tdData.push([t, fn[0], fn[1]]);
                ppData.push([fn[0], fn[1]]);
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

     // Time domain chart creation and placement
        const tdTable = google.visualization.arrayToDataTable(tdData);
        const tdOptions = {...globalChartOptions,
                           hAxis: {title: 'Time'},
                           vAxis: {title: '\u03B8: radians, \u03C9: rad/sec',
//                                   ticks: [{v: npi, f: '-\u03C0'}, 
//                                           {v: 0, f: '0'}, 
//                                           {v: pi, f: '\u03C0'}],
                                   viewWindowMode: 'explicit',
                                   viewWindow: {min: -3.5, max: 3.5}},
                           width: 500, height: 400};
     // Display the chart inside the <div> element with id="GiorCPC3E16tdChart"
        const tdChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E16tdChart"));
        tdChart.draw(tdTable, tdOptions);

     // Phase plane chart creation and placement
        const ppTable = google.visualization.arrayToDataTable(ppData);
        const ppOptions = {...globalChartOptions,
                           hAxis: {title: '\u03B8 (radians)',
//                                   min: npi, max: pi,
                                   ticks: [{v: npi, f: '-\u03C0'},
                                           {v: 0, f: '0'},
                                           {v: pi, f: '\u03C0'}]},
                           vAxis: {title: '\u03C9 (rad/sec)',
                                   viewWindowMode: 'explicit',
                                   viewWindow: {min: -2.5, max: 2.5}},
                           pointSize: 1, lineWidth: 0, legend: 'none', 
                           width: 500, height: 400};
     // Display the chart inside the <div> element with id="GiorCPC3E16ppChart"
        const ppChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E16ppChart"));
        ppChart.draw(ppTable, ppOptions);

        const title = "<center><h3>Solutions of Physical Pendulum Model</h3></center>";
        dsEBIiH("GiorCPC3E16Title", title);
    }
    makeC3E16Graph();
    return makeC3E16Graph;
}