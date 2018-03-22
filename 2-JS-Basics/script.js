// Lecture:  variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married?  ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married?  ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married?  ' + isMarried + '.');
*/

// Lecture: Operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964


console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/

// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!')
} else {
    console.log(name + ' will hopefully marry soon :)')
}

isMarried = true;

if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if (isMarried) {
    console.log('YES!');
}


if (23 === "23") {
    console.log('Something to print...');
}
*/

// Lecture: boolean logic and switch
/*
var age = 25;

if (age < 20) {
    console.log('John is a teenager');
} else if (age > 20 && age < 30) {
    console.log('John is a young man.')
} else {
    console.log('John is a man.')
}

var job = 'teacher';
job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/

// CODING CHALLENGE 1
/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age with (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both playes with the same score).
4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :) 
*/

var john = 'John';
var ageOfJohn = 15;
var heightOfJohn = 150;
var scoreOfJohn = heightOfJohn + 5 * ageOfJohn;
console.log('scoreOfJohn: ' + scoreOfJohn);

var mark = 'Mark';
var ageOFMark = 5;
var heightOfMark = 100;
var scoreOfMark = heightOfMark + 5 * ageOFMark;
console.log('scoreOfMark: ' + scoreOfMark);

var sophie = 'Sophie';
var ageOfSophie = 23;
var heightOfSophie = 169;
var scoreOfSophie = heightOfSophie + 5 * ageOfSophie;
console.log('scoreOfSophie: ' + scoreOfSophie);


if (scoreOfJohn > scoreOfMark && scoreOfJohn > scoreOfSophie) {
    console.log('John wins.');
    
} else if (scoreOfJohn === scoreOfMark && scoreOfJohn > scoreOfSophie) {
    console.log('John and Mark are winners.');
    
} else if (scoreOfJohn === scoreOfSophie && scoreOfJohn > scoreOfMark){
    console.log('John and Sophie are winners.');
    
} else if (scoreOfMark > scoreOfJohn && scoreOfMark > scoreOfSophie) {
    console.log('Mark wins.');
    
} else if (scoreOfMark === scoreOfSophie && scoreOfMark > scoreOfJohn){
    console.log('Mark and Sophie are winners.');
    
} else if (scoreOfSophie > scoreOfJohn && scoreOfSophie > scoreOfMark) {
    console.log('Sophie wins.');
              
} else {
    console.log('Draw');
}

// SOLUTION
/*
var heightJohn = 172;
var heightMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;


if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
    
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
    
} else {
    console.log('there is a draw.');
}


var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
    
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
    
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
    
} else {
    console.log('It\'s a draw.');
}
*/


















