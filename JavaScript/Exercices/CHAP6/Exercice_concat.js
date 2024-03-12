// Exercice Algorithmique avec Asynchrone en JavaScript

// Énoncé:
// Vous disposez d'un tableau de chaînes de caractères. Créez une fonction asynchrone
// qui prend ce tableau en entrée et retourne la concaténation de ces chaînes dans l'ordre.
// Cependant, chaque concaténation doit être effectuée de manière asynchrone avec une pause de 1 seconde
// entre chaque concaténation. Utilisez des promesses pour gérer l'asynchrone.

// Exemple:
// Entrée: ['Bonjour', ' ', 'le', ' ', 'monde']
// Sortie attendue (avec une pause de 1 seconde entre chaque concaténation):
// 'Bonjour'
// 'Bonjour '
// 'Bonjour le'
// 'Bonjour le '
// 'Bonjour le monde'

// Fonction principale
async function concatenateStringsAsync(strings) {
    let result = '';
  
    for (const str of strings) {
      await delay(1000); // Pause asynchrone de 1 seconde
      result += str;
      console.log(result);
    }
  
    return result;
  }
  
  // Fonction utilitaire pour simuler une pause asynchrone
  function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  
  // Testez la fonction avec un exemple
  const inputStrings = ['Bonjour', ' ', 'le', ' ', 'monde'];
  concatenateStringsAsync(inputStrings)
    .then(finalResult => {
      console.log('Résultat final:', finalResult);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite:', error.message);
    });
  