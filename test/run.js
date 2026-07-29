const { total } = require('../src/cart');
if (total([{qty: 2, unitCents: 1250}]) !== 2500) { process.exit(1); }
console.log('ok');
