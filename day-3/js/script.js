//primitive data types
let score = 0;
const appName = "My App";
let playing = true;

// complex / compound /grouping
const players = [];
const player = {
  inventory: [],
};

//function / actions
function createTitle(titleText) {
  const h1 = document.createElement("h1"); //creates element
  document.body.appendChild(h1); // tells browser where to place element
  h1.innerHTML = titleText; // tells h1 content

  const li = document.createElement("li");
  h1.appendChild(li);
  li.innerHTML = titleText;
}

createTitle(appName);

// loops
for (let i = 0; i <= 10; i++) {
  // logic / what should happen
  if (i < 5) {
    createTitle(appName);
  }
  if (i === 5) {
    createTitle(i);
  }
  if (i > 5) {
    createTitle(i);
  }
}
