const marvelHeroes = ["Iron Man", "Thor", "Hulk", "Spiderman"]
const dcHeroes = ["Batman", "Superman", "Flash"]

// Push returns the same array
// marvelHeroes.push(dcHeroes) 
// console.log(marvelHeroes); // ['Iron Man', 'Thor', 'Hulk', 'Spiderman',[ 'Batman', 'Superman', 'Flash' ]]
// console.log(marvelHeroes[4]); // [ 'Batman', 'Superman', 'Flash' ]

/*
When we use push() to insert one array onto another, 
we need to keep in mind that it will add the array together in the same index,
rather than keeping those elements separate
*/

// Concat returns a new array and adds elemetns of both arrays separately
// allHeroes = marvelHeroes.concat(dcHeroes) 
// console.log(allHeroes); // ['Iron Man', 'Thor', 'Hulk', 'Spiderman',[ 'Batman', 'Superman', 'Flash' ]]
// console.log(allHeroes[4])
 
// Spread function in Array (...)
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes);

/*
The flat() method of Array instances creates a new array
with all sub-array elements concatenated into it recursively up to the specified depth.
*/ 
const numArrays = [1, 2, 3, [4, 5], 6, [7, 8 , [9, 10]]];
console.log(numArrays.flat(1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
console.log(numArrays.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Array.isArray("Rush")); // Checks if variable/data is an array
console.log(Array.from("Rush")); // Converts each character of string as element of array
a = 100
b = 200
c = 300
console.log(Array.of(a, b. c)); // Combines variables/objects/data together to form an array
console.log(Array.from({name: "Rush"})); // Returns empty [] in this case as it is not able to convert object/data into array

