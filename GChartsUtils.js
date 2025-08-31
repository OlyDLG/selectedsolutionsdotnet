/* Google Charts Support */
const globalChartOptions = {chartArea: {top: 10}, legend: 'bottom'};
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