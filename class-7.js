/**
 * ternary operator ------ three parts orthat 3 ti part k niye gothito erokom ekta bisoy
 * -------------------------------
 * structure of ternary operator
 * -------------------------------
 *   ?  : 
 * condition ? do something when true : do something when false
 
 */

const age = 20;

// normal if else
// eta amra 6 line a likhchi
// if (age >= 18) {
//   console.log("You can vote.");
// } else {
//   console.log("ghumai thako");
// }

// simple ternary operator
// ternary operator
// age >= 18 ? console.log('Vote Dio') : console.log('Ghumai Thako');

// let keyword use korle amra caile amader man change korte parbo ar const man  fixed orthat amra man change korbo na.
let price = 500;
const isLeader = true;

// === man ebong ki type er data 2tai check kore thake.
if (isLeader === true) {
  price = 0;
} else {
  price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;

// optional : semi-advanced ternary
if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 1000;
}

// feel free to ignore this one
// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 1000;
