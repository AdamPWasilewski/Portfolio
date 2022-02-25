`use strict`;

alert("Welcome to my webpage, I hope You will enjoy it!");

welcomeQuestionnaire();

function welcomeQuestionnaire() {
  const score = prompt(
    "Please tell me how high are yours expectations? From 1-3(where 3 is high, and 1 is low?)"
  );

  if (score === "3") {
    alert("YOU'VE SET THE BAR REALLY HIGH!");
  } else if (score === "2") {
    alert("Everyone can be neutral, dare to be demanding :D");
  } else {
    alert("OK, JUST ENJOY YOUR READING.");
  }
}

function gradeWebpage() {
  // TO DO: use keyword => debugger;

  let score = prompt("Please grade my webpage. 1-10 where 10 is masterpiece!");

  score = parseInt(score);

  if (!isInRange(score, 1, 10)) {
    alert("Provided score is not available. Given score = " + score);
    throw Error("score exceeded given range");
  }

  if (score > 8) {
    alert("Hell Yeah! Thank You! ^^");
  } else if (score <= 8 && score > 3) {
    alert("Well...I can do better!");
  } else {
    alert("Damn, are You sure about that?");
  }
}

function isInRange(value, lower, higher) {
  return lower <= value && value <= higher;
}
