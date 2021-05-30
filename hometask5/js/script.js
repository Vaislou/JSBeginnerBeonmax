let menu = document.querySelectorAll('.menu')[0],
    menuItem = document.querySelectorAll('.menu .menu-item');
menu.insertBefore(menuItem[2], menuItem[1]);

let menuItemLi = document.createElement('li');
menuItemLi.textContent = 'Пятый пункт';
menuItemLi.classList.add('menu-item');
menu.appendChild(menuItemLi);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

let spam = document.getElementsByClassName('adv')[0];
spam.remove();

let ask = document.getElementById('prompt');
let answer = prompt('Ваше отношении к технике Apple?', 'Сам использую');
ask.textContent = answer;
