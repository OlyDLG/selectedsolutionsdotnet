function GiorCPC2E21() { // Giordano/Nakanishi Comp. Phys. Chpt. 2 Ex. 21 chart
    const g = 9.8; // mpsps, accel. due to gravity
    const dt = 0.01;
    const initSpdForm = document.getElementById("C2E21ExitV");
    const initDirForm = document.getElementById("C2E21LaunchAngle");
    const windSpdForm = document.getElementById("C2E21windV");
    const windDirForm = document.getElementById("C2E21windDir");

    function airSpeed(land_v, wind_v) {
        return mag([land_v[0] - wind_v[0],
        			 land_v[1],
        			 land_v[2] - wind_v[2]]);
    }
    
    function B2dM(airspeed) {
           return 0.0039 + 0.0058 / (1 + Math.exp((airspeed - 35.0) / 5.0));
    }

    function makeC2E21Graph() {
        function C2E21fprime(fn, windVec) {
            [x, y, z, u, v, w] = fn;
            x += u * dt;
            y += v * dt;
            z += w * dt;
            airspd = airSpeed([u, v, w], windVec);
            B2m  = B2dM(airspd);
            u -= B2m * airspd * (u - windVec[0]) * dt;
            v -= (B2m * airspd * v + g) * dt;
            w -= B2m * airspd * (w - windVec[2]) * dt;
            return [x, y, z, u, v, w];
        }
        let initSpd = miph2Metps(initSpdForm[0].valueAsNumber);
        let initDir = deg2Rad(initDirForm[0].valueAsNumber);
        let windSpd = miph2Metps(windSpdForm[0].valueAsNumber);
        let windDir = deg2Rad(windDirForm[0].valueAsNumber);
        let windVec = [windSpd * Math.cos(windDir), 0, windSpd * Math.sin(windDir)];
        let n = 0;
        var f = [0, 1, 0, initSpd * Math.cos(initDir), initSpd * Math.sin(initDir), 0];
        let data = [['x', 'y', 'z']];
        data.push(f.slice(0,3));
        var fnext = C2E21fprime(f, windVec);
        while (fnext[1] >= 0) {
            f = fnext;
            data.push(f.slice(0,3));
            n += 1;
            fnext = C2E21fprime(f, windVec);
        }
        dsEBIiH("C2E21FlightTime", (n * dt).toFixed(2));
        dsEBIiH("C2E21Range", (f[0]).toFixed(2));
        dsEBIiH("C2E21rangeFeet", (meters2Feet(f[0])).toFixed(2));
        dsEBIiH("C2E21DeltaZ", (f[2]).toFixed(2));
        dsEBIiH("C2E21deltaZFeet", (meters2Feet(f[2])).toFixed(2));

        var dtable = google.visualization.arrayToDataTable(data);
        var title = "<center><h3>Hit Baseball Height and Orthogonal Horizontal Displacement vs. Parallel Horizontal Displacement</center>";
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