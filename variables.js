// values 
let a = 10;
var b = 20;
const c = "not change";

console.table([a , b , c]);

// ______________________________________________________

// 1) let  -> only reintialize not redeclare 


a = 20;
// let a = 30; this can give error because it is redeclare 
console.table([a , b, c]);


// _________________________________________________________


// var -> it reinisilize and redefine in program 

b = "change value";
var b = 10;
console.table([a , b, c]);

// __________________________________________________________

// 3)const -> it NOT reinisilize and redefine in program 

// c = 10;
// const c = 10; both can give error

//____________________________________________________________
