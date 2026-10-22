let nums=[10, 20, 30, 40, 50];
let result= nums.find(temp => temp>30);//returns the value of first element for which predictions is true
console.log(result);

let index1=nums.findIndex(temp => temp>30);//returns the index of first element for which predictions is true
console.log(index1);

let index2=nums.findLastIndex(temp => temp>30);//returns the index of first element for which predictions is true
console.log("Last index", index2);