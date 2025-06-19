let mydate = new Date();

console.log(mydate);
console.log(mydate.toString());
console.log(typeof mydate);


console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleString());


let new_data = new Date(2023 , 0 , 23);// array syntax
new_data = new Date(2023 , 0 , 12 , 2 , 3);
new_data = new Date("2005-12-12");// yy/mm/dd
new_data = new Date("12-12-2005");// dd/mm/yy

console.log(new_data.toLocaleString());

let time_stamp = Date.now();
console.log(time_stamp);
console.log(new_data.getTime());

console.log(Math.floor(Date.now()/1000));

let newdata = new Date();
console.log(newdata.getTime());
console.log(newdata.getMonth());