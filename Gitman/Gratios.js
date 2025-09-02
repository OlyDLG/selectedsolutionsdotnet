// Liquidity Ratios
function Current(assets, liabilities) {
  const c = (liabilities != 0) ? assets/liabilities : NaN;
  return c;
}

function Quick(assets, inventory, liabilities) {
  const q = (liabilities != 0) ? (assets - inventory)/liabilities : NaN;
  return q;
}

// Activity Ratios
function InventoryTurnover(cost, inventory) {
  const it = (inventory != 0) ? cost/inventory : NaN;
  return it;
}

function AvDaily360(annualFigure) {return annualFigure/360;}

function AvColPer(receivables, annualSales) {
  const acp = (annualSales != 0) ? receivables/AvDaily360(annualSales) : NaN;
  return acp;
}

function AvPayPer(payables, annualPurchases) {
  const app = (annualPurchases != 0) ? payables/AvDaily360(annualPurchases) : NaN;
  return app;
}

function AssetTurnover(sales, assets) {
  const at = (assets != 0) ? sales/assets : NaN;
  return at;
}

// Debt Ratios
function Debt(liabilities, assets) {
  const d = (assets != 0) ? liabilities/assets : NaN;
  return d;
}

function TimesIntEarned(earnings, interest) {
  const tie = (interest != 0) ? earnings/interest : NaN;
  return tie;
}

function FixedPaymentCoverage(earnings, lease, interest, principal, dividends, taxRate) {
  const numer = Number(earnings) + Number(lease);
  const denom = Number(interest) + Number(lease) + (Number(principal) + Number(dividends)) / (1.0 - taxRate);
  const fpc = (denom != 0) ? (numer/denom) : NaN;
  return fpc;
}

// Profitability Ratios
function Profit(sales, costs) {return sales - costs;}

function GrossMargin(sales, costOfGoods) {
  const gm = (sales != 0) ? Profit(sales, costOfGoods) / sales : NaN;
  return gm;
}

function OperatingMargin(sales, operatingCosts) {
  const om = (sales != 0) ? Profit(sales, operatingCosts) / sales : NaN;
  return om;
}

function NetMargin(sales, allCosts) {
  const nm = (sales != 0) ? Profit(sales, allCosts) / sales : NaN;
  return nm;
}

function EPS(netEarnings, nShares) {
  const eps = (nShares != 0) ? netEarnings / nShares : NaN;
  return eps;
}

function ROA(netEarnings, assets) {
  const roa = (assets != 0) ? netEarnings / assets : NaN;
  return roa;
}

function ROE(netEarnings, csEquity) {
  const roe = (csEquity != 0) ? netEarnings / csEquity : NaN;
  return roe;
}

// Market Ratios
function P2E(price, eps) {
  const p2e = (eps != 0) ? price / eps : NaN;
  return p2e;
}

function M2B(price, csEquity, nCSharesOut) {
  const m2b = ((csEquity != 0) && (nCSharesOut != 0)) ? nCSharesOut * price / csEquity : NaN;
  return m2b;
}
