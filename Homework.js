// 1)   From years in array check for leap years [1974, 1900, 1985, 2000]
// 2)   Calculate factorial of 7.
// 3)   Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
// 4)   Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
// 5)   Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

// 6)   Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98].

// 7)   Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// 8)   Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// 9)   With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]


//exercise 1
let years = [1974, 1900, 1985, 2000];
let year;

for(let i = 0; i <= years.length; i++){
    year = years[i];
    if((year % 100 === 0 || year % 4 === 0) && year % 400 !== 0){
        console.log(year);
    }
}

// exercise 2
let n = 7;
let summary = 1
while( n > 0 ){
    summary = summary * n;
    n--;
    console.log(summary);
}

// exercise 3
let odd = [1,6,23,8,4,98,3,7,3,98,4,98];
let oddNumbers;

for(let i = 0; i < odd.length; i++){
    oddNumbers = odd[i];
    // console.log(oddNumbers)
    if(oddNumbers % 2 != 0){
        console.log(oddNumbers)
    }
}

// exercise 4

let numbers = [5,6,23,8,4,98,3,7,3,98,4,98];
let max = numbers[0];
let min = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= max){
        max = numbers[i];
    }
}
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] <= min){
        min = numbers[i];
    }
}
console.log("Max = " + max + "," + "lowest = " + min);

// exercise 5 

let array = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];
let longh = 0;
let longest;
for(let i = 0; i < array.length; i++){
    if(array[i].length > longh){
        longh = array[i].length;
        longest = array[i];
    }
}
console.log(longest);

//exercise 6

let arrayx = [1,6,23,8,4,98,3,7,3,98,4,98];
let maximum = arrayx[0];
let maxIndex = 0;
for (let i = 0; i < arrayx.length; i++){
    if(maximum < arrayx[i]){
        maximum = arrayx[i]
        maxIndex = i;
    }
}
console.log(maxIndex);

//exercise 7

let arrayA = [1,6,23,8,4,98,3,7,3,98,4,98];
let evenNumber = 0;
let averageEven = 0;
let count = 0;

for(let i = 0; i < arrayA.length; i++){
    if(arrayA[i] % 2 ===  0){
        evenNumber += arrayA[i];
        count++;
    }
}
averageEven = (evenNumber/count);
console.log(averageEven);

//exercise 8
let arrayB = [1,6,23,8,4,98,3,7,3,98,4,98];
let even = 0;

for(let i = 0; i < arrayB.length; i++){
    if(i % 2 === 0 && i !== 0){
        even += arrayB[i];
    }
}
console.log(even)


//exercise 9 
//nie jestem pewna czy o to chodziło ? 

let substract = 0;
let result = 0;

let arrayC = [1,6,23,8,4,98,3,7,3,98,4,98];
for(let i = 0; i < arrayC.length; i++){
    if(arrayC[i] % 2 === 0){
        result += arrayC[i]
    }else{
        result -= arrayC[i];
    }
}
console.log(result);