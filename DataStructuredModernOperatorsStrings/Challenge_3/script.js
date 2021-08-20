// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [minute, event] of gameEvents) {
  minute <= 45
    ? console.log(`[FIRST HALF] ${minute}: ${event}`)
    : console.log(`[SECOND HALF] ${minute}: ${event}`);
}
