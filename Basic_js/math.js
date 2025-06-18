let count = 190;// normal no.
console.log(count);

let new_count = new Number(190);// type in output it is a number 
console.log(new_count);

// -------------------------------------------------------------------------------------------------------------------------------------

// we can conver number in into string with tostring() fn and we can access all the properrt or function on string in this number 


console.log(new_count.toString().length); 

// ------------------------------------------------------------------------------------------------------------------------------------

//  modefie the no and roundoff

console.log(new_count.toFixed(2));// after the decimal no how much you want 

let total = 123.893;
console.log(total.toPrecision(4)); // how nuch total no display includes with number and decimal and it round off the value 

let lakh = 100000;
console.log(lakh.toLocaleString());//add komas "," in numbers in us rupees or number 
console.log(lakh.toLocaleString('en-IN'));//add komas "," in numbers in indian rupees

//++++++++++++++++++++++Math++++++++++++++++

// function in math 

console.log(Math.abs(-3));// only convert in -ve number into +ve no.
console.log(Math.round(3.6));// rounf off the value 
console.log(Math.ceil(3.1));// if decimal no in value then it inc. value one and remaove point
console.log(Math.floor(3.9));// not round off only remoave the decimal no
console.log(Math.min(3 , 6 ,3 , 8));// give min value
console.log(Math.max(3 , 6 ,3 , 8));// give max value

console.log(Math.random());//give value in between 0 to 1

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1 )) + min);







