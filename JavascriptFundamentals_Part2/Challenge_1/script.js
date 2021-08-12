'use strict';

const calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;

function checkWinner(avgDol, avgKoa) {
    if (avgDol >= (avgKoa * 2)) {
        console.log(`Dolphins win ${avgDol} vs. ${avgKoa}`);
    } else if(avgKoa >= (avgDol * 2)) {
        console.log(`Koalas win ${avgKoa} vs. ${avgDol}`);
    } else {
        console.log("Nobody wins!");
    }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas   = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);