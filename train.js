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
//Task B >>
// let count = 0;
// function countNumber(myString) {
//   console.log();
//   for (let i = 0; i < myString.length; i++) {
//     console.log(myString[i]);
//     if (myString[i] >= "0" && myString[i] <= '9') {
//       console.log('number', myString[i]);
//       count++;
//     }
//   }
//   return count;
// }
// countNumber("ad2a54y79wet0sfgb9")
// console.log(count)

// Task C Class shop

// function currentTime() {
//   const now = new Date();
//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   return `${hour}:${minute}`;
// }
// class Shop {
//   constructor(non, lagmon, cola, time) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola,
//       time: time,
//     };
//   }

//   leftProducts() {
//     console.log(
//       `Hozir ${this.products.time} da ${this.products.non}ta non ${this.products.lagmon} ta Lagmon ${this.products.cola}ta Cola mavjud!`
//     );
//   }
//   sale(product, amount) {
//     if (this.products[product] >= amount) {
//       this.products[product] -= amount;

//       console.log(
//         `Hozir ${this.products.time} da ${amount}ta ${product} sotildi!`
//       );
//     }

//     // console.log(product);
//     // console.log(this.products[product], amount);
//   }

//   recieved(product, amount) {
//     this.products[product] += amount;
//     console.log(
//       `Hozir ${this.products.time} da ${amount} ta ${product} qabul qilindi jami: ${this.products.lagmon} ta bo'ldi `
//     );
//   }
// }
// console.log(currentTime());
// const shop = new Shop(4, 5, 2, currentTime());

// shop.leftProducts();
// shop.sale("non", 1);
// shop.recieved('lagmon',8)

//TASK_D

function checkContent(par1, par2) {
  const str1 = par1.split("").sort();
  const str2 = par2.split("").sort();
  for (let i = 0; (i = str1.length); i++) {
    if (str1[i] === str2[i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkContent("hello", "ohlle"));
