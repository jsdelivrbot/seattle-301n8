'use strict';

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc, num) => acc + num);
console.log(sum);

const sumPlusFive = numbers.reduce((acc, num) => {return acc + num}, 5);
console.log(sumPlusFive);

const doctors = require('./doctors');

const doctorsObj = doctors.reduce((acc, doctor) => {
  acc[doctor.actor] = doctor.number;
  return acc;
}, {})
console.log(doctorsObj);

console.log('Average Doctor tenure ' + (doctors
  .map(doctor => ((doctor.end - doctor.begin) || 1))
  .reduce((acc, tenure) => {
     return acc + tenure;
  }) / doctors.length));

console.log(doctors.map(doctor => new Object({actor: doctor.actor, tenure: ((doctor.end - doctor.begin) || 1)})));
