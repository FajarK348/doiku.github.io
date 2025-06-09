const questions = [
    {
        sentence: "まさに期待どおりのラーメンを味わった。",
        words: ["まさに", "期待どおり", "の", "ラーメン", "を", "味わった"],
        placeholders: 6
    },
    {
        sentence: "きっと違う味がするのではないか。",
        words: [ "きっと", "違う", "味", "が", "する", "のではないか"],
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
let timeLeft = 5 * 60; // 15 minutes in seconds

// History stack to keep track of placeholder states for undo
const historyStack = [];

// Save current state of placeholders to history stack
function saveState() {
    const currentState = Array.from(placeholders).map(ph => ph.textContent);
    historyStack.push(currentState);
    updateUndoButton();
}

// Restore state from history stack
function undo() {
    if (historyStack.length === 0) return;
    const prevState = historyStack.pop();
    placeholders.forEach((ph, index) => {
        ph.textContent = prevState[index];
        if (prevState[index] === '_____') {
            ph.classList.remove('filled', 'correct', 'incorrect');
        } else {
            ph.classList.add('filled');
            ph.classList.remove('correct', 'incorrect');
        }
    });
    updateUndoButton();
}

// Enable or disable undo button based on history stack
function updateUndoButton() {
    const undoButton = document.getElementById('undoButton');
    if (!undoButton) return;
    undoButton.disabled = historyStack.length === 0;
}

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
            saveState(); // Save state before changing
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

// Setup undo button event listener
const undoButton = document.getElementById('undoButton');
if (undoButton) {
    undoButton.addEventListener('click', () => {
        undo();
    });
    updateUndoButton();
}

// Check for saved user preference, if any, on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    logo.src = "images/logo doiku white.png";
} else {
    document.body.classList.remove('dark-mode');
}

document.addEventListener('DOMContentLoaded', function() {
    const previousBtn = document.getElementById('previousBtn');
    if (previousBtn) {
        previousBtn.addEventListener('click', function() {
            // Try to go back in history
            if (window.history.length > 1) {
                history.back();
            } else {
                // Fallback URL if no history
                window.location.href = 'DOdo.html';
            }
        });
    }
});