const words = document.querySelectorAll('.word');
    const blanks = document.querySelectorAll('.blank');
    const undoButton = document.getElementById('undo-button');
    const submitButton = document.getElementById('submit-button');
    const timerDisplay = document.getElementById('timer');
    const resultDisplay = document.getElementById('result');
    const animation = document.getElementById('animation');

    let draggedWord = null;
    let filledBlanksStack = []; // Stack to track filled input fields

    words.forEach(word => {
        word.addEventListener('dragstart', () => {
            draggedWord = word;
            setTimeout(() => {
                word.style.display = 'none';
            }, 0);
        });

        word.addEventListener('dragend', () => {
            setTimeout(() => {
                word.style.display = 'block';
                draggedWord = null;
            }, 0);
        });
    });

    blanks.forEach(blank => {
        blank.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        blank.addEventListener('drop', () => {
            if (draggedWord) {
                blank.value = draggedWord.textContent;
                filledBlanksStack.push(blank); // Push the filled blank onto the stack
                draggedWord = null;
            }
        });
    });

    undoButton.addEventListener('click', () => {
        if (filledBlanksStack.length > 0) {
            const lastFilledBlank = filledBlanksStack.pop(); // Pop the last filled input
            lastFilledBlank.value = ''; // Clear its value
        }
    });

    submitButton.addEventListener('click', () => {
        let score = 0;
        blanks.forEach(blank => {
            if (blank.value === blank.dataset.answer) {
                score++;
            }
        });
        resultDisplay.textContent = `Kuis telah usai, selamat kamu menjawab dengan benar ${score} dari ${blanks.length} soal`;
        animation.style.display = 'block'; // Show the animation
    });

    // Timer functionality
    let timeLeft = 300; // 15 minutes in seconds
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            resultDisplay.textContent = "Time's up! Please submit your answers.";
            return;
        }
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);

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