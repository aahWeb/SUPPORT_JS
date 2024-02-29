
// 1
const student = { name: 'Alice', age: 20, grade: 'A' };

// Destructuration
const { name, age, grade } = student;

console.log(name);  // Output: Alice
console.log(age);   // Output: 20
console.log(grade); // Output: A

// 2
const fruits = ['apple', 'banana', 'orange'];

// Destructuration
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);  // Output: apple
console.log(secondFruit); // Output: banana

// 3
// Assignation avec destructuration
let x, y;
({ x, y } = { x: 5, y: 10 });

console.log(x); // Output: 5
console.log(y); // Output: 10

// 4

// Fonction avec destructuration dans les paramètres
function printPerson({ name, age }) {
    console.log(`Person: ${name}, Age: ${age}`);
}

const person = { name: 'Bob', age: 25 };
printPerson(person); // Output: Person: Bob, Age: 25

// 5

const config = { apiUrl: 'https://example.com/api', timeout: 5000 };

// Destructuration avec valeurs par défaut
const { apiUrl = 'https://default-api.com', timeout = 10000 } = config;

console.log(apiUrl);   // Output: https://example.com/api
console.log(timeout);  // Output: 5000
