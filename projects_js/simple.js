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


// second project 
let form = document.querySelector("form");


form.addEventListener("submit" , (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let results = document.querySelector("#results");

    if(height == "" || height < 0 || isNaN(height)){
        results.innerHTML = "Not a valid number (NaN)"
    }else if(weight == "" || weight <0 || isNaN(weight)){
        results.innerHTML = "Not a valid number (NaN)"
        
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
         if(bmi <= 18.6 ){
            results.innerHTML = `You are under Weight ${bmi}`
        }else if(bmi >=18.6 && bmi <= 24.9){
             results.innerHTML = `You are Normal Weight ${bmi}`
         }else{
            results.innerHTML = `you are overweight ${bmi}`
         }
    }
    


})



