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
        fn = [x0, y0, z0],
        fnp1 = [0, 0, 0],
        xmin=0, xmax=0,
        ymin=0, ymax=0,
        zmin=0, zmax=0;
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
      fn = fnp1;
      [xmin, xmax] = [Math.min(fn[0], xmin), Math.max(fn[0], xmax)];
      [ymin, ymax] = [Math.min(fn[1], ymin), Math.max(fn[1], ymax)];
      [zmin, zmax] = [Math.min(fn[2], zmin), Math.max(fn[2], zmax)];
      t += h;
    }
      // Create Data Tables
    const xvtDTable = google.visualization.arrayToDataTable(xvtData),
          yvtDTable = google.visualization.arrayToDataTable(yvtData),
          zvtDTable = google.visualization.arrayToDataTable(zvtData),
          yvxDTable = google.visualization.arrayToDataTable(yvxData),
          zvxDTable = google.visualization.arrayToDataTable(zvxData),
          zvyDTable = google.visualization.arrayToDataTable(zvyData),
          yvxPDTable = google.visualization.arrayToDataTable(yvxPData),
          zvxPDTable = google.visualization.arrayToDataTable(zvxPData),
          zvyPDTable = google.visualization.arrayToDataTable(zvyPData);
      // Compute viewing windows and tick places
    xmin = (xmin < 0) ? 1.05*xmin : 0.95*xmin;
    xmax = (xmax > 0) ? 1.05*xmax : 0.95*xmax;
    ymin = (ymin < 0) ? 1.05*ymin : 0.95*ymin;
    ymax = (ymax > 0) ? 1.05*ymax : 0.95*ymax;
    zmin = (zmin < 0) ? 1.05*zmin : 0.95*zmin;
    zmax = (zmax > 0) ? 1.05*zmax : 0.95*zmax;
    const xminst = xmin.toFixed(2),
          xmaxst = xmax.toFixed(2),
          yminst = ymin.toFixed(2),
          ymaxst = ymax.toFixed(2),
          zminst = zmin.toFixed(2),
          zmaxst = zmax.toFixed(2),
          xrng = xmax - xmin,
          x1q = xmin + 0.25*xrng, x1qst = x1q.toFixed(2),
          xmid = xmin + 0.5*xrng, xmidst = xmid.toFixed(2),          
          x3q = xmin + 0.75*xrng, x3qst = x3q.toFixed(2),
          yrng = ymax - ymin,
          y1q = ymin + 0.25*yrng, y1qst = y1q.toFixed(2),
          ymid = ymin + 0.5*yrng, ymidst = ymid.toFixed(2),
          y3q = ymin + 0.75*yrng, y3qst = y3q.toFixed(2),
          zrng = zmax - zmin,
          z1q = zmin + 0.25*zrng, z1qst = z1q.toFixed(2),
          zmid = zmin + 0.5*zrng, zmidst = zmid.toFixed(2),
          z3q = zmin + 0.75*zrng, z3qst = z3q.toFixed(2);
      // Set Options
    let Options = {...globalChartOptions,
                      vAxis: {viewWindowMode: 'explicit'},
                      width: 300, height: 300, legend: 'none'};
    let tsOptions = {...Options,
                        hAxis: {ticks: [{v: 0, f: '0'},
                                        {v: 15, f: '15'},
                                        {v: 30, f: '30\nt'},
                                        {v: 45, f: '45'},
                                        {v: 60, f: '60'}]}};

    tsOptions.vAxis = {viewWindow: {min: xmin, max: xmax},
                       ticks: [{v: xmin, f: xminst},
                               {v: x1q, f: x1qst}, 
                               {v: xmid, f: 'x\u00A0\u00A0\u00A0' + xmidst}, 
                               {v: x3q, f: x3qst}, 
                               {v: xmax, f: xmaxst}]};    
    const xvtChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7xvtChart"));
    xvtChart.draw(xvtDTable, tsOptions);

    tsOptions.vAxis = {viewWindow: {min: ymin, max: ymax},
                       ticks: [{v: ymin, f: yminst},
                               {v: y1q, f: y1qst}, 
                               {v: ymid, f: 'y\u00A0\u00A0\u00A0' + ymidst}, 
                               {v: y3q, f: y3qst}, 
                               {v: ymax, f: ymaxst}]};    
    const yvtChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7yvtChart"));
    yvtChart.draw(yvtDTable, tsOptions);

    tsOptions.vAxis = {viewWindow: {min: zmin, max: zmax},
                       ticks: [{v: zmin, f: zminst},
                               {v: z1q, f: z1qst}, 
                               {v: zmid, f: 'z\u00A0\u00A0\u00A0' + zmidst}, 
                               {v: z3q, f: z3qst}, 
                               {v: zmax, f: zmaxst}]};
   const zvtChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvtChart"));
    zvtChart.draw(zvtDTable, tsOptions);

    let ppOptions = {...Options, 
                     hAxis: {viewWindowMode: 'explicit',
                             viewWindow: {min: xmin, max: xmax},
                             ticks: [{v: xmin, f: xminst},
                                     {v: x1q, f: x1qst},
                                     {v: xmid, f: xmidst + '\nx'},
                                     {v: x3q, f: x3qst},
                                     {v: xmax, f: xmaxst}]},
                     vAxis: {viewWindow: {min: ymin, max: ymax},
                             ticks: [{v: ymin, f: yminst},
                                     {v: y1q, f: y1qst},
                                     {v: ymid, f: 'y\u00A0\u00A0\u00A0' + ymidst},
                                     {v: y3q, f: y3qst},
                                     {v: ymax, f: ymaxst}]}};
    const yvxChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7yvxChart"));
    yvxChart.draw(yvxDTable, ppOptions);
    const yvxPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7yvxPChart"));
    yvxPChart.draw(yvxPDTable, ppOptions);

    ppOptions.vAxis = {viewWindow: {min: zmin, max: zmax},
                            ticks: [{v: zmin, f: zminst},
                                    {v: z1q, f: z1qst},
                                    {v: zmid, f: 'z\u00A0\u00A0\u00A0' + zmidst},
                                    {v: z3q, f: z3qst},
                                    {v: zmax, f: zmaxst}]};
    const zvxChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvxChart"));
    zvxChart.draw(zvxDTable, ppOptions);
    const zvxPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7zvxPChart"));
    zvxPChart.draw(zvxPDTable, ppOptions);

    ppOptions.hAxis = {viewWindow: {min: ymin, max: ymax},
                            ticks: [{v: ymin, f: yminst},
                                    {v: y1q, f: y1qst},
                                    {v: ymid, f: ymidst + '\ny'},
                                    {v: y3q, f: y3qst},
                                    {v: ymax, f: ymaxst}]};
    const zvyChart = new google.visualization.LineChart(document.getElementById("GiorCPC3E26n7zvyChart"));
    zvyChart.draw(zvyDTable, ppOptions);
    const zvyPChart = new google.visualization.ScatterChart(document.getElementById("GiorCPC3E26n7zvyPChart"));
    zvyPChart.draw(zvyPDTable, ppOptions);
  }
  makeC3E26n7Graph();
  return makeC3E26n7Graph;
}