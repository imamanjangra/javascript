//function

// function add(num1 , num2){
//     return num1 + num2;
// }

// // console.log(add(5 , 2));

// // +++++++++++++++important+++++++++++++

// function calculate_cart_prince(...num){
//     return num;
// }

// // function calculate_cart_prince(valu1 , valu2 ,...num){ 
// //     return num;
// // }

// // console.log(calculate_cart_prince(10 , 23, 456));

// //++++++++++++object in function+++++++++++++++
// let obj = {
//     Myname : "Aman",
//     Roll_no : 13,
// }

// function objfn(anyobject){
//     return anyobject
// }

// console.log(objfn(obj));

// console.log({
//     fname : "anuj",
//     roll : 14,
// })

// console.log(objfn(obj));

// // +++++++++++++funtion in array++++++++++++

// let arr = [1 , 2, 3, 4 ];

// function value(get_arr){
//     return get_arr[2];

// }

// console.log(value(arr));

// console.log(value([10 ,20 , 30 , 40]));


// ++++++++++++++++++++++This and arrow functoin+++++++++++++++++++++++

let o1 = {
    Uname : "Aman",
    rol : 13,
    welconemess : function(){
        console.log(`hello , welcone to my website  ${this.Uname}  `)// this access current  context  of block in whic it use 
        console.log(this)
    }
}

o1.welconemess();
o1.Uname = "Anuj";
o1.welconemess();
// console.log(this);

//  +++++++arrowfunction++++++++

//this is not work in function 


let o2 = (num1 , num2) => {
    return num1 + num2;// explicit run -> with return statement 

}

console.log(o2(1 , 2));

let o3 = (num1 , num2) => num1 + num2; // implicit run -> without return statement 
let o4 = (num1 , num2) => (num1 + num2); // we can write in this form 
let o5 = (num1 , num2) => ({username : "Aman"}); // we can write in this form 

console.log(o3(1 , 2));

// +++++++++++++++++++IIFE+++++++++++++++++

// IIFE -> immediately Invoked functoin Expressions 
// IIFE -> avoid the pollution of globel vareables 


(function best(){
    //named IIFE
    console.log("We are Best ");
})(); // this semecolom is veary imp if not apply this give error --> this means end of the code 

(() => {// Arrow function
    // simple IIFE
    console.log(`hello`);
})();
((name ) => {// Arrow function
    console.log(`hello , My name is ${name}`);
})("Aman");