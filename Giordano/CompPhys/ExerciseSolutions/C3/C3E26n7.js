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
          x0 = Number(x0Form[0].value),
          y0 = Number(y0Form[0].value),
          z0 = Number(z0Form[0].value),
          h = 0.01,
          tXient = 30,
          tmax = 60,
          yvxData = [['x', 'y']],
          zvxData = [['x', 'z']],
          zvyData = [['y', 'z']],
          yvxPData = [['x', 'y']],
          zvxPData = [['x', 'z']],
          zvyPData = [['y', 'z']];
    let t = 0, 
        fn = [x0, y0, z0],
        fnp1 = [0, 0, 0],
        xmin, xmax, xrng, 
        ymin, ymax, yrng, 
        zmin, zmax, zrng,
        x_y0_min, x_y0_max, x_y0_rng,
        x_z0_min, x_z0_max, x_z0_rng,
        y_x0_min, y_x0_max, y_x0_rng, 
        y_z0_min, y_z0_max, y_z0_rng,
        z_x0_min, z_x0_max, z_x0_rng,
        z_y0_min, z_y0_max, z_y0_rng,
        xTicks, yTicks, zTicks,
        x0swtch = false, y0swtch = false, z0swtch = false,
        xX, yX, zX;
    while (t < tmax) {
      yvxData.push([fn[0],fn[1]]);
      zvxData.push([fn[0],fn[2]]);
      zvyData.push([fn[1],fn[2]]);
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

    [xmin, xmax, xrng] = MinMaxRng(getColumn(yvxData.slice(1,), 0));
    [ymin, ymax, yrng] = MinMaxRng(getColumn(yvxData.slice(1,), 1));
    [zmin, zmax, zrng] = MinMaxRng(getColumn(zvxData.slice(1,), 1));
    xTicks = computeTicks(getColumn(yvxData.slice(1,),0), 'x', 0);
    yhTicks = computeTicks(getColumn(yvxData.slice(1,),1), 'y', 0);
    yvTicks = computeTicks(getColumn(yvxData.slice(1,),1), 'y', 1);
    zTicks = computeTicks(getColumn(zvxData.slice(1,),1), 'z', 1);

    xmin = (xmin == 0) ? 1.1*xmin : 0.95*xmin;

    xmax = (xmax > 0) ? 1.1*xmax : 0.95*xmax;
    ymin = (ymin < 0) ? 1.1*ymin : 0.95*ymin;
    ymax = (ymax > 0) ? 1.1*ymax : 0.95*ymax;
    zmin = (zmin < 0) ? 1.1*zmin : 0.95*zmin;
    zmax = (zmax > 0) ? 1.1*zmax : 0.95*zmax;
    const xminst = xmin.toFixed(2),
          xmaxst = xmax.toFixed(2),
          yminst = ymin.toFixed(2),
          ymaxst = ymax.toFixed(2),
          zminst = zmin.toFixed(2),
          zmaxst = zmax.toFixed(2),
//          xrng = xmax - xmin,
          x1q = xmin + 0.25*xrng, x1qst = x1q.toFixed(2),
          xmid = xmin + 0.5*xrng, xmidst = xmid.toFixed(2),          
          x3q = xmin + 0.75*xrng, x3qst = x3q.toFixed(2),
//          yrng = ymax - ymin,
          y1q = ymin + 0.25*yrng, y1qst = y1q.toFixed(2),
          ymid = ymin + 0.5*yrng, ymidst = ymid.toFixed(2),
          y3q = ymin + 0.75*yrng, y3qst = y3q.toFixed(2),
//          zrng = zmax - zmin,
          z1q = zmin + 0.25*zrng, z1qst = z1q.toFixed(2),
          zmid = zmin + 0.5*zrng, zmidst = zmid.toFixed(2),
          z3q = zmin + 0.75*zrng, z3qst = z3q.toFixed(2);

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
    Options['pointSize'] = 1; 
    if (!z0swtch) {
      dsEBIiH("GiorCPC3E26n7yvxPChart", "No z=0 points in phase space<br>(after t=30)");
    }
    else {
/*      xPmin = (xPmin < 0) ? 1.1*xPmin : 0.95*xPmin;
      xPmax = (xPmax > 0) ? 1.1*xPmax : 0.95*xPmax;
      yPmin = (yPmin < 0) ? 1.1*yPmin : 0.95*yPmin;
      yPmax = (yPmax > 0) ? 1.1*yPmax : 0.95*yPmax;
*/
      const yvxPDTable = google.visualization.arrayToDataTable(yvxPData);
      const yvxPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7yvxPChart"));
//      Options.hAxis.viewWindow = {min: xPmin, max: xPmax};
//      Options.vAxis.viewWindow = {min: yPmin, max: yPmax};
      yvxPChart.draw(yvxPDTable, Options);
    }

    if (!y0swtch) {
      dsEBIiH("GiorCPC3E26n7zvxPChart", "No y=0 points in phase space<br>(after t=30)");
    }
    else {
/*      xPmin = (xPmin < 0) ? 1.1*xPmin : 0.95*xPmin;
      xPmax = (xPmax > 0) ? 1.1*xPmax : 0.95*xPmax;
      zPmin = (zPmin < 0) ? 1.1*zPmin : 0.95*zPmin;
      zPmax = (zPmax > 0) ? 1.1*zPmax : 0.95*zPmax;
*/
      const zvxPDTable = google.visualization.arrayToDataTable(zvxPData);
      const zvxPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7zvxPChart"));
//      Options.hAxis.viewWindow = {min: xPmin, max: xPmax};
//      Options.vAxis.viewWindow = {min: zPmin, max: zPmax};
      zvxPChart.draw(zvxPDTable, Options);
    }

    if (!x0swtch) {
      dsEBIiH("GiorCPC3E26n7zvyPChart", "No x=0 points in phase space<br>(after t=30)");
    }
    else {
/*      yPmin = (yPmin < 0) ? 1.1*yPmin : 0.95*yPmin;
      yPmax = (yPmax > 0) ? 1.1*yPmax : 0.95*yPmax;
      zPmin = (zPmin < 0) ? 1.1*zPmin : 0.95*zPmin;
      zPmax = (zPmax > 0) ? 1.1*zPmax : 0.95*zPmax;
*/
      const zvyPDTable = google.visualization.arrayToDataTable(zvyPData);
      const zvyPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7zvyPChart"));
//      Options.hAxis.viewWindow = {min: yPmin, max: yPmax};
//      Options.vAxis.viewWindow = {min: zPmin, max: zPmax};
      zvyPChart.draw(zvyPDTable, Options);
    }
  }
  makeC3E26n7Graph();
  return makeC3E26n7Graph;
}