import movies from "./movies.json" assert { type: "json" };

// a. Logger le premier element du tableau movies

console.log(movies[0]);

// b. Logger l'annee du 4eme element du tableau movies

console.log(movies[3].year);

// c. Logger le titre du dernier element du tableau movies

console.log(movies[movies.length - 1].title);

// d. Logger le titre du film qui a la meilleure note

function bestRate() {
  movies.sort((a, b) => {
    if (a.rate < b.rate) return +1;
    if (a.rate > b.rate) return -1;
    return 0;
  });
}
bestRate();
console.log(movies[0].title);

//voir la méthode array.reduce//!!!!!!!!!!!!

// e. Logger le titre du film le plus ancien

let oldestMovie = movies[0];

movies.forEach((element) => {
  if (element.year < oldestMovie.year) oldestMovie = element;
});
console.log(oldestMovie.title);

// f. Logger tous les titres de film qui ont au moins 3 acteurs

let actorsMovies = [];
movies.forEach((element) => {
  if (element.director.length >= 3) actorsMovies.push(element.title);
});
console.log(actorsMovies);

// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

function titleMovie(movies) {
  let newTabMovie = [];
  movies.forEach((element) => {
    newTabMovie.push(element.title);
  });
  console.log(newTabMovie);
}
titleMovie(movies);

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee

function yearMovies(year, movies) {
  let newTabMovieYear = [];
  movies.forEach((element) => {
    if (element.year == year) newTabMovieYear.push(element.title);
  });
  return newTabMovieYear;
}
console.log(yearMovies("1994", movies));

// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur

function director(director, movies) {
  let directorTab = [];
  movies.forEach((element) => {
    if (element.director == director) directorTab.push(element.title);
  });
  return directorTab;
}
console.log(director("Christopher Nolan", movies));
