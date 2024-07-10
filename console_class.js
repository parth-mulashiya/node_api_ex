const fs = require('fs');
const out = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');

const myobject = new
console.Console(out,err);
myobject.log('This is the first example');
myobject.log('This is the %s example','second');
myobject.error(new Error('in this we creating some error'));
const num = 'third';
myobject.warn('this is the %s example',num);