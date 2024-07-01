// JavaScript is a dynamically typed language 

// Primitive Types : Call by Value 
// Seven Main Types : String, Number, Boolean, null, undefined, Symbol

// Non Primitive Types/ Reference Types :  Call by Reference
// Three Types :  Arrays, Objects, Functions

const score = 100
const scoreValue = 100.3 

// Float and int values are both of type Number

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined : You can also write let user = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3 

// Two types of Memory - Stack (Primitive) and Heap (Non-primitive)

/* For every primitive datatype a new copy of a refernce is made for any duplicate.
This does not happen in non primitive datatypes.
*/

let num1 = 20
let num2 = num1
num2 = 10
console.log(num1);
console.log(num2); 
// num1 and num2 will not have same value as they both point to different references

let user1 = {
    id : "user1@google.com",
    upi : "user1@gpay"
}

let user2 = user1

user2.id = "user2@google.com"
console.log(user1.id);
console.log(user2.id); 
// user1.id and user2.id will have to same value as both user1 and user2 point to the same reference