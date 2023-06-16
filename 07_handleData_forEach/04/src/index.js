import games from "./games.json" assert { type: "json" };
//json : javascript Object Notation//

//exemple fonction flécher//
// const nb1 = 4;
// const nb2 = 6;

// const myFonction = (a1, a2) => {
//   return a1 + a2;
// };

// const myArray = [2, 4, 6, 7];

// myArray.forEach((el) => {
//   console.log(el);
// });

// console.log(myFonction(nb1, nb2));

// a. Logger le premier element du tableau games

console.log(games[0]);

// b. Logger l'annee du 3eme element du tableau games

console.log(games[2].year);
// c. Logger le titre du dernier element du tableau

console.log(games[games.length - 1].title);

// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)

const newTabTitle = (arr) => {
  let titles = [];

  arr.forEach((games) => titles.push(games.title));

  return titles;
};
const result = newTabTitle(games);
console.log(result);

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee

const newTabYearTitle = (year, arr) => {
  let yearTitle = [];

  arr.forEach((el) => {
    if (el.year === year) yearTitle.push(el.title);
  });
  return yearTitle;
};

const result2 = newTabYearTitle(2020, games);
console.log(result2);

// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8

const tabRate = (arr) => {
  let tabRateGames = [];

  arr.forEach((el) => {
    if (el.rate >= 8) tabRateGames.push(el.title);
  });
  return tabRateGames;
};

const result3 = tabRate(games);
console.log(result3);

// 4. Ecrire une fonction qui prend en parametre une console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console

const tabConsoleGames = (console, arr) => {
  let consoleGames = [];
  arr.forEach((el) => {
    if (el.devices.includes(console)) consoleGames.push(el.title);
  });
  return consoleGames;
};
const result4 = tabConsoleGames("PC", games);
console.log(result4);

const result4Filter = games.filter((games) => games.devices.includes("PC"));
const result5 = result4Filter.map((game) => game.title);
console.log(result5);

//cette fois ci ressortir les jeux qui ont une chaine de caractere précise par exemple "play"//

const everyStr = (str, arr) => {
  const tabStr = [];

  arr.forEach((game) => {
    for (let i = 0; i < game.devices.length; i++) {
      const element = game.devices[i];
      if (element.includes(str)) {
        tabStr.push(game.title);
        break;
      }
    }
  });
  return tabStr;
};

const result6 = everyStr("play", games);
console.log(result6);
