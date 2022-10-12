const startButton = document.getElementById('start-btn')
const nextButton = documnet.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

setNextQuestion()
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
shuffledQuestions = question.sort(() => Math.random() - .5)
let currentSlide = 0;

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion() {
    restState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function restState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild (answerButtonElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: "Who invented JavaScript?",
        answers: [
        { text: "Douglas Crockford"},
        { text: "Sheryl Sandberg"},
        { text: "Brendan Eich"}
        ]
    },
        correctAnswer "Brendan Eich"
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: [
         { text: "Node.js"},
         { text: "TypeScript"},
         { text: "npm"}
        ]
    },
        correctAnswer "npm"
    {
         question: "Which tool can you use to ensure code quality?",
        answers: [
        { text: "Angular"},
        { text: "jQuery"},
        { text "RequireJS"},
        { text: "ESLint"}
        ]
    },
        correctAnswer "ESLint"

];  





