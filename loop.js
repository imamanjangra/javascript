// Loops
/* tyes of loop
    1) for loop
        a)for in loop
        b)for of loop 
    2) while loop 
    3) do while 
*/

// for loop 

for(let i = 0; i<=10; i++){// simple for loop 
    // console.log(i);
}

for(let i = 1; i<=3; i++){// Nested for loop 
    // console.log(`Table of ${i}`);
    for(let j = 1; j<=10; j++){
        // console.log(`${i} * ${j} = ${i*j}` );
    }
}

// Array in loop 

let arr = [3 , 21 , 5 ,4];

for(let i = 0 ; i<=arr.length; i++ ){
    // console.log(arr[i]);
}
let sum = 0;
for(let i = 0 ; i<arr.length; i++ ){
    sum += arr[i];    
}
// console.log(sum);\

// break and continue statement


for(let i = 0; i<=10; i++){
    if(i ==5){
        // console.log(`detected = 5`);
        break;
    }
    // console.log("index = " + i);
}

for(let i = 0; i<=10; i++){
    if(i ==5){
        // console.log(`detected = 5`);
        continue;
    }
    // console.log("index = " + i);
}

// while loop 

let i = 0;
 while(i <= 5){
//   console.log(i);
     i++;
 }
let j = 0;
 do{
     // console.log(j);
     j++;
 }while(j<=5);


while(j<arr.length){
    // console.log(arr[j]);
    j++;
}

// -----------for of loop ------------------for Array

// let o1 = [1 , 2, ,3 ,4 ];

// for (const i of o1) {
//     console.log(i)
// }

let naming = ["Aman" , "Anuj"];

for(const name of naming){
    // console.log(name);
}

// --------Map--------

let map = new Map();

map.set("Aj" , "Aman jangra ");
map.set("Ak" , "Aman kumar");

// console.log(map);

for(let [Key , value] of map){
    // console.log(Key + " :- " + value);
}

// ---------------for in loop ----------------objects
let myobj  = {
    Myname : "Aman",
    roll_no : 18,
    class : "BCA", 
}

for(let Key in myobj){
    // console.log(`${Key} = ${myobj[Key]} `);
}

// for in loop in array 

let lang = ["js" , "html" , 'css' , 'php'];

for(let i in lang){
    // console.log(lang[i]);
}


let arr1 = ['js' , 'html' , 'css', 'cpp'];

arr1.forEach( function(val){
    // console.log(val);
})

arr1.forEach((val) => {
    // console.log(val)
})

function val(i){
    // console.log(i);
}

arr1.forEach(val);

arr1.forEach((items , index , arr) => {
    // console.log(items , index , arr)
})

