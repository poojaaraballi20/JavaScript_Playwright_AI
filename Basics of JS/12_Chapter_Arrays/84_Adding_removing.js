let arr=[1,2,3];
console.log(arr.length);

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

arr.push(5,6,7);
console.log(arr);


console.log("Add to begining----------------------------")
//add to begining
arr.unshift(100);
console.log(arr);

console.log("remove from begining----------------------------")
arr.shift();
console.log(arr);

console.log("Final Array----------------------------")
console.log(arr);

arr.splice(1,2);
console.log(arr);

console.log("------final array-----------------------");
console.log(arr);

arr.splice(1,0,99);//when 0 is there in the place of no of elements to be deleted then it will always insert.
console.log(arr);

arr.push(8,9,10);
console.log("------final array-----------------------");
console.log(arr);
arr.splice(2,2,88,77);
console.log(arr);