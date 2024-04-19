// Fabonacci series
const num = parseInt(prompt("Enter number of terms"));
console.log(`Fibonacci Sequence is:`);
let n1 = 0,
  n2 = 1,
  nextTerm;
for (let i = 1; i <= num; i++) {
  console.log(`${n1}<br>`);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

// const num = parseInt(prompt("Enter number"));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;
// document.write(`${n1}<br>`);
// document.write(`${n2}<br>`);
// nextTerm = n1 + n2;
// while (nextTerm <= num) {
//   document.write(`${nextTerm}<br>`);
//   n1 = n2;
//   n2 = nextTerm;
//   nextTerm = n1 + n2;
// }
