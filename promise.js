// 1) first 
let promise_one = new Promise(function(resolve , reject){
    setTimeout( function(){
        console.log("task is complete ");
    }, 1000)
})

promise_one.then(function(){
    console.log("promise is complete")
})

// 2) second 

let promise_second = new Promise(function(resolve , reject){
    setTimeout( function(){
        console.log("task is completed ");
        resolve();   
    }, 1000)
})
promise_second.then(function(){
    console.log("promise is completed");
})

//3) three

let promise_three = new Promise(function(resolve , reject){
    setTimeout( function(){
        resolve({username : "Aman" , rollno : "10"})
    } , 1000)
})
promise_three.then(function(data){
    console.log(data)
})

//4) four 

let promise_four = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = false;
        if(!error){

            resolve({username : "Anuj" , class : "B.A"})
        }
        else{
            reject("ERROR is accured")
        }
    }, 1000);
})
promise_four
.then(function(data){
    console.log(data);
    return data.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(){
    console.log("error accure ")
}).finally(() => {
    console.log("promise is either is resolved or reject ");
    
})

//5) five

let promise_five =  new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = false;
        if(!error){

            resolve({username : "Anuj" , class : "B.A"})
        }
        else{
            reject("ERROR is accured")
        }
    }, 1000);
})

async function promisefive(){
    try{
        const response = await promise_five;
        console.log(response);
        
    }
    catch(error){
        console.log(error);
        
    }
}

promisefive();

