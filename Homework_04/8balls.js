//Object contains number and weight 

const Ball = {

    number: 0,
    weigth: 0

};

// To remember what's going on, I use a lot of comments, sorry 


//const myArr = Array(8).map((_, i) => i);
//console.log(myArr[0]); ok, undefined, not expected that



// some smart article said 'JavaScript arrays are objects, with numbers as keys, 
//When you access the element at index 0 in an array, you’re really just accessing an object property whose key is 0.
//When you create a new array with the Array constructor, it creates a new array object with its length property set 
//to the value you passed in, 
//but otherwise the object is a vacuum. There are no index keys in the object representation of the array whatsoever.'

//ok, so that's just a default behavior in javascript to
//return undefined if I try to access the value of an object for a key that does not exist, 
//there are no index key

//ok, so the solution is to spread out our array into empty array

const myArr = [...Array(8)].map((_, i) => { // _ is not affecting the output of .map. It's the argument you are using to do the calculation that's affecting the output.
    // .map(entry, index) is the syntax when you use two args in a map function.
    let ball = Object.apply(Ball);
    ball.number = i;
    ball.weigth = 10;
    return ball;

});

// now I have 8 balls with equals weight, I need to make one of them heavier

const randBall = Math.floor(Math.random() * 7);
myArr[randBall].weigth = 11;

console.log(myArr); // ok, now one of the random ball have different weigth, jupi

// We slice our array into 3 pieces
const firstPart = myArr.slice(0, 3);
const secondPart = myArr.slice(3, 6);
const thirdPart = myArr.slice(6, 8);

function returnHeavier(firstComparision, secondComparision) {

    // first off all we have to check if our provided date is an array, if not we will put it in the array
    if (!Array.isArray(firstComparision)) {
        firstComparision = [firstComparision];
    }

    if (!Array.isArray(secondComparision)) {
        secondComparision = [secondComparision];
    }


    const firstWeight = firstComparision.reduce((acc, ball) => acc + ball.weigth, 0);
    const secondWeight = secondComparision.reduce((acc, ball) => acc + ball.weigth, 0);
    if (firstWeight > secondWeight) {
        return firstComparision;
    }

    if (firstWeight < secondWeight) {
        return secondComparision;
    }

    if (firstWeight === secondWeight) {
        return null;
    }

}

const firstResult = returnHeavier(firstPart, secondPart);

if (firstResult === null) {
    const secondResult = returnHeavier(thirdPart[0], thirdPart[1]);
    console.log(secondResult);
} else {
    const secondResult = returnHeavier(firstPart[0], firstPart[1]);
    if (secondResult) {
        console.log(secondResult);
    } else {
        console.log(firstResult);
    }
}