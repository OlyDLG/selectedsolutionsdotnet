function GiorCPC3E8() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 8 chart
    const tmin = 0;
    var N = 4001;
    var dt = 0.001 * Math.PI;
    const ampForm = document.getElementById("C3E8ampForm");
    
    function fnext(f) { //Use Euler-Cromer
        [th, w] = f;
        w -= Math.sin(th) * dt; // update w first
        th += w * dt; // use updated w to calculate updated th
        return [th, w];
    }

    function estPeriod(f, fnext, t, tnext) {
    /* Method: keep track of when (f)(fnext) < 0, i.e., when f changes sign,
         then linearly interpolate the time when f = 0 */

        if (fnext.zeroIfClose(12) == 0) { 
            return 4 * tnext; }
        else if (f * fnext > 0) { return 0; }
        else { 
            return 4 * ( t - f * (tnext - t) / (fnext - f) ); }
    }

    function makeC3E8Graph() {
        let A = Number(ampForm[0].value);
        let t = 0;
        let T = 0;
        var fn = [Math.PI * A / 180, 0];
        var fnp1 = Array.from(fn);
        let data = [['t', '\u03B8(t)', 'Acos[(2\u03C0/T)t]']];
        for (let i=0; i < N; i++) {
            data.push([t, 180 * fn[0] / Math.PI, NaN]);
            fnp1 = fnext(fn);
            if (T == 0) {
                T = estPeriod(fn[0], fnp1[0], t, t + dt);
            }
            t += dt;
            fn = fnp1;
        }
        for (i=0; i < N; i+=10) {
            t = i * dt;
            data.push([t, NaN, A * Math.cos(2*Math.PI*t/T)]);
        }
        var dtable = google.visualization.arrayToDataTable(data);
        var title = "<center><h3>Solutions of d<sup>2</sup>\u03B8/dt<sup>2</sup> = &minus;sin\u03B8</center>";
        var options = {hAxis: {title: 'Time\nSolution Period = ' + (T/Math.PI).toFixed(2) + '\u03C0',
                               ticks: [{v: 0, f: '0'},
				     {v: 0.5 * Math.PI, f: '\u03C0/2'}, 
				     {v: Math.PI, f: '\u03C0'},
				     {v: 1.5 * Math.PI, f: '3\u03C0/2'},
				     {v: 2 * Math.PI, f: '2\u03C0'},
				     {v: 2.5 * Math.PI, f: '5\u03C0/2'},
				     {v: 3 * Math.PI, f: '3\u03C0'},
				     {v: 3.5 * Math.PI, f: '7\u03C0/2'},
				     {v: 4 * Math.PI, f: '4\u03C0'}
				     ]},
 	               vAxis: {title: 'Angular Displacement (degrees)'},
        		      series: {1: {lineDashStyle: [6, 6]}},
                       legend: 'bottom',
//                       chartArea: {top: -20},
        		      width: 1000, height: 400};
        // Display the chart inside the <sp> element with id="GiorCPC3E8chart"
        var chart = new google.visualization.LineChart(document.getElementById("GiorCPC3E8chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC3E8chartTitle", title);
    }
    makeC3E8Graph();
    return makeC3E8Graph;
}