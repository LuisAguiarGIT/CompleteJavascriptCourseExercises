'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = new Array();
let totals = new Array();

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    const total = bills[i] + tip;
    totals.push(total);
}
console.log(tips);
console.log(totals);

function calcAverage(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }

    return total / arr.length;
}

const billsAvg = calcAverage(bills);
const tipsAvg = calcAverage(tips);
const totalsAvg = calcAverage(totals);

console.log(`Bills average: ${billsAvg},\nTips average: ${tipsAvg}, \nTotal average: ${totalsAvg}`);