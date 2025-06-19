//globel vareables-> access in all program 
let a = 10;
const b = 20;
var c = 30;


{
    console.log(a);
    console.log(b);
    console.log(c);
}

{// this is a local vareables -> only access in this block but not var it access in all program 
    let a = 1;
    const b = 2;
    var c = 3;
    console.log(a);
    console.log(b);
    console.log(c);
}
// if we access this vareables outside then it not access then value of globel vareables is use 


//++++++++++++++++++IMPORTANT+++++++++++++++++

console.log(onep(4));// if it declaire or call after or before not impact on this onother not give error

function onep(num){
    return num +1;
}

// console.log(twop(4)); give error because in this type of function declaration does not call before function define 

let twop = function(num){
    return num +2;
}
console.log(twop(4));// not give error it define after it 


