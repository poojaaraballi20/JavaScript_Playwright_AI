let original=[10,20, 30,40,50];
let copy=[...original]

console.log("Original",original);
console.log("Copy",copy);

let copy2=original.slice();
console.log("Copy2",copy2);

let deep_copy_array= original;
deep_copy_array.push(100);
console.log("Original after deep copy",original);

//spilce() and spread creates a new array and it doesnt change the original array if copy array is changed
//but if we assign the original array to a new variable then it will be a deep copy and any changes made to the new variable will also affect the original array.
