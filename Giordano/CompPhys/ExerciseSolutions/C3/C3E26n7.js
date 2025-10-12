function GiorCPC3E26n7() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 26/27
  const s = 10.0;
  const b = 8.0/3;
  const rForm = document.getElementById("C3E26n7r");
  const x0Form = document.getElementById("C3E26n7x0");
  const y0Form = document.getElementById("C3E26n7y0");
  const z0Form = document.getElementById("C3E26n7z0");

  function makeC3E26n7Graph() {
    function dxdt(x, t) { // For use with RK4nonauton
      let [x1, x2, x3] = x;
      let x1dot = s*(x2 - x1);
      let x2dot = (r - x3)*x1 - x2;
      let x3dot = x1*x2 - b*x3;
      return [x1dot, x2dot, x3dot];
    }
    const r = Number(rForm[0].value),
          x0 = Number(x0Form[0].value),
          y0 = Number(y0Form[0].value),
          z0 = Number(z0Form[0].value),
          h = 0.01,
          tXient = 30,
          tmax = 60,
          xvtData = [['t', 'x']],
          yvtData = [['t', 'y']],
          zvtData = [['t', 'z']],
          yvxData = [['x', 'y']],
          zvxData = [['x', 'z']],
          zvyData = [['y', 'z']],
          yvxPData = [['x', 'y']],
          zvxPData = [['x', 'z']],
          zvyPData = [['y', 'z']];

    let t = 0,
        fn = [x0, y0, z0];
        fnp1 = [0, 0, 0];
    while (t < tmax) {
      xvtData.push([t,fn[0]]);
      yvtData.push([t,fn[1]]);
      zvtData.push([t,fn[2]]);
      yvxData.push([fn[0],fn[1]]);
      zvxData.push([fn[0],fn[2]]);
      zvyData.push([fn[1],fn[2]]);
      fnp1 = RK4nonauton(dxdt, fn, t, h); // 4th order RK
      if (t => tXient) {
        if (fn[0]*fnp1[0] < 0) { // x(t) crossed zero
          zvyPData.push([0.5*(fn[1]+fnp1[1]), 0.5*(fn[2]+fnp1[2])]);
        }
        if (fn[1]*fnp1[1] < 0) { // y(t) crossed zero
          zvxPData.push([0.5*(fn[0]+fnp1[0]), 0.5*(fn[2]+fnp1[2])]);
        }
        if (fn[2]*fnp1[2] < 0) { // z(t) crossed zero
          yvxPData.push([0.5*(fn[0]+fnp1[0]), 0.5*(fn[1]+fnp1[1])]);
        }
      }
      t += h;
      fn = fnp1;
    }
    const xvtDTable = google.visualization.arrayToDataTable(xvtData),
          yvtDTable = google.visualization.arrayToDataTable(yvtData),
          zvtDTable = google.visualization.arrayToDataTable(zvtData),
          yvxDTable = google.visualization.arrayToDataTable(yvxData),
          zvxDTable = google.visualization.arrayToDataTable(zvxData),
          zvyDTable = google.visualization.arrayToDataTable(zvyData),
          yvxPDTable = google.visualization.arrayToDataTable(yvxPData),
          zvxPDTable = google.visualization.arrayToDataTable(zvxPData),
          zvyPDTable = google.visualization.arrayToDataTable(zvyPData);
    const Options = {...globalChartOptions,
//                         hAxis: {title: 'Time'},
//                         vAxis: {title: '\u03B8: radians, \u03C9: rad/sec',
//                                 viewWindowMode: 'explicit',
//                                 viewWindow: {min: -3.5, max: 3.5}},
                         width: 300, height: 300};
    const xvtChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7xvtChart"));
    xvtChart.draw(xvtDTable, Options);
    const yvtChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7yvtChart"));
    yvtChart.draw(yvtDTable, Options);
    const zvtChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvtChart"));
    zvtChart.draw(zvtDTable, Options);

    const yvxChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7yvxChart"));
    yvxChart.draw(yvxDTable, Options);
    const zvxChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvxChart"));
    zvxChart.draw(zvxDTable, Options);
    const zvyChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvyChart"));
    zvyChart.draw(zvyDTable, Options);

    const yvxPChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7yvxPChart"));
    yvxPChart.draw(yvxPDTable, Options);

    const zvxPChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvxPChart"));
    zvxPChart.draw(zvxPDTable, Options);

    const zvyPChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvyPChart"));
    zvyPChart.draw(zvyPDTable, Options);
  }
  makeC3E26n7Graph();
  return makeC3E26n7Graph;
}