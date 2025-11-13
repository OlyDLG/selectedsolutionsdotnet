function removeCommas(s) {
    let noCommas = s.replace(/,/g , "");
    return noCommas;
}

function addCommas(s) {
    tmp = s.split(".");
    let mant = tmp[0];
    let dec = tmp[1]; 
    let res = "." + dec;
    for (i=0; i<mant.length; i++) {
      res = mant[mant.length-1-i] + res;
      if ((i % 3)==2 && (i != mant.length-1)) {
        res = "," + res;
      }
    }
    return res;
}

function dgEBIiH(id) {
    return document.getElementById(id).innerHTML; 
}

function dsEBIiH(id, val) {
    document.getElementById(id).innerHTML = val; 
}

function winhisback () {
    window.history.back();
}

function dgCheckBoxState(id) {
    return document.getElementById(id).checked; 
}

function toggleHidden(id) {
    element = document.getElementById(id);
    element.hidden = !element.hidden;
}

Array.prototype.swap = function(i, j) {
/* Swap the values this[i] and this[j] */
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
}

/*
function supJS(s) {
    return String(s) + "<sup>JS</sup>";
}

function JSnote() {
    dsEBIiH("JSnote", supJS(""));
}
*/