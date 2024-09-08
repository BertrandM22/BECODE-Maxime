// Exercice Notre premier objet

// Il est temps de vous entraîner à créer votre propre littéral d'objet. Veuillez définir une nouvelle
//variable appelée product. Il doit s'agir d'un littéral d'objet avec les propriétés suivantes :

// nom - défini sur la chaîne « iPhone 15 »

// inStock - défini sur le booléen true

// prix - fixé au nombre 1249,90

// IncludedInPackage - défini sur un tableau d'au moins trois chaînes comme ["étui", "écouteurs", "chargeur"]

// Connectez-vous maintenant à la console le deuxième élément inclus dans le package fourni avec ce produit iPhone.

// let product= {
//     Nom: "iPhone 15",
//     inStock: true,
//     prix: 1249.90,
//     IncludedInPackage:["étui", "écouteurs","chargeur"]

// }
// console.log(product["IncludedInPackage"][1])


//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
  };
  
  //YOUR CODE GOES DOWN HERE:
console.log(restaurant)
  const fullAdress= restaurant
restaurant.name = "Le Petit Train"
  console.log(fullAdress)