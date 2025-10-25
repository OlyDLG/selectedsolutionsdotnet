/* Google Charts Support */

const globalChartOptions = {chartArea: {top: 10}, legend: 'bottom'};

function computeTicks(data, labl, vert) {
/* data = an axis of numerical values as a 1-D array
   labl = the axis lable, a string
   vert = "boolean" indicating if a vertical axis (1) or horizontal (0)
   prec = integer indicating number of decimal places to display for the tick labels 
*/
  let mdpt, oom, oomf, temprng, 
      plotmin, plotmax, plotrng,
      ticks = {v: [], s: []};
  [min, max, rng] = MinMaxRng(data);
  if (rng == 0) { // if we have only one point to plot...
    oom = Math.floor(Math.log10(Math.abs(min)));
    oomf = Math.pow(10, oom-1);
    plotmin = Math.floor(min/oomf) * oomf;
    plotmax = Math.ceil(max/oomf) * oomf;
    plotrng = 1;
  }
  else { // we have more than one point to plot
    mdpt = 0.5*(min + max);
    oom = Math.floor(Math.log2(rng));
    oomf = Math.pow(2, oom-2);
    temprng = oomf * Math.ceil(rng/oomf);
    plotmin = oomf * Math.floor((mdpt - 0.5*temprng)/oomf);
    plotmax = oomf * Math.ceil((mdpt + 0.5*temprng)/oomf);
    plotrng = plotmax - plotmin;
  }
  for (let i=0; i < 5; i++) {
    ticks.v[i] = (plotmin + i/4.0 * plotrng).toFixed(2);
    ticks.s[i] = ticks.v[i].toString();
  }
  if (vert) {
    ticks.s[2] = labl + '\u00A0\u00A0\u00A0' + ticks.s[2];
  }
  else {
    ticks.s[2] += ('\n' + labl);
  }
  return ticks;
}

/*
Not presently needed/used, development suspended

function addDataSeries(DataTable, newDataArray, newDataLabels) {
	let origNCols = DataTable.getNumberOfColumns();
	let origNRows = DataTable.getNumberOfRows();
	let newNCols = newDataArray[0].length-1; //Don’t count the ind. var. col.
	let newNRows = newDataArray.length;
	let nDAtype = typeof(newDataArray[0][0]);
	for (i=0; i < newDataLabels.length; i++) {
            DataTable.addColumn(nDAtype, newDataLabels[i]);
        }
	let newRow = [];
	for (i=0; i < newNRows; i++) {
	    newRow[0] = newDataArray[i][0];
	    for (j=1; j < origNCols; j++) {
	    	newRow[j] = NaN;
	    }
	    for (k=0; k < newNCols; k++) {
	        newRow[origNCols+k] = newDataArray[i][k+1];
	    }
	    DataTable.addRow(newRow);
	}
}

function create2DArray(rows, cols, value) {
  return Array.from({ length: rows }, () => Array(cols).fill(value));
}
*/