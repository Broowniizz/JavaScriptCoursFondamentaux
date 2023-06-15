//1er exo : au click changer la couleur du container et ensuite en passant la souris dessus et changer de nouveau en sortant//

// const mainBtn = document.querySelector(".btn");
// const mainContainer = document.querySelector("main-container");
// mainBtn.addEventListener("mouseover", onClick);
// // mainBtn.addEventListener("mouseout", onOut);

// function onClick(event) {
//   mainContainer.style.backgroundColor = "blue";
// }
// function onOut(event) {
//   mainContainer.style.backgroundColor = "white";
// }

//2e exo quand je clique sur le bouton changer la couleur, quand je réappuie remettre la couleur avant//

// const mainBtn = document.querySelector(".btn");
// const mainContainer = document.querySelector("main-container");
// mainBtn.addEventListener("click", onClick);

// function onClick(event) {
//   if (mainContainer.style.backgroundColor === "white") {
//     mainContainer.style.backgroundColor = "black";
//   } else {
//     mainContainer.style.backgroundColor = "white";
//   }
// }

//3e exo, changer la couleur du background avec les input //

// const mainInputRed = document.querySelector(".inputRed");
// const mainInputGreen = document.querySelector(".inputGreen");
// const mainInputBlue = document.querySelector(".inputBlue");
// const mainContainer = document.querySelector(".main-container");

// mainInputRed.addEventListener("change", onClick);
// mainInputGreen.addEventListener("change", onClick);
// mainInputBlue.addEventListener("change", onClick);

// function onClick(event) {
//   mainContainer.style.backgroundColor = `rgb(${mainInputRed.value},${mainInputGreen.value},${mainInputBlue.value})`;
// }

// cours ajouter un div class dans notre html//

// const container = document.querySelector(".container");
// const newDiv = document.createElement("div");

// newDiv.classList.add(".new-div");
// container.appendChild(newDiv);

//faire une fonction qui creer plusieurs div afin de créer une mosaique qui remplit tout le main-container , 10 colonnes et 10 lignes//

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", onBtnClick);

// function onBtnClick(event) {
//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//       const newDiv = document.createElement("div");
//       container.appendChild(newDiv);
//       newDiv.classList.add("new-div");
//       newDiv.style.left = `${i}0vw`;
//       newDiv.style.top = `${j}0vh`;
//       newDiv.style.backgroundColor = mainContainer.style.backgroundColor;
//     }
// }
// }

// cette fois -ci , avec une damier de 4 par 4 c'est a dire 16 carré en tout, a chaqie click creer un carrée et remplir du coup avec 16 clicks le main-container//

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

//evenement

btn.addEventListener("click", btnOnClickRandom);

//function qui creer mon tableau et le mélange//

let arr = [];
createArr(arr);
shuffle(arr);

console.log(arr);

function createArr(arrCreate) {
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      arrCreate.push({ x: i, y: j });
    }
  }
}
function shuffle(tab) {
  let currentIndex = tab.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [tab[currentIndex], tab[randomIndex]] = [
      tab[randomIndex],
      tab[currentIndex],
    ];
  }
}
let nbClick = 0;

//fonction qui place ma div aléatoirement// // et reinitialise mes cliques pour remove mes div créer//
function onBtnClickInput(divCreateRandom) {
  if (nbClick === 16) {
    container.textContent = "";
    nbClick = 0;
    // newDiv2.forEach((element) => {
    //   element.remove();
    // });
  } else {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("new-div2");
    newDiv.style.top = `${divCreateRandom[nbClick].x * 25}vh`;
    newDiv.style.left = `${divCreateRandom[nbClick].y * 25}vw`;
    nbClick++;
  }
}

function btnOnClickRandom(event) {
  onBtnClickInput(arr);
}
