/*
*Conditionals, Functions, Scope and Loops.
 */

// === does not compare types
// == ignores types e.g. 1 == '1'
// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.50;
let storeB = 4.40;
let storeAIsLower = storeA < storeB;


// if block controls flow of program

// functions are a way to make if flow into something easily called

function compareStorePrices (storeA, storeB) {
	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}

	console.log(storeAIsLower);
}

// compareStorePrices(10,5);
// compareStorePrices(8,11);

function squareNum (number) {
	return number * number;
}

// simplify the inputs for easy reuse of functions
let squareNumber = squareNum(4);
console.log(squareNumber);

// Functions should generally be no longer that 20 lines of code and only do one thing


//Scope
// the idea that certain values or variables are only accessible within certain levels of your code
// Global, Function, and Block scope ('if' blocks have their own scope)


// 'x' is on the global scope
//let x = 10;

// 'n' and 'm" are on the function scope. no access outside of the function
function addNumbers (n, m) {
	return n + m;
}

// if we define a 'x' in our function it will override the global variable 'x' but only within the function

// check to see if 'n' is on global scope
// console.log(n);


// Arrays
// are a type of data structure, data structures are a way to organize piece of our data
// to create an Array use '[]'

// the keys:    0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];
console.log(ourArray[4]);

// can nest Arrays inside of Arrays
let nestedArray = [1, 2, 3, 4, ['a', 'b', 'c']];
let newArr = nestedArray[4];
console.log(newArr);

// Loops
// a structure much like an 'if' block that repeat sections of code until a condition is met
// different types of loops

// 'for' loop = for(counter; comparison; incrementer) {}
let arrLen = ourArray.length;
for(let i =0; i<arrLen; i++){
	console.log("i is equal to: " + i)
//	console.log(ourArray[i]);
}

// if you put a Loop within a Loop the inner loop will do its loop for every iteration of the outer loop
// this will multiply the amount of processes required to complete the outer loop

// a 'while' loop runs until a conditional is 'false'
let x = 0;
while (x < 10) {
	console.log('Ran');
	x = x + 1
}
// be careful about while loops because they are very easy to make an infinite loop causing your program to crash

