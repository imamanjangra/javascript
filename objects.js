//objects literals 
let mysym = Symbol("air");

let data ={
    myname : "Aman",
    "Full_name" : "AmanJangra",
    [mysym] : "Airplane",
    roll_no : 13,
    class : "Bca",
    sub : "js"
}

console.log(data.roll_no);//1
console.log(data["roll_no"]);//2
console.log(data.Full_name);
console.log(data["Full_name"]);
console.log(data[mysym]);
// console.log(data.mysym);//this is not possible 

data.roll_no = 805;//value change

// Object.freeze(data);

data.roll_no = 803;//value change
console.log(data.roll_no);//not change value because object data is freeze
console.log(data)//full object

data.marks = function(){
    console.log("pass");
}
console.log(`Hello , My name is ${data.Full_name} and i am pursuing ${data.class} , roll no ${data.roll_no}`)
console.log(data.marks());


// +++++++++++++++++++++++++++part-2+++++++++++++++++++++++++++++++++++++++

let car = {}// Empty obeject 
car.color  = "Black";
car.model = 18;
car.name = "BMW";

console.log(car);

let student =  {
    age : 18,
        Myname : {
            fullname : {
                first_name : "Aman",
                last_name : "jangra",
            }
        }
}

console.log(`hello My full name is ${student.Myname.fullname.first_name} ${student.Myname.fullname.last_name}`)

let obj1 = {
    a : 10,
    b : 20,
}

let obj2 = {
    c : 10,
    d : 20
}

let obj3 = {...obj1 , ...obj2};// best way to merge two or more obj same as array merge
console.log(obj3);

let users = [
    {
        u1name : "Aman",
    },
    {
        u2name : "Tarun",
    }
]
console.log(users[0].u1name);

console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))

let u1 = {
    full_name : "Aman",
    college_rollnumber : 13,
}
let {college_rollnumber : roll} = u1;//simple name 
console.log(roll)