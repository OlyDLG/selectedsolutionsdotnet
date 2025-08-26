function GiorCPC3E4() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 4 chart
    const tmin = 0;
    const dt = 0.01 * Math.PI;
    const ampForm = document.getElementById("C3E4ampForm");
    let N;
    
    function fnext(x, dt) { // Use RK22D for x1, x3, x5, RKN42Dauton for x7
        let x1 = RK22D((x,t) => -1*x, [x[0], x[4]], 0, dt);
        let x3 = RK22D((x,t) => -1*Math.pow(x,3), [x[1], x[5]], 0, dt);
        let x5 = RK22D((x,t) => -1*Math.pow(x,5), [x[2], x[6]], 0, dt);
        let x7 = RKN42Dauton(x => -1*Math.pow(x,7), [x[3], x[7]], dt);
        return [x1[0], x3[0], x5[0], x7[0], x1[1], x3[1], x5[1], x7[1]];
    }

    function estPeriod(f, fnext, t, tnext) {
    /* Method: keep track of when (f)(fnext) < 0, i.e., when f changes sign,
         then linearly interpolate the time when f = 0
    */
        if (fnext.zeroIfClose(12) == 0) { 
            return 4 * tnext; }
        else if (f * fnext > 0) { return 0; }
        else { 
            return 4 * ( t - f * (tnext - t) / (fnext - f) ); }
    }

    function makeC3E4Graph() {
        const A = ampForm[0].valueAsNumber;
        let ticks = [{v: 0, f: '0'}, 
                     {v: 0.5 * Math.PI, f: '\u03C0/2'}, 
                     {v: Math.PI, f: '\u03C0'},
                     {v: 1.5 * Math.PI, f: '3\u03C0/2'},
                     {v: 2 * Math.PI, f: '2\u03C0'}];
        switch (A) {
            case 0.5:
                N = 601;
                ticks = ticks.concat([{v: 2.5 * Math.PI, f: '5\u03C0/2'},
                                      {v: 3 * Math.PI, f: '3\u03C0'},
                                      {v: 3.5 * Math.PI, f: '7\u03C0/2'},
                                      {v: 4 * Math.PI, f: '4\u03C0'},
                                      {v: 4.5 * Math.PI, f: '9\u03C0/2'},
                                      {v: 5 * Math.PI, f: '5\u03C0'},
                                      {v: 5.5 * Math.PI, f: '11\u03C0/2'},
                                      {v: 6 * Math.PI, f: '6\u03C0'}]);
                break;
            case 1.0:
                N = 401;
                ticks = ticks.concat([{v: 2.5 * Math.PI, f: '5\u03C0/2'},
                                      {v: 3 * Math.PI, f: '3\u03C0'},
                                      {v: 3.5 * Math.PI, f: '7\u03C0/2'},
                                      {v: 4 * Math.PI, f: '4\u03C0'}]);
                break;
            case 1.5:
                N = 301;
                ticks = ticks.concat([{v: 2.5 * Math.PI, f: '5\u03C0/2'},
                                      {v: 3 * Math.PI, f: '3\u03C0'}]);
                break;
            case 2.0:
                N = 201;
                break;
        }
        let t = 0;
        const periods = [0, 0, 0, 0];
        let fn = [A, A, A, A, 0, 0, 0, 0];
        let fnp1 = [0, 0, 0, 0, 0, 0, 0, 0];
        const data = [['t', '\u03B1=1', '\u03B1=3', '\u03B1=5', '\u03B1=7', 'A = 1']];
        for (let i=0; i <= N; i++) {
            data.push([t, fn[0], fn[1], fn[2], fn[3], 1]);
            fnp1 = fnext(fn, dt);
            if (periods.some(e => e == 0)) {
                for (let j=0; j < 4; j++) {
                    if (periods[j] == 0) {
                        periods[j] = estPeriod(fn[j], fnp1[j], t, t + dt);
                        if (periods[j] != 0) {
                            data[0][j+1] += ', T=' + (periods[j]/Math.PI).toFixed(2) + '\u03C0';
                        }
                    }
                }
            }
            t += dt;
            fn = fnp1;
        }
        const dtable = google.visualization.arrayToDataTable(data);
        const title = "<center><h3>Solutions of d<sup>2</sup>x/dt<sup>2</sup> = &minus;x<sup>&alpha;</sup> for &alpha; = 1, 3, 5, 7</center>";
        const options = {...globalChartOptions,
		        hAxis: {title: 'Time', ticks: ticks},
		        vAxis: {title: 'Displacement'},
		        width: 1000, height: 400,
		        series: {1: {lineDashStyle: [6, 3]},
                                  2: {lineDashStyle: [4, 2]},
                                  3: {lineDashStyle: [3, 3]},
                                  4: {lineDashStyle: [2, 4]},
                                  5: {lineDashStyle: [3, 6]}}
		        };
        // Display the chart inside the <sp> element with id="GiorCPC3E4chart"
        const chart = new google.visualization.LineChart(document.getElementById("GiorCPC3E4chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC3E4chartTitle", title);
    }
    makeC3E4Graph();
    return makeC3E4Graph;
}