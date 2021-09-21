# 04 Web APIs: Code Quiz

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button

//Creating a button in html, and adding a click event listener in JS.
 // HTML: <button =id/class>
    - High score appears on the top left using getItem from local storage. Timer appears to the top right.
    - Flexbox, with space-between.
 // JS: let startBTN = document.querySelector("") (declared at the top of the JS document)
    - let startQuiz = document.querySelector("") (declared at the top of JS doc)
    - let startClick = document.querySelector("") <- (declared at top)>, syntax: function playQuiz () {}
    - call questions function.
    - call the WINS/LOSS function, syntax: getItem. (if you wanted it to show up on start)



THEN a timer starts and I am presented with a question

// When the start button is clicked, a timer function starts and a question with options is presented.
    - JS Syntax: call TimerName() <--- calling timer function by name.
    - HTML: create a container for the questions, results, and highscore.
    - JS create an array of objects, to store questions for questions function.
    - JS syntax suggestion below:
    [{}.{},{},{}]
      [{
          question:somevalue,
          answers:["answer1",2,3,4],
          rigthtanswer:"answer1"
      },
      {
          question:somevalue,
          answers:["answer1",2,3,4],
          rigthtanswer:"answer1"
      },
      },
      {
          question:somevalue,
          answers:["answer1",2,3,4],
          rigthtanswer:"answer1"
      },
      }]
      - Display the questions in the container created for questions, results and highscore.
        - Link HTML in JS Syntax: let QUESTIONSCONTAINER =  document.queryselector("NAME OF THE CONTAINER IN HTML") <--- goes top.
        - HTML: Container is gonna have 3 DIVS, DIV Question1, OL Answer Options WITH OL (append OL using JS), DIVCHILD3 correct or incorrect. document.this.DIV2.push(QUESTION). DIV3 is going to have a border top!
        - JS syntax: QUESTIONCONTAINER.CHILDX.textContent = (done for the question and answers)
      - JS: if question is wrong (ans != correct answer), then we will decrement the timerFunction value by a set numnber.
      - JS: Click event listener for user's selection
      - JS: Based on their selection, we will QUESTIONCONTAINER.CHILDX.textContent = (correct or incorrect using if statement).
      - JS: If the answer is incorrect, we will deduct time from the value held in the timer function.
      - if timer = 0 || all questions answered, we need to escape playQuiz function. and move to scoreboard.

WHEN I answer a question
THEN I am presented with another question
    - Contained in last line of above criteria.
   - JS: run the function above in a loop until the timer is either = 0, or the questions.length = 0.
    // Once condition is met, then move on to next question.

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

// X seconds is subtracted from the timer function when answer != the correct answer.

WHEN all questions are answered or the timer reaches 0
THEN the game is over

// When the timer runs out, or there are no more questions, then the game is over.

WHEN the game is over
THEN I can save my initials and my score


// When the game is over, we will get input from the user for ther initials, and them save it to local storage.
    HTML: create a form with a button to its right.
    JS: Event Listener for submiting your initials, and save it to local storage (localStorage.setItem)

```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
