'use strict';

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('var after for loop: ' + i);

for (let j = 0; j < 10; j++) {
  console.log(j);
}

try {
  console.log('let after for loop: ' + j);
} catch(e) {
  console.log(e);
}

for (var x = 0; x < 10; x++) {
  process.nextTick(function() {
    console.log(x);
  });
}

console.log('after async for loop: ' + x);

for (let y = 0; y < 10; y++) {
  process.nextTick(function() {
    console.log(y);
  });
}

try {
  console.log('let after async for loop: ' + y);
} catch(e) {
  console.log(e);
}


const something = 0;
try {
  something++;
} catch(e) {
  console.log(e);
}
const constObj = {x: 0};

console.log(constObj.x++);
