function GiorCPC2E14() { // Giordano/Nakanishi Comp. Phys. Chpt. 2 Ex. 14 chart
    const g = 9.8; // mpsps, accel. due to gravity
    const dt = 0.01;
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
            let [x, y, z, u, v, w] = fn;
            x += u * dt;
            y += v * dt;
            z += w * dt;
            let airspd = airSpeed([u, v, w], windVec);
            let B2m  = B2dM(airspd);
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
        let f = [0, 1, 0, initSpd * Math.cos(initDir), initSpd * Math.sin(initDir), 0];
        let data = [['x', 'y', 'z']];
        data.push(f.slice(0,3));
        let fnext = C2E14fprime(f, windVec);
        while (fnext[1] >= 0) {
            f = fnext;
            data.push(f.slice(0,3));
            n += 1;
            fnext = C2E14fprime(f, windVec);
        }
        dsEBIiH("C2E14FlightTime", (n * dt).toFixed(2));
        dsEBIiH("C2E14Range", (f[0]).toFixed(2));
        dsEBIiH("C2E14rangeFeet", (meters2Feet(f[0])).toFixed(2));
        dsEBIiH("C2E14DeltaZ", (f[2]).toFixed(2));
        dsEBIiH("C2E14deltaZFeet", (meters2Feet(f[2])).toFixed(2));

        let dtable = google.visualization.arrayToDataTable(data);
        let title = "<center><h3>Hit Baseball Height and Orthogonal Horizontal Displacement vs. Parallel Horizontal Displacement</center>";
        let options = {...globalChartOptions,
                       hAxis: {title: 'x (meters)'},
                       vAxis: {title: 'Displacement (meters)'},
                       width: 800, height: 400};
        // Display the chart inside the <sp> element with id="GiorCPC2E14chart"
        let chart = new google.visualization.LineChart(document.getElementById("GiorCPC2E14chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC2E14chartTitle", title);
    }
    makeC2E14Graph();
    return makeC2E14Graph;
}