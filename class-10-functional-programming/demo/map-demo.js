'use strict';

const doctors = require('./doctors');


const actorsOne = doctors.map(function(doctor) {
  doctor.actor;
});
const actors = doctors.map(doctor => doctor.actor)
                .map(name => name.toUpperCase())
                .map(upper => upper + ' is awesome1!!!11!!!1');

console.log(actorsOne);
console.log(actors);
console.log(doctors);
