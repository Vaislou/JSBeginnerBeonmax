/*jslint node: true */
'use strict';

let money = +prompt('Ваш бюджет на месяц?', 720);
let time = prompt('Введите дату в формате YYYY-MM-DD', '2021-05-16');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

for (let i = 0; i < 2; i++) {
    let mounthPaysFirst = prompt('Введите обязательную статью расходов в этом месяце', 'Аренда квартиры');
    let payItemFirst = prompt('Во сколько обойдется?', 320);
    if (typeof(mounthPaysFirst) === 'string' && mounthPaysFirst && payItemFirst && mounthPaysFirst.length < 50) {
        appData.expenses[mounthPaysFirst] = payItemFirst;
    } else {
        alert('Вы ввели некорректное значение, повторите ввод');
        i--;
    }
}

// let count = 0;
// while(count < 2) {
//     count++;
//     let mounthPaysFirst = prompt('Введите обязательную статью расходов в этом месяце', 'Аренда квартиры');
//     let payItemFirst = prompt('Во сколько обойдется?', 320);
//     if (typeof(mounthPaysFirst) === 'string' && mounthPaysFirst && payItemFirst && mounthPaysFirst.length < 50) {
//         appData.expenses[mounthPaysFirst] = payItemFirst;
//     } else {
//         alert('Вы ввели некорректное значение, повторите ввод');
//         count--;
//     }
// }

// let count = 0;
// do {
//     count++;
//     let mounthPaysFirst = prompt('Введите обязательную статью расходов в этом месяце', 'Аренда квартиры');
//     let payItemFirst = prompt('Во сколько обойдется?', 320);
//     if (typeof(mounthPaysFirst) === 'string' && mounthPaysFirst && payItemFirst && mounthPaysFirst.length < 50) {
//         appData.expenses[mounthPaysFirst] = payItemFirst;
//     } else {
//         alert('Вы ввели некорректное значение, повторите ввод');
//         count--;
//     }
// } while (count < 2);

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);

if (appData.moneyPerDay <= 10) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 10 && appData.moneyPerDay <= 50) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 50) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
