function GiorCPC2E14() { // Giordano Comp. Phys. Chpt. 2 Ex. 14 chart
    const g = 9.8; // mpsps, accel. due to gravity
    const n = 200;
//    const tMax = 10.0; // seconds; will need to iterate this to determine min. necessary for all possible trajectories
    const dt = 0.01; //dt(tMax, n);
    const initSpdForm = document.getElementById("C2E14ExitV");
    const initDirForm = document.getElementById("C2E14LaunchAngle");
    const windSpdForm = document.getElementById("C2E14windV");
    const windDirForm = document.getElementById("C2E14windDir");

    function airSpeed(land_v, wind_v) {
        return mag([land_v[0] - wind_v[0],
        			 land_v[1],
        			 land_v[2] - wind_v[2]]);
    }
    
    function B2dM(airspeed) {
           return 0.0039 + 0.0058 / (1 + Math.exp((airspeed - 35.0) / 5.0));
    }

    function makeC2E14Graph() {
        function C2E14fprime(fn, windVec) {
            [x, y, z, u, v, w] = fn;
            xnext = x + u * dt;
            ynext = y + v * dt;
            znext = z + w * dt;
            airspd = airSpeed([u, v, w], windVec);
            B2m  = B2dM(airspd);
            unext = u - B2m * airspd * (u - windVec[0]) * dt;
            vnext = v - (B2m * airspd * v + g) * dt;
            wnext = w - B2m * airspd * (w - windVec[2]) * dt;
            return [xnext, ynext, znext, unext, vnext, wnext];
        }
        let initSpd = miph2Metps(initSpdForm[0].valueAsNumber);
        let initDir = deg2Rad(initDirForm[0].valueAsNumber);
        let windSpd = miph2Metps(windSpdForm[0].valueAsNumber);
        let windDir = deg2Rad(windDirForm[0].valueAsNumber);
        let windVec = [windSpd * Math.cos(windDir), 0, windSpd * Math.sin(windDir)];
        var f = [0, 1, 0, initSpd * Math.cos(initDir), initSpd * Math.sin(initDir), 0];              
        let data = [['x', 'y', 'z']];
        data.push(f.slice(0,3));
        while (f[1] >= 0) {
            f = C2E14fprime(f, windVec);
            data.push(f.slice(0,3));
        }
        var dtable = google.visualization.arrayToDataTable(data);
        var title = "<center><h3>Hit Baseball Height and Orthogonal Horizontal Displacement vs. Parallel Horizontal Displacement</center>";
        var options = {//allowHtml: true,
       			       //title: title,
        			   hAxis: {title: 'x (meters)'},
 			           vAxis: {title: 'Displacement (meters)'},
        			    legend: 'bottom',
        			    width: 800, height: 400,
            			    };
        // Display the chart inside the <sp> element with id="GiorCPC2E14chart"
        var chart = new google.visualization.LineChart(document.getElementById("GiorCPC2E14chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC2E14chartTitle", title);
    }
    makeC2E14Graph();
    return makeC2E14Graph;
}