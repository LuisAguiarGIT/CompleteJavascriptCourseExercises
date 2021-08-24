function checkDogs(dogsJulia, dogsKate) {
  const removeCats = dogsJulia.slice(1, -2);
  const concatArrays = removeCats.concat(dogsKate);

  concatArrays.forEach(function (age, i, arr) {
    const isAdult = age >= 3 ? "adult" : "puppy";
    console.log(`Dog number ${i + 1} is a ${isAdult}, it is ${age} years old`);
  });
}
console.log("----checkDogs 1----");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log("----checkDogs 2----");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
