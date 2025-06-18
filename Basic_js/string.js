let Myname = "Aman";
let Rollno = 13;

console.log(`My name is ${Myname} and my roll no ${Rollno}`);// backticks this is best practise to write string in js 

// New way to declare a string 

let new_srting  = new String("Aman");


// function in string 

console.log(new_srting.length);// length of string
console.log(new_srting.toUpperCase());// uppercase of string
console.log(new_srting.toLowerCase());// lowercase of string
console.log(new_srting.charAt(3));// at index value 
console.log(new_srting.indexOf("n"));// find the character at index 
let str = new_srting.substring(1 , 4);// This can creat a substring and also it can take one more value if index if last 4 then it take 5
console.log(str);
let str2 = new_srting.slice(-4 , 3);// this can also take a value in -ve 
console.log(str2);
let str3 = "   Aman  ";
console.log(str3.trim());// this can remove the blank spaces in the programs 
let fullname = "Amanjangra-name-ha-mara";
console.log(fullname.replace("jangra" , "singh"));//This can find first and after change it 
console.log(fullname.includes("Aman"));// this chek string avabile or not 
console.log(fullname.split("-"));// ya is kuch be is ka under hoga us ko us string sa match kra ga or us basis pr split kr da ga






