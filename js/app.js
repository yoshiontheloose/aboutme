'use strict';
//console.log('round one fight');

let userName = prompt('Who goes there?! State your name');
if (!userName) {
  userName = 'weary traveler';
}
alert('Welcome, ' + userName + '. To pass you must answer these questions about me!');
//console.log('name of user is', userName);


// Question 1
function questionOne() {
  let waterDrink = prompt('..but first..' + userName + '.. Have you drank water today?');

  waterDrink = waterDrink.toLowerCase();

  if (waterDrink === 'yes' || waterDrink === 'y') {
    alert('Staying hydrated, ' + userName + ' . Great! Now let\'s begin.');
  }
  else if (waterDrink === 'no' || waterDrink === 'n') {
    alert('Time to hydrate yourself!');
  }
  else {
    alert('water=life');
  }
}
//console.log(lowerCaseWater, userName);
// Question 2

function questionTwo() {
  let catQuestion = prompt('Do I have a cat?');
  catQuestion = catQuestion.toLowerCase();

  if (catQuestion === 'yes' || catQuestion === 'y') {
    alert('Actually ,' + userName + ' , I have two cats!');
    return true;
  }
  else if (catQuestion === 'no' || catQuestion === 'n') {
    alert('You are sort of correct, I have TWO cats.');
    return false;
  }
}

//console.log('do I have a cat?', catQuestion, userName,);


//Question 3
function questionThree() {
  let placeQuestion = prompt('Did I grow up in Washington state?');
  placeQuestion = placeQuestion.toLowerCase();

  if (placeQuestion === 'yes' || placeQuestion === 'y') {
    alert('BRRRT! Incorrect. Wisconsin is my home state.');
  }
  else if (placeQuestion === 'no' || placeQuestion === 'n') {
    alert('Correct,' + userName + '! I am from Wisconsin.');
  }
}
//console.log('Did I grow up in WA?', placeQuestion, userName);


// Question 4
let swimQuestion = prompt('Do I know how to swim?');
swimQuestion = swimQuestion.toLowerCase();

if (swimQuestion== 'yes' || swimQuestion === 'y') {
  alert('Yes, I love swimming! Lakes and rivers especially.' + userName + ', let me know if you have any swim spots!');
}
else if (swimQuestion === 'no' || swimQuestion === 'n') {
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


//Question 7 - favorite number, 6 guesses

let favNum = 7;

for (let i = 0; i < 6; i++) {
  alert('This many guesses left' + (6-i));
  let numGuessString = prompt('What is my favorite number?');
  let numGuess = parseInt(numGuessString);
  if (numGuess === favNum ) {
    alert('That is correct!');
    break;
  }
  // check if numguess and favnum are the same, if same, correct. stop loop, with break.
  else if (numGuess > favNum) {
    alert('Too High! Try again!');
  }
  else if (numGuess < favNum) {
    alert ('BRRRT! Too low! Try again!');
  }
}
// make a list of favorite games. 6 guesses to get the answer.  If user guesses correctly, tell them they are correct and end the chances to guess. incorrect guess let them know in a prompt to guess again.
// check all games in the array. let them know if they match then end guesses. no match tell them they didn't get it and ask them to guess again.

let favGames = ['halo','minecraft','mortal kombat','rockband','plants vs zombies','borderlands', 'super mario 3'];

let counter = 6;
let rightAnswer = false;
while (rightAnswer === false && counter > 0) {
  alert(counter + ' guesses left');
  let userGuess = prompt('Guess a videogame that I have been addicted to');
  for (let i = 0; i < favGames.length; i++) {
    if (userGuess === favGames[i]) {
      alert('That is correct!');
      rightAnswer = true;
    }
  }
  if (rightAnswer === false) {
    alert('BRRRRT! Guess again!');
  }
  counter --;
}

/// As a user, I would like to know my final score so that I can know how well I did.
//Keep track of the total number of correct answers.
//At the end tell them how many they got correct out of the 7 questions asked.
