
function GiorCPC2E5() { // Giordano/Nakanishi Comp. Phys. Chpt. 2 Ex. 5 chart
    const tMax = 50.0; // seconds; according to the text, this should be ample time to see
                       // the difference between the effect of air resistance vs. none
    const m = 70.0; // kg
    const P = 400.0; // Watts
    const k = P/m;
    const rho = 1.225; // kg/m³ density of dry air at sea-level at "standard atmospheric
                       // conditions," according to Google
    const A = 0.33; // m^2
    const C_D = // "net" drag coefficient
                rho * A / (2 * m); // * C multiplying by C = 1.0 is "inefficient"
    const DT = dt(tMax, n1);
    const v0noForce = 4.0, v0wForce = 0.0; // mps 
    const vstarForm = document.getElementById("C2E5TransitionV");
        
    function C2E5fprime(fn, vstar, F0) {
        let noDragNoForce = fn[0], wDragNoForce = fn[1],
            wForce = fn[2], phasedInForce = fn[3]; 
        noDragNoForce += k / noDragNoForce * DT;
        wDragNoForce += (k / wDragNoForce - C_D * wDragNoForce * wDragNoForce) * DT;
        wForce += (((wForce < vstar) ? F0/m : k/wForce) - C_D * wForce * wForce) * DT;
        alpha = phasedInForce / vstar;
        phasedInForce += (((alpha < 1) ? (1 - alpha) * F0/m + k/vstar : k /phasedInForce) - C_D * phasedInForce * phasedInForce) * DT; 
        return [noDragNoForce, wDragNoForce, wForce, phasedInForce];
    }

    function makeC2E5Graph() {
        let vstar = vstarForm[0].valueAsNumber;
        let F0 = P / vstar;
        let data = [['t', 'Constant Power', 'With Drag', 'With Force', 'Linear Transition']];
        let [noDragNoForce, wDragNoForce, wForce, phasedInForce] = [v0noForce, v0noForce, v0wForce, v0wForce];
        for (i=0; i<n1+1; i++) {
            data.push([i*DT, noDragNoForce, wDragNoForce, wForce, phasedInForce]);
            if (i <= n1) {
            [noDragNoForce, wDragNoForce, wForce, phasedInForce] = C2E5fprime([noDragNoForce, wDragNoForce, wForce, phasedInForce], vstar, F0);
            }
        }
        let dtable = google.visualization.arrayToDataTable(data);
        let title = "<center><h3>Bicycle Speed vs. Time</center>";
        let options = {...globalChartOptions,
                       hAxis: {title: 'Time (sec.)'},
                       vAxis: {title: 'Speed (m/s)'},
                       width: 800, height: 400};
      // Display the chart inside the <sp> element with id="GiorCPC2E5chart"
        let chart = new google.visualization.LineChart(document.getElementById("GiorCPC2E5chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC2E5chartTitle", title);
    }
    makeC2E5Graph();
    return makeC2E5Graph;
}