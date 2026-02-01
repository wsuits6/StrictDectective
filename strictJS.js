// Use strict act like a detetive that yells at you when you dont follow correct JS code rules  like;
// Not Dclaring variables
//====================

"use strict"

//have to declare X as a const varible because of use strict statment
const x = 10; // ==> 
console.log(x);

function test() {
  y = 20;
}
test();
console.log(y);
