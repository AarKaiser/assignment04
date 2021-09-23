let timerEL = document.querySelector("#timeLeft");
let questionEL = document.querySelector("#question");
let answersEL = document.querySelector("#answers");
let resultsEL = document.querySelector("#result")
let scoresEl = document.querySelector("#highScores");
let startBTN = document.querySelector("#startButton");
let quizBoard = document.querySelector("#quizBoard")

let timer;
let timerCount = 60;
let tally;
let currentAns;
let timeLost = 0;

let qnaArray = [
  {
    question: "What type of element is a <p> in HTML?",
    answers: ["Header", "Body", "Paragraph", "Main"],
    rAns: "Paragraph",
  },
  {
    question: "What language is primarily used to style a web page?",
    answers: ["HTML", "CSS", "JavaScript", "C++"],
    rAns: "CSS",
  },
  {
    question: "Which is not the name of one of your instructors?",
    answers: ["Deep", "Luca", "Lucifer", "Devon"],
    rAns: "Lucifer",
  },

  {
    question: "How difficult was this assignment?",
    answers: ["Easy", "Difficult", "Hard", "Impossible"],
    rAns: "Hard",
  },
  {
    question: "Where is it best practice to code your aceessibility features?",
    answers: ["HTML", "CSS", "JavaScript", "Terminal"],
    rAns: "CSS",
  },

  {
    question: "Which day do we not have class?",
    answers: ["Monday", "Wednesday", "Friday", "Saturday"],
    rAns: "Saturday",
  },

  {
    question: "Which company created Bootsrap?",
    answers: ["Twitter", "Amazon", "Tesla", "Microsoft"],
    rAns: "Twitter",
  },
  {
    question: "Which program do we use to write code in class?",
    answers: ["Virtual Studio Code", "Notepad", "Terminal", "Spotify"],
    rAns: "Computer",
  },
  {
    question: "Which of the following is not a browser?",
    answers: ["Chrome", "Steel", "Firefox", "Opera"],
    rAns: "Steel",
  },
  {
    question: "Which developer tool do we use to review our code in a browswer?",
    answers: ["Shoesole", "Prosole", "Console", "Solecon"],
    rAns: "Console",
  },
];

startButton.addEventListener("click", startQuiz);
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEL.textContent = "Time Left: " + timerCount;
    // console.log("Timer Count: " + timerCount);
    if (timerCount <= 0 || currentAns >= qnaArray.length) {
      endQuiz();
    }
  }, 1000);
}

function displayQuestions() {

    questionEL.textContent = qnaArray[currentAns].question;
    answersEL.innerHTML = ''
    qnaArray[currentAns].answers.forEach(index => {
        let btnEl = document.createElement("button");
        btnEl.textContent = index
        //addeventlistener to each btnEl created
        btnEl.addEventListener("click", checkAnswer)
        let brEl = document.createElement("br");
        answersEL.appendChild(btnEl)
        answersEL.appendChild(brEl)
    })
}

function checkAnswer(event) {
    console.log("User selected " + event.target.textContent);
    if(event.target.textContent === qnaArray[currentAns].rAns){
        console.log("Which is the correct answer.");
        tally++;
        console.log("Score is: " + tally)
        resultsEL.innerHTML = "Correct!";
    }else {
        console.log("Which is the incorrect answer.")
        timerCount = timerCount - 10;
        timeLost = timeLost + 10;
        console.log("User docked 10 seconds.")
        resultsEL.innerHTML = "Incorrect!";
        timerEL.textContent = "Docked 10 seconds!";
    }

    currentAns++
    if((currentAns < qnaArray.length) && (timerCount > 0)){
        displayQuestions()
    }
}

function startQuiz(event) {
  event.preventDefault();
  tally = 0;
  startButton.textContent = "";
  currentAns = 0;
  startTimer();
  displayQuestions();
}

function endQuiz() {
    clearInterval(timer);
    questionEL.textContent = "Quiz Results:";
    alert("Game Over!");
    answersEL.textContent = "Your score is " + tally + "/10 which equals " + ((tally*100)/10) + "%. You were docked " + timeLost + " seconds for incorrect answers."
    timerEL.textContent = ""
    resultsEL.textContent = "Please enter your initials: [Form Will Go Here]";
}