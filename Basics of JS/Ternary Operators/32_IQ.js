let responsetime= 850;
let sla=1000;
let slastaus= responsetime <=sla ?"Withing SLA": "SLA breached";

console.log(`Response: ${responsetime} ms- ${slastaus}`);
console.log(`What is SLA time ${sla}`);