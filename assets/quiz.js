//Questions for quiz
let quizQuestions = [ {
    question: "What is used primarily to add styling to a web page?",
    choiceA: "CSS",
    choiceB: "HTML",
    choiceC: "Javascript",
    choiceD: "Python",
    correctAnswer: "a"
},

{
    question: "The 'Id' attribute can have how many elements?",
    choiceA: "Unlimited",
    choiceB: "1",
    choiceC: "6",
    choiceD: "3",
    correctAnswer: "b"
},

{
    question: "Which array method removes the last element from an array?",
    choiceA: "Push",
    choiceB: "Fill",
    choiceC: "Slice",
    choiceD: "Pop",
    correctAnswer: "d"
},

{
    question: "Which is not a programming language?",
    choiceA: "Java",
    choiceB: "House",
    choiceC: "Python",
    choiceD: "Javascript",
    correctAnswer: "b"
},

{
    question: "The expression for the word 'or' is?",
    choiceA: "&&",
    choiceB: "||",
    choiceC: "===",
    choiceD: "+=",
    correctAnswer: "b"
},

];


let questionContainerElement = document.querySelector("#question-container");
let highscore = document.querySelector("#score");
let startButton = document.querySelector("#start");
let questionElement = document.querySelector("#questions");
let answerButtonElement = document.querySelector(".ansBtn");


//when i click start the certain buttons will disappear
startButton.addEventListener("click", startQuiz);

function startQuiz() {

startButton.classList.add("hide")
questionElement.classList.remove("hide");
highscore.classList.add("hide");



let time = 0;
let countdown;
time = 10;
document.querySelector("#timeLeft").innerHTML = time;

countdown = setInterval(function() {
time--;
document.querySelector("#timeLeft").innerHTML = time;
if (time <=0) {
    clearInterval(countdown);
 return startButton.classList.remove("hide"),
 highscore.classList.remove("hide")

}

}, 1000);


}







