function GitmanTax(income) {
  let tax = (income < 50000) ? 0.15 * income : ( 
               (income < 75000) ? 7500 + 0.25 * (income - 50000) : (
                  (income < 100000) ? 13750 + 0.34 * (income - 75000) : (
                     (income < 335000) ? 22250 + 0.39 * (income - 100000)  : (
                        (income < 10000000) ? 113900 + 0.34 * (income - 335000) : (
                           3400000 + 0.35 * (income - 10000000))))));
  return tax;
}

function GitmanAvTax(income) {
  return GitmanTax(income)/income;
}

function GitmanMargTax(income) {
  let margtax = (income < 49999) ? 0.15 : ( 
                   (income < 74999) ? 0.25 : (
                      (income < 99999) ? 0.34 : (
                         (income < 334999) ? 0.39 : (
                            (income < 9999999) ? 0.34 : (0.35)))));
  return margtax;
}
