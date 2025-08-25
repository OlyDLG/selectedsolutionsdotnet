function GiorCPC3E16() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 16
    const g = 9.8;
    const tmin = 0;
    const N = 1501;
    const h = 0.04;//10 * Math.PI / (N-1);
    const FDForm = document.getElementById("C3E16FD");
    const WDForm = document.getElementById("C3E16WD");
    const qForm = document.getElementById("C3E16q");
    const elForm = document.getElementById("C3E16el");
    
    function makeC3E16Graph() {
        function dxdt(x, t) { // For use with RK42Dnonauton
            const FD = FDForm[0].value;
            const WD = WDForm[0].value / 48;
            const q = qForm[0].value;
            const el = elForm[0].value;
            const gol = g/el;
            [x1, x2] = x;
            temp = -1*gol*Math.sin(x1) - q*[x2] + FD*Math.sin(WD*t);
            return [x2, temp];
        }
        let t = 0;
        var fn = [0.2, 0];
        var fnp1 = [0, 0];
        let data = [['t', '\u03B8(t)']];
        for (let i=0; i < N; i++) {
            data.push([t, fn[0]]);
            fnp1 = RK42Dnonauton(dxdt, fn, t, h); // 4th order RK for non-autonomous 2D system
            t += h;
            fn = fnp1;
        }
        var dtable = google.visualization.arrayToDataTable(data);
        var title = "<center><h3>Solution of Physical Pendulum Model</h3></center>";
        var options = {...globalChartOptions,
		      hAxis: {title: 'Time'},
 	               vAxis: {title: 'Angular Displacement (radians)'},
 	               width: 1000, height: 400};
        // Display the chart inside the <div> element with id="GiorCPC3E16chart"
        var chart = new google.visualization.LineChart(document.getElementById("GiorCPC3E16chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC3E16chartTitle", title);
    }
    makeC3E16Graph();
    return makeC3E16Graph;
}