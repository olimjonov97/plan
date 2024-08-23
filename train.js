

// Task A
// let count = 0;
// function countLetter(p1, p2) {
//   console.log(p1, p2);
//   for (let i = 0; i < p2.length; i++) {
//     if (p2[i] === p1) {
//       console.log(p2[i]);
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter("e", "engineer",count));

let count = 0;
function countNumber(myString) {
  console.log();
  for (let i = 0; i < myString.length; i++) {
    console.log(myString[i]);
    if (myString[i] >= "0" && myString[i] <= '9') {
      console.log('number', myString[i]);
      count++;
    }
  }
  return count;
}
countNumber("ad2a54y79wet0sfgb9")
console.log(count)
