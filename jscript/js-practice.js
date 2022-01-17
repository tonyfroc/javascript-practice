// console.log(9 / 2);

// var myNumber = 45; // For me this is returning a number in console while it says it should be "undefined"?

// console.log(myNumber);

// var thisIsALongNumber;

// myNumber = myNumber + 5;

// myNumber += 5;

// console.log(myNumber);

// myNumber + 5;
// console.log(myNumber);
// myNumber = myNumber + 5;
// console.log(myNumber);

// var num1 = 1;
// var num2 = 2;
// var num3 = num1 + num2;

// console.log(num3);

///                   LET Variable

// let myNumber = 45;
// myNumber = myNumber + 5;
// console.log(myNumber);

///                   CONST variable

// const myNumber = 45;
// myNumber = myNumber + 5; // This line results in an error - a constant variable has already been assigned.

// const thisIsAConstant; // Error missing initializer

// const myNumber = 45;
// const myNewNumber = myNumber + 5;
// console.log(myNewNumber);

// var myNumber = 1;
// var myNumber = 2;
// let myNumber = 3;
// const myNumber = 4;

// console.log(myNumber);

// myNumber = 10;
// console.log(myNumber);
// myNumber = 12;
// console.log(myNumber);

// console.log(myNumber + 10);

// CODE PRACTICE

// const someName = `Anthony`;
// console.log(someName);

// const favoriteNumber = 12;
// console.log(favoriteNumber / 2);
// let michaelsFavorite = 13;
// michaelsFavorite = 7;
// console.log(michaelsFavorite - favoriteNumber);
// michaelsFavorite *= 26;
// console.log(michaelsFavorite);

// console.log("Hello world!");
// // console.log(Hello World);

// const myString = `Strings can contain characters like @, $ and %.`;
// console.log(myString);

// console.log(`"Programming is fun! ${myString}", she exclaimed.`);

// console.log(`Hey Madeline! What's up?!`);
// const hannahGreeting = `Hey Madeline!`;
// console.log(hannahGreeting);
// console.log(9+5);
// console.log(`9`+ 5);

// const daveGreeting = `What's up Dave`;
// console.log(daveGreeting);

// console.log(9);
// console.log(`9`);

//                          METHODS

// const string = `Hi i'm Tony.`;
// console.log(string.toUpperCase());

// console.log(string.concat(` I am from New York!`));

// function addEmphasis(string) {
//   return string.toUpperCase().concat(`!!!`);
// }

// console.log(addEmphasis("I hate pandemics"));

// let stringVariable = `hi!`
// console.log(stringVariable.toUpperCase());

// console.log(addEmphasis(stringVariable));

// // A parameter is a placeholder for an argument. We use parameters when we declare functions and methods. We'll learn more about declaring functions when we actually start creating our own custom functions soon.

// // An argument is the value that is passed into a parameter. Since we'll be working with variables a lot, we'll often pass variables into parameters as arguments. We can also pass other data types into parameters as well, but it's much more common to pass in variables.

// const multString = `hi`.concat(` there`);
// console.log(multString);
// const greeting = `hey`.concat(` there`, ` friend`, `!`);
// console.log(greeting);

// console.log("supercalifragilisticexpialidocious".toUpperCase());

// console.log("Hellcat".indexOf(`cat`));

//                      String Methods Practice

// const stringOne = `I love coffee, `;

// const stringTwo = ` BUT I NEED TO DRINK MORE WATER.`;

// console.log(stringOne.concat(stringTwo));
// console.log(stringOne + stringTwo);
// console.log(stringOne.toUpperCase().charAt(2) + stringTwo.toLowerCase().charAt(2));

// function weightInKg(weight) { // weight in lbs
//   const weightKg = (weight / 2.2046).toFixed();
//   return Number(weightKg);
// }

// console.log(weightInKg(180));
// console.log(typeof(weightInKg(180)));

// console.log((weightInKg(180).toFixed()));
// console.log(typeof(weightInKg(180)));

// const nameHannah = `Hannah`;
// const repeatName = nameHannah.repeat();
// console.log(repeatName);
// console.log(nameHannah.toLowerCase().repeat(3));

// const nameHannahPart = nameHannah.slice(3);
// console.log(nameHannahPart);
// console.log(nameHannah.slice(3,6));
// console.log(nameHannah.replace(`H`, `h`));
// console.log(nameHannah.replaceAll(`n`, `w`));
// console.log(nameHannah.startsWith(`q`));

// const numbers = [1, 2, 3]
// console.log(numbers.reverse());

// isPalindrome function with string parameter and .reverse string

// const hey = `hey`
// console.log(hey.reverse());

// Assignment Operators

// let myNumber = 5;
// console.log(myNumber += 1);
// console.log(myNumber);

// let testNumber = 10;
// console.log(testNumber += 5);

// testNumber -= 9;
// console.log(testNumber);

// testNumber *= 3;
// console.log(testNumber);

// testNumber /= 2;
// console.log(testNumber);

// const myNumber = 5;
// console.log(myNumber < 10);
// console.log(myNumber > 10);

// console.log(myNumber === 10);
// console.log(myNumber === 5);

// const greeting = `hello world`;
// console.log(greeting === `hello world`);
// console.log(greeting === "hello world");
// console.log(greeting === 'goodbye');

// let myNumber = 5;
// console.log(myNumber === 5);

// myNumber === 10;
// console.log(myNumber);

// myNumber = 10;
// console.log(myNumber === 10);
// console.log(myNumber === 5);

// let hello = `hello`
// let goodbye = `goodbye`
// console.log(hello + goodbye);
// console.log(hello);
// console.log(`---BREAK---`);
// console.log(hello += goodbye);
// console.log(hello);

//                DATA TYPES

// let num1 = 19;
// let num2 = 29;

// console.log(num1 > num2);

// num1 += 21;

// console.log(num1 > num2);

// console.log(num1);
// console.log(num1 <= 50);
// console.log(num1 >= 50);
// console.log(num1 !== 50);

// console.log(3.147.toFixed(2));

// const inputtedAge = "29";
// console.log(inputtedAge);

// const myAge = parseInt(inputtedAge)
// console.log(typeof myAge);

// const myName = `Tony`;
// const nonsense = parseInt(myName)
// console.log(typeof(nonsense));

// const myNumber = 42;
// console.log(typeof(myNumber));
// const convertedNumber = myNumber.toString();
// console.log(typeof(convertedNumber));

// const favNum = 12.5;
// console.log(favNum);
// const favNumString = favNum.toString();
// console.log(favNumString);
// const favNumAgain = parseFloat(favNumString);
// console.log(favNumAgain);
//console.log(favNum === favNumAgain);
//console.log(favNumString === favNumAgain);

//                      BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

// 1. BMI (weight (lb) / [height (in)]^2 x 703)
// 2. Weight/Height? How should the user enter this information? Which units?
// 3. Maintenance calories/day for that weight
// 4. How many calories should we cut per day to lose/gain weight? Do/can we factor in activity level?
// 5. 500 cal/day or 1000 cal/day x 7 = 1lbs per week

// BMR Formula
// Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
// Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
//  Sedentary = BMR x 1.2 (little or no exercise, desk job)
//  Lightly active = BMR x 1.375 (light exercise/ sports 1-3 days/week)
//  Moderately active = BMR x 1.55 (moderate exercise/ sports 6-7 days/week)
//  Very active = BMR x 1.725 (hard exercise every day, or exercising 2 xs/day)
//  Extra active = BMR x 1.9 (hard exercise 2 or more times per day, or training for
//  marathon, or triathlon, etc.
