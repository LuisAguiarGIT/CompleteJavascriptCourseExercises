'use strict';

const person1 = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calculateBMI: function() { return (this.mass / this.height ** 2) }
}

const person2 = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calculateBMI: function() { return (this.mass / this.height ** 2) } 
}

const marksBMI = person1.calculateBMI();
const johnsBMI = person2.calculateBMI();

marksBMI > johnsBMI ? console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`) : 
console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);