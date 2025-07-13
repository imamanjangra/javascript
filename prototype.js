let super_hero = ["thore" , "spiderman"];

let hero_power = {
    thore : "thunder",
    spiderman : "spider",
    getspiderpower : function(){
        console.log("power of super");
    }
}

Object.prototype.Aman = function(){
    console.log("it can be present in all object ");
}
hero_power.Aman();
super_hero.Aman();

Array.prototype.only_for_array = function(){
    console.log("this is super hero");
    
}

super_hero.only_for_array();
// hero_power.only_for_array();----> give error because prototype is apply is only on array 

// task 

let anotherUsername = "Aman   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Anuj".trueLength()
"icecream".trueLength()

// inheritance

let student_id = {
    roll : 12,
}
let data = {
    Name : "Aman",
}

Object.setPrototypeOf(student_id , data);

