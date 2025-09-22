function GiorCPC3E24() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 24
  const imax = 65,
        tsaData = [], // ts = "time series", i.e., plot of x_i vs. i
        ppaData = [], // pp = (discrete) "phase plane" plot, xnext vs. xcurrent
        tsbData = [],
        ppbData = [],
        alphaForm = document.getElementById("C3E24Alpha"),
        betaForm = document.getElementById("C3E24Beta"),
        x0Form = document.getElementById("C3E24x0"),
        baseForm = document.getElementById("C3E24Base"),
        nForm = document.getElementById("C3E24n"),
        tsOptions = {...globalChartOptions,
                     hAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: 0, max: 64},
                             ticks: [0, 16, 32, 48, 64]},
                     vAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: 0, max: 1},
                             ticks: [0, 0.25, 0.5, 0.75, 1.0],
                             titleTextStyle: {fontSize: 12, bold: true}},
                     pointSize: 2, legend: 'none',
                     width: 480, height: 300},
        ppOptions = {...globalChartOptions,
                     hAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: 0, max: 1},
                             ticks: [0, 0.2, 0.4, 0.6, 0.8, 1.0]},
                     vAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: 0, max: 1},
                             ticks: [0, 0.2, 0.4, 0.6, 0.8, 1.0]},
                     pointSize: 2, legend: 'none',
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
      ppaChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24PPaChart")),
      tsbChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24TSbChart")),
      ppbChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E24PPbChart"));

    let xa = x0, xb = x0;
    tsaData.push(['i', 'x_i']);
    ppaData.push(['x_i', 'x_(i+1)']);
    tsbData.push(['i', 'x_i']);
    ppbData.push(['x_i', 'x_(i+1)']);

    for (let i=1; i<=imax; i++) {
      tsaData.push([i-1,xa]);
      tempa = xanext(xa);
      ppaData.push([xa, tempa]);
      xa = tempa;

      tsbData.push([i-1,xb]);
      tempb = xbnext(xb);
      ppbData.push([xb, tempb]);
      xb = tempb;
    }
    
    tsOptions.vAxis.title = 'Model "a"';
    draw(tsaChart, tsaData, tsOptions);
    draw(ppaChart, ppaData, ppOptions);

    tsOptions.vAxis.title = 'Model "b"';       
    draw(tsbChart, tsbData, tsOptions);
    draw(ppbChart, ppbData, ppOptions);

    tsaData.length=0;
    ppaData.length=0;
    tsbData.length=0;
    ppbData.length=0;
  }

  makeC3E24Graph();
  return makeC3E24Graph;
}