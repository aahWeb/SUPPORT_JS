

// 1
function processData(callback) {
    setTimeout(() => {
        callback("Données traitées");
    }, 2000);
}

processData((result) => {
    console.log(result); // Doit afficher "Données traitées" après 2 secondes
});

// 2
function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Données traitées");
        }, 2000);
    });
}

processData().then(result => {
    console.log(result); // Doit afficher "Données traitées" après 2 secondes
});

// 3
async function processAsyncData() {
    const result = await processData(); // processData retourne une promesse
    console.log(result); // Doit afficher "Données traitées" après que la promesse soit résolue
}

processAsyncData();