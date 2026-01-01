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
    function crossing(t, X, Y) { 
      /* Linearly interpolate the value Y(tcross), where 
         tcross is the linearly-interpolated value of t
         where X(tcross) = 0
         Inputs: t, the current value of t
                 X = [X(t), X(t+h)], X the variable whose sign has changed
                 Y = [Y(t), Y(t+h)], Y the variable whose value at the crossing point is sought
      */
      tcross = t + h * X[0] / (X[0] - X[1]);
      return (Y[1]-Y[0]) * (tcross-t) / h + Y[0];
    }

    const r = Number(rForm[0].value),
// Initial values
          x0 = Number(x0Form[0].value),
          y0 = Number(y0Form[0].value),
          z0 = Number(z0Form[0].value),
          h = 0.01, // = dt
          tXient = 30,
          tmax = 60,
// Results arrays
          yvxData = [['x', 'y']],
          zvxData = [['x', 'z']],
          zvyData = [['y', 'z']],
          yvxPData = [['x', 'y']],
          zvxPData = [['x', 'z']],
          zvyPData = [['y', 'z']];
// Dynamic variables
    let t = 0, 
        fn = [x0, y0, z0], // "current" values
        fnp1 = [0, 0, 0], // "next" values
        xTicks, yhTicks, yvTicks, zTicks, // Structures for customized pp graph ticks
        x0swtch = false, y0swtch = false, z0swtch = false, 
        xX, yX, zX,
// Stuctures for customized Poincare section graph ticks
        x0yTicks, x0zTicks,
        y0xTicks, y0zTicks,
        z0xTicks, z0yTicks;
    while (t < tmax) {
// Record the current values
      yvxData.push([fn[0],fn[1]]);
      zvxData.push([fn[0],fn[2]]);
      zvyData.push([fn[1],fn[2]]);
// Compute the next values
      fnp1 = RK4nonauton(dxdt, fn, t, h); // 4th order RK

      if (t => tXient) {
        if (fn[0]*fnp1[0] < 0) { // x(t) crossed zero
          yX = crossing(t, [fn[0],fnp1[0]], [fn[1],fnp1[1]]);
          zX = crossing(t, [fn[0],fnp1[0]], [fn[2],fnp1[2]]); 
          zvyPData.push([yX, zX]);
          if (!x0swtch) x0swtch = !x0swtch;
        }
        if (fn[1]*fnp1[1] < 0) { // y(t) crossed zero
          xX = crossing(t, [fn[1],fnp1[1]], [fn[0],fnp1[0]]); 
          zX = crossing(t, [fn[1],fnp1[1]], [fn[2],fnp1[2]]); 
          zvxPData.push([xX, zX]);
          if (!y0swtch) y0swtch = !y0swtch;
        }
        if (fn[2]*fnp1[2] < 0) { // z(t) crossed zero
          xX = crossing(t, [fn[2],fnp1[2]], [fn[0],fnp1[0]]); 
          yX = crossing(t, [fn[2],fnp1[2]], [fn[1],fnp1[1]]); 
          yvxPData.push([xX, yX]);
          if (!z0swtch) z0swtch = !z0swtch;
        }
      }
      fn = fnp1;
      t += h;
    }
// Create Phase Plane Data Tables
    const yvxDTable = google.visualization.arrayToDataTable(yvxData),
          zvxDTable = google.visualization.arrayToDataTable(zvxData),
          zvyDTable = google.visualization.arrayToDataTable(zvyData);

// Compute phase plane viewing windows and tick places
    xTicks = computeTicks(getColumn(yvxData.slice(1,),0), 'x', 0);
    yhTicks = computeTicks(getColumn(yvxData.slice(1,),1), 'y', 0);
    yvTicks = computeTicks(getColumn(yvxData.slice(1,),1), 'y', 1);
    zTicks = computeTicks(getColumn(zvxData.slice(1,),1), 'z', 1);

// Set Options
    let Options = {...globalChartOptions,
                      hAxis: {viewWindowMode: 'explicit'},
                      vAxis: {viewWindowMode: 'explicit'},
                      width: 300, height: 300, legend: 'none'};
    let ppOptions = {...Options, 
                     hAxis: {viewWindow: {min: xTicks.v[0], max: xTicks.v[4]},
                             ticks: [{v: xTicks.v[0], f: xTicks.s[0]},
                                     {v: xTicks.v[1], f: xTicks.s[1]},
                                     {v: xTicks.v[2], f: xTicks.s[2]},
                                     {v: xTicks.v[3], f: xTicks.s[3]},
                                     {v: xTicks.v[4], f: xTicks.s[4]}]},
                     vAxis: {viewWindow: {min: yvTicks.v[0], max: yvTicks.v[4]},
                             ticks: [{v: yvTicks.v[0], f: yvTicks.s[0]},
                                     {v: yvTicks.v[1], f: yvTicks.s[1]},
                                     {v: yvTicks.v[2], f: yvTicks.s[2]},
                                     {v: yvTicks.v[3], f: yvTicks.s[3]},
                                     {v: yvTicks.v[4], f: yvTicks.s[4]}]}
                    };
    const yvxChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7yvxChart"));
    yvxChart.draw(yvxDTable, ppOptions);

    ppOptions.vAxis = {viewWindow: {min: zTicks.v[0], max: zTicks.v[4]},
                       ticks: [{v: zTicks.v[0], f: zTicks.s[0]},
                               {v: zTicks.v[1], f: zTicks.s[1]},
                               {v: zTicks.v[2], f: zTicks.s[2]},
                               {v: zTicks.v[3], f: zTicks.s[3]},
                               {v: zTicks.v[4], f: zTicks.s[4]}]
                      };
    const zvxChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvxChart"));
    zvxChart.draw(zvxDTable, ppOptions);

    ppOptions.hAxis = {viewWindow: {min: yhTicks.v[0], max: yhTicks.v[4]},
                       ticks: [{v: yhTicks.v[0], f: yhTicks.s[0]},
                               {v: yhTicks.v[1], f: yhTicks.s[1]},
                               {v: yhTicks.v[2], f: yhTicks.s[2]},
                               {v: yhTicks.v[3], f: yhTicks.s[3]},
                               {v: yhTicks.v[4], f: yhTicks.s[4]}]
                      };
    const zvyChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvyChart"));
    zvyChart.draw(zvyDTable, ppOptions);

// Plot non-empty Poincare sections
// Just use Options object for these graphs' options
    Options['pointSize'] = 1;    
    if (!z0swtch) {
      dsEBIiH("GiorCPC3E26n7yvxPChart", "No z=0 points in phase space<br>(after t=30)");
    }
    else {
      const yvxPDTable = google.visualization.arrayToDataTable(yvxPData);
      const yvxPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7yvxPChart"));
      z0xTicks = computeTicks(getColumn(yvxPData.slice(1,),0), 'x', 0);
      z0yTicks = computeTicks(getColumn(yvxPData.slice(1,),1), 'y', 1);
      Options.hAxis.viewWindow = {min: z0xTicks.v[0], max: z0xTicks.v[4]};
      Options.hAxis.ticks = [{v: z0xTicks.v[0], f: z0xTicks.s[0]},
                             {v: z0xTicks.v[1], f: z0xTicks.s[1]},
                             {v: z0xTicks.v[2], f: z0xTicks.s[2]},
                             {v: z0xTicks.v[3], f: z0xTicks.s[3]},
                             {v: z0xTicks.v[4], f: z0xTicks.s[4]}];
      Options.vAxis.viewWindow = {min: z0yTicks.v[0], max: z0yTicks.v[4]};
      Options.vAxis.ticks = [{v: z0yTicks.v[0], f: z0yTicks.s[0]},
                             {v: z0yTicks.v[1], f: z0yTicks.s[1]},
                             {v: z0yTicks.v[2], f: z0yTicks.s[2]},
                             {v: z0yTicks.v[3], f: z0yTicks.s[3]},
                             {v: z0yTicks.v[4], f: z0yTicks.s[4]}];
      yvxPChart.draw(yvxPDTable, Options);
    }

    if (!y0swtch) {
      dsEBIiH("GiorCPC3E26n7zvxPChart", "No y=0 points in phase space<br>(after t=30)");
    }
    else {
      const zvxPDTable = google.visualization.arrayToDataTable(zvxPData);
      const zvxPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7zvxPChart"));
      y0xTicks = computeTicks(getColumn(zvxPData.slice(1,),0), 'x', 0);
      y0zTicks = computeTicks(getColumn(zvxPData.slice(1,),1), 'z', 1);
      Options.hAxis.viewWindow = {min: y0xTicks.v[0], max: y0xTicks.v[4]};
      Options.hAxis.ticks = [{v: y0xTicks.v[0], f: y0xTicks.s[0]},
                             {v: y0xTicks.v[1], f: y0xTicks.s[1]},
                             {v: y0xTicks.v[2], f: y0xTicks.s[2]},
                             {v: y0xTicks.v[3], f: y0xTicks.s[3]},
                             {v: y0xTicks.v[4], f: y0xTicks.s[4]}];
      Options.vAxis.viewWindow = {min: y0zTicks.v[0], max: y0zTicks.v[4]};
      Options.vAxis.ticks = [{v: y0zTicks.v[0], f: y0zTicks.s[0]},
                             {v: y0zTicks.v[1], f: y0zTicks.s[1]},
                             {v: y0zTicks.v[2], f: y0zTicks.s[2]},
                             {v: y0zTicks.v[3], f: y0zTicks.s[3]},
                             {v: y0zTicks.v[4], f: y0zTicks.s[4]}];
      zvxPChart.draw(zvxPDTable, Options);
    }

    if (!x0swtch) {
      dsEBIiH("GiorCPC3E26n7zvyPChart", "No x=0 points in phase space<br>(after t=30)");
    }
    else {
      const zvyPDTable = google.visualization.arrayToDataTable(zvyPData);
      const zvyPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7zvyPChart"));
      x0yTicks = computeTicks(getColumn(zvyPData.slice(1,),0), 'y', 0);
      x0zTicks = computeTicks(getColumn(zvyPData.slice(1,),1), 'z', 1);
      Options.hAxis.viewWindow = {min: x0yTicks.v[0], max: x0yTicks.v[4]};
      Options.hAxis.ticks = [{v: x0yTicks.v[0], f: x0yTicks.s[0]},
                             {v: x0yTicks.v[1], f: x0yTicks.s[1]},
                             {v: x0yTicks.v[2], f: x0yTicks.s[2]},
                             {v: x0yTicks.v[3], f: x0yTicks.s[3]},
                             {v: x0yTicks.v[4], f: x0yTicks.s[4]}];
      Options.vAxis.viewWindow = {min: x0zTicks.v[0], max: x0zTicks.v[4]};
      Options.vAxis.ticks = [{v: x0zTicks.v[0], f: x0zTicks.s[0]},
                             {v: x0zTicks.v[1], f: x0zTicks.s[1]},
                             {v: x0zTicks.v[2], f: x0zTicks.s[2]},
                             {v: x0zTicks.v[3], f: x0zTicks.s[3]},
                             {v: x0zTicks.v[4], f: x0zTicks.s[4]}];
      zvyPChart.draw(zvyPDTable, Options);
    }
  }
  makeC3E26n7Graph();
  return makeC3E26n7Graph;
}

function GiorCPC3E37() { // Giordano/Nakanishi Comp. Phys. Chpt. 3 Ex. 37
  const N = 768,
        tpi = 2 * Math.PI;
  const tdata = [];
  for (let n=0; n < N; n++) {
    tdata.push(Math.cos(tpi*n/N));// + Math.cos(4*tpi*n/N));
    tdata.push(0);
  }
  const input = {data: tdata, isign: 1, real: false, doubledUp: false};
  FFT(input);
//  input.isign = -1;
//  FFT(input);
  const data = input.data;
  const pdata = [['f', 'A']];
  for (let m=0; m < data.length; m+=2) {
    pdata.push([m, data[m]]);
    pdata.push([m+1, data[m+1]]);
  }
  const FFTTable = google.visualization.arrayToDataTable(pdata);
  const FFTChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E37FzChart"));
  FFTChart.draw(FFTTable);
}