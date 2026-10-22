let a=[1,10,2,21];
a.sort((a,b)=>a-b);
console.log("Sorted Array", a);

a.sort((a,b)=>b-a);
console.log("Reverse Sorted Array", a);


 let fruits=["apple", "banana", "bae", "grape"];
fruits.sort((a,b)=>a.localeCompare(b));
console.log("Sorted Fruits", fruits);
