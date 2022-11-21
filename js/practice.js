'use strict';

// 012 Практика, ч.1. Начинаем создавать приложение *******************************************

/*
const numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
    b = prompt("На сколько Вы его оцените?", ""),
    c = prompt("Один из последних просмотренных фильмов", ""),
    d = prompt("На сколько Вы его оцените?", "");



personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
*/

// 015 Практика, ч2. Применяем условия и циклы ***********************************************

const numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов", ""),
        b = prompt("На сколько Вы его оцените?", "");
  if (a != "" && a != 'null' && a.length <)
  personalMovieDB.movies[a] = b;  
}
console.log(personalMovieDB);