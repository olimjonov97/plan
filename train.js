console.log("Jack Ma Maslahatlari");
const list = [
  "yacshi talaba bo'ling", //0-20
  " togri boshliq tanlang va kop hato qiling", //20-30
  "uzingizga ishlashni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling foydasin yoq", //60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") {
    callback("insert a number", null);
  } else if (a <= 20) {
    callback(null, list[0]);
  } else if (a > 20 && a <= 30) {
    callback(null, list[1]);
  } else if (a > 30 && a <= 40) {
    callback(null, list[2]);
  } else if (a > 40 && a <= 50) {
    callback(null, list[3]);
  } else if (a > 50 && a <= 60) {
    callback(null, list[4]);
  } else {
    setInterval(function () {
      // non stop looping
      callback(null, list[5]);
    }, 1000);
    // setTimeout(function () {
    //   callback(null, list[5]);
    // }, 5000);
  }
}
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) {
//     console.log("ERROR", err);
//   } else {
//     console.log("Javob:", data);
//   }
// });
// console.log("passed here 1 ");

// >>>>>>>>>>>>> asynchronous functions  <<<<<<<<<

// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // qisqacha
//     return new Promise((resolve, reject)=>{
//       setInterval(function () {
//         resolve(list[5]);
//       }, 1000);
//     //   setTimeout(function () {
//     //     resolve(list[5]);
//     //   }, 5000);
//     });

//   }
// }
// console.log("passed here 0");
//then & catch

// maslahatBering(65)
//   .then((data) => {
//     console.log("Javob:",data);
//   })
//   .catch((error) => {
//     console.log("ERROR", error);
//   });
// console.log("passed here 1 ");
// async function run(){

//     let javob = await maslahatBering(65); // call
//     console.log(javob);
//     // javob = await maslahatBering(31);
//     // console.log(javob);
//     // javob = await maslahatBering(41);
//     // console.log(javob)

// };
// run()

// Task A
let count = 0;
function countLetter(p1, p2) {
  console.log(p1, p2);
  for (let i = 0; i < p2.length; i++) {
    if (p2[i] === p1) {
      console.log(p2[i]);
      count++;
    }
  }
  return count;
}
console.log(countLetter("e", "engineer",count));
