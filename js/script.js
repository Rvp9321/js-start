"use strict";



/* let number = 5;
const leftBorderWidth = 1; */

/* number = 10;
console.log(number); */

//Объекты:

/* let instructor = {
  name: "Viktor",
  age: 20,
  cityzenship: "Rus",
  experience: true,
}; */

/* console.log(instructor); */
/* console.log(`Имя: `, instructor.name);
console.log(`Возраст: `, instructor.age, `лет`);
console.log(`Гражданство: `, instructor.cityzenship); */

//Массивы
/* 
let docs = ['passport', 'Id card', 'certificate', 'SSN'];
console.log(docs[3], `and`, docs[2]);
 */

//alert('Hello');

//const result = confirm('Are you sure?');
//console.log(result);

/* const answer = prompt("Введите Ваше имя", "");
console.log(answer);
console.log(typeof(answer)); */

//Интерполяция

/* const answers = [];
answers[0] = prompt('Ваше имя?', '');
answers[1] = prompt("ваша фамилия?", "");
answers[2] = prompt("Укажите год рождения", "");

console.log(answers);
console.log(`Пользователь: ${answers[0]} ${answers[1]}`) */

/* let incr = 10,
//    decr = 10;

//incr++;
//decr--;

console.log(incr++); //постфиксная форма
console.log(--decr); //префиксная форма

console.log(incr);
console.log(decr);

console.log(7%3); */

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

console.log(personalMovieDB); */

//Функции
/*
let val = 7;
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b;
    return ret;
  }
  return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);



function createCounter() {
  let counter = 0;
  const myFunction = function() {
    counter = counter + 1;
    return counter;
  }
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);


const logg = "workpackage summary";
console.log(logg.indexOf("a"));
*/

/* let num = "letter";
console.log(isNaN(num)); */

/* let numberofFilms;

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function showMyDB () {
  if (personalMovieDB.privat == false) {
    console.log("главный объект программы");
  }
}

showMyDB (); */


//020 020 Объекты, деструктуризация объектов (ES6) *************************

/*
const myHouse = {
  type: "private",
  main: "block",
  secondary: "wood",
  balcony: true,
  basement: true,
  interior: {
    type: "antique",
    material: "wood",
    additionals: "steel",
    color: "brown",
  }
};

//console.log((Object.keys(myHouse).length) + (Object.keys(myHouse.interior).length));

for (let key in myHouse) {
  console.log(`ключ: ${key}: ${myHouse[key]}`);
}
console.log(Object.keys(myHouse).length);

for (let key2 in myHouse.interior) {
  console.log(`ключ: ${key2}: ${myHouse.interior[key2]}`);
}
console.log(Object.keys(myHouse.interior).length);
*/

/*
const myHouse = {
  type: "private",
  main: "block",
  secondary: "wood",
  balcony: true,
  basement: true,
  interior: {
    type: "antique",
    material: "wood",
    additionals: "steel",
    color: "brown",
  },
  makeTest: function() {
    console.log("Test done");
  }
};

myHouse.makeTest();
*/

//021. Массивы и псевдомассивы *************************************************