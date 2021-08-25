function calcAverageHumanAge(ages) {
  // 1.
  const allHumanAges = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log(allHumanAges);

  // 2.
  const aboveEighteen = allHumanAges.filter((dogAge) => dogAge > 18);
  console.log(aboveEighteen);

  //3.
  const avg =
    aboveEighteen.reduce((acc, dogAge) => acc + dogAge, 0) /
    aboveEighteen.length;
  console.log(avg);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
