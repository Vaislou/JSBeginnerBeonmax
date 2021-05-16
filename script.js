/*jslint node: true */
'use strict';

let money = prompt('Ваш бюджет на месяц?', 720);
let time = prompt('Введите дату в формате YYYY-MM-DD', '2021-05-16');

let mounthPaysFirst = prompt('Введите обязательную статью расходов в этом месяце', 'Аренда квартиры');
let payItemFirst = prompt('Во сколько обойдется?', 320);

let mounthPaysSecond = prompt('Введите обязательную статью расходов в этом месяце', 'Аренда квартиры');
let payItemSecond = prompt('Во сколько обойдется?', 320);

let appData = {
    budget : money,
    timeData : time,
    expenses : {
        mounthPaysFirst : payItemFirst,
        mounthPaysSecond : payItemSecond
    },
    optionalExpenses : {},
    income : [],
    savings : false
};

alert(appData.budget / 30);