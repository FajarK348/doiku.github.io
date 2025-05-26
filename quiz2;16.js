let timeLeft = 900; // Set the timer for 60 seconds
const timerElement = document.getElementById('time');
const quizForm = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');

// Start the timer
const timer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz(); // Call endQuiz when time runs out
    } else {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds}`;
        timeLeft--;
    }
}, 1000);

quizForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    clearInterval(timer); // Stop the timer when the quiz is submitted
    endQuiz(); // Call endQuiz when the quiz is submitted
});

function endQuiz() {
    // Fade out the result div if it already has content
    if (resultDiv.innerHTML) {
        resultDiv.classList.add('ease-out');
    }

    // Delay the execution of the score calculation and message display
    setTimeout(() => {
    // Get user answers
    const answer1 = document.getElementById('q1').value.trim().toLowerCase();
    const answer2 = document.getElementById('q2').value.trim().toLowerCase();
    const answer3 = document.getElementById('q3').value.trim().toLowerCase();
    const answer4 = document.getElementById('q4').value.trim().toLowerCase();
    const answer5 = document.getElementById('q5').value.trim().toLowerCase();

    // Correct answers
    const correctAnswers = ['異なる', '梅雨の間', '夏の間', '湿りがち', '異なる'];

    // Check answers
    let score = 0;
    if (answer1 === correctAnswers[0]) score++;
    if (answer2 === correctAnswers[1]) score++;
    if (answer3 === correctAnswers[2]) score++;
    if (answer4 === correctAnswers[3]) score++;
    if (answer5 === correctAnswers[4]) score++;

    // Display result
    resultDiv.innerHTML = `Selamat! Kamu berhasil menjawab dengan benar ${score} dari 5 jumlah soal<br>`;
    
    // Display end message
    if (timeLeft > 0) {
        resultDiv.innerHTML += "";
    } else {
        resultDiv.innerHTML += "Kuis telah usai, maaf kamu sudah tidak bisa menjawab lagi";
    }

    // Show the celebration image with fade-in effect
    celebrationImage.classList.remove('hidden');
    celebrationImage.classList.add('ease-in');

    resultDiv.classList.remove('ease-out');
    }, 1000); // Wait for the fade-out animation to complete before showing the result
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