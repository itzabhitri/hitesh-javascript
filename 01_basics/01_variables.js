const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // change in value of a constant variable is not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId)

/*
We don't use var datatype anymore, because it has issue with block scope and functional scope. It does not have any block scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  //creates a table