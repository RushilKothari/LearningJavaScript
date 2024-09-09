
/*
Functions is a block of code that can be reused and utlized in other places. It makes code more readable.
It should take some input and return an output where there is some obvious relationship between the input and the output. 
To use a function, you must define it somewhere in the scope from which you wish to call it.
*/

function add(num1, num2) { // num1 and num2 are parameters
    console.log(num1 + num2);
}

add(3, 7); // 3 and 7 are the arguments

function addNum(num1, num2) { // num1 and num2 are parameters
    return num1 + num2;
    // Any statement written after return will never execute
}

let sum = addNum(5, 7); // 5 and 7 are the arguments
console.log(sum);
//console.log(addNum(5, 7));

function loginMessage(username){
    if(!username){ // Same as if(username === undefined)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginMessage("Rush"));

// function loginMessage(username = 'Sam'){ 
//     // We use Sam as a default value for the username in case nothing is provided by user
//     if(!username){ // Same as if(username === undefined)
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// console.log(loginMessage());

/* 
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
providing a way to represent variadic functions in JavaScript.
A variadic function is a function of indefinite arity, i.e., one which accepts a variable number of arguments.
*/

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
// if val1 and val2 are not present, all the arguments get converted to an array using the rest parameter.

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));