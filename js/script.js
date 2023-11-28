"use strict";

const numberOfFilms = prompt("Скільки фільмів Ви вже переглянули? ", "");
console.log(numberOfFilms);
const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const lastFilm = prompt("Останній фільм, який Ви переглянули?", "");
const rating = prompt("На скільки оцінюєте його?", "");

personalMovieDb.movies[lastFilm] = rating;
console.log(personalMovieDb);
