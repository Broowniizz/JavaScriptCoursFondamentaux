// logMessage("Salut")
// logMessage("tout")
// logMessage("le monde")

// function logMessage(arg){
//     console.log(arg)
// }

// sum2args(6, 7);

// function sum2args(arg1, arg2){
// // ecrire une fonction qui affiche la somme ......
//     const result = `La somme de ${arg1} avec ${arg2} est égale à ${arg1 + arg2}`
//     console.log(result);
// }

// j'ai déclarer une variable puis utiliser la fonction pour sortir un argument du result , d'ou le return. comme cela je peux changer facilement mes données.//

// let valeurRetournee = sum2args(6, 7)

// valeurRetournee += `. Un autre bout de phrase.`
// console.log(valeurRetournee)

// function sum2args(arg1, arg2){

//         const sum = arg1 +arg2
//         const result = `La somme de ${arg1} avec ${arg2} est égale à ${sum}`
//         return result
//     }

// let somme = sum2args(6, 7)
// let soustract = soustrait(somme, 6)
// logMessage(soustract);

// //  ecrire une fonction qui ecris la somme des deux précedentes //

// function sum2args(arg1, arg2){

//         return arg1 +arg2
//     }

// function soustrait(arg3, arg4){
//     return arg3 - arg4
// }

// function logMessage(arg){
//     console.log(`Le résultat des 2 fonctions précèdentes est ${arg}!`)
// }
// dans une fonction tout ce qui se trouve apres un return ne s'execute pas//

// if(x != y){
//     return 0
// } else {
//     return 1
// }

// c'est la meme chose que

// if(x != y)return 0;
// return 1

// bouble for, break: stop la condition, continue: saute une étape et retourne direct dans la boucle //

// calculez la somme d'un tableau //
// attention a bien insérer un paramètre dans la fonction pour pouvoir la piocher sur n'importe quel autre données//

// const myNumbers = [4, 6, 13, 3, 52, 6, 8];
// const monResultat = sumElements(myNumbers)

// function sumElements(myArray){

//     let result = 0;
//     for(let i = 0; i < myArray.length; i++){
//         result += myArray[i];
//     }
//     return result
// }
// console.log(monResultat);

// calculez la somme des nombres paires du tableau

// const myNumbers2 = [50, 43, 33, 30, 52, 6, 8];
// const monResultatpaire = sumElements(myNumbers2)

// function sumElements(myArray2){

//     let result = 0;
//     for(let i = 0; i < myArray2.length; i++){
//         if(myArray2[i]%2 === 0){
//             result += myArray2[i];
//         }
//     }
//     return result
// }
// console.log(monResultatpaire);

// la somme de tout les nombres du tableau sauf les 3e 6e 9e etc
// const myNumbers3 = [2, 5, 1, 8, 7, 6, 3];
// const monResultatsauf3 = strangeElement(myNumbers3)

// function strangeElement(myArray3){
//     let result = 0;

//     for(let i = 0; i < myArray3.length; i++){

//         if(i % 3 === 0){
//             continue
//         }
//         result += myArray3[i]
//         }
//     return result
// }
// console.log(monResultatsauf3);

// sans passer par les fonctions min et max,
// 1. faire une fonction qui retourne le nombre le plus petit d'un tableau//
// 2. faire une fonction qui retourne le nombre le plus grand d'un tableau//
// 3. ecrire une fonction qui retourne un tableau de nombres, tous supérieur à la moyenne des éléments du tableau en argument//

// 1
// array = [2, 6, 52, 1, 32];
// const minimumArray = minNumbers(array)

// function minNumbers(myArray){
//     let result = myArray[0];
//     for(let i = 1; i < myArray.length; i++){
//         if(myArray[i] < result){
//             result = myArray[i]
//         }
//     }
//     return result
// }
// console.log(minimumArray)

// array = [2, 6, 52, 1, 32];
//2
// array = [2, 6, 52, 1, 32]
// const maximumNumbers = maxNumbers(array)

// function maxNumbers(myArray){
//     let result = myArray[0];
//     for(let i = 1; i < myArray.length; i++){
//         if(myArray[i] > result){
//             result = myArray[i]
//         }
//     }
//     return result
// }
// console.log(maximumNumbers)

//3

// array = [2, 6, 52, 1, 32]
// const meanArray = arrayMean(array)
// const numbersSupMean = arrayMaxMean(array)

// function arrayMean(myArray){
//     let result = 0;

//     for(i = 0; i < myArray.length; i++){
//         result += myArray[i]
//     }
//     result /= myArray.length
//     return result
// }
// // console.log(meanArray)

// function arrayMaxMean(myArray){
//     let result = [];
//     for(i = 0; i < myArray.length; i++){
//         if(myArray[i] > meanArray){
//             // result += myArray[i] + " "
//             result.push(myArray[i])
//         }
//     }
//     return result

// }
// console.log(numbersSupMean)

// Correction prof

// array = [2, 6, 52, 1, 32, 68, 95, 6]
// console.log(getNumbersSuperiorToAvg(array))
// function getNumbersSuperiorToAvg(arr){
//     //on calcule la moyenne//
//     let total = 0;
//     for( let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }
//     let avg = total / arr.length
//     //on trie le tableau en fonction de la moyenne
//     let newArray = []

//     for( let i = 0; i < arr.length; i++){
//         if(arr[i] > avg){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }

// //ajouter un dernier Element d'un tableau//
// .push()
// //retire le dernier Element d'un tableau//
// .pop()
// //ajouter un premier Element d'un tableau//
// .shift()
// //retire le premier Element d'un tableau//
// .unshift()

// array = [2, 6, 52, 1, 32, 68, 95, 6]

//  array.push("mama")
//  console.log(array.pop())

const pizzas = [
  {
    name: "Margherita",
    price: 11.5,
    ingredients: ["mozzarella", "tomate", "basilic ", "huile d'olive"],
    baseTomate: true,
  },
  {
    name: "Regina",
    price: 12,
    ingredients: ["mozzarella", "tomate", "origan", "jambon", "champignons"],
    baseTomate: true,
  },
  {
    name: "4 saisons",
    price: 15,
    ingredients: [
      "artichaut",
      "courgette",
      "poivron",
      "mozzarella",
      "oignon rouge",
    ],
    baseTomate: true,
  },
  {
    name: "Napolitaine",
    price: 14,
    ingredients: ["tomate", "mozzarella", "anchois", "olives noires", "origan"],
    baseTomate: true,
  },
  {
    name: "4 fromages",
    price: 16,
    ingredients: ["tomate", "mozzarella", "emmental", "comté", "roquefort"],
    baseTomate: true,
  },
  {
    name: "Montagnarde",
    price: 19,
    ingredients: ["mozzarella", "reblochon", "gruyère", "oignon", "champignon"],
    baseTomate: false,
  },
  {
    name: "Chèvre-miel",
    price: 18,
    ingredients: ["mozzarella", "chèvre", "miel"],
    baseTomate: false,
  },
  {
    name: "Hawaïenne",
    price: 17,
    ingredients: ["mozzarella", "tomate", "jambon", "ananas"],
    baseTomate: true,
  },
];

//Exercice 1//
//# 1. écrire une fonction qui prend en parametre un tableau, cette fonction retourne tous les .name des elements du tableau dans un tableau names[]

console.log(namePizzas(pizzas));

function namePizzas(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].name);
  }
  return newArray;
}

// # 2. Ecrire une fonction qui prend en parametre le tableau pizzas et qui retourne le prix moyen des pizzas

console.log(meanPizzas(pizzas));
function meanPizzas(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].price;
  }
  return (total / arr.length).toFixed(2);
}

// # 3. Ecrire une fonction qui prend en parametre un nom de pizza et qui retourne un tableau des ingredients de cette pizza

console.log(nameIngrePizzas(`Chèvre-miel`, pizzas));
function nameIngrePizzas(name, arr) {
  let targetPizzas;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      targetPizzas = arr[i];
      break;
    }
  }
  let ingredients = [];
  if (targetPizzas) {
    ingredients = targetPizzas.ingredients;
  }

  return targetPizzas.ingredients;
}
// quand on test une valeur sans condition , js le considère comme une valeur booleen ex: if(targetPizzas)

//# 4. Ecrire une fonction qui prend en parametre un tableau de pizzas et qui retourne un tableau de tous les ingredients, en evitant les elements dupliques//

const result = getAllIngredients(pizzas);
console.log(result);
function getAllIngredients(tableau) {
  let allIngredients = [];

  for (let i = 0; i < tableau.length; i++) {
    const currentPizza = tableau[i];
    for (let j = 0; j < currentPizza.ingredients.length; j++) {
      if (!allIngredients.includes(currentPizza.ingredients[j])) {
        allIngredients.push(currentPizza.ingredients[j]);
      }
    }
  }
  return allIngredients;
}

//# 5. Ecrire une fonction qui prend en parametre un ingredient et un tableau et qui retourne un tableau des noms des pizzas qui ont cet ingredient

const result2 = returnPizzasIngredients(`tomate`, pizzas);
console.log(result2);

function returnPizzasIngredients(ingredientName, arr) {
  let pizzaNames = [];
  for (let i = 0; i < arr.length; i++) {
    const currentPizza2 = arr[i];
    if (currentPizza2.ingredients.includes(ingredientName)) {
      pizzaNames.push(currentPizza2.name);
    }
  }
  return pizzaNames;
}
