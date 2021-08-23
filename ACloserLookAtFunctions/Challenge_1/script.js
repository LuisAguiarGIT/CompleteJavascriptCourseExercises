const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  // 1.
  registerNewAnswer() {
    // 1.1
    const answer = Number(
      prompt(
        `What is your favourite programming language? \n${this.options.join(
          "\n"
        )} \n(Write option number)`
      )
    );
    // 1.2
    if (typeof answer === "number" && answer <= this.answers.length)
      this.answers[answer]++;
    // 4.
    this.displayResults();
    this.displayResults("string");
  },
  //3.
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// 2.
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// BONUS
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
