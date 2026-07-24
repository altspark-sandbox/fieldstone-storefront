// Catalog helpers for Fieldstone Supply Co.
const _ = require('lodash');
function bySku(items) { return _.keyBy(items, 'sku'); }
module.exports = { bySku };
