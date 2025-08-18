function GiorCPC3E4() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 4 chart
    const tmin = 0;
    var N;
    var dt;
    const ampForm = document.getElementById("C3E4ampForm");
    
    function fnext(f) { //Use Euler-Cromer
        [x1, x3, x5, x7, v1, v3, v5, v7] = f;
        v1 -= x1 * dt; // update v first
        x1 += v1 * dt; // use updated v to calculate updated x
        v3 -= Math.pow(x3, 3) * dt;
        x3 += v3 * dt;
        v5 -= Math.pow(x5, 5) * dt;
        x5 += v5 * dt;
        v7 -= Math.pow(x7, 7) * dt;
        x7 += v7 * dt;
        return [x1, x3, x5, x7, v1, v3, v5, v7];
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
        let A = ampForm[0].valueAsNumber;
        switch (A) {
            case 0.5:
                N = 6001;
                dt = 6 * Math.PI / (N - 1);
                break;
            case 1.0:
                N = 4001;
                dt = 4 * Math.PI / (N - 1);
                break;
            case 1.5:
                N = 3001;
                dt = 3 * Math.PI / (N - 1);
                break;
            case 2.0:
                N = 2001;
                dt = 2.0 * Math.PI / (N - 1);
                break;
        }
        let t = 0;
        var periods = [0, 0, 0, 0];
        var fn = [A, A, A, A, 0, 0, 0, 0];
        var fnp1 = Array.from(fn);
        let data = [['t', '\u03B1=1', '\u03B1=3', '\u03B1=5', '\u03B1=7', 'A = 1']];
        for (let i=0; i <= N; i++) {
            data.push([t, fn[0], fn[1], fn[2], fn[3], 1]);
            fnp1 = fnext(fn);
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
        var dtable = google.visualization.arrayToDataTable(data);
        var title = "<center><h3>Solutions of d<sup>2</sup>x/dt<sup>2</sup> = &minus;x<sup>&alpha;</sup> for &alpha; = 1, 3, 5, 7</center>";
        var options = {//allowHtml: true,
       			       //title: title,
        			   hAxis: {title: 'Time'},
 			           vAxis: {title: 'Displacement'},
        			    legend: 'bottom',
        			    width: 1000, height: 400,
        			    series: {
        				    1: {lineDashStyle: [6, 3]},
         				    2: {lineDashStyle: [4, 2]},
        			    	    3: {lineDashStyle: [3, 3]},
        			    	    4: {lineDashStyle: [2, 4]},
        			    	    5: {lineDashStyle: [3, 6]}}
            			    };
        // Display the chart inside the <sp> element with id="GiorCPC3E4chart"
        var chart = new google.visualization.LineChart(document.getElementById("GiorCPC3E4chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC3E4chartTitle", title);
    }
    makeC3E4Graph();
    return makeC3E4Graph;
}