const mainContainerTag = document.querySelector(".main-container")
// variables et conditions //
// exo let + const //
let firstPart = `Je m'appelle`
const firstname = `Damien`

// mainContainerTag.textContent = firstPart + ' ' + firstname

// deuxieme methode avec $ //
let age = 25
const brotherAge = 26
let result = `Bonjour ${firstPart} ${firstname} et j'ai ${age} ans`

// if(brotherAge > age){
//     result = `Mon frère est plus agé de ${brotherAge-age} ans.`
//     // } else{
//     //     result = `Mon frère est moins agé de ${age-brotherAge} ans.`
//     // }
// }
let myBoolean = brotherAge>age;

// if(brotherAge %2===0){
//     result = `Mon frère à un âge pair`
// } else{
//     result = `Mon frère à un âge impair`
// }
if(myBoolean){
    result = myBoolean
} else{
    result = myBoolean
}
// mainContainerTag.textContent = result

// Tableau //

const myArray = ['Paul', 'Pierre','Nathalie', 'Mathilde']

result = myArray[2]

mainContainerTag.textContent = result