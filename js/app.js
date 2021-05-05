'use strict';

console.log('round one fight');

let userName = prompt('Hey! What is your name?');
//console.log(userName);

alert('Thanks for stopping by, ' + userName);
//console.log('Thanks', userName);

let waterDrink = prompt('Have you drank water today?');
//console.log(waterDrink)

let lowerCaseWater = waterDrink.toLowerCase();
console.log(lowerCaseWater);

if (lowerCaseWater === 'yes' || lowerCaseWater === 'y') {
  alert('Staying hydrated, ' + userName + ' . Great!');
} else if (lowerCaseWater === 'no' || lowerCaseWater === 'n') {
  alert('Time to hydrate yourself, drink water!');
} else {
  alert('Got water?');
}
//console.log(lowerCaseWater, userName);








// DELETE PAST THIS
// let sign = prompt("Welcome! Are you prepared for battle? YES or NO")

//if (sign.toLocaleLowerCase() == "yes") {
//    let confirmation = confirm("are you sure?\nEither OK or Cancel.");
//    if (confirmation == true) {
//        alert("READY")
//    }
//    else {
//        alert("TOO BAD, HERE WE GO")
//    }

//} else if (sign.toLocaleLowerCase() == "no") {
//    alert("TOO BAD, SO SAD")
//} else {
//    alert("YES YOU ARE")


//if (userName == null) {
//  userName = ' weary traveler';
//} else {
//  (userName);
//}