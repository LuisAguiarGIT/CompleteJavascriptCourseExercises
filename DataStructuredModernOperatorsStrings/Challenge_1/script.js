const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...partPlayers) {
    console.log(`${partPlayers.length} goals were scored`);
    for (let i = 0; i < partPlayers.length; i++) {
      console.log(partPlayers[i]);
    }
  },
};

// 1.
const [players1, players2] = game.players;
// 2.
const [bayernGK, ...bayernField] = players1;
// 3.
const allPlayers = [...players1, ...players2];
// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// 5.
const { team1, x: draw, team2 } = game.odds;
console.log("Team 1: ", team1, "Draw: ", draw, "Team 2: ", team2);
// 6.
game.printGoals(...game.scored);
// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 1 is more likely to win");
