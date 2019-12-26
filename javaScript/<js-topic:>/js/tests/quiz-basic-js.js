// 'use strict';


// Язык JavaScript - https://learn.javascript.ru/quiz/js-basic
/**
|--------------------------------------------------
  === <<<---  Quiz #1 --->>>  ===
Чему равно i в конце кода?
for(var i=0; i<10; i++) {
  console.log(i);
}
i = ?
• undefined
• 9 +++
• 10
• Нет такой переменной после цикла.
|--------------------------------------------------
*/

// for(var i=0; i<10; i++) {
//   console.log(i);
// }

/**
|--------------------------------------------------
  === <<<---  Quiz #2  --->>>  ===

  Переменные apple и Apple (с большой буквы) – это одна и та же или разные?
• Одна и та же.
• Разные. +++
• С большой буквы переменные называть нельзя.
• Слово «apple» является зарезервированным, нельзя использовать.
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #3 --->>>  ===  
Правда ли что a == b?
const a = [1, 2, 3];
const b = [1, 2, 3];
• Правда.
• Неправда. +++
• Как повезёт.
|--------------------------------------------------
*/

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b); // false


/**
|--------------------------------------------------
  === <<<---  Quiz #4 --->>>  ===
Сколько параметров можно передать функции ?
  • Ровно столько, сколько указано в определении функции.
  • Сколько указано в определении функции или меньше.
  • Сколько указано в определении функции или больше.
  • Любое количество. +++

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #5 --->>>  ===
Чему равно arr.length?
function MyArray() { }
MyArray.prototype = [];
let arr = new MyArray();
arr.push(1, 2, 3);
alert(arr.length);
• 0
• undefined
• 3 +++
• В этом коде допущена ошибка.
|--------------------------------------------------
*/

// function MyArray() {}
// MyArray.prototype = [];
// let arr = new MyArray();

// arr.push(1, 2, 3);
// console.log(arr.length); // 3


/**
|--------------------------------------------------
  === <<<---  Quiz #6 --->>>  ===
После выполнения этого кода – в каких объектах из списка содержится свойство name?
function User() { }
let vasya = new User();
vasya.__proto__.name = "Vasya";
  • vasya.__proto__ +++
  • vasya.prototype
  • User.__proto__
  • User.prototype

|--------------------------------------------------
*/

// function User() { }
// let vasya = new User();
// vasya.__proto__.name = "Vasya";
// // console.log(vasya.__proto__);
// console.log(vasya.prototype); // undefined
// console.log(user.__proto__); // Error
// console.log(user.prototype); // Error


/**
|--------------------------------------------------
  === <<<---  Quiz #7 --->>>  ===
Что выведет этот код?
function F() { return F; }
alert( new F() instanceof F );
alert( new F() instanceof Function );
  • false, false.
  • false, true. +++
  • true, false.
  • true, true.
|--------------------------------------------------
*/

// function F () { 
//   return F; 
// }

// console.log( new F() instanceof F ); // false
// console.log( new F() instanceof Function ); // true


/**
|--------------------------------------------------
  === <<<---  Quiz #8 --->>>  ===
Верно ли, что null == undefined?
  • Да. +++
  • Нет.
|--------------------------------------------------
*/

// console.log(null == undefined); // true
// console.log(undefined == null); // true
// console.log(null === undefined); // false
// console.log(undefined === null); // false



/**
|--------------------------------------------------
  === <<<---  Quiz #9 --->>>  ===
Что выведет этот код?
  f.call(f);
  function f() {
    alert( this );
  }
  • [object Object]
  • код функции f. +++
  • ошибка: слишком глубокая рекурсия.
  • ошибка: переменная f не определена.
  • другое.
|--------------------------------------------------
*/

// f.call(f);
//   function f() {
//     console.log(this); // ƒ f() {console.log(this); }
//   }

/**
|--------------------------------------------------
  === <<<---  Quiz #10 --->>>  ===
Что выведет выражение ниже?
let a = new Array(1,2), 
b = new Array(3);
alert(a[0] + b[0]);
• 1
• 4
• undefined
• NaN +++
|--------------------------------------------------
*/

// let a = new Array(1,2), 
// b = new Array(3);
// console.log(a[0] + b[0]); // NaN



/**
|--------------------------------------------------
  === <<<---  Quiz #11 --->>>  ===
  Объявлена функция:
  function F() {}
  Верно ли, что F instanceof Function?
    • Да.
    • Нет.

|--------------------------------------------------
*/






/**
|--------------------------------------------------
  === <<<---  Quiz #12 --->>>  ===
  Чему равна сумма [] + 1 + 2?
    • 1
    • NaN
    • undefined
    • 12 +++
    • Другое.
|--------------------------------------------------
*/

// console.log([] + 1 + 2); // 12


/**
|--------------------------------------------------
  === <<<---  Quiz #13 --->>>  ===
  Что выведет этот код?
  let y = 1;
  let x = y = 2;
  alert(x);
    • 1
    • 2 +++
    • NaN
    • undefined
    • Будет ошибка.
|--------------------------------------------------
*/

// let y = 1;
// let x = y = 2;
// console.log(x); // 2

/**
|--------------------------------------------------
  === <<<---  Quiz #14 --->>>  ===
Что делает оператор **?
  • Возводит в степень. +++
  • Умножает число само на себя.
  • Нет такого оператора.

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #15 --->>>  ===
Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов ?
  • let f = function(a,b) { return a+b } +++
  • let f = new Function("a,b", "return a+b")
  • let f = new Function("a", "b", "return a+b")
  • let f = (a, b) => a + b +++
  • let f = (a, b) => { a + b }
  • Никакие.

|--------------------------------------------------
*/

// let f1 = function(a,b) { 
//   return a+b 
// }
// console.log(f1(2, 3)); // 5


// let f = new Function("a,b", "return a+b")
// let f = new Function("a", "b", "return a+b")


// let f2 = (a, b) => a + b
// console.log(f2(3, 4)); // 7


// let f3 = (a, b) => { a + b }
// console.log(f3(4, 5)); // undefined


/**
|--------------------------------------------------
  === <<<---  Quiz #16  --->>>  ===
Что делает оператор ===?
  • Сравнивает по ссылке, а не по значению.
  • Сравнивает без приведения типа. +++
  • Нет такого оператора.

|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #17 --->>>  ===
Какие конструкции для циклов есть в javascript?
  • Только две: for и while.
  • Только одна: for.
  • Три: for, while и do...while. +++

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #18  --->>>  ===
Какая арифметическая операция приводит к ошибке в javascript?
  • Деление на ноль. = infinity
  • Умножение числа на строку. = NaN
  • Корень из отрицательного числа. ?
  • Никакая из вышеперечисленных. +++

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #19 --->>>  ===
Что выведет sayHi при вызове через setTimeout?
let name = "Вася";
function sayHi() {
  alert(name);
}
setTimeout(function() {
  let name = "Петя";
  sayHi();
}, 1000);

  • Вася.
  • Петя.
  • undefined
  • Будет ошибка.

|--------------------------------------------------
*/

// let name = "Вася";
// function sayHi() {
//   // console.log(name); // Вася
// }

// setTimeout(function() {
//   let name = "Петя";
//   console.log(sayHi()); // undefined
// }, 1000);



/**
 |--------------------------------------------------
 === <<<---  Quiz #20 --->>>  ===
Что выведет этот скрипт?
"use strict";
a = null + undefined;
console.lg(a);
• null
• undefined
• NaN +++
В коде ошибка.

|--------------------------------------------------
*/

// "use strict";
// let a = null + undefined;
// console.log(a); // NaN


/**
|--------------------------------------------------
  === <<<---  Quiz #21 --->>>  ===
Что выведет код ниже?
let obj = {
  '1': 0, 
  1: 1, 
  0: 2
};

console.log(obj['1']);
0
1 +++
В коде ошибка.
|--------------------------------------------------
*/

// let obj = {
//   '1': 0, 
//   1: 1, 
//   0: 2
// };

// console.log(obj['1']);


/**
|--------------------------------------------------
  === <<<---  Quiz #22 --->>>  ===

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #23 --->>>  ===

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #24 --->>>  ===

|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #25 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #26 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #27 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #28 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #29 --->>>  ===

|--------------------------------------------------
*/




/**
|--------------------------------------------------
  === <<<---  Quiz #30 --->>>  ===

|--------------------------------------------------
*/


// === EXAMPLES === 

// === <<<--- What will show console.log?  --->>>  ===

















