// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     num -= 10;
// }

// showFirstMessage('Hello, World!');
// console.log(num);

// let calc = function(a, b) {
//     return a + b;
// }

// let calc = (a, b) => a + b;

// console.log(calc(3, 4));
// console.log(calc(10, 20));

// function  retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = 'test';
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = '12.2px';

// console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел 3 урок');
// }

// learnJS('JavaScript', done);

// let options = {
//     width : 1024,
//     height : 1024,
//     name : 'test'
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border : 'black',
//     bg : 'red'
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
// }

// console.log(Object.keys(options).length);

// let arr = ['first', 2, 3, 'four', 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function (item, i, mass) {
//     console.log(`Номер ${i}: ${item} (массив: ${mass})`);
// });

// arr.pop(); // delete last element from array
// arr.push('5'); // add to the end of array sting '5'
// arr.shift(); // delete first element from array
// arr.unshift('1'); // add to the start of array string '1'

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt('', '');
// let arr;

// arr = ans.split(',');
// console.log(arr);

// let arr = ['Консоль','Телевизор','Телефон'];
// let str = arr.join(', ');
// console.log(str);

// let arr = [1,15,4];
// let str = arr.sort(function sortArr(a,b) {
//     return a - b;
// });
// console.log(str);

// let soldier = {
//     health : 400,
//     armor : 100
// };

// let john = {
//     health : 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

// - to String
// 1)
// console.log(typeof(String(4)));
// 2)
// console.log('ww' + 5);

//to number
// 1)
// console.log(typeof(Number('5')));
// 2)
// console.log(typeof(+'5'));
// 3)
// console.log(typeof(parseInt('15px', 10)));

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function (item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello World!</h1>';
div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);