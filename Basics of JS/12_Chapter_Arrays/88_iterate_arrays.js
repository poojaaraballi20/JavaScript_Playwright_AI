let arr=["Login", "checkout","search"];

for(let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
}

for (let x of arr){
    console.log(x);
}

console.log("forEach method");

arr.forEach((test, index) => {
    console.log(index, test);
});