// Primitive Data types-------------> numbers, strings, booleans, null, undefined,symbols, Bigint
// primitive data types are immutable , hence a new value is created rather the change in original one.

let a = 7
a = 4
console.log(a) 

// Primitive data types in JavaScript are passed by value because they are immutable. When you pass
// a primitive value to a function, a copy of the value is passed, and any modifications made to the
// parameter inside the function do not affect the original value.

let num = 10;
function increment(x) {
    x++ // Increment the value of the parameter
}
let n = increment(num)
console.log(n)


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // Both are different / coz symbol provides unique identity

// Non - primitive ------Array , function , object.

// They are called by reference and any change leads to the change in original value
// Mutable

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}












