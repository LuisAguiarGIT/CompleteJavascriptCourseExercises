const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    const message = `Mark's bmi (${markBMI}) is higher than John's (${johnBMI})`;
    console.log(message);
} else {
    const message = `Mark's bmi (${markBMI}) is higher than John's (${johnBMI})`;
    console.log(message);
}
