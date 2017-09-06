'use strict';

const doctors = require('./doctors');

const evenDoctors = doctors.filter(doctor => !(doctor.number % 2)).map(doctor => new Object({actor: doctor.actor, number: doctor.number}));

console.log(evenDoctors);
