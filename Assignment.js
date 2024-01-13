//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.

let ages = [3,9,23,64,2,8,28,93];

console.log ("Ages:", ages);

let minusAge = ages[ages.length -1 ] - ages[0];

console.log("minusAge:", minusAge);




//2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average number of letters per name:", averageLetters);

let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i < names.length - 1) { // Add a space after each name except the last one
        concatenatedNames += " ";
    }
}
console.log("Concatenated names:", concatenatedNames);


//3.How do you access the last element of any array?
let numberOfElements = [1, 2, 3, 4, 5];
let lastElement = numberOfElements[numberOfElements.length - 1];



//4.How do you access the first element of any array?
let numbers = [1, 2, 3, 4, 5, 6];
let firstElement = numbers[0];


//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
let sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

// Output results
console.log("Name lengths:", nameLengths);
console.log("Sum of all name lengths:", sum);




//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.


// * Iterate over the nameLengths array and add each element to the sum
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

// Output the total sum
console.log("Sum of all name lengths:", sum);


//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').


function concatenateWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

let repeatedWord = concatenateWord('Hello', 3);
console.log(repeatedWord);




//8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
let fullNames = createFullName("Mary" ,"Johns");
console.log(fullNames);

//9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum  <  100;
}

let sumOfNumbers = isSumGreaterThan100(numbers);
console.log(sumOfNumbers);


//10.Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;


}
    
let allAverage = calculateAverage(numbers);
console.log(allAverage);



//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isFirstArrayAverageGreater(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;

    return avg1 > avg2;
}

let averageFirstElements = isFirstArrayAverageGreater();
console.log(averageFirstElements);



//12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}


let isHotOutside = true; 
let moneyInPocket = 20; 

// Now call the function with the defined variables
let resultBuyDrink = willBuyDrink(isHotOutside, moneyInPocket);

console.log(resultBuyDrink);

//13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.



//
// Function to suggest possible locations where keys might be found.
 // It randomly selects 3 locations from a predefined list of locations.
 //
 //Why this function: Often we misplace items like keys and need suggestions 
 //View  on where to start looking. This function simulates a common scenario of 
 // searching for misplaced keys by suggesting random locations to check.
// *
 //* Returns: Array of 3 random locations to look for keys.
 //*/

function suggestKeyLocations() {
    const possibleLocations = ['under the bed', 'on the kitchen table', 'near the door', 'in the living room', 'in the bathroom', 'in the car', 'in the coat pocket'];
    let suggestedLocations = [];

    // Randomly pick 3 unique locations
    while (suggestedLocations.length < 3) {
        let randomIndex = Math.floor(Math.random() * possibleLocations.length);
        let location = possibleLocations[randomIndex];
        if (!suggestedLocations.includes(location)) {
            suggestedLocations.push(location);
        }
    }

    return suggestedLocations;
}

let locationsToSearch = suggestKeyLocations();
console.log("Check these locations for your keys:", locationsToSearch);

// 




    
