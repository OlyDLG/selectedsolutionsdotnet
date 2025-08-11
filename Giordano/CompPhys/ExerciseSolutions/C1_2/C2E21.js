function GiorCPC2E21() { // Giordano/Nakanishi Comp. Phys. Chpt. 2 Ex. 21 chart
    const g = 9.8; // mpsps, accel. due to gravity
    const S0dM = 0.00041;
    const dt = 0.01;
    const initSpdForm = document.getElementById("C2E21ExitV");
    const initDirForm = document.getElementById("C2E21LaunchAngle");
    const omegaForm = document.getElementById("C2E21omega");
    const inclDragForm = document.getElementById("C2E21inclDrag");

    function B2dM(spd) {
           return 0.0039 + 0.0058 / (1 + Math.exp((spd - 35.0) / 5.0));
    }

    function makeC2E21Graph() {
        let initSpd = miph2Metps(initSpdForm[0].valueAsNumber);
        let initDir = deg2Rad(initDirForm[0].valueAsNumber);
        let omega = rpm2Radps(omegaForm[0].valueAsNumber);
        let inclDrag = inclDragForm[0].checked;
        function C2E21fprime(fn) {
            [x, y, z, u, v, w] = fn;
            x += u * dt;
            y += v * dt;
            z += w * dt;
            spd = mag([u, v, w]);
            B2m = B2dM(spd);
            var Magnus = Xprod([0, 0, S0dM * omega], [u, v, w]);
            u -= (B2m * spd * u + Magnus[0]) * dt;
            v -= ( (inclDrag ? (B2m * spd * v) : 0) + Magnus[1]) * dt;
            w -= (B2m * spd * w + g) * dt;
            return [x, y, z, u, v, w];
        }
        let n = 0;
        var f = [0, 0, 1, initSpd * Math.cos(initDir), 0, initSpd * Math.sin(initDir)];
        let data = [['x', 'y', 'z']];
        data.push(f.slice(0,3));
        var fnext = C2E21fprime(f);
        while (fnext[2] >= 0) {
            f = fnext;
            data.push(f.slice(0,3));
            n += 1;
            fnext = C2E21fprime(f);
        }
        dsEBIiH("C2E21FlightTime", (n * dt).toFixed(2));
        dsEBIiH("C2E21Range", (f[0]).toFixed(2));
        dsEBIiH("C2E21rangeFeet", (meters2Feet(f[0])).toFixed(2));
        dsEBIiH("C2E21DeltaY", (f[1]).toFixed(2));
        dsEBIiH("C2E21deltaYFeet", (meters2Feet(f[1])).toFixed(2));

        var dtable = google.visualization.arrayToDataTable(data);
        var title = "<center><h3>Hit Baseball with Side Spin: Height and Orthogonal Horizontal Displacement vs. Parallel Horizontal Displacement</center>";
        var options = {//allowHtml: true,
       			       //title: title,
        			   hAxis: {title: 'x (meters)'},
 			           vAxis: {title: 'Displacement (meters)'},
        			    legend: 'bottom',
        			    width: 800, height: 400,
            			    };
        // Display the chart inside the <sp> element with id="GiorCPC2E21chart"
        var chart = new google.visualization.LineChart(document.getElementById("GiorCPC2E21chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC2E21chartTitle", title);
    }
    makeC2E21Graph();
    return makeC2E21Graph;
}