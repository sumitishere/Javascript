// Declare Once and can't be changed again - Constant
// Can be changed in future - variable
const accountId = 56;
let accountEmail = "sumit@gmail.com"
var accountPassword = "12345"
accountCity = "Anuppur"
let accountState;



//{
// js scope were not used in intial days no problems when let were used 
//}
// accoundId = 2; can't change as const keyword is there
console.log(accountId)

/*
  Prefer not to use var
  becuase of issue in block scope and functional scope
*/

accountEmail = "sumit@hotmail.com"
console.log(accountEmail)

accountPassword = "123456"
console.log(accountPassword)

accountCity = "Jaipur"
console.log(accountCity)

// a table will be created where we can output our multiple variables simultaneously
console.table([accountEmail, accountPassword, accountCity, accountState]);

