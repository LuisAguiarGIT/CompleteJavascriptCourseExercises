// 1.
dogs.forEach(function (dog) {
  dog.recFood = Math.trunc(dog.weight ** 0.78 * 28);
});
console.log(dogs);

// 2.
const dogSarah = dogs.find((dogs) => dogs.owners.includes("Sarah"));
const status = dogSarah.recFood < dogSarah.curFood ? "much" : "little";

console.log(
  `This dog is eating too ${status}:\nRecommended: ${dogSarah.recFood} vs. Current: ${dogSarah.curFood}`
);

// 3.
const ownersDogEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersDogEatTooMuch);

const ownersDogEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersDogEatTooLittle);

// 4.
console.log(`${ownersDogEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersDogEatTooLittle.join(" and ")}'s dogs eat too much!`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
const isEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(isEatingOkay));

// 7.
const okayAmount = dogs.filter(isEatingOkay);
console.log(okayAmount);

// 8.
const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);
