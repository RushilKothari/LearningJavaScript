const accountId = 141331094553
let accountEmail = "rushil@gmail.com"
var accountPassword = "JavaScript12345"
accountCity = "Chennai"
let accountState;

// accountId = 2 // not allowed


accountEmail = "learrnjs@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
console.table is very useful as it shows the values of different variables/constants together in a single table,
so we can avoid writing multiple console.log() statements
*/