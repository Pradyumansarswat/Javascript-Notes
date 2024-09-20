const accountId = 1234
let accountEmail = "pradyuan@gmail.com"
var accountPassword = "1234567890"
accountCity = "jaipur"

let accountState; //undefined

// accountId = 2 // not allowed

accountEmail = "sarswat@gmail.com"

accountPassword = "0987654321"

accountCity = "Bikaner"

// Prefer not to use var because of issue in block scope and functional  scope 


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
