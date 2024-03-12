# Plan de cours général

Notez que la première partie du cours, Introduction : Portée des variables, Variables et Blocs, TDZ, portée globale et locale, ainsi que const, est facultative. Assurez-vous que les élèves maîtrisent bien ces notions avant de passer aux chapitres suivants, sans négliger cette partie.

La partie TypeScript est plus importante.

## JavaScript

## Plan du Cours sur la Portée en JavaScript

1. **Introduction**
    - Définition de la portée des variables
    - Importance de comprendre la portée pour écrire un code robuste

2. **Portée des Variables**
    - Recherche des variables dans le scope courant
    - Remontée des scopes en cas de non-définition
    - Erreur `ReferenceError` en cas de non-définition

3. **Variables et Blocs**
    - Comprendre la portée de `var` et son utilisation obsolète
    - Introduction de `let` et `const` pour la portée de bloc

4. **Temporal Dead Zone (TDZ)**
    - Période entre le début d'une portée et la déclaration effective d'une variable
    - Accès à une variable pendant la TDZ provoque une `ReferenceError`

5. **Portée Globale et Locale**
    - Portée globale : accessibilité partout dans le code
    - Portée locale (fonction) : accessible uniquement à l'intérieur de la fonction

6. **Utilisation de `const` pour les Constantes**
    - Définir une constante avec `const`
    - Immutabilité des constantes

7. **Conclusion**
    - Importance de la compréhension
  
## Plan sur les Fonctions en JavaScript

### Introduction
- Les fonctions sont fondamentales en JavaScript pour structurer le code, encapsuler la logique et créer des blocs réutilisables.

### Fonctions Nomées et Expressions de Fonction

1. **Fonctions Nomées**
   - Déclarées avec un nom spécifié lors de la déclaration.
   - Peuvent être utilisées avant leur déclaration.

2. **Expressions de Fonction**
   - Assignées à une variable ou à une propriété d'objet.
   - Peuvent être anonymes ou nommées.

### Fonctions Fléchées
1. **Syntaxe de Base**
   - Syntaxe concise pour les fonctions.

2. **Utilisation avec un seul Paramètre**
   - Parenthèses optionnelles si la fonction prend un seul paramètre.

3. **Utilisation avec `this`**
   - Pas de `this` propre, hérite du `this` du contexte.

4. **Avantages**
   - Syntaxe concise et `this` lexical.

### Hoisting avec les Fonctions
1. **Hoisting avec les Fonctions Nomées**
   - Déclarations de fonctions sont déplacées vers le haut.

2. **Hoisting avec les Expressions de Fonction**
   - Dépend de la manière dont la variable est déclarée.

3. **Hoisting avec les Fonctions Fléchées**
   - Ne sont pas hoistées comme les fonctions nommées.

## Plan sur les Closures en JavaScript

### 1. Introduction
   - Définition des Closures
   - Importance dans JavaScript
   
### 2. Création de Closures
   - Mécanisme de création
   - Utilisation du constructeur `Promise`
   
### 3. Utilisation des Closures
   - Encapsulation
   - Création de fonctions partielles
   
### 4. Gestion de la Mémoire
   - Impact sur la collecte des déchets
   
### 5. Exercices Pratiques
   - Closure Basique
   - Counter Closure
   - Task Closure
   - Cache Closure

### 6. Conclusion
   - Récapitulation des points clés
   - Importance de la compréhension des Closures en programmation JavaScript.
  
## Plan sur les Objets et Prototypes en JavaScript

### 1. Fonction Constructeur
   - Définition et rôle des fonctions constructeurs.
   - Création d'objets à l'aide de fonctions constructeurs.
   - Exemple de fonction constructeur pour la création d'objets `Person`.

### 2. Effet de Bord
   - Compréhension de l'effet de bord lié à l'utilisation du mot-clé `this` dans une fonction constructeur.
   - Risques associés et solutions, comme l'utilisation de `bind` ou de fonctions fléchées.

### 3. Introduction à la Notion de Prototype
   - Explication du concept de prototype.
   - Utilisation de la propriété `__proto__` pour pointer vers le prototype d'un objet.
   - Partage des méthodes entre objets grâce aux prototypes.

### 4. Exercice Prototype Average
   - Création d'une fonction constructeur `User` avec propriétés et méthodes.
   - Utilisation de la notion de prototype pour partager la méthode `calculateAverage`.
   - Application de la méthode sur plusieurs instances de `User`.

## Plan du Cours sur la Destructuration d'Objets et de Tableaux en JavaScript

## 1. Introduction à la Destructuration
   - Définition de la destructuration.
   - Objectif : Extraire des valeurs d'objets et de tableaux de manière concise.

## 2. Destructuration d'Objets
   ### Exemple 1
   - Syntaxe de base de la destructuration d'objets.
   - Utilisation pour extraire des propriétés d'un objet.
   ### Exemple 2
   - Utilisation d'alias lors de la destructuration d'objets.
   - Renommer des variables pendant la destructuration.

## 3. Destructuration de Tableaux
   ### Exemple 1
   - Syntaxe de base de la destructuration de tableaux.
   - Extraire des éléments individuels d'un tableau.
   ### Exemple 2
   - Ignorer des éléments indésirables lors de la destructuration.
   - Utilisation de la syntaxe `...` pour rassembler les éléments restants.

## 4. Destructuration des Paramètres de Fonction
   - Utilisation de la destructuration pour déstructurer les paramètres d'une fonction.
   - Exemple avec une fonction `printPersonInfo`.

## 5. Assignation avec Destructuration
   - Utilisation de la destructuration dans le cadre de l'assignation de valeurs à des variables.
   - Exemple avec les variables `a` et `b`.

## 6. Exercices
   ### Exercice 1: Destructuration d'Objets
   - Extraire les valeurs `name`, `age`, et `grade` d'un objet `student`.
   ### Exercice 2: Destructuration de Tableaux
   - Extraire les valeurs `firstFruit` et `secondFruit` d'un tableau `fruits`.
   ### Exercice 3: Assignation avec Destructuration
   - Créer les variables `x` et `y` et leur assigner les valeurs `5` et `10`.
   ### Exercice 4: Destructuration dans les Paramètres de Fonction
   - Créer une fonction `printPerson` qui imprime les informations d'une personne.
   ### Exercice 5: Destructuration avec Valeurs par Défaut
   - Extraire `apiUrl` et `timeout` d'un objet `config` avec des valeurs par défaut.

Bien sûr, voici un sommaire plus clair pour votre cours sur l'asynchrone en JavaScript :

## Plan du Cours Cours sur l'Asynchrone en JavaScript

## 1. Introduction au JavaScript Asynchrone
   A. Définition des opérations asynchrones
   B. Importance dans le développement web

## 2. Concepts Clés
   A. Callback
   B. Promesses (Promises)
   C. Async/Await

## 3. Exemples
   A. Callbacks
   B. Promesses
   C. Async/Await

## 4. Exercices
   A. Exercice 1: Utilisation de Callbacks
   B. Exercice 2: Conversion en Promesses
   C. Exercice 3: Utilisation d'Async/Await
   D. Exercice 4: Simulation d'une API
   E. Exercice 5: Travaux Pratiques Avancés
   F. Exercice 6: Concaténation Asynchrone

## Plan de cours sur l'assignation / destructuration

## 1. Introduction à la Destructuration d'Objets
   A. Définition de la destructuration d'objets
   B. Avantages et utilité dans le code

## 2. Exemples Pratiques de Destructuration d'Objets
   A. Exemple 1 : Destructuration Simple
   B. Exemple 2 : Destructuration avec Alias

## 3. Destructuration de Tableaux en JavaScript
   A. Exemple 1 : Destructuration de Tableaux
   B. Exemple 2 : Ignorer des Éléments Indésirables

## 4. Destructuration des Paramètres de Fonction
   A. Exemple : Destructuration des Paramètres

## 5. Assignation avec Destructuration
   A. Exemple : Assignation avec Destructuration

## Plan TypeScript 

## Introduction à TypeScript
## POO
# Sommaire

1. Introduction à la POO
   - Motivation
   - Concepts fondamentaux de la POO
   
2. L'encapsulation
   - Exemple avec une classe Duck
   - Exercice getter et setter
   
3. Héritage
   - Exemple d'héritage entre Post et Comment
   - Code en TypeScript
   
4. Polymorphisme
   - Exemple avec les classes Geometry et Square
   
5. Les Interfaces en TypeScript
   - Déclaration d'une Interface
   - Implémentation avec la classe Circle
   - Interface dans le polymorphisme
   - Exercice formes géométriques
   - Interface segregation ISP
   
6. Classe abstraite
   - Déclaration d'une Classe Abstraite
   - Exemple avec la classe Shape
   - Utilisation des classes dérivées