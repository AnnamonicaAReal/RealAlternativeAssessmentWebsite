
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.createElement("p");
questionText.parentNode.insertBefore(timerDisplay, questionText.nextSibling);

let currentQuestionIndex = 0;
let score = 0;
let timeLeft;
let timerInterval;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = [
        {
            question: "What is the main problem in this project?",
            answers: [
                { text: "Poverty", correct: true },
                { text: "Climate Change", correct: false },
                { text: "Deforestation", correct: false },
                { text: "Unemployment", correct: false }
            ]
        },
        {
            question: "What are the 3 basic needs that people who suffer poverty do not have?",
            answers: [
                { text: "Internet, Gadgets, and Electricity", correct: false },
                { text: "Food, Shelter, and Clothing", correct: true },
                { text: "Luxury, Travel, and Cars", correct: false },
                { text: "Fast Food, TV, and Social Media", correct: false }
            ]
        },
        {
            question: "What are the 2 things that people in poverty struggle to have even for their families?",
            answers: [
                { text: "Entertainment & Vacations", correct: false },
                { text: "Fast Food & Designer Clothes", correct: false },
                { text: "Luxury Cars & Jewelry", correct: false },
                { text: "Healthcare & Education", correct: true }
            ]
        },
        {
            question: "As of 2021, approximately what percentage of the world's population suffers from poverty?",
            answers: [
                { text: "15%", correct: false },
                { text: "9.2%", correct: true },
                { text: "5%", correct: false },
                { text: "20%", correct: false }
            ]
        },
        {
            question: "How much estimated amount of kids were out of school in 2018?",
            answers: [
                { text: "100 million children", correct: false },
                { text: "500 million children", correct: false },
                { text: "258 million children", correct: true },
                { text: "1 billion children", correct: false }
            ]
        },
        {
            question: "What type of diseases lead to higher rates due to limited access to healthcare services?",
            answers: [
                { text: "Chronic diseases", correct: true },
                { text: "Common cold", correct: false },
                { text: "Headaches", correct: false },
                { text: "Allergies", correct: false }
            ]
        }
    ][currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    startTimer();

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
    clearInterval(timerInterval);
    timerDisplay.innerText = "";
}

function selectAnswer(button, isCorrect) {
    clearInterval(timerInterval);
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    
    Array.from(answerButtons.children).forEach(btn => {
        const answerObj = [
            {
                question: "What is the main problem in this project?",
                answers: [
                    { text: "Poverty", correct: true },
                    { text: "Climate Change", correct: false },
                    { text: "Deforestation", correct: false },
                    { text: "Unemployment", correct: false }
                ]
            },
            {
                question: "What are the 3 basic needs that people who suffer poverty do not have?",
                answers: [
                    { text: "Internet, Gadgets, and Electricity", correct: false },
                    { text: "Food, Shelter, and Clothing", correct: true },
                    { text: "Luxury, Travel, and Cars", correct: false },
                    { text: "Fast Food, TV, and Social Media", correct: false }
                ]
            },
            {
                question: "What are the 2 things that people in poverty struggle to have even for their families?",
                answers: [
                    { text: "Entertainment & Vacations", correct: false },
                    { text: "Fast Food & Designer Clothes", correct: false },
                    { text: "Luxury Cars & Jewelry", correct: false },
                    { text: "Healthcare & Education", correct: true }
                ]
            },
            {
                question: "As of 2021, approximately what percentage of the world's population suffers from poverty?",
                answers: [
                    { text: "15%", correct: false },
                    { text: "9.2%", correct: true },
                    { text: "5%", correct: false },
                    { text: "20%", correct: false }
                ]
            },
            {
                question: "How much estimated amount of kids were out of school in 2018?",
                answers: [
                    { text: "100 million children", correct: false },
                    { text: "500 million children", correct: false },
                    { text: "258 million children", correct: true },
                    { text: "1 billion children", correct: false }
                ]
            },
            {
                question: "What type of diseases lead to higher rates due to limited access to healthcare services?",
                answers: [
                    { text: "Chronic diseases", correct: true },
                    { text: "Common cold", correct: false },
                    { text: "Headaches", correct: false },
                    { text: "Allergies", correct: false }
                ]
            }
        ][currentQuestionIndex].answers.find(a => a.text === btn.innerText);
        if (answerObj.correct) {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    
    nextButton.style.display = "block";
}

function startTimer() {
    timeLeft = 30;
    timerDisplay.innerText = `Time left: ${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showTimeOutMessage();
        }
    }, 1000);
}

function showTimeOutMessage() {
    questionText.innerHTML = "Oh no! :( You ran out of time!";
    answerButtons.innerHTML = `
        <button onclick="startQuiz()">Retake Quiz</button>
        <button onclick="window.location.href='index.html'">Go to Homepage</button>
    `;
    nextButton.style.display = "none";
    timerDisplay.innerText = "";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < [
        {
            question: "What is the main problem in this project?",
            answers: [
                { text: "Poverty", correct: true },
                { text: "Climate Change", correct: false },
                { text: "Deforestation", correct: false },
                { text: "Unemployment", correct: false }
            ]
        },
        {
            question: "What are the 3 basic needs that people who suffer poverty do not have?",
            answers: [
                { text: "Internet, Gadgets, and Electricity", correct: false },
                { text: "Food, Shelter, and Clothing", correct: true },
                { text: "Luxury, Travel, and Cars", correct: false },
                { text: "Fast Food, TV, and Social Media", correct: false }
            ]
        },
        {
            question: "What are the 2 things that people in poverty struggle to have even for their families?",
            answers: [
                { text: "Entertainment & Vacations", correct: false },
                { text: "Fast Food & Designer Clothes", correct: false },
                { text: "Luxury Cars & Jewelry", correct: false },
                { text: "Healthcare & Education", correct: true }
            ]
        },
        {
            question: "As of 2021, approximately what percentage of the world's population suffers from poverty?",
            answers: [
                { text: "15%", correct: false },
                { text: "9.2%", correct: true },
                { text: "5%", correct: false },
                { text: "20%", correct: false }
            ]
        },
        {
            question: "How much estimated amount of kids were out of school in 2018?",
            answers: [
                { text: "100 million children", correct: false },
                { text: "500 million children", correct: false },
                { text: "258 million children", correct: true },
                { text: "1 billion children", correct: false }
            ]
        },
        {
            question: "What type of diseases lead to higher rates due to limited access to healthcare services?",
            answers: [
                { text: "Chronic diseases", correct: true },
                { text: "Common cold", correct: false },
                { text: "Headaches", correct: false },
                { text: "Allergies", correct: false }
            ]
        }
    ].length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    let message = score >= 4 ? "WOOWW!! NICE JOBBB!!! <3" : "Nice Try! I appreciate your effort!";
    questionText.innerHTML = `You scored ${score} out of ${[
        {
            question: "What is the main problem in this project?",
            answers: [
                { text: "Poverty", correct: true },
                { text: "Climate Change", correct: false },
                { text: "Deforestation", correct: false },
                { text: "Unemployment", correct: false }
            ]
        },
        {
            question: "What are the 3 basic needs that people who suffer poverty do not have?",
            answers: [
                { text: "Internet, Gadgets, and Electricity", correct: false },
                { text: "Food, Shelter, and Clothing", correct: true },
                { text: "Luxury, Travel, and Cars", correct: false },
                { text: "Fast Food, TV, and Social Media", correct: false }
            ]
        },
        {
            question: "What are the 2 things that people in poverty struggle to have even for their families?",
            answers: [
                { text: "Entertainment & Vacations", correct: false },
                { text: "Fast Food & Designer Clothes", correct: false },
                { text: "Luxury Cars & Jewelry", correct: false },
                { text: "Healthcare & Education", correct: true }
            ]
        },
        {
            question: "As of 2021, approximately what percentage of the world's population suffers from poverty?",
            answers: [
                { text: "15%", correct: false },
                { text: "9.2%", correct: true },
                { text: "5%", correct: false },
                { text: "20%", correct: false }
            ]
        },
        {
            question: "How much estimated amount of kids were out of school in 2018?",
            answers: [
                { text: "100 million children", correct: false },
                { text: "500 million children", correct: false },
                { text: "258 million children", correct: true },
                { text: "1 billion children", correct: false }
            ]
        },
        {
            question: "What type of diseases lead to higher rates due to limited access to healthcare services?",
            answers: [
                { text: "Chronic diseases", correct: true },
                { text: "Common cold", correct: false },
                { text: "Headaches", correct: false },
                { text: "Allergies", correct: false }
            ]
        }
    ].length}!<br><br><strong>${message}</strong>`;
    answerButtons.innerHTML = `
        <button onclick="startQuiz()">Retake Quiz</button>
        <a href="Breaking Bread.html">Back to Homepage</a>
    `;
    nextButton.style.display = "none";
    timerDisplay.innerText = "";
}

startQuiz();
