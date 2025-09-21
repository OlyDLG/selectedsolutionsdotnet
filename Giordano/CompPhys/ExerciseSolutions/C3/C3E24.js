function GiorCPC3E24() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 24
  const imax = 51,
        tsaData = [], // ts = "time series", i.e., plot of x_i vs. i
        xnVxaData = [], // plot of xnext vs. xcurrent
        ppaData = [], // discrete "phase plane" plot, dx = xnext - xcurrent vs. xcurrent
        tsbData = [],
        xnVxbData = [],
        ppbData = [],
        alphaForm = document.getElementById("C3E24Alpha"),
        betaForm = document.getElementById("C3E24Beta"),
        x0Form = document.getElementById("C3E24x0"),
        baseForm = document.getElementById("C3E24Base"),
        nForm = document.getElementById("C3E24n"),
        tsOptions = {...globalChartOptions,
                     hAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: 0, max: 50},
                             ticks: [0, 10, 20, 30, 40, 50]},
                     vAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: 0, max: 1},
                             ticks: [0, 0.25, 0.5, 0.75, 1.0],
                             titleTextStyle: {fontSize: 12, bold: true}},
                     pointSize: 1, legend: 'none',
                     width: 300, height: 300},
        xnVxOptions = {...globalChartOptions,
                       hAxis: {viewWindowMode: 'explicit',
                               viewWindow: {min: 0, max: 1},
                               ticks: [0, 0.2, 0.4, 0.6, 0.8, 1.0]},
                       vAxis: {viewWindowMode: 'explicit',
                               viewWindow: {min: 0, max: 1},
                               ticks: [0, 0.2, 0.4, 0.6, 0.8, 1.0]},
                       pointSize: 1, legend: 'none',
                       width: 300, height: 300},
        ppOptions = {...globalChartOptions,
                     hAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: 0, max: 1},
                             ticks: [0, 0.2, 0.4, 0.6, 0.8, 1.0]},
                     vAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: -1, max: 1},
                             ticks: [-1, -0.75, -0.5, -0.25, 0, 
                                     0.25, 0.5, 0.75, 1.0]},
                     pointSize: 1, legend: 'none',
                     width: 300, height: 300};  

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
          mod = B**n,
      tsaChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24TSaChart")),
      xnVxaChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24XnVxaChart")),
      ppaChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24PPaChart")),
      tsbChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24TSbChart")),
      xnVxbChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24XnVxbChart")),
      ppbChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24PPbChart"));

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
    
    tsOptions.vAxis.title = 'Model "a"';
    draw(tsaChart, tsaData, tsOptions);
    draw(xnVxaChart, xnVxaData, xnVxOptions);
    draw(ppaChart, ppaData, ppOptions);

    tsOptions.vAxis.title = 'Model "b"';       
    draw(tsbChart, tsbData, tsOptions);
    draw(xnVxbChart, xnVxbData, xnVxOptions);
    draw(ppbChart, ppbData, ppOptions);

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