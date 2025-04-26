var timer = 60;
var score = 0;
var hitrn;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function getnewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
function makebubble() {
  var clutter = " ";

  for (var i = 1; i < 185; i++) {
    var rnd = Math.floor(Math.random() * 10);
    clutter += `<div class="bbl">${rnd}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>
      <h3>Your Score is ${score}</h3>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (e) {
  var clicknum = Number(e.target.textContent);
  if (clicknum === hitrn) {
    increaseScore();
    makebubble();
    getnewhit();
  }
});
runTimer();
makebubble();
getnewhit();
increaseScore();
