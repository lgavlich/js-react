"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Скільки фільмів Ви вже переглянули? ", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів Ви вже переглянули? ", "");
  }
}
start();
const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Останній фільм, який Ви переглянули?", "").trim();
    const rating = prompt("На скільки оцінюєте його?", "");
    if (
      lastFilm != null &&
      rating != null &&
      lastFilm != "" &&
      rating != null &&
      lastFilm.length < 50
    ) {
      personalMovieDb.movies[lastFilm] = rating;
    } else {
      console.log("error");
      i--;
    }
  }
}

// rememberMyFilm();
function myLevel() {
  if (personalMovieDb.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDb.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
myLevel();
function showMyDB() {
  if (!personalMovieDb.privat) {
    console.log(personalMovieDb);
  }
}
showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
