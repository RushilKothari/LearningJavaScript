// A string is a sequence of characters
const myName = "Rushil"
const repoCount = 17

// console.log(name + repoCount + " Value"); 
// This is not a very good way to typing strings

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);
// String Interpolation

const gameName = new String('Mr-RK')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('-'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Rush    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/Rushil%20Kothari"

console.log(url.replace('%20', '-'))
console.log(url.includes('Rushil'))
console.log(gameName.split('-'));