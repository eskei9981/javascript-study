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

/*
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
*/

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

// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);




function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
        
    } else {
        console.log(name + ' has already retired.');
    }  
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

//Lecture: Statements and expressions
/*
//Statement
function someFun(par) {
    //code
}

//Expression
var someFun = function(par) {
    //code
}

// Expressions
3 + 4;
var x = 3;

// Statements
if (x === 5) {
    //do something
}
*/


//Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
*/


// Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/


// Lecture: Objects and methods

// v1.0
/*
var john = {
    name: 'john',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/


// v2.0
/*
var john = {
    name: 'john',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/


//Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// while loops

var i = 0;
while (i < names.length) {
    console.log(names[i++]);
}

for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}


for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    
    console.log(i);2
}
*/


//////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [])
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age
5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns a array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with  two different arrays and store the results in two variables: full_1 and full_2

Example input: [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

// My Solution
/*
var yearsBorn = [1969, 1980, 1982, 1958, 2017];
var arr = [];

for (var i = 0; i < yearsBorn.length; i++) {
    arr[i] = 2017 - yearsBorn[i];
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 18) {
        console.log('Full Age.');
        
    } else {
        console.log('Younger than 18.');
    }
}

function printFullAge(years) {
    var arr = [];
    var fullAge = [];
    
    for (var i = 0; i < years.length; i++) {
        arr[i] = 2018 - years[i];
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 18) {
            fullAge[i] = true;
            console.log('Full Age.');
        
        } else {
            fullAge[i] = false;
            console.log('Younger than 18.');
        }
    }
    
    return fullAge;
}


var inputArr_1 = [1999, 2007, 2015, 1923];
var inputArr_2 = [2017, 2000, 1996, 1978];

var full_1 = printFullAge(inputArr_1);
var full_2 = printFullAge(inputArr_2);
*/


// Solution from the video

var years = [2001, 1985, 1994, 2014, 1973];

function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Preson ' + (i + 1) +  ' is ' + ages[i] + ' years old, and is of full age.');
            
            fullAges.push(true);
        
        } else {
            console.log('Preson ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            
            fullAges.push(false);
        }
    }
    
    return fullAges;
}

var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);




























