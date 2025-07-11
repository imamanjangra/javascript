let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
let orange = document.querySelector(".orange");
let boxes = document.querySelector("#boxes");
let link = document.querySelector("#link")
blue.addEventListener("click" , function(e){// Default propogation is false 
    // console.log("Blue was clicked ");
})
green.addEventListener("click" , function(e){// It's same as this 
    // console.log("green was clicked ");
} , false)

red.addEventListener("click" , function(e){// It's same as this 
    // console.log("green was clicked ");
} , true)// propgation is start.

//take a best example what is the diffrence between them true and false in events 

//false-> first element and after contaner 
boxes.addEventListener("click" , function(e){
    // console.log("inside the box");
} , false);

green.addEventListener("click" , function(e){
    // console.log("green was clicked ");
} , false)

//true -> first contaner and after element 

boxes.addEventListener("click" , function(e){
    // console.log("inside the box");
} , true);

green.addEventListener("click" , function(e){
    // console.log("green was clicked ");
} , false);

// 
boxes.addEventListener("click" , function(e){
    // console.log("inside the box");
    
    // e.stopPropagation();// it run only this event on any box if two or more event on same element it remove this on element 
    // stop bublleing  
} , true);

green.addEventListener("click" , function(e){
    // console.log("green was clicked ");
} , true);

// stop propogation 

link.addEventListener("click" ,function(e){
    // e.preventDefault();
    // console.log("google was cicked ")
} , false)



// Example 

boxes.addEventListener("click" , function(e){
    // console.log(e.target.tagName);
    
    if(e.target.tagName === "DIV"){
        let removeit = e.target.parentNode
        // removeit.remove();
    }
})