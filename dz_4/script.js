"use strict";
// const regExp = new RegExp('expression', 'flags');
// const regExp = /expression/flags;

// i - поиск без учета регистра
// g - множественный поиск
// m - многострочный поиск
// const regExp = /expression/;

let str = 'Язык JavaScript называется так из-за популярности языка Java';

// const regExp = new RegExp('java', 'i');
//
// // console.log(regExp);
//
// console.log(str.search(regExp));

// console.log(str.match(/java/ig));

// console.log('+7 (000)000-00-00'.replace(/-/g, ':'));

// let name = 'Snow, John';
//
// console.log(name.replace(/([a-z]+), ([a-z]+)/i, '$2 $1'));
// console.log(name.replace(/([a-z]+), ([a-z]+)/i, 'Было: $&\nСтало: $2 $1'));

// Классы
// \d - [0123456789] - [0-9]
// \D - [^0123456789] - [^0-9]
// \w - [a-z0-9_]
// \W
// \s - space, tab, \n
// \S
// \b - граница слова
// \B

// /[а-яё]+/gi

// Квантификаторы
// {m} - строго m раз
// {m,n} - от m до n раз
// {m,} - от m до бесконечности
// {,n} - от 0 до n раз

// сокращения
// + - {1,}
// * - {0,}
// ? - {0,1}

// console.log('+7-(000) 000:00-00'.replace(/\D/g, '')); // 70000000000
// console.log('+7-(000) 000:00-00'.match(/\d+/g).join('')); // 70000000000

// console.log('color colour'.match(/colou?r/g));
// console.log('color colour colotr coloutr'.match(/colo[ut]?r/g));
// console.log('Язык JavaScript это не Java вам'.match(/\bjava\b/ig));

// console.log('Chapter 7.2'.match(/\d.\d/g));
// console.log('Chapter 7.2'.match(/\d+\.\d+/g));

// console.log(/java/i.test(str));

let result;
let regExp2 = /java/ig;

console.log(`Начальный индекс lastIndex ${regExp2.lastIndex}`);
while(result = regExp2.exec(str)) {
    console.log(result);
    console.log(`Текущий lastIndex ${regExp2.lastIndex}`);
}
console.log(`Конечный lastIndex ${regExp2.lastIndex}`);
