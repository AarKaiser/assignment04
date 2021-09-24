let timerEL = document.querySelector("#timeLeft");
let questionEL = document.querySelector("#question");
let answersEL = document.querySelector("#answers");
let hrEl = document.querySelector("#hr");
let resultsEL = document.querySelector("#result")
let scoresEl = document.querySelector("#highScores");
let formEl = document.querySelector("#form")
let startBTN = document.querySelector("#startButton");
let quizBoard = document.querySelector("#quizBoard")

let timer;
let timerCount = 60;
let timeLost = 0;
let tally;
let currentAns;

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
    question: "Which developer tool do we use to review our code in a browswer?",
    answers: ["Shoesole", "Prosole", "Console", "Solecon"],
    correct: "Console",
  },
];

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

function displayQuestions() {
    questionEL.textContent = qnaArray[currentAns].question;
    answersEL.innerHTML = ''
    qnaArray[currentAns].answers.forEach(index => {
        let btnEl = document.createElement("button");
        btnEl.textContent = index
        btnEl.addEventListener("click", checkAnswer)
        let brEl = document.createElement("br");
        answersEL.appendChild(btnEl);
        answersEL.appendChild(brEl);
    })
}

function checkAnswer(event) {
    console.log("User selected " + event.target.textContent);
    if(event.target.textContent === qnaArray[currentAns].correct){
        console.log("Which is the correct answer.");
        tally++;
        console.log("Score is: " + tally)
        resultsEL.setAttribute("style", "color:blue")
        resultsEL.textContent = "Right!";
    }else {
        console.log("Which is the incorrect answer.")
        timerCount = timerCount - 10;
        timeLost = timeLost + 10;
        console.log("User docked 10 seconds.");
        resultsEL.setAttribute("style", "color:red")
        resultsEL.innerHTML = "Wrong!";
        timerEL.setAttribute("style", "color:red");
    }
    currentAns++;
    if((currentAns < qnaArray.length) && (timerCount > 0)){
        displayQuestions()
    }
}

function startQuiz(event) {
  event.preventDefault();
  tally = 0;
  startButton.innerHTML = "";
  startButton.setAttribute("style", "background-color: white; border: 0px")
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
    resultsEL.setAttribute("style", "color:black");
    resultsEL.textContent = "Please enter your initials below:"
}

// I was unable to complete this assignment because I've spent hours trying to propogate information to resultsEL which dI was eventuallu able to fix! (mistake was in my HTML, and I spent ten hours looking in my script). Will be working on my high scor next.//