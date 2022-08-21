// var x = 10; // declaration & initialization

// var x; // declaration
// x = 10; // initialization
// x = 99; // re-initialization/assignment

// scope on var, let,

// VAR ---> block re-initialization
// var z = 100;

// {
//   z = 99; // re-initialization
// }

// console.log(z); // Output: 99


// // LET block re-initialization
// let y = 200;

// {
//   y = 88; // re-initialization
// }

// console.log(y); // Output: 88


// Var --> block re-declaration & re-initialization
var p = 400;

{
  var p = 499;
}

console.log(p); // Output: 499

// Var --> function re-declaration & re-initialization
var q = 300;

function someFunc() {
  var q = 399; // re-declaration

  // all the codes q is 399
}
someFunc();
console.log(q); // Output: 300

// Var --> function re-initialization
var h = 700;

function someFuncTwo() {
  h = 799; // re-initialization
  // h 799
}

// h --> 799
someFuncTwo();
console.log(h); // Output: 799


// let function re-declaration & re-initialization
let j = 20;

function someFuncThree() {
  let j = 35;
}
someFuncThree();
console.log(j); // output: 20

// let function re-initialization
let k = 20;

function someFuncFour() {
  k = 35;
}
someFuncFour();
console.log(k); // output: 35


const obj = {
  name: 'Sanjay',
  age: 40,
};

console.log(obj);

obj.age = 100;

obj['bio'] = {
  height: 100,
  weight: 80
}

console.log(obj);

const arr = [1, 2, 3, 4, 5];

console.log(arr);

arr[3] = '999999';

arr[9] = 1000;

console.log(arr);




