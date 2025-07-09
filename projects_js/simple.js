let b1 = document.querySelector("#boxes1");
let b2 = document.querySelector("#boxes2");
let b3 = document.querySelector("#boxes3");
let body = document.querySelector("body")

b1.addEventListener("click",() =>{
    body.style.backgroundColor = "#FF671F";
})
b2.addEventListener("click",() =>{
    body.style.backgroundColor = "#FFFFFF";
  
})
b3.addEventListener("click",() =>{
    body.style.backgroundColor = "#046A38";
})
