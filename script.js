/*jslint node: true */
'use strict';

let money;
let time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', 720);
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 720);
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '2021-05-16');
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses : function () {
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
    },
    detectDayBudget : function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
    },
    detectLevel : function () {
        if (appData.moneyPerDay <= 10) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 10 && appData.moneyPerDay <= 50) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 50) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings : function () {
        let save;
        let percent;
        if (appData.savings) {
            save = +prompt('Какова сумма накоплений?', 100);
            percent = +prompt('Под какой процент?', 2);
        }
        appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    },
    chooseOptExpenses : function () {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            count++;
            let mounthOptPaysFirst = prompt('Введите необязательную статью расходов в этом месяце', 'Лекарства');
            if (typeof(mounthOptPaysFirst) === 'string' && mounthOptPaysFirst && mounthOptPaysFirst.length < 50) {
                appData.optionalExpenses[count] = mounthOptPaysFirst;
            } else {
                alert('Вы ввели некорректное значение, повторите ввод');
                i--;
            }
        }
    },
    chooseIncome : function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while (!items || items == '') {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }  
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
        console.log(`Cпособы доп. зароботка:`);
        appData.income.forEach(function (item, index) {
            console.log(`${index + 1}: ${item}`);
        });
    }
};

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(`${key} : ${appData[key]}`);
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
