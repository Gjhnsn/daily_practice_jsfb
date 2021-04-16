// let isRaining;
// isRaining = confirm("is it raining?");

// console.log(isRaining);

// if (isRaining) {
//   console.log("go get an umbrella");
// } else {
//   console.log("no need for an umbrella");
// }

// isRaining ? console.log("it is raining") : console.log("no it is not raining");

// const howManyMealsDidYouEatToday = prompt("how many meals did you eat today?");

// switch (howManyMealsDidYouEatToday) {
//   case "0":
//     console.log("you should eat something");
//     break;
//   case "1":
//     console.log("you have two more to go");
//     break;
//   case "2":
//     console.log("time for dinner");
//     break;
//   case "3":
//     console.log("room left for a snack?");
//     break;
//   default:
//     console.log("there goes my diet");
// }

// const age = parseInt(prompt("age?"));

// if ((age >= 16 && age < 18) || hasPermit) {
//   console.log("between 16 and 17");
//   const hasPermit = confirm("do you have a permit?");
//   if (hasPermit) {
//     console.log("has ambition");
//   } else {
//     console.log("you will need a permit to work");
//   }
// }

// if (age < 16) {
//   console.log("too young to work");
// }

// if (age > 18) {
//   console.log("work eligible");
// }

const age = 19;
// if (age >= 18 || (age >= 16 && confirm("has permit"))) {
//   console.log("can work");
// } else {
//   console.log("can work");
// }

age >= 18 || (age >= 16 && confirm("hasPermit"))
  ? console.log("can")
  : console.log("cant");
