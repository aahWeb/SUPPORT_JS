const message = "  aaasldkqldqaaaa  dkkdjfkdfjaaaa  ";

const letterCount = message
  .replace(/\s/g, "") // Supprimer les espaces
  .split("")
  .reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

console.log(letterCount);

/**

Explications :

1. `replace(/\s/g, "")`: Cette partie supprime tous les espaces de la chaîne de caractères.

2. `.split("")`: Convertit la chaîne de caractères en un tableau de caractères.

3. `.reduce((acc, letter) => {...}, {})`: Utilise la fonction `reduce` pour compter le nombre d'occurrences de chaque lettre. `acc` est l'accumulateur qui stocke les résultats intermédiaires, et `{}` est l'objet initial.

4. `acc[letter] = (acc[letter] || 0) + 1;`: Incrémente le compteur pour chaque lettre rencontrée.

Le résultat sera un objet où chaque clé représente une lettre et sa valeur représente le nombre d'occurrences dans la chaîne de caractères. Vous pouvez afficher le résultat avec `console.log(letterCount);`.
 */