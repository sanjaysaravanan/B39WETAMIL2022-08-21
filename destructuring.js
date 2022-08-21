// Array

const arr = [1, 2, 3, 4, 5];

// create a varaible a with value as index 0 value

// Usual Syntax for new variable
// let a = arr[0];
// console.log(a)
// // destructuring
// let [a1, , , c] = arr;
// //  [1, 2, 3, 4, 5]
// console.log(a1);


const arrOfArr = [1, [2, 3, 4], 5, [6, 7, 8], 9];
// console.log(arrOfArr[1][1]);


const [a, [, x, y], c, d] = arrOfArr;
//    [1, [2,3,4], 5, [6,7,8], 9] 


// console.log(x, y);

// Object --> order is considered only key is considered
var resume = {
  name: "Sanjay",
  age: 30,
  dob: "YYYY-MM-DD",
  bio: {
    height: 188,
    weight: 90,
  },
  skills: ["JS", "Python"],
  projects: [
    {
      name: "RC Toy Car",
      langs: ["Python", "ARM"],
    },
    {
      name: "DIP",
      langs: ["Python"],
    },
  ],
};
//print name and age
// Usual way

console.log(resume.name, resume.age); // or console.log(resume['name'], resume['age'])


// destructure name, age
const { name, age } = resume;
console.log(name, age);
// new vars height & weight
const { bio: { weight, height } } = resume;
console.log(height, weight);

// to new varaible w, h
const { bio: { weight: w, height: h, } } = resume;
console.log(h, w);

// Second skill as a variable
const { skills: [, secondSkill] } = resume;
//    { skills: ["JS", "Pythom"] }
console.log(secondSkill);

// Projects Object
const { projects: [projOne, projTwo] } = resume;
//    { projects: [{ name: 'Toy' }, {name: 'DIP'}] }
console.log(projOne, projTwo);


// Second Project Name
const { projects: [, { name: projTwoName }] } = resume;

//    { projects: [, { name: 'DIP' }] }
console.log(projTwoName);



// Rest 
const stuObj = {
  firstName: 'Sam',
  lastName: 'Danny',
  rollNo: 21,
  class: 9,
  school: 'xxx'
};

const { firstName, rollNo, ...restProps } = stuObj; // rest operator in obj accumulates rest props as obj
console.log(firstName, rollNo, restProps);

// Array
const arrTwo = [5, 4, 3, 2, 1];

const [j, , i, ...restElements] = arrTwo;
console.log(j, i, restElements);


// Spread
const arrThree = [10, 20, 40, 60];

// new array with [10, 20, 40, 60, 80, 90, 110];

const arrFour = [...arrThree, 80, 90, 110];
console.log(arrFour);
// new array with [80, 90, 110, 10, 20, 40, 60,];
const arrFive = [80, 90, 110, ...arrThree];
console.log(arrFive);


// Obj spread
const objTwo = {
  firstName: "Sam",
  department: 'ECE',
  year: 'IV',
};

// new obj along with mark: 89, section: B and objTwo
const objThree = {
  ...objTwo,
  mark: 89,
  section: "B",
}

console.log(objThree);











