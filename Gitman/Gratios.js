// Liquidity Ratios
function Current(assets, liabilities) {
	var c = (liabilities != 0) ? assets/liabilities : NaN;
	return c;
}

function Quick(assets, inventory, liabilities) {
	var q = (liabilities != 0) ? (assets - inventory)/liabilities : NaN;
	return q;
}

// Activity Ratios
function InventoryTurnover(cost, inventory) {
	var it = (inventory != 0) ? cost/inventory : NaN;
	return it;
}

function AvDaily360(annualFigure) {return annualFigure/360;}

function AvColPer(receivables, annualSales) {
	var acp = (annualSales != 0) ? receivables/AvDaily360(annualSales) : NaN;
	return acp;
}

function AvPayPer(payables, annualPurchases) {
	var app = (annualPurchases != 0) ? payables/AvDaily360(annualPurchases) : NaN;
	return app;
}

function AssetTurnover(sales, assets) {
	var at = (assets != 0) ? sales/assets : NaN;
	return at;
}

// Debt Ratios
function Debt(liabilities, assets) {
	var d = (assets != 0) ? liabilities/assets : NaN;
	return d;
}

function TimesIntEarned(earnings, interest) {
	var tie = (interest != 0) ? earnings/interest : NaN;
	return tie;
}

function FixedPaymentCoverage(earnings, lease, interest, principal, dividends, taxRate) {
	var numer = Number(earnings) + Number(lease);
	var denom = Number(interest) + Number(lease) + (Number(principal) + Number(dividends)) / (1.0 - taxRate);
	var fpc = (denom != 0) ? (numer/denom) : NaN;
	return fpc;
}

// Profitability Ratios
function Profit(sales, costs) {return sales - costs;}

function GrossMargin(sales, costOfGoods) {
    var gm = (sales != 0) ? Profit(sales, costOfGoods) / sales : NaN;
    return gm;
}

function OperatingMargin(sales, operatingCosts) {
    var om = (sales != 0) ? Profit(sales, operatingCosts) / sales : NaN;
    return om;
}

function NetMargin(sales, allCosts) {
    var nm = (sales != 0) ? Profit(sales, allCosts) / sales : NaN;
    return nm;
}

function EPS(netEarnings, nShares) {
    var eps = (nShares != 0) ? netEarnings / nShares : NaN;
    return eps;
}

function ROA(netEarnings, assets) {
    var roa = (assets != 0) ? netEarnings / assets : NaN;
    return roa;
}

function ROE(netEarnings, csEquity) {
    var roe = (csEquity != 0) ? netEarnings / csEquity : NaN;
    return roe;
}

// Market Ratios
function P2E(price, eps) {
    var p2e = (eps != 0) ? price / eps : NaN;
    return p2e;
}

function M2B(price, csEquity, nCSharesOut) {
    var m2b = ((csEquity != 0) && (nCSharesOut != 0)) ? nCSharesOut * price / csEquity : NaN;
    return m2b;
}
