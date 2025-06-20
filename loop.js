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
    console.log(i);
}

for(let i = 1; i<=3; i++){// Nested for loop 
    console.log(`Table of ${i}`);
    for(let j = 1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}` );
    }
}

// Array in loop 

let arr = [3 , 21 , 5 ,4];

for(let i = 0 ; i<=arr.length; i++ ){
    console.log(arr[i]);
}
let sum = 0;
for(let i = 0 ; i<arr.length; i++ ){
    sum += arr[i];    
}
// console.log(sum);\

// break and continue statement


for(let i = 0; i<=10; i++){
    if(i ==5){
        console.log(`detected = 5`);
        break;
    }
    console.log("index = " + i);
}

for(let i = 0; i<=10; i++){
    if(i ==5){
        console.log(`detected = 5`);
        continue;
    }
    console.log("index = " + i);
}

// while loop 

let i = 0;
 while(i <= 5){
  console.log(i);
     i++;
 }
let j = 0;
 do{
     // console.log(j);
     j++;
 }while(j<=5);


while(j<arr.length){
    console.log(arr[j]);
    j++;
}
