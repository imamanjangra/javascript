// const div = document.getElementById("d1");
// console.log(div.innerText + " -> innerText");// not show hidden text 
// console.log(div.textContent + " -> textcontent");// show hidden text 


// const myul = document.querySelector("ul");
// const myli = myul.querySelector("li");
// myli.style.backgroundColor = "Green";

//querySelectorAll -> foreach

// let list = document.querySelectorAll("li");

// list[0].style.backgroundColor = "red";// 1st way for each 

// list.forEach((l) => l.style.backgroundColor = "blue");



// let sdata = document.querySelectorAll(".same");
// let arr = Array.from(sdata);
// arr.forEach((l) => {l.style.backgroundColor = "red"})


let prnt = document.querySelector(".parent");
// console.log(prnt);
// console.log(prnt.children);
// console.log(prnt.children.innerHtml);

console.log(prnt.children[0].innerHTML);
for(let i = 0; i< prnt.children.length ; i++){
    console.log(prnt.children[i].innerHTML);
}

prnt.children[1].style.color = "red";

// console.log(prnt.firstElementChild);
// console.log(prnt.lastElementChild);


let one = document.querySelector(".same");
console.log(one);
console.log(one.parentElement);
console.log(one.nextElementSibling);

console.log( prnt.childNodes);

// ----------------------------new element creation --------------------

let new_e = document.createElement("div");
console.log(new_e);
new_e.className = "new";
new_e.id = "unique";
new_e.setAttribute("title" , "hello")
const addtext = document.createTextNode("Aman");
new_e.appendChild(addtext);

document.body.appendChild(addtext)




