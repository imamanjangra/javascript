/* falsy value 
        fase , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
    
    Truthy value 
        "0" , "false" , " " , [] , {} , function(){}
 */
// if statement 

let a = 10 ;
let b = 30 ;

if(a == 10){// if 
    console.log(`hello`);
}

if(a == b){// if else 
    console.log(` equal`);
}else{
    
    console.log(`not equal`);
}

if(a == 10){// if ifelse else
    console.log(`a = 10`);
    
}else if(b == 20){
    console.log(`b = 20`);
    
}else{
    console.log(`kuch be sahe nhe ha`);

}

let n1 = 3;

switch(3){// switch
    case 1:
            console.log(`n1 = 1`);
            break;
    case 2:
            console.log(`n1 = 2`);
            break;
    case 3:
            console.log(`n1 = 3`);
            break;
    default:
            console.log(`try again`)

}

// && -> chek both value is true or not 

if(2 == 2 && a == 10){
    console.log(`ture`);
}

//|| -> if one value true then it give true 

if(2 == 2 && a == 20){
    console.log(`ture`);
}

// =!

if(a != 0){
    console.log(`ture`);
}

// == is chek value is equal or not _____ === it chek with data types is equal or not 

if(2 == "2"){
    console.log(`ture`);
}

if(2 === 2){
    console.log(`ture`);
    
}




// ++++++++++++++++++imp++++++++++++++++++++++

// Nullish coalescing operator (??) : null undefined 

let valu1;
// valu1 = 5 ?? 10;
valu1 = null ?? 10;
valu1 = undefined ?? 30;

valu1 = null ?? 10 ?? 20;



