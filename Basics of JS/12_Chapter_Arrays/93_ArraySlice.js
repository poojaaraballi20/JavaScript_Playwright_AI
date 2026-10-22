let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
//slicing returns new array and always uses 0 to n-1

let result=arr.slice(0,3);

console.log(arr);
console.log("Slicing", result);

let result1=arr.slice(3);
console.log( "Slice from index 3 to end", result1);

let result2=arr.slice(-2);
console.log( "Slice from last 2 elements", result2);


let result3=arr.slice(-2, -5);
console.log( "Slice from last 5 to 2 elements", result3);