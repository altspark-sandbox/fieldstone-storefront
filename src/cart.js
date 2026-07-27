// Cart totals. Prices are in cents to avoid float drift.
function total(lines) { return lines.reduce((s, l) => s + l.qty * l.unitCents, 0); }
module.exports = { total };
