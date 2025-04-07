const INFINITE = "Infinite";
const TIRES = "Tires";
const INFINITE_TIRES = `${INFINITE}${TIRES}`;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(INFINITE_TIRES);
  } else if (i % 3 === 0) {
    console.log(INFINITE);
  } else if (i % 5 === 0) {
    console.log(TIRES);
  } else {
    console.log(i);
  }
}
