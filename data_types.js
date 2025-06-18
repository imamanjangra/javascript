
/* types of data types

    1)stack(Primitive)  -> 7types -> use call by value pass a copy of the value not raal value
                                     so the value is not change.
            Types ->  string  , Number , Boolean  , Null , Undefined , symbole  , BigInt

    2) Heap(Reference or Non primitive) -> types 3 -> use call by Reference pass a address of vareables
                                                      so value is change back into program.
             Types->  Array , objects , Function 
*/

// Primitive data types 

let num = 15; // Number 
let str = "Aman" // string
let value = true; // Boolean -> true or false
let data ; // undefined 
let sum = null; //null

console.table([typeof(num) , typeof(str) , typeof(value) , typeof(data) , typeof(sum)]);
// _______________________________________________________________________________________
// Datatype conversion 

//convert into number

// 1) string -> number
change_data = Number(sum);
console.log(typeof(change_data));
console.log(change_data);// value is not a number NaN

//2) boolean -> number
//true = 1
//fale = 0

//3) null ->  number
// value = 0

//4) undefined ->  number
// value = NaN
// ____________________________

// convert into string

//num -> string
let change_data = String(value);
console.log(typeof(change_data));
console.log(change_data);

//null -> string
// value = null

//undefined -> string
// value = undefined

//boolean -> string
// value = true or false

// _________________________________

