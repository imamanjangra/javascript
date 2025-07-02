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

let obj1 = [
    {
        Myname : "Aman",
        roll : 12
    },
    {
        Myname : "Anuj",
        roll : 1
    },
    {
        Myname : "tarun",
        roll : 50
    }
    
]

obj1.forEach( (items) => {
    // console.log(items.Myname);
})

// -----------------------filter map -----------------------

let no = [1 , 2, 3, 4, 5 , 6 , 7 ];

// let new_no = no.filter((num) => num > 5 );
let new_no = no.filter((num) => {
    return num > 5
} );
// console.log(new_no);

// ----------example-----------------

const books = [
    {
        b_name : "b1" , publish : 1990 , subject : "Math"
    },
    {
        b_name : "b2" , publish : 1993 , subject : "eco"
    },
    {
        b_name : "b3" , publish : 1999 , subject : "English"
    },
    {
        b_name : "b4" , publish : 1997 , subject : "computer"
    },
    {
        b_name : "b5" , publish : 1991 , subject : "Hindi"
    },
    {
        b_name : "b7" , publish : 1997 , subject : "Hindi"
    },
    {
        b_name : "b2" , publish : 1995 , subject : "Hindi"
    },
    {
        b_name : "b6" , publish : 1992 , subject : "gk"
    },
    {
        b_name : "b7" , publish : 1994 , subject : "gk"
    },
]
let book_data1 = books.filter((bk) => bk.subject == "Hindi");
let book_data2 = books.filter((bk) => bk.publish == 1997);

// console.log(book_data1);
// console.log(book_data2);

// ----------------------Mapes-----------------

let no_new = [1 , 2 , 3 , 4 ];

let data = no_new.map( (num) => num> 1);
let data1 = no_new.map( (num) => num +  10);

// console.log(data);
// console.log(data1);

// ------------chain methode-----------------

let sdata = no_new
.map((n) => n /3)
.map((n) => n * 3)
// .filter((n) => n > 3)
// console.log(sdata);

//---------------------reduce-------------------

let reduce_value = no_new.reduce( function (acc , currvalue){
    console.log(`acc = ${acc} , currentvalue = ${currvalue}`)
    return acc + currvalue;
} ,0 )// accumelator vlaue assine 0

let r_v = no_new.reduce((acc , curr) => acc + curr , 0 )// same and easy

console.log(reduce_value);
console.log(r_v);