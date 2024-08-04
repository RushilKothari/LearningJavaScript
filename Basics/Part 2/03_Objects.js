/*
Object is a collection of Key-Value pairs.

3 Ways to define objects - 
Using an Object Literal
Using the new Keyword // Singleton
Using an Object Constructor // Singleton
*/

const mySym = Symbol("key1")

const JsUser = {
    name: "Rush",
    "full name": "Rush k",
    [mySym]: "mykey1",
    age:    21,
    location: "Chennai",
    email: "rush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rush@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.newGreeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.newGreeting());