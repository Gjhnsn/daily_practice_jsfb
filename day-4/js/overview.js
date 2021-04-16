// datatypes
// built in language

const yes = "yes";
const no = false;
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const abcs = ["a", "b", "c"];

// flavor of complex objects
const array = ["good to eat", "something else"];
const object = {
  yes: "it is good to eat",
  method: function () {
    console.log("i am a method because i belong to a function");
    const li = document.createElement("li");
    document.body.appendChild(li);
  },
};

array[0]; // "good to eat"
object[yes];

console.log(document.body);

object.method();
object.method();

let score = 0;

function pureAddOne(score) {
  return score + 1;
}
function double(x) {
  return x * 2;
}

score = double(5);
console.log(double(1));

// loops
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// arithmetic
console.log(1 + 2, 9 - 4, 2 * 5, 12 / 2, 27 % 5);

score = 10;
score -= 1;
score *= 2;
console.log("20", score);

/* const name = prompt("what is your name");
console.log(name); */
