let set = new Set(arr2);

for(let val of arr1 ){

if(!set.has(val)){

console.log(`${val} is not present in arr2`);

}

}