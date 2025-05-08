const questions = [
    { question: "好きな色は人によって違います。", answer: true },
    { question: "暗い色より明るい色のほうが好きな人は性格も暗いでしょうか", answer: false },
    { question: "夏の暑い日はのどが渇きます。", answer: true },
    { question: "暗い色に比べて、明るい色はなんとなく重く感じるようです。", answer: false },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 900; // Set the timer for 60 seconds 

const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const trueImg = document.getElementById('trueImg');
const falseImg = document.getElementById('falseImg');

// Timer elements
const timerElement = document.createElement('div');
timerElement.id = 'timer';
document.querySelector('.quiz-container').insertBefore(timerElement, resultElement);

function startTimer(duration) {
    let timeRemaining = duration;
    timer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            endQuiz();
        }
        timeRemaining--;
    }, 1000);
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        resultElement.textContent = '';
    } else {
        endQuiz();
    }
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (answer === correctAnswer) {
        score++;
        resultElement.textContent = "Maru desu!";
        const correctAnimation = document.getElementById('correctAnimation');
        correctAnimation.style.display = 'block'; // Show the animation
        correctAnimation.classList.add('show'); // Add the class for animation


        setTimeout(() => {
            correctAnimation.classList.remove('show'); // Remove the class after a delay
            correctAnimation.style.display = 'none'; // Hide the animation after a delay


        }, 2000); // Adjust the delay as needed
    } else {
        resultElement.textContent = "Batsu desu!";
    }


    // Load the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000); // 1 second delay
}

function endQuiz() {
    questionElement.textContent = `Kuis telah usai, selamat kamu menjawab dengan benar ${score} dari ${questions.length} soal`;
    trueImg.style.display = 'none';
    falseImg.style.display = 'none';
    timerElement.textContent = ''; // Clear the timer
    resultElement.textContent = ''; // Clear the result element
}

trueImg.addEventListener('click', () => checkAnswer(true));
falseImg.addEventListener('click', () => checkAnswer(false));

// Start the quiz and timer
loadQuestion();
startTimer(15 * 60); // 15 minutes in seconds

// Check for saved user preference, if any, on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    logo.src = "images/logo doiku white.png";
} else {
    document.body.classList.remove('dark-mode');
}
