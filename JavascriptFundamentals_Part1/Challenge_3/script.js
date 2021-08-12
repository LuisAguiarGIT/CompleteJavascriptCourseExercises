const dolphinsScores = (97 + 112 + 101) / 3;
const koalasScores = (109 + 95 + 106) / 3;

if ((dolphinsScores && koalasScores) > 100) {
    if (dolphinsScores > koalasScores) {
        console.log(`Dolphins win with a score of ${dolphinsScores} vs. Koalas ${koalasScores}`);
    } else if (dolphinsScores < koalasScores) {
        console.log(`Koalas win with a score of ${koalasScores} vs. Dolphins ${dolphinsScores}`);
    } else if (dolphinsScores === koalasScores) {
        console.log("Nobody wins! Draw!");
    }
}
if (dolphinsScores < 100) {
    console.log(`The Dolphins failed to qualify ${dolphinsScores} points`);
}
if (koalasScores < 100) {
    console.log(`The Koalas failed to qualify ${koalasScores} points`);
}
