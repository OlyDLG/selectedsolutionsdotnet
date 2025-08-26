function GiorCPC3E16() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 16
    const g = 9.8;
    const tmin = 0;
    const N = 1501;
    const h = 0.04;
    const FDForm = document.getElementById("C3E16FD");
    const WDForm = document.getElementById("C3E16WD");
    const qForm = document.getElementById("C3E16q");
    const elForm = document.getElementById("C3E16el");
    
    function makeC3E16Graph() {
        function dxdt(x, t) { // For use with RK42Dnonauton
            const FD = FDForm[0].value;
            const WD = WDForm[0].value / 48;
            const q = qForm[0].value;
            const gol = g / elForm[0].value;
            let [x1, x2] = x;
            let temp = -1*gol*Math.sin(x1) - q*[x2] + FD*Math.sin(WD*t);
            return [x2, temp];
        }
        let t = 0;
        let fn = [0.2, 0];
        let fnp1 = [0, 0];
        const tdData = [['t', '\u03B8(t)', '\u03C9(t)']];
        const ppData = [['\u03B8', '\u03C9']];
        for (let i=0; i < N; i++) {
            tdData.push([t, fn[0], fn[1]]);
            ppData.push([fn[0], fn[1]]);
            fnp1 = RK42Dnonauton(dxdt, fn, t, h); // 4th order RK for non-autonomous 2D system
            t += h;
            fn = fnp1;
        }

     // Time domain chart creation and placement
        const tdTable = google.visualization.arrayToDataTable(tdData);
        const tdOptions = {...globalChartOptions,
                           hAxis: {title: 'Time'},
                           vAxis: {title: '\u03B8: radians, \u03C9: rad/sec'},
                           width: 500, height: 400};
        // Display the chart inside the <div> element with id="GiorCPC3E16tdChart"
        const tdChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E16tdChart"));
        tdChart.draw(tdTable, tdOptions);

     // Phase plane chart creation and placement
        const ppTable = google.visualization.arrayToDataTable(ppData);
        const ppOptions = {...globalChartOptions,
                           hAxis: {title: '\u03B8 (radians)'},
                           vAxis: {title: '\u03C9 (rad/sec)'},
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