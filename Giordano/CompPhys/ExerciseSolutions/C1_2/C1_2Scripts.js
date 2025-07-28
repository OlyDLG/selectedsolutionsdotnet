const n1 = 100, sn1 = String(n1); 

function getn2(altNoIntvlsForm) {
    var n2 = altNoIntvlsForm[0].valueAsNumber;
    return n2;
}

function addExact(Exact, data, tauA, tauB, NA0, NB0, tMax) {
    for (i=0; i < n1+1; i++) {
        t = dt(tMax, n1) * i;
        [N_A, N_B] = Exact(t, tauA, tauB, NA0, NB0);
	 data.push([t, N_A, N_B, NaN, NaN, NaN, NaN]);
    }
}

function addEuler(fprime, data, tauA, tauB, NA0, NB0, tMax, n=n1) {
    for (i=0; i < n+1; i++) {	 
        if (i==0) {
	     [NA, NB] = [NA0, NB0];
	 }
	 else {
	     [NA, NB] = ExplicitEuler(fprime, dt(tMax, n), [NAprev, NBprev], 0, [tauA, tauB]);
	 }
	 if (n==n1) {
	     data.push([dt(tMax, n) * i, NaN, NaN, NA, NB, NaN, NaN]);
	 }
	 else {
	     data.push([dt(tMax, n) * i, NaN, NaN, NaN, NaN, NA, NB]);
	 }
	 [NAprev, NBprev] = [NA, NB];
    } 
}

function GiorCPC1E4() { // Giordano Comp. Phys. Chpt. 1 Ex. 4 chart
    const tMax = 10.0;
    const NA0 = 100.0; 
    const NB0 = 0.0;
    const altNoIntvlsForm = document.getElementById("C1E4altNoIntvls");
    const tauAForm = document.getElementById("tauA");
    const tauBForm = document.getElementById("tauB");

    function Exact(t, a, b, A0, B0) {
        N_A = A0 * Math.exp(-a * t);
        if (a == b)
            N_B = (B0 + A0 * a * t) * Math.exp(-a * t);
        else 
	     N_B = B0 * Math.exp(-b * t) + A0 / (b/a - 1) * (Math.exp(-a * t) - Math.exp(-b * t));
	 return [N_A, N_B];
    }
    
    function C1E4fprime(fn, tn, tau) {
        return [-tau[0] * fn[0], tau[0] * fn[0] - tau[1] * fn[1]];
    }

    function makeC1E4Graph() {
        let n2 = getn2(altNoIntvlsForm);
        let sn2 = String(n2);
        let tauA = tauAForm[0].valueAsNumber;
        let tauB = tauBForm[0].valueAsNumber;
        let data = [['t', 'N_A Exact', 'N_B Exact', 
    	    		           'N_A Euler n=' + sn1, 'N_B Euler n=' + sn1,
    			           'N_A Euler n=' + sn2, 'N_B Euler n=' + sn2]];
// Add exact solution
        addExact(Exact, data, tauA, tauB, NA0, NB0, tMax);
         
// Add n1 intervals Euler solution
        addEuler(C1E4fprime, data, tauA, tauB, NA0, NB0, tMax);
         
// Add n2 intervals Euler solution
        addEuler(C1E4fprime, data, tauA, tauB, NA0, NB0, tMax, n2);
     
        var dtable = google.visualization.arrayToDataTable(data);
        var title = "<center><h3>N<sub>A</sub> and N<sub>B</sub> vs. Time: ";
        title += "Exact Solutions and Euler Method using ";
        title += sn1 + " and " + sn2 + " intervals</h3></center>"; 
    
        var options = {//allowHtml: true,
       			       //title: title,
        			   hAxis: {title: 'Time'},
 			           vAxis: {title: 'Number'},
        			    legend: 'bottom',
        			    width: 800, height: 400,
        			    series: {
        				    2: {lineWidth: 0, pointSize: 4, pointShape: 'square'},
        				    3: {lineWidth: 0, pointSize: 4, pointShape: 'square'},
        			    	    4: {lineWidth: 0, pointSize: 4, pointShape: 'diamond'},
        			    	    5: {lineWidth: 0, pointSize: 4, pointShape: 'diamond'}
        			        }
            			    };
        // Display the chart inside the <sp> element with id="GiorCPC1E4chart"
        var chart = new google.visualization.LineChart(document.getElementById("GiorCPC1E4chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC1E4chartTitle", title);
    }
    makeC1E4Graph();
    return makeC1E4Graph;
}

function GiorCPC1E5() { // Giordano Comp. Phys. Chpt. 1 Ex. 5 chart
    const tMax = 5.0;
    const altNoIntvlsForm = document.getElementById("C1E5altNoIntvls");
    const A0Form = document.getElementById("A0");
    const B0Form = document.getElementById("B0");

    function Exact(t, tau, tau, A0, B0) {
        N_A = ( (A0-B0) * Math.exp(-2 * t) + A0 + B0 ) / 2.0;
        N_B = A0 + B0 - N_A;
	 return [N_A, N_B];
    }
    
    function C1E5fprime(fn) {
        return [-fn[0] + fn[1], fn[0] - fn[1]];
    }

    function makeC1E5Graph() {
        let n2 = getn2(altNoIntvlsForm);
        let sn2 = String(n2);
        let A0 = A0Form[0].valueAsNumber;
        let B0 = B0Form[0].valueAsNumber;
        let data = [['t', 'N_A Exact', 'N_B Exact', 
    	    		           'N_A Euler n=' + sn1, 'N_B Euler n=' + sn1,
    			           'N_A Euler n=' + sn2, 'N_B Euler n=' + sn2]];
// Add exact solution
        addExact(Exact, data, NaN, NaN, A0, B0, tMax);
         
// Add n1 intervals Euler solution
        addEuler(C1E5fprime, data, NaN, NaN, A0, B0, tMax);
         
// Add n2 intervals Euler solution
        addEuler(C1E5fprime, data, NaN, NaN, A0, B0, tMax, n2);
     
        var dtable = google.visualization.arrayToDataTable(data);
        var title = "<center><h3>N<sub>A</sub> and N<sub>B</sub> vs. Time: ";
        title += "Exact Solutions and Euler Method using ";
        title += sn1 + " and " + sn2 + " intervals</h3></center>"; 
    
        var options = {//allowHtml: true,
       			       //title: title,
        			   hAxis: {title: 'Time'},
 			           vAxis: {title: 'Number'},
        			    legend: 'bottom',
        			    width: 800, height: 400,
        			    series: {
        				    2: {lineWidth: 0, pointSize: 4, pointShape: 'square'},
        				    3: {lineWidth: 0, pointSize: 4, pointShape: 'square'},
        			    	    4: {lineWidth: 0, pointSize: 4, pointShape: 'diamond'},
        			    	    5: {lineWidth: 0, pointSize: 4, pointShape: 'diamond'}
        			        }
            			    };
        // Display the chart inside the <sp> element with id="GiorCPC1E5chart"
        var chart = new google.visualization.LineChart(document.getElementById("GiorCPC1E5chart"));
        chart.draw(dtable, options);
        dsEBIiH("GiorCPC1E5chartTitle", title);
    }
    makeC1E5Graph();
    return makeC1E5Graph;
}

function GiorCPC2E5() { // Giordano Comp. Phys. Chpt. 2 Ex. 5 chart
    const tMax = 50.0; // seconds; according to the text, this should be ample time to see
                                    // the difference between the effect of air resistance vs. none
    const m = 70.0; // kg
    const P = 400.0; // Watts
    const k = P/m;
    const C = 1.0; 
    const rho = 1.225; // kg/m³ density of dry air at sea-level at "standard atmospheric
    			             // conditions," according to Google
    const A = 0.33; // m^2
    const C_D = 0.5 * C * rho * A / m; // "net" drag coefficient
    const DT = dt(tMax, n1);
    const useForce = dgCheckBoxState("C2E5UseForceBID");
    const v0 = (useForce) ? 0.0 : 4.0; // mps 
    if (useForce) {
        const vstarForm = document.getElementById("C2E5TransitionV");
        const F0 = P / vstarForm[0].valueAsNumber;
        console.log(F0);         
    }
/*   
    function C2E5fprime(fn){
        function noForce(fn) {
            return fn[0] + k / fn[0] * DT;
            , fnext[0] - C_D * fn[0] * fn[0] * DT];
        }
    	if (useForce) {
    	    let noDrag fn[0] ;
    	}
    	else {
    	    return noForce(fn);
    	}
    }
*/    
    function makeC2E5Graph(){}

    makeC2E5Graph();
    return makeC2E5Graph;
}
