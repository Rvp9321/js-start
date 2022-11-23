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

/* 
const numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
// Цикл for
for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов", ""),
        b = prompt("На сколько Вы его оцените?", "");
  if (a != "" && a != null && a.length < 50 && b != "" && b != null) {
    personalMovieDB.movies[a] = b;   
    console.log("done");
  } else {
    console.log("error");
    i--;
  }      
}
console.log(personalMovieDB);
 */

// Цикл While
/*
let i = 0;
while (i < 2) {
  let a = prompt("#2.Один из последних просмотренных фильмов", ""),
      b = prompt("#2.На сколько Вы его оцените?", "");
  if (a != "" && a != null && a.length < 50 && b != "" && b != null) {
  personalMovieDB.movies[a] = b;
  i++;
  } else {
    console.log("error");
    i--;
  }
}
console.log(personalMovieDB);
*/

// Цикл Do While
/*
let i = 0;
do {  
  let a = prompt("#2.Один из последних просмотренных фильмов", ""),
      b = prompt("#2.На сколько Вы его оцените?", "");
  personalMovieDB.movies[a] = b;
  i++;  
} while (i < 2);
console.log(personalMovieDB);
*/
/* 
if (numberofFilms < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (numberofFilms >= 10 && numberofFilms < 30) {
  console.log('Вы классический зритель');
} else if (numberofFilms >= 30) {
  console.log('Вы киноман');
} else {
  console.log("Ошибка");
}
 */


// 018 Практика , ч3. Используем функции

let numberofFilms;

function start() {
  numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberofFilms == "" || numberofFilms == null || isNaN(numberofFilms)) {
    numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("На сколько Вы его оцените?", "");
    if (a != "" && a != null && a.length < 50 && b != "" && b != null) {
      personalMovieDB.movies[a] = b;   
      console.log("done");
    } else {
      console.log("error");
      i--;
    }      
  }
}

rememberMyFilms();

// Задание №3

function writeYourGenres () {
  for (let i = 0; i < 3; i++) {
    const a = prompt(`Ваш любимый жанр под номером ${i+1}?`, "");
    personalMovieDB.genres = a;

  }

}

writeYourGenres ();

function detectPersonalLevel () {
  if (numberofFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (numberofFilms >= 10 && numberofFilms < 30) {
    console.log('Вы классический зритель');
  } else if (numberofFilms >= 30) {
    console.log('Вы киноман');
  } else {
    console.log("Ошибка");
  }
}

detectPersonalLevel ();

console.log(personalMovieDB);

function showMyDB () {
  if (personalMovieDB.privat == false) {
    console.log("главный объект программы");
  }
}

showMyDB ();
