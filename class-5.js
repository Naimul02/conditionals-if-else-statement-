/**
 * Multi_Level Condition
 * 
 purchase(etar mane holo kroy mane kena)
 * */
// const price = 10000;

// if (price >= 5000) {
//   //10% discount
//   const discount = (price * 10) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else {
//   console.log(price);
// }

// const price = 2000;

// if (price >= 5000) {
//   //10% discount
//   const discount = (price * 10) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else if (price > 2500) {
//   //5% discount
//   const discount = (price * 5) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else {
//   console.log(price);
// }

const age = 62;
const price = 500;

if (age <= 12) {
  console.log("You can eat for free");
} else if (age >= 60) {
  //50% discount
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (age >= 50) {
  //25% discount
} else if (age >= 40) {
  // 10% discount
} else {
  console.log(price);
}
