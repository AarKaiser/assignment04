// Tieing variables to html elements.

let timerEL = document.querySelector("#timeLeft");
let questionEL = document.querySelector("#question");
let answersEL = document.querySelector("#answers");
let hrEl = document.querySelector("#hr");
let resultsEL = document.querySelector("#result");
let scoresEl = document.querySelector("#highScores");
let formEl = document.querySelector("#form");
let startBTN = document.querySelector("#startButton");
let quizBoard = document.querySelector("#quizBoard");
let inputEl = document.querySelector("#hsInitials");
let hsButton = document.querySelector("#hsButton");

// Defining global variables.

let timer;
let timerCount = 60;
let timeLost = 0;
let tally;
let currentAns;

// Setting up arrays.

let qnaArray = [
  {
    question: "What type of element is a <p> in HTML?",
    answers: ["Header", "Body", "Paragraph", "Main"],
    correct: "Paragraph",
  },
  {
    question: "What language is primarily used to style a web page?",
    answers: ["HTML", "CSS", "JavaScript", "C++"],
    correct: "CSS",
  },
  {
    question: "Which is not the name of one of your instructors?",
    answers: ["Deep", "Luca", "Lucifer", "Devon"],
    correct: "Lucifer",
  },

  {
    question: "How difficult was this assignment?",
    answers: ["Easy", "Difficult", "Hard", "Impossible"],
    correct: "Hard",
  },
  {
    question: "Where is it best practice to code your accessibility features?",
    answers: ["HTML", "CSS", "JavaScript", "Terminal"],
    correct: "CSS",
  },

  {
    question: "Which day do we not have class?",
    answers: ["Monday", "Wednesday", "Friday", "Saturday"],
    correct: "Saturday",
  },

  {
    question: "Which company created Bootsrap?",
    answers: ["Twitter", "Amazon", "Tesla", "Microsoft"],
    correct: "Twitter",
  },
  {
    question: "Which program do we use to write code in class?",
    answers: ["Virtual Studio Code", "Notepad", "Terminal", "Spotify"],
    correct: "Virtual Studio Code",
  },
  {
    question: "Which of the following is not a browser?",
    answers: ["Chrome", "Steel", "Firefox", "Opera"],
    correct: "Steel",
  },
  {
    question:
      "Which developer tool do we use to review our code in a browswer?",
    answers: ["Shoesole", "Prosole", "Console", "Solecon"],
    correct: "Console",
  },
];

hsArray = JSON.parse(localStorage.getItem("hsArray")) || [
  { intials: "Undefined", score: "Undefined" },
];

// Initializing landing page.

highScores.addEventListener("click", displayHS);
hsButton.setAttribute("style", "border: 0px; background-color: white");
inputEl.setAttribute("style", "border: 0px");
startButton.addEventListener("click", startQuiz);
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEL.textContent = "Time Left: " + timerCount;
    timerEL.setAttribute("style", "color: black");
    // console.log("Timer Count: " + timerCount);
    if (timerCount <= 0 || currentAns >= qnaArray.length) {
      endQuiz();
    }
  }, 1000);
}

// Function to display the questions

function displayQuestions() {
  questionEL.textContent = qnaArray[currentAns].question;
  answersEL.innerHTML = "";
  qnaArray[currentAns].answers.forEach((index) => {
    let btnEl = document.createElement("button");
    btnEl.textContent = index;
    btnEl.addEventListener("click", checkAnswer);
    let brEl = document.createElement("br");
    answersEL.appendChild(btnEl);
    answersEL.appendChild(brEl);
  });
}

// Function to confirm whether answer is right or wrong.

function checkAnswer(event) {
  console.log("User selected " + event.target.textContent);
  if (event.target.textContent === qnaArray[currentAns].correct) {
    console.log("Which is the correct answer.");
    tally++;
    console.log("Score is: " + tally);
    resultsEL.setAttribute("style", "color:blue");
    resultsEL.textContent = "Right!";
  } else {
    console.log("Which is the incorrect answer.");
    timerCount = timerCount - 10;
    timeLost = timeLost + 10;
    console.log("User docked 10 seconds.");
    resultsEL.setAttribute("style", "color:red");
    resultsEL.innerHTML = "Wrong!";
    timerEL.setAttribute("style", "color:red");
  }
  currentAns++;
  if (currentAns < qnaArray.length && timerCount > 0) {
    displayQuestions();
  }
}

// Function to start quiz.

function startQuiz(event) {
  event.preventDefault();
  tally = 0;
  startButton.innerHTML = "";
  startButton.setAttribute("style", "background-color: white; border: 0px");
  currentAns = 0;
  startTimer();
  displayQuestions();
}

// Function to end quiz.

function endQuiz() {
  timerEL.textContent = "";
  clearInterval(timer);
  alert("Game Over!");
  questionEL.textContent = "Quiz Results:";
  answersEL.textContent =
    "Your score is " +
    tally +
    "/10 which equals " +
    (tally * 100) / 10 +
    "%. You were docked " +
    timeLost +
    " seconds for incorrect answers.";
  resultsEL.setAttribute("style", "color:black");
  resultsEL.textContent = "Please enter your initials below:";
  hsButton.addEventListener("click", getHS);
  inputEl.setAttribute("style", "border: 5px; background-color: lightblue");
  hsButton.setAttribute("style", "border: 5px; background-color: blue");
}

//Function to get high score.

function getHS() {
  let initials = inputEl.value;
  hsArray.push({ initials: initials.toUpperCase(), score: tally });
  // Aternate:
  // let scoreobject={
  //   initials: initials.toUpperCase(), 
  //   score: tally
  // }
  //   hsArray.push(scoreobject);
  console.log(hsArray);
  localStorage.setItem("hsArray", JSON.stringify(hsArray));
  displayHS();
}

//Function to display high scores.

function displayHS() {
  console.log("Displays HS");
  questionEL.textContent = "High Scores:";
  answersEL.textContent = "";
  resultsEL.innerHTML = "";
  formEl.innerHTML = "";
  hsButton.textContent = "";
  hsButton.setAttribute(
    "style",
    "color: white; background-color: white; border: 0px;"
  );
  let highscores = JSON.parse(localStorage.getItem("hsArray"));
  highscores.sort();
  for (let i = 1; i < highscores.length; i++) {
    console.log(highscores[i].initials + highscores[i].score);
    answersEL.innerHTML += `<p>${highscores[i].initials} ${highscores[i].score}</p>`;
  }
  exitHS();
}

// Function to exit high scores.

function exitHS() {
  formEl.innerHTML = `<button id="startButton><a href="index.html">Return To Game</a></button>`;
  timerCount = 60;
  timerEL.textContent = "";
}

// End of Javascript.

// Took me forever to fully compete this. Imperfect, ineffecient, but it works!
