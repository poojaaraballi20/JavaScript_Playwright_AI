let statuses= ["Pass", "Fail", "Skip"];
console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses[4]);//undefined

console.log(statuses.at(0));
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-5));//undefined

//modify
statuses[2]="backdrop";
console.log(statuses);

