
const url = require('url');
const adr = 'https://localhost:8080/default.html/?month=feb&year=2021';
const q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;
console.log(qdata.month + ' '+qdata.year);