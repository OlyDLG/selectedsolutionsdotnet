function GiorCPC3E24() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 24
  const imax = 50,
//        xa = [], xb = [],
        alphaForm = document.getElementById("C3E24Alpha"),
        betaForm = document.getElementById("C3E24Beta"),
        x0Form = document.getElementById("C3E24x0"),
        baseForm = document.getElementById("C3E24Base"),
        nForm = document.getElementById("C3E24n"),

  // Model a)
        tsaData = [],//['i', 'x_i']], // ts = "time series", i.e., plot of x_i vs. i
        tsaOptions = {...globalChartOptions,
                     //  hAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 1.42, max: 1.49},
                     //          ticks: [1.42, 1.4375, 1.455, 1.4725, 1.49]},
                     //  vAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 0.75, max: 3},
                     //          ticks: [0.75, 1.5, 2.25, 3.0]},
                       pointSize: 1, legend: 'none',
                       width: 400, height: 300},
        tsaChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24TSaChart")),

        xnVxaData = [],//['x_i', 'x_(i+1)']], // plot of xnext vs. xcurrent
        xnVxaOptions = {...globalChartOptions,
                     //  hAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 1.42, max: 1.49},
                     //          ticks: [1.42, 1.4375, 1.455, 1.4725, 1.49]},
                     //  vAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 0.75, max: 3},
                     //          ticks: [0.75, 1.5, 2.25, 3.0]},
                       pointSize: 1, legend: 'none',
                       width: 300, height: 300},
        xnVxaChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24XnVxaChart")),

        ppaData = [],//['x_i', 'dx_i']], // discrete "phase plane" plot, dx = xnext - xcurrent vs. xcurrent
        ppaOptions = {...globalChartOptions,
                     //  hAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 1.42, max: 1.49},
                     //          ticks: [1.42, 1.4375, 1.455, 1.4725, 1.49]},
                     //  vAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 0.75, max: 3},
                     //          ticks: [0.75, 1.5, 2.25, 3.0]},
                       pointSize: 1, legend: 'none',
                       width: 300, height: 300},
        ppaChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24PPaChart"));
  
  // Model b)
        tsbData = [],//['i', 'x_i']],
        tsbOptions = {...globalChartOptions,
                     //  hAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 1.42, max: 1.49},
                     //          ticks: [1.42, 1.4375, 1.455, 1.4725, 1.49]},
                     //  vAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 0.75, max: 3},
                     //          ticks: [0.75, 1.5, 2.25, 3.0]},
                       pointSize: 1, legend: 'none',
                       width: 400, height: 300},
        tsbChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24TSbChart")),

        xnVxbData = [],//['x_i', 'x_(i+1)']],
        xnVxbOptions = {...globalChartOptions,
                     //  hAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 1.42, max: 1.49},
                     //          ticks: [1.42, 1.4375, 1.455, 1.4725, 1.49]},
                     //  vAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 0.75, max: 3},
                     //          ticks: [0.75, 1.5, 2.25, 3.0]},
                       pointSize: 1, legend: 'none',
                       width: 300, height: 300},
        xnVxbChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24XnVxbChart")),

        ppbData = [],//['x_i', 'dx_i']],
        ppbOptions = {...globalChartOptions,
                     //  hAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 1.42, max: 1.49},
                     //          ticks: [1.42, 1.4375, 1.455, 1.4725, 1.49]},
                     //  vAxis: {viewWindowMode: 'explicit',
                     //          viewWindow: {min: 0.75, max: 3},
                     //          ticks: [0.75, 1.5, 2.25, 3.0]},
                       pointSize: 1, legend: 'none',
                       width: 300, height: 300},
        ppbChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24PPbChart"));
  
  function makeC3E24Graph() {

    function xanext(x) { 
      return ((a * x*mod + b) % mod) / mod;
    }

    function xbnext(x) { 
      return ((a * Math.floor(x*mod) + b) % mod) / mod;
    }

    function draw(chart, data, options) {
      chart.draw(google.visualization.arrayToDataTable(data), options);
    }

    const a = Number(alphaForm[0].value),
          b = Number(betaForm[0].value),
          x0 = Number(x0Form[0].value);
          B = Number(baseForm[0].value),
          n = Number(nForm[0].value),
          mod = B**n;
    let xa = x0, xb = x0;
    tsaData.push(['i', 'x_i']);
    xnVxaData.push(['x_i', 'x_(i+1)']);
    ppaData.push(['x_i', 'dx_i']);
    tsbData.push(['i', 'x_i']);
    xnVxbData.push(['x_i', 'x_(i+1)']);
    ppbData.push(['x_i', 'dx_i']);

    for (let i=1; i<=imax; i++) {
      tsaData.push([i-1,xa]);
      tempa = xanext(xa);
      xnVxaData.push([xa, tempa]);
      ppaData.push([xa, tempa-xa]);
      xa = tempa;

      tsbData.push([i-1,xb]);
      tempb = xbnext(xb);
      xnVxbData.push([xb, tempb]);
      ppbData.push([xb, tempb-xb]);
      xb = tempb;
    }
           
    draw(tsaChart, tsaData, tsaOptions);
    draw(xnVxaChart, xnVxaData, xnVxaOptions);
    draw(ppaChart, ppaData, ppaOptions);
    draw(tsbChart, tsbData, tsbOptions);
    draw(xnVxbChart, xnVxbData, xnVxbOptions);
    draw(ppbChart, ppbData, ppbOptions);
    tsaData.length=0;
    xnVxaData.length=0;
    ppaData.length=0;
    tsbData.length=0;
    xnVxbData.length=0;
    ppbData.length=0;
  }

  makeC3E24Graph();
  return makeC3E24Graph;
}