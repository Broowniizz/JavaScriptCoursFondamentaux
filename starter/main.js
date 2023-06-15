//changer le background en boucle en cliquant sur les boutons//

// const mainBtn = document.querySelector(".main-btn");
// const mainContainer = document.querySelector(".main-container");

// mainBtn.addEventListener("click", onClick);

// let fullOpacity = 1;
// let nbClick = 0;
// const colors = ["green", "black", "red", "purple", "blue"];

// function onClick(event) {
//   nbClick++;
//   if (nbClick > colors.length) nbClick = 0;
//   mainBtn.style.opacity = fullOpacity - 0.2 * nbClick;
//   mainContainer.style.backgroundColor = colors[nbClick];
// }

//modifie la couleur du background en cliquant sur le contenu de la div//

//   Facile plus simple sans data color dans le html
// }

// const mainContainer = document.querySelector(".main-container");
// const mainBtn = document.querySelectorAll(".main-btn");

// mainBtn[0].addEventListener("click", onClick);
// mainBtn[1].addEventListener("click", onClick);
// mainBtn[2].addEventListener("click", onClick);

// function onClick(event) {
// mainContainer.style.backgroundColor = event.target.textContent;

// utilise cette fois ci un for pour combiner nos couleurs puis un data-color assignant un attribut dans notre html pour target directement la couleur

// for (let i = 0; i < mainBtn.length; i++) {
//   mainBtn[i].addEventListener("click", onClick);
// }
// function onClick(event) {
//   mainContainer.style.backgroundColor = event.target.getAttribute("data-color");
// }

//changer la couleur de fond avec la valeur imbriger dans le input et valider avec enter //

// const mainBtn = document.querySelectorAll(".main-btn");
// const mainContainer = document.querySelector(".main-container");
// const input = document.querySelector("input");

// input.addEventListener("change", onClick);

// function onClick(event) {
//   mainContainer.style.backgroundColor = input.value;
// }

// const BMIData = [
//   { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
//   { name: "Bonne santé", color: "green", range: [18.5, 25] },
//   { name: "Surpoids", color: "lightcoral", range: [25, 30] },
//   { name: "Obésité modérée", color: "orange", range: [30, 35] },
//   { name: "Obésité sévère", color: "crimson", range: [35, 40] },
//   { name: "Obésité morbide", color: "purple", range: 40 },
// ];

// //Dans un premier temps déclarer toute les variables que tu vas apporter ton html //
// const weight = document.querySelector("#weight");
// const height = document.querySelector("#height");
// const formBtn = document.querySelector(".form-btn");
// const bmiValue = document.querySelector(".bmi-value");
// const description = document.querySelector(".description");

// formBtn.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   const wValue = weight.value;
//   const hValue = height.value;
//   //le !wvalue, dis : si wValue n'est pas défini alors -> error//
//   //comme cela , impossible de rentrer une valeur vide //

//   if (!wValue || !hValue || wValue <= 0 || hValue <= 0) {
//     handleError();
//     return;
//   }

//   const bmi = (wValue / (hValue / 100) ** 2).toFixed(1); //car conversion en cm²  //ou Math.pow((hValue / 100), 2)
//   displayImc(bmi);
//   displayDescription(bmi); //fonction qui va permettre d'afficher la valeur sur mon formulaire//
// }
// function displayImc(valImc) {
//   bmiValue.textContent = valImc;
// }
// //on peut mettre des fonctions dans des fonctions, cela permet d'avoir une meilleur visibilité du code, chaque fonction doit avoir une tache//
// function handleError() {
//   // ou alert("Remplissez correctement le formulaire")//
//   description.textContent = "Remplissez correctement le formulaire";
// }

// //maintenant plus que afficher la santé//

// function displayDescription(valDesc) {
//   let rank;

//   for (let i = 0; i < BMIData.length; i++) {
//     if (valDesc >= BMIData[i].range[0] && valDesc < BMIData[i].range[1]) {
//       rank = BMIData[i];
//       break;
//     } else if (
//       typeof BMIData[i].range === "number" &&
//       valDesc >= BMIData[i].range
//     ) {
//       rank = BMIData[i];
//     }
//   }
//   bmiValue.style.color = rank.color;
//   description.textContent = valDesc;
//   description.textContent = rank.name;
// }
