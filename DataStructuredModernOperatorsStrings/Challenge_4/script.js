document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  // Old solution
  // for (const [index, word] of rows.entries()) {
  //   const [first, second] = word.trim().split('_');

  //   console.log(
  //     `${
  //       first + second.replace(second[0], second[0].toUpperCase())
  //     } ${'✅'.repeat(index + 1)}`
  //   );
  // }

  for (const [index, word] of rows.entries()) {
    const [first, second] = word.trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, " ")}${"✅".repeat(index + 1)}`);
  }
});
