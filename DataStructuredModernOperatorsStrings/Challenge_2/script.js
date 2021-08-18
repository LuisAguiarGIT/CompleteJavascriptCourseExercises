// 1.
const entries = Object.entries(game.scored);
console.log(entries);
for (const [goal, player] of entries) {
  console.log("Goal", `${Number(goal) + 1}:`, player);
}

// 2.
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
  avg += odd;
}
console.log(avg / odds.length);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}

// BONUS
const scorers = {};

for (const player of game.scored) {
  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}
console.log(scorers);
