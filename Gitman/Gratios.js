// Liquidity Ratios
function Current(assets, liabilities) {
  let c = (liabilities != 0) ? assets/liabilities : NaN;
  return c;
}

function Quick(assets, inventory, liabilities) {
  let q = (liabilities != 0) ? (assets - inventory)/liabilities : NaN;
  return q;
}

// Activity Ratios
function InventoryTurnover(cost, inventory) {
  let it = (inventory != 0) ? cost/inventory : NaN;
  return it;
}

function AvDaily360(annualFigure) {return annualFigure/360;}

function AvColPer(receivables, annualSales) {
  let acp = (annualSales != 0) ? receivables/AvDaily360(annualSales) : NaN;
  return acp;
}

function AvPayPer(payables, annualPurchases) {
  let app = (annualPurchases != 0) ? payables/AvDaily360(annualPurchases) : NaN;
  return app;
}

function AssetTurnover(sales, assets) {
  let at = (assets != 0) ? sales/assets : NaN;
  return at;
}

// Debt Ratios
function Debt(liabilities, assets) {
  let d = (assets != 0) ? liabilities/assets : NaN;
  return d;
}

function TimesIntEarned(earnings, interest) {
  let tie = (interest != 0) ? earnings/interest : NaN;
  return tie;
}

function FixedPaymentCoverage(earnings, lease, interest, principal, dividends, taxRate) {
  let numer = Number(earnings) + Number(lease);
  let denom = Number(interest) + Number(lease) + (Number(principal) + Number(dividends)) / (1.0 - taxRate);
  let fpc = (denom != 0) ? (numer/denom) : NaN;
  return fpc;
}

// Profitability Ratios
function Profit(sales, costs) {return sales - costs;}

function GrossMargin(sales, costOfGoods) {
  let gm = (sales != 0) ? Profit(sales, costOfGoods) / sales : NaN;
  return gm;
}

function OperatingMargin(sales, operatingCosts) {
  let om = (sales != 0) ? Profit(sales, operatingCosts) / sales : NaN;
  return om;
}

function NetMargin(sales, allCosts) {
  let nm = (sales != 0) ? Profit(sales, allCosts) / sales : NaN;
  return nm;
}

function EPS(netEarnings, nShares) {
  let eps = (nShares != 0) ? netEarnings / nShares : NaN;
  return eps;
}

function ROA(netEarnings, assets) {
  let roa = (assets != 0) ? netEarnings / assets : NaN;
  return roa;
}

function ROE(netEarnings, csEquity) {
  let roe = (csEquity != 0) ? netEarnings / csEquity : NaN;
  return roe;
}

// Market Ratios
function P2E(price, eps) {
  let p2e = (eps != 0) ? price / eps : NaN;
  return p2e;
}

function M2B(price, csEquity, nCSharesOut) {
  let m2b = ((csEquity != 0) && (nCSharesOut != 0)) ? nCSharesOut * price / csEquity : NaN;
  return m2b;
}
