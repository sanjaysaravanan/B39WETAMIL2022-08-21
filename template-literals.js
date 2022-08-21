// Template Literals
var name = "Sam", marks = 100;

// Output: Sam scored 100 marks
console.log(name + " scored " + marks + " marks");


// Template Literals string way
console.log(`${name} scored ${marks} marks`);

// Object short hand

// Output: { name: 'Sam', marks: 100 }
console.log({ name: 'Sam', marks: 100 });

const bio = { height: 100, weight: 100 }


// Object short hand
console.log({ name, marks, bio }); // { firstName: "Sam", marks: 100, bio: { height: 100, weight: 100 }}


var name = "Duke";
var color = "Brown";
var age = 5;

// Using Object Literal Enhancement
// Combines all variables into a dog object
var dog = { name, color, age }; // { name: name(Duke), color: color(Brown), age: age(5) }
name = "German";


console.log(dog);