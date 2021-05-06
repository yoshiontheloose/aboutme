'use strict';
//console.log('round one fight');

let userName = prompt('Who goes there?! State your name');
if (!userName) {
  userName = 'weary traveler';
}
alert('Welcome, ' + userName + '. To pass you must answer these questions about me!');
//console.log('name of user is', userName);


// Question 1
let waterDrink = prompt('..but first..' + userName + '.. Have you drank water today?');
let lowerCaseWater = waterDrink.toLowerCase();

if (lowerCaseWater === 'yes' || lowerCaseWater === 'y') {
  alert('Staying hydrated, ' + userName + ' . Great! Now let\'s begin.');
}
else if (lowerCaseWater === 'no' || lowerCaseWater === 'n') {
  alert('Time to hydrate yourself!');
}
else {
  alert('water=life');
}
//console.log(lowerCaseWater, userName);


// Question 2
let catQuestion = prompt('Do I have a cat?');
let lowerCaseCat = catQuestion.toLowerCase();

if (lowerCaseCat === 'yes' || lowerCaseCat === 'y') {
  alert('Actually\, ' + userName + ' , I have two cats!');
}
else if (lowerCaseCat === 'no' || lowerCaseCat === 'n') {
  alert('You are sort of correct, I have TWO cats.');
}
//console.log('do I have a cat?', catQuestion, userName,);


//Question 3
let placeQuestion = prompt('Did I grow up in Washington state?');
let lowerCasePlace = placeQuestion.toLowerCase();

if (lowerCasePlace === 'yes' || lowerCasePlace === 'y') {
  alert('BRRRT! Incorrect. Wisconsin is my home state.');
}
else if (lowerCasePlace === 'no' || lowerCasePlace === 'n') {
  alert('Correct,' + userName + '!');
}
//console.log('Did I grow up in WA?', placeQuestion, userName);


// Question 4
let swimQuestion = prompt('Do I know how to swim?');
let lowerCaseSwim = swimQuestion.toLowerCase();

if (lowerCaseSwim === 'yes' || lowerCaseSwim === 'y') {
  alert('Yes, I love swimming! Lakes and rivers especially.' + userName + ', let me know if you have any swim spots!');
}
else if (lowerCaseSwim === 'no' || lowerCaseSwim === 'n') {
  alert('BRRRT! Incorrect. I love swimming in lakes and rivers especially.' + userName + ', let me know if you have any swim spots!');
}
//console.log('Do I know how to swim?', swimQuestion, userName);


//Question 5
let zipQuestion = prompt('Have I ever been on a zip line?');
let lowerCaseZip = zipQuestion.toLowerCase();

if(lowerCaseZip === 'yes' || lowerCaseZip === 'y') {
  alert('Correct. I rode the world\'s longest over water zip line in Haiti.');
}
else if (lowerCaseZip === 'no' || lowerCaseZip === 'n') {
  alert('BRRRT! Incorrect. I rode the world\'s longest over water zip line in Haiti.');
}
//console.log('Have I ever been on a zip line?', zipQuestion);


//Question 6
let skyDive = prompt('Have I ever been skydiving?');
let lowerCaseDive = skyDive.toLowerCase();

if (lowerCaseDive === 'yes' || lowerCaseDive === 'y') {
  alert('Heck NO, that\'s WAY too spooky for me!');
}
else if (lowerCaseDive === 'no' || lowerCaseDive === 'n') {
  alert('Got that right! Skydiving would be WAY spooky for me.');
}
//console.log('Have I ever been skydiving?', skyDive);


// make a list of favorite games. 5 guesses to get the answer.  If user guesses correctly, tell them they are correct and end the chances to guess. incorrect guess let them know in a prompt to guess again.
// check all games in the array. let them know if they match then end guesses. no match tell them they didn't get it and ask them to guess again.

// needs
//list of movies (array)
// a variable set to a number of guesses
// a flag for when they get it right

let favGames = ['halo','minecraft','mortal kombat','rockband','plants vs zombies','borderlands', 'super mario 3'];

let counter = 6;
let rightAnswer = false;
while (rightAnswer === false && counter > 0) {
  alert(counter + 'guesses left');
}


let userGuess = prompt('Guess a videogame that I have been addicted to');
for(let i = 0; i < favGames.length; i++) {
  if (userGuess === favGames[i]) {
    alert('That is correct!');
    rightAnswer = true;
  }
}

if (rightAnswer === false) {
  alert('BRRRRT! Guess again!');
}


/////

//let myNum = 7;

//for (let i = 0; i < 5; i++) {
  //alert('This many guesses left')
//}