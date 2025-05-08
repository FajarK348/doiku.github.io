const questions = [
    {
        sentence: "私はオレンジが好きです。",
        words: ["私", "は", "オレンジ", "が", "好き", "です"],
        placeholders: 6
    },
    {
        sentence: "坂本さんは日本人です",
        words: ["坂本", "さん", "は", "日本", "人", "です"],
        placeholders: 6
    }
];

let currentQuestionIndex = 0;
let score = 0; // Initialize score
const placeholders = document.querySelectorAll('.placeholder');
const wordsContainer = document.getElementById('words');
const checkAnswersButton = document.getElementById('checkAnswers');
const resultDiv = document.getElementById('result');
const timerDisplay = document.getElementById('timer');
const correctImage = document.getElementById('correctImage'); // Correct image element
let draggedWord = null;
let timer; // Timer variable
let timeLeft = 15 * 60; // 15 minutes in seconds

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function loadQuestion() {
    wordsContainer.innerHTML = '';
    resultDiv.textContent = '';
    correctImage.style.display = 'none'; // Hide the image initially

    const currentQuestion = questions[currentQuestionIndex];
    const sentenceElement = document.getElementById('sentence');
    
    placeholders.forEach(placeholder => {
        placeholder.textContent = '_____';
        placeholder.classList.remove('correct', 'incorrect'); // Reset classes
    });

    // Shuffle the words before displaying
    const shuffledWords = [...currentQuestion.words]; // Create a copy of the words array
    shuffleArray(shuffledWords);

    shuffledWords.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.draggable = true;
        wordElement.textContent = word;

        wordElement.addEventListener('dragstart', () => {
            draggedWord = wordElement;
            setTimeout(() => {
                wordElement.style.display = 'none';
            }, 0);
        });

        wordElement.addEventListener('dragend', () => {
            setTimeout(() => {
                wordElement.style.display = 'block';
                draggedWord = null;
            }, 0);
        });

        wordsContainer.appendChild(wordElement);
    });
}

// Timer function
function startTimer() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            resultDiv.textContent = 'Time is up! Quiz completed!';
            checkAnswersButton.disabled = true;
            return;
        }
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    placeholder.addEventListener('drop', () => {
        if (draggedWord) {
            placeholder.textContent = draggedWord.textContent;
            placeholder.classList.add('filled');
        }
    });
});

// Check answers for the current question
checkAnswersButton.addEventListener('click', () => {
    const correctOrder = questions[currentQuestionIndex].words;
    const userAnswers = Array.from(placeholders).map(placeholder => placeholder.textContent.trim());

    // Display result message
    resultDiv.textContent = JSON.stringify(userAnswers) === JSON.stringify(correctOrder) ? 'Yeay, kamu benar!' : 'Yah, jawabanmu belum benar.';

    // Show the correct image if the answer is correct
    if (JSON.stringify(userAnswers) === JSON.stringify(correctOrder)) {
        correctImage.style.display = 'block'; // Show the image
        correctImage.classList.add('fadeIn'); // Trigger animation
        score++; }

    // Apply styles to placeholders based on correctness
    placeholders.forEach((placeholder, index) => {
        if (placeholder.textContent.trim() === correctOrder[index]) {
            placeholder.classList.add('correct');
        } else {
            placeholder.classList.add('incorrect');
        }
    });

    // Load the next question after a short delay
    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            resultDiv.textContent = `Kuis telah usai, selamat kamu menjawab dengan benar ${score} dari ${questions.length} soal`;
            checkAnswersButton.disabled = true;
            clearInterval(timer); // Stop the timer when quiz is completed
        }
    }, 2000); // Delay before loading the next question
});

// Initial load
loadQuestion();
startTimer(); // Start the timer when the quiz loads

// Check for saved user preference, if any, on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    logo.src = "images/logo doiku white.png";
} else {
    document.body.classList.remove('dark-mode');
}