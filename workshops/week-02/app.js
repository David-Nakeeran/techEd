"use strict";

const bands = ["Stone Sour", "Shinedown", "Foo Fighters", "Nirvana"];

for (let i = 0; i < bands.length; i++) {
  console.log(bands[i]);
}

for (let item of bands) {
  console.log(item);
}

bands.forEach((item, index) => {
  console.log(`Band: ${item}, Index: ${index}`);
});
