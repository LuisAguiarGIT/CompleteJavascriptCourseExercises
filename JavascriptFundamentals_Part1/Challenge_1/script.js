const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

let markHigherBMI = false;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) markHigherBMI = true;

alert(markHigherBMI);
