// setTimeout(function(){
//     // console.log("Aman");
// } , 2000);

// let chage_name = function(){
//     // console.log("Amanjangra");
// }

// let chge =  setTimeout(chage_name , 3000);

// // let green = document.querySelector(".green");
// // green.addEventListener("click" , function(){
// //     clearTimeout(chge);
// // })

// // ---------------------setinterval-------------------------

// // 1
// setInterval(function(){
//     // console.log(`hello + ${Date.now()}`);
// } , 1000 )
// // 2
// let fuc = function(){
//     // console.log("He:)");
// }

// // setInterval(fuc , 1000);

// // 3
// let fuc2 = function(str){
//     // console.log(str);
// }

// //  setInterval(fuc2 , 1000 , ":)");

// let f = function(){
//     // console.log("Hello ");
// }

// let interval;
// blue.addEventListener("click" , function(e){
// //    interval =  setInterval(f , 1000);
// })

// // green.addEventListener("click" , function(){
// //     // clearInterval(interval);
// // })

// // ---------

const random = (no) => Math.floor(Math.random() * no);

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const body = document.querySelector("body");

let intervalId;

const changeColor = () => {
  body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
};

startBtn.addEventListener("click", () => {
  
    intervalId = setInterval(changeColor, 1000);
  
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});