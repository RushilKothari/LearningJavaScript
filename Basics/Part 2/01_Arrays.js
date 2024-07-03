// Arrays are used to store a collection of multiple items in a single variable.
// Arrays in JavaScript are resizable 
// Arrays are always 0 indexed unlike strings
// Arrays are non primitive datatypes

const myArr = [0, 1, 2, 3, 4, 5]
const heroArray = ["Iron Man", "Thor", "Hulk", "Spiderman"]
const otherArr = new Array(25, 10, 7, "Rushil", "Football")
// Two common ways of declaring arrays
// Arrays can have both same as well as different datatypes
// console.log(myArr[0]);
// console.log(otherArr)

/*

Imp : JavaScript copy operations create "Shallow copies".

A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, you may also cause the other object to change too. 

A deep copy of an object is a copy whose properties do not share the same references 
(point to the same underlying values) as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, 
you can be assured you're not causing the other object to change too. 

*/

// Common and Important Array Methods

myArr.push(6); // Inserts new element to the array
myArr.push(7);
myArr.pop(); // Removes the last element added to the array
myArr.unshift(8); // Inserts element to the start of the array
myArr.shift(); // Removes element from the start of the array
/*
Note: Unshift shifts all other values to the next index to insert the element at the start,
which makes it slow and inefficient for large arrays. 
*/ 
console.log(myArr.includes(9)); // Returns true if element is present in array, else returns false
console.log(myArr.indexOf(3)); // Returns index at which the value is in the array
console.log(myArr);

const strArray = myArr.join() 
// Adds all the elements of an array into a string, separated by the specified separator string. 
console.log(strArray);
console.log(typeof(strArray));

// Slice and Splice

const myArr1 = [0, 1, 2, 3, 4, 5]
const myArr2 = [0, 1, 2, 3, 4, 5]
const sliceArray = myArr1.slice(1,3)
const spliceArray = myArr2.splice(1,3)
console.log(`Sliced array is ${sliceArray} and original array is ${myArr1}`);
console.log(`Spliced array is ${spliceArray} and original array is ${myArr2}`);

/*
Key Difference - 
Slice goes from range (start,end - 1) and does not change the original array.
Splice goes from range (start,end) and changes the original array
*/
