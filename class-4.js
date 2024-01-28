// tumi jodi ekta variable declare koro ebong seta jodi tumi const keyword use kore declare koro tahole tumi oi variable man change korte parbe na

// tumi jodi variable var keyword diye declare koro tahole tumi oi variable er man change korte parbe

// const salary = 25000;
// const salary = 25001;
// const salary = 31000;
// const isBCS = true;
// const height = 61;
// const height = 68;
// const height = 78;

// if (salary > 20000) {
//   console.log("Su...... patro");
// }

// if (salary > 20000 && height > 66) {
//   console.log("su...patro");
// } else {
//   console.log("onno patro khuji");
// }

// if (salary > 25000 || height > 72) {
//   console.log("eso baba kobul");
// } else {
//   console.log("vaag tui mokbul");
// }

// more and more condition
const salary = 21000;
const isBCS = true;
const height = 68;
const hasCar = false;

// ekta single equal jodi tumi bosaw tahole tumi kono variable er man bosaitecho ar jodi == equal bosaw tahole tumi ektar sathe arektar compare kortecho.
// height = 71;
// hasCar == false

// if (salary > 25000 || height > 72 || isBCS == true) {
//   console.log("eso baba kobul");
// } else {
//   console.log("vaag tui mokbul");
// }
if (salary > 25000 && height > 72 && isBCS == true) {
  console.log("eso baba kobul");
} else {
  console.log("vaag tui mokbul");
}

// ------------ COMPLEX CONDITION-----------
if ((salary > 25000 && hasCar == true) || isBCS == true) {
  console.log("tomar 14 gosti raji");
}
if ((salary > 25000 || hasCar == true) && isBCS == true) {
  console.log("tomar 14 gosti raji");
}
