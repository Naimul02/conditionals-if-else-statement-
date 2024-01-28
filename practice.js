// practice task 1
const burger = 410;
if (burger > 500) {
  console.log("hurrah ! apni ekta free coke peyechen");
} else {
  console.log("apnake obossoi 30tk diye ekta coke kinte hobe");
}
// practice task 2
const BMI = 31.9;
if (BMI < 18.5) {
  console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are overweight");
} else {
  console.log("You are obese");
}

// practice task 3
const grade = 59;
if (grade >= 90 && grade <= 100) {
  console.log("You got A : ", grade);
} else if (grade >= 80 && grade <= 89) {
  console.log("You got B :", grade);
} else if (grade >= 70 && grade <= 79) {
  console.log("You got C :", grade);
} else if (grade >= 60 && grade <= 69) {
  console.log("You got D : ", grade);
} else {
  console.log("You are fail : ", grade);
}
// practice task 4
const yourScore = 81;
const yourFriendScore = 39;

if (yourScore > 80) {
  if (yourFriendScore > 80) {
    console.log("Let's go to for a lunch");
  } else if (yourFriendScore >= 60 && yourFriendScore < 80) {
    console.log("Don't be afsad bro.Good luck for your next time");
  } else if (yourFriendScore >= 40 && yourFriendScore < 60) {
    console.log("You avoid message of your friend");
  } else {
    console.log("block your friend");
  }
} else {
  console.log("go to home and sleep and act sad");
}
// practice task 5
const num1 = 10;
const num2 = 7;
let result;

// if (num1 > num2) {
//   result = num1 * 2;
// } else {
//   result = num1 + num2;
// }

// ternary operator
result = num1 > num2 ?   num1 * 2 :  num1 + num2;

console.log("your result is : ", result);
// practice task 6
const age= 60;
const students = true;


if(age < 10){
    console.log('tomar vara free')
}
else if(students && age < 60){
  console.log("students get 50% discount")
}
else if(age >= 60){
  console.log('you get 15% discount')
}
else{
  console.log('your ticket is ৳800')
}
