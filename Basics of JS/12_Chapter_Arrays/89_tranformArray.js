let scores=[33, 45, 68, 76,90,99];
let grade = scores.map((i) => i>50?"Pass":"Fail");

console.log(scores, grade);


//filer
let passing = scores.filter(p=> p>=70);
console.log(passing);