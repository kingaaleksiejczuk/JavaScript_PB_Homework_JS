// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). 
//Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function 
//is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  
//Closure pattern.

let iife = (function () {
    let var1 = "Lubie jesc";
    let setValue = function () {
        return var1;
    };

    let showValue = function () {
        return !var1;
    };

    let reverseValue = function () {
        if (typeof var1 === "number") {
            return var1 * (-1);
        };
        if (typeof var1 === "string") {
            return var1.split("").reverse().join("");
        };

    };
    return {
        setInnerData: setValue,
        showInnerData: showValue,
        reverseInnerData: reverseValue
    };
})();

console.log(iife);
console.log(iife.setInnerData());
console.log(iife.showInnerData());
console.log(iife.reverseInnerData());


//  Create four function definitions. One for every basic math operations and taking two input parameters. 
// Create one more function. This function is to return calculation object. 
// This object is to have parameters object field that holds two operation parameters inside (x and y) 
// and a function field that points to a function with math operation (defined at the beginning). 
// A function setOperation() that sets the field from previous sentence and a calculate() function that makes calculation and returns its value. 






// 3) Create an array (by hand) of objects and call sum() function in context of each one of them. 
//Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}} 
// Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]

let myArr = [
    {
        x: 2,
        y: 3
    },
    {
        x: -1,
        y: 6
    },
    {
        x: 0,
        y: 8
    },
    {
        x: "Lubie",
        y: " jesc"
    }];

// function sumElements() {
//     console.log(this.x + this.y);
// };

let BaseObject = {
    x: 0, y: 0, sum: function () {
        return this.x + this.y;
    }
}

for (let i = 0; i < myArr.length; i++) {
    console.log(BaseObject.sum.call(myArr[i]));

}

