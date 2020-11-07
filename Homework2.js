// ARRAY: [1,6,23,8,4,8,3,7]

// 1)   Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// 2)   Create a function that returns sum of first and last elements of given array.
// 3)   Create a function that takes a number and return factorial of that number.
// 4)   Create a function that returns given array in reverse order. // no build in functions  
// 5)   Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// 6)   For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// 7)   Create a function the return one random element from given array. // use random function 
// 8)   Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
// 9)   Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
// 10)  Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// 11)  Create a function that will return the current day name in Polish. 
// 12)  Create a function that tells us how many days till Friday 
// 13)  Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 


//exercise 1

let array = [1,6,23,8,4,8,3,7]

// function sumArrayElements (parameters) {

//     let sum = 0; 
//     for(let i = 0; i < parameters.length; i++){
//         sum += parameters[i];
//     }
//     return sum;
// }

// console.log(sumArrayElements(array));


//exercise 2

// function sumOfFirstAndLast (parameters){
//     let sum = 0;
//     let indexOfLast = parameters.length - 1;

//     for(let i = 0; i < parameters.length; i++){
//         sum = parameters[0] + indexOfLast;
//     }
//     return sum;
// }
// console.log(sumOfFirstAndLast(array));


//exercise 3

// function factorialOfNumber(number){
//     let num = 1;

//     while(number > 0){
//         num *= number;
//         number--;
//     }
//     return num;
// }
// console.log(factorialOfNumber(4));


//exercise 4

// function reverseArray(parameter){
//     let newArray = [];
//     for(let i = parameter.length - 1; i >= 0; i--){
//         newArray.push(parameter[i]);
//     }
//     return newArray;
// }
// console.log(reverseArray(array));

//exercise 5

// function newArrayPattern(parameters){

//     let newArrayA = [];

//     for(let i = 0; i < parameters.length; i = i+2){
//         newArrayA.push(parameters[i] + parameters[i+1]);
//     }
//     return newArrayA;
// }
// console.log(newArrayPattern(array));

//exercise 6

// function arrayPattern(parameters){

//     let newArray = [];

//     for(let i = 0; i < parameters.length; i = i+2){
//         if(i === parameters.length -1){
//             newArray.push(parameters[i] + parameters[i]);
//         }else{
//             newArray.push(parameters[i] + parameters[i+1]);
//         }
//     }
//     return newArray;
// }
// console.log(arrayPattern(array));

// exercise 7

// function returnRandom(parameters){

//     let randomElement = Math.floor(Math.random() * parameters.length);
//     return randomElement;
// }
// console.log(returnRandom(array))

//exercise 8

function randomNumberArray(arrayX, attemptsNumber) {
    
    let arrayRandomElements = [];
    
    for (let i = 0; i < attemptsNumber; i++){
        arrayRandomElements[i] = returnRandom(arrayX);
    }
    return arrayRandomElements;
}

function returnRandom(parameters){

    let randomElement = Math.floor(Math.random() * parameters.length);
    return randomElement;
}
console.log(returnRandom(array))

function lowestElementFromArray(someArray){

    let lowestNumb = someArray[0];

    for (let i = 0; i < someArray.length; i++){
        if (someArray[i] < lowestNumb) {
            lowestNumb = someArray[i]
        }
    }
    return lowestNumb;
}
let newArray = randomNumberArray(array,4);
        
console.log(newArray);
console.log(lowestElementFromArray(newArray));



//exercise 13

// let simpleCalculator = function (a, b) {

//     let calculator = {
        
//         sum: a + b,
//         sub: a - b,
//         multiply: a * b,
//         divide: a / b
//     };

//     return calculator;
// }
// console.log(simpleCalculator(7, 5));