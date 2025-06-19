let arr = [0 , 1 , 2 , 3 ,4 ];// first way to declare 
let arr1 = new Array(0 , 1, 2 , 3); // second
let arr2 = ["Aman" , "Name" , "ha" , "mara"];//third 

// function of array
arr.push(3);// push in the last 
arr.pop();// remove the last no in array
arr.unshift(2);// add in the starting 
arr.shift();// remaove frome the starting 

console.log(arr.includes(9));// chek it is include or not 
console.log(arr.indexOf(2));// chek it is include or not 

let new_arr = arr.join();// it conver into string 

console.log(arr);
console.log(new_arr);

// ++++++++++++++++++++++imp+++++++++++++++++++++

//slice -> not change in orignal array and not take last value 

console.log("A = " ,  arr);

let slice_arr = arr.slice(1 , 3);

console.log(slice_arr);


// splice ->  change in orignal array and also take last value index

console.log("B = " ,  arr);

let splice_arr = arr.splice(1 , 3);

console.log(splice_arr);
console.log("A = " ,  arr);

//+++++++++++++++++++++Array2part++++++++++++++++++++++++++++

let fname1 = ["Aman" , "Tarun"];
let fname2 = ["Anuj" , "Aryan"];

let new_name = fname1.concat(fname2);//first way 

console.log(new_name);

let all_name = [...fname1, ...fname2];//second way this is a best way ########
console.log(all_name);

let arr_in_arr = [1 , 2, [1 , 2] , [1 , 2 , [1 , 2]]];

let solve = arr_in_arr.flat(Infinity);
console.log(solve);

console.log(Array.isArray("arr"));
console.log(Array.from("arr"));// from new array

let a = 10;
let b = 20;
let c = 30;

console.log(Array.of(a , b, c));

