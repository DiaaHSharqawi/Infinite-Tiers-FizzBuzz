const INFINITE = "Infinite";
const TIERS = "Tiers";
const INFINITE_TIERS = `${INFINITE}${TIERS}`;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(INFINITE_TIERS);
  } else if (i % 3 === 0) {
    console.log(INFINITE);
  } else if (i % 5 === 0) {
    console.log(TIERS);
  } else {
    console.log(i);
  }
}
