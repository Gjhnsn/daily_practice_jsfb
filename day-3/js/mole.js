let score = 0;
let time = new Date();

const title = document.createElement("h1");
title.innerHTML = "Whack a Mole";
document.body.appendChild(title);

const scoreTracker = document.createElement("p");
document.body.appendChild(scoreTracker);
scoreTracker.innerHTML = "SCORE: " + score;

const timeKeeper = document.createElement("p");
timeKeeper.innerHTML = "Time: " + getSimpleTime(time);
document.body.appendChild(timeKeeper);

const mole = document.createElement("div");
document.body.appendChild(mole);

function getSimpleTime(date) {
  return (
    (date.getHours() % 12) + ":" + date.getMinutes() + ":" + date.getSeconds()
  );
}

function updateTime() {
  let time = new Date();
  timeKeeper.innerHTML = "Time: " + getSimpleTime(time);
}

setInterval(function () {
  updateTime();
}, 1000);

setInterval(function () {
  mole.style.position = "absolute";
  updateMolePosition(Math.random() * 400, Math.random() * 500 + 200);
}, 1000);

function updateMolePosition(x, y) {
  mole.style.left = x + "px";
  mole.style.top = +"px";
}
