const mainContainerTag = document.querySelector(".main-container")
// variables et conditions //
// exo let + const //
let firstPart = `Je m'appelle`
const firstname = `Damien`

// mainContainerTag.textContent = firstPart + ' ' + firstname

// deuxieme methode avec $ //
let age = 25
const brotherAge = 26
// let result = `Bonjour ${firstPart} ${firstname} et j'ai ${age} ans`

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
// if(myBoolean){
//     result = myBoolean
// } else{
//     result = myBoolean
// }
// mainContainerTag.textContent = result

// Tableau //

const myArray = ['Jymmo', 'Lilo', 'René', 'Damdam']

// recupere la dernière valeur d'un tableau //
// mainContainerTag.textContent = myArray[myArray.length-1]

// {} <-- défini un objet
const identity_1 = {
    firstname: "Damdam ",
    lastname: "Fasquelle",
    age: 25,
    size: 1.78,
    weight: 95,
    town: {name:"Bordeaux", population: 250000, superficy: 49.36} 
}
const identity_2 = {
    firstname: "Jimmo",
    lastname: "Bertrud",
    age: 16,
    size: 1.81,
    weight: 80,
    town: {name:"MonCul", population: 1715, superficy: 32.22} 
}

const identity_3 = {
    firstname: "René",
    lastname: "Jodar",
    age: 25,
    size: 170,
    town: {name:"Nouvelle-calédonie", population: 271000} 
}
// mainContainerTag.textContent = `Bonjour, je m'appelle ${identity_1.firstname + identity_1.lastname}, j'ai ${identity_1.age} ans et je vis à ${identity_1.town}.`

let olderIdentity, youngerIdentity;
if(identity_1.age>identity_2.age){
    olderIdentity = identity_1
    youngerIdentity = identity_2
} else{
    olderIdentity = identity_2
    youngerIdentity = identity_1
}

// mainContainerTag.textContent = `M. ${olderIdentity.lastname} est le plus agé. Il a ${olderIdentity.age - youngerIdentity.age} ans de plus que M. ${youngerIdentity.lastname}.`

let bigsize, smallsize;

if(identity_1.size>identity_2.size){
    bigsize = identity_1
    smallsize = identity_2
} else{
    bigsize = identity_2
    smallsize = identity_1
}

// mainContainerTag.textContent = `M. ${bigsize.lastname} est le plus grand. Il mesure ${bigsize.size - smallsize.size} centimètres de plus que M.${smallsize.lastname}.`


// intégration d'une variable dans une variable, selectionbis avec deux fois dazdazd.dadazd.dazdaz //
let personInBigTown, personInSmallTown

if(identity_1.town.population>identity_2.town.population){
    personInBigTown = identity_1
    personInSmallTown = identity_2
} else{
    personInBigTown = identity_2
    personInSmallTown = identity_1
}

// mainContainerTag.textContent = `M.${personInBigTown.firstname} habite ${personInBigTown.town.name} qui est plus grande que ${personInSmallTown.town.name}.`


// calcul imc , donc on intègre un calcul dans une variable//


//formule de l'IMC : weight / size **2 //

// let imcBig, imcSmall, imcIdentity_1, imcIdentity_2

// imcIdentity_1 = identity_1.weight / (identity_1.size**2)
// imcIdentity_2 = identity_2.weight / (identity_2.size**2)

// if(imcIdentity_1>imcIdentity_2){
//     imcBig = identity_1
//     imcSmall = identity_2
// } else{
//     imcBig = identity_2
//     imcSmall = identity_1
// }

// mainContainerTag.textContent = `C'est ${imcBig.firstname} qui à l'IMC la plus élevée.`


// on retire 2 variable et on la créer directement dans notre calcul //

let imcBig, imcSmall

identity_1.imc = identity_1.weight / (identity_2.size**2)
identity_2.imc = identity_2.weight / (identity_2.size**2)

if(identity_1.imc>identity_2.imc){
    imcBig = identity_1
    imcSmall = identity_2
} else{
    imcBig = identity_2
    imcSmall = identity_1
}

// mainContainerTag.textContent = `C'est ${imcBig.firstname} qui à l'IMC la plus élevée : ${imcBig.imc}`

// déclarer une fonction //

function calculIMC(pers){
    const imc = pers.weight / pers.size **2
    return imc;
}

// calcul densité de la population avec l'aide d'une fonction //

function calculDensity(pers){
    let result = pers.town.density = Math.round(pers.town.population / pers.town.superficy)
    
}

identity_1.density = calculDensity(identity_1)
identity_2.density = calculDensity(identity_2)

 let hightDensity, smallDensity
if(identity_1.town.density>identity_2.town.density){

    hightDensity = identity_1
    smallDensity = identity_2
} else{
    hightDensity = identity_2
    smallDensity = identity_1
}


mainContainerTag.textContent = `C'est ${hightDensity.town.name} qui a le plus grande densité d'habitant au km carrée de ${hightDensity.town.density} au mètre carrée`