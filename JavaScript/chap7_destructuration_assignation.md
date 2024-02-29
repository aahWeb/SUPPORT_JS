# Destructuration d'objets :

La destructuration d'objets permet d'extraire des valeurs d'un objet et de les assigner à des variables avec une syntaxe plus concise.

## Exemple 1 :

```js
const person = { name: 'John', age: 30, city: 'New York' };

// Destructuration
const { name, age, city } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(city); // Output: New York
```

## Exemple 2 :

La destructuration peut être utilisée avec des alias pour les noms de variables.

```js
const person = { name: 'John', age: 30, city: 'New York' };

// Destructuration avec alias
const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30
console.log(personCity); // Output: New York
```

## Destructuration de tableaux :

La destructuration de tableaux permet d'extraire des valeurs d'un tableau et de les assigner à des variables.

### Exemple 1 :

```js
const colors = ['red', 'green', 'blue'];

// Destructuration
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue
```

### Exemple 2 :

La destructuration de tableaux peut également être utilisée pour ignorer des éléments indésirables.

```js
const numbers = [1, 2, 3, 4, 5];

// Ignorer le deuxième élément
const [firstNum, , thirdNum, ...restOfNumbers] = numbers;

console.log(firstNum);         // Output: 1
console.log(thirdNum);         // Output: 3
console.log(restOfNumbers);    // Output: [4, 5]
```

### Destructuration des paramètres de fonction :

La destructuration peut être utilisée pour déstructurer les paramètres d'une fonction.

```js
// Fonction avec destructuration des paramètres
function printPersonInfo({ name, age, city }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const person = { name: 'John', age: 30, city: 'New York' };

printPersonInfo(person); // Output: Name: John, Age: 30, City: New York
```

## Assignation avec destructuration :

On peut également utiliser la destructuration dans le cadre de l'assignation de valeurs à des variables.

### Exemple :

```js
// Assignation avec destructuration
let a, b;
({ a, b } = { a: 1, b: 2 });

console.log(a); // Output: 1
console.log(b); // Output: 2
```

La syntaxe `({ a, b } = { a: 1, b: 2 });` est nécessaire ici pour éviter une confusion avec le bloc `{}` comme début d'un bloc de code.

Bien sûr, voici cinq exercices portant sur la destructuration et l'assignation en JavaScript, accompagnés de leurs corrections :

## Exercice 1: Destructuration d'objets

#### 1 
Considérez l'objet suivant :
```js
const student = { name: 'Alice', age: 20, grade: 'A' };
```
Utilisez la destructuration pour extraire les valeurs `name`, `age` et `grade` dans des variables distinctes.


### Destructuration de tableaux

Considérez le tableau suivant :
```js
const fruits = ['apple', 'banana', 'orange'];
```
Utilisez la destructuration pour extraire les valeurs `firstFruit` et `secondFruit`.


### Assignation avec destructuration

Créez deux variables `x` et `y` et utilisez la destructuration pour leur assigner les valeurs `5` et `10`.


### Destructuration dans les paramètres de fonction

Créez une fonction `printPerson` qui prend un objet avec les propriétés `name` et `age`, et imprime le message "Person: [name], Age: [age]".


### Destructuration avec valeurs par défaut

Considérez l'objet suivant :
```js
const config = { apiUrl: 'https://example.com/api', timeout: 5000 };
```
Utilisez la destructuration pour extraire `apiUrl` et `timeout`, avec des valeurs par défaut de `'https://default-api.com'` et `10000` respectivement.
