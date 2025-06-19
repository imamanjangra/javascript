//function

function add(num1 , num2){
    return num1 + num2;
}

// console.log(add(5 , 2));

// +++++++++++++++important+++++++++++++

function calculate_cart_prince(...num){
    return num;
}

// function calculate_cart_prince(valu1 , valu2 ,...num){ 
//     return num;
// }

// console.log(calculate_cart_prince(10 , 23, 456));

//++++++++++++object in function+++++++++++++++
let obj = {
    Myname : "Aman",
    Roll_no : 13,
}

function objfn(anyobject){
    return anyobject
}

console.log(objfn(obj));

console.log({
    fname : "anuj",
    roll : 14,
})

console.log(objfn(obj));

// +++++++++++++funtion in array++++++++++++

let arr = [1 , 2, 3, 4 ];

function value(get_arr){
    return get_arr[2];

}

console.log(value(arr));

console.log(value([10 ,20 , 30 , 40]));

