let timeLeft = 900; // 15 minutes for the quiz (900 seconds)
let timerId;
let currentQuestionIndex = 0;
let score = 0; // Initialize score

const questions = [
    {
        question: "好きな色は人によって__ます。",
        options: ["違う", "尋ねる", "感じる", "比べる"],
        answer: "違う"
    },
    {
        question: "別の実験では同じ形で同じ大きさの箱を2つ持ってもらって、どちらの箱が重いか____ました。",
        options: ["違う", "尋ねる", "感じる", "比べる"],
        answer: "尋ねる"
    },
    {
        question: "きっと青を見ると涼しく____のではないでしょうか。",
        options: ["違う", "尋ねる", "感じる", "比べる"],
        answer: "感じる"
    },
    {
        question: "明るい色に____、暗い色はなんとなく重く感じるようです。",
        options: ["違って", "尋ねて", "感じて", "比べて"],
        answer: "比べて"
    },
];

function startTimer() {
    timeLeft = 900; // Reset to 15 minutes (900 seconds)
    updateTimerDisplay(timeLeft);
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerId);
            endQuiz(); // Call endQuiz when time is up
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('time').textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

function loadQuestion() {
    // Hide the result images and reset their animation classes
    const correctImage = document.querySelector(".correct");
    const incorrectImage = document.querySelector(".incorrect");
    correctImage.style.display = 'none';
    incorrectImage.style.display = 'none';
    correctImage.classList.remove('show', 'animate');
    incorrectImage.classList.remove('show', 'animate');

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    // Shuffle the options before displaying
    const shuffledOptions = [...currentQuestion.options];
    shuffleOptions(shuffledOptions);

    shuffledOptions.forEach(option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);

        // Add click event to change background color on selection
        label.addEventListener('click', () => {
            // Reset background color for all labels
            const allLabels = document.querySelectorAll('label');
            allLabels.forEach(lbl => {
                lbl.style.backgroundColor = ''; // Reset background color
                lbl.style.color = '';
            });
            // Set background color for the selected label
            label.style.backgroundColor = '#218838'; // Change to your desired color
            label.style.color = 'white';
        });
    });
}

function checkAnswers(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        score++; // Increment score for correct answer
        return true; // Indicate correct answer
    }
    return false; // Indicate incorrect answer
}

function checkAnswer() {
    if (timeLeft <= 0) {
        document.getElementById('endMessage').style.display = 'block'; // Show end message
        return; // Prevent further actions if the quiz has ended
    }
    
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        document.getElementById('result').textContent = "Mohon pilih salah satu jawaban";
        return;
    }

    const userAnswer = selectedOption.value;    

    const correctAnswer = questions[currentQuestionIndex].answer;

    // Lock the options after selection
    const allOptions = document.querySelectorAll('input[name="option"]');
    allOptions.forEach(option => {
        option.disabled = true; // Disable all radio buttons
    });

    // Set the selected label's background color
    const selectedLabel = selectedOption.parentElement; // Get the label element
    const correctImage = document.querySelector(".correct");
    const incorrectImage = document.querySelector(".incorrect");

    if (checkAnswers(userAnswer, correctAnswer)) {
        selectedLabel.style.backgroundColor = 'green'; // Change to green for correct answer
        selectedLabel.style.color = 'white';

        // Show and animate the correct image
        correctImage.style.display = 'block';
        correctImage.classList.add('show', 'animate');
        setTimeout(() => {
            correctImage.classList.remove('animate'); // Reset animation class
        }, 500); // Duration of the animation
    } else {
        selectedLabel.style.backgroundColor = 'red'; // Change to red for incorrect answer

        // Show and animate the incorrect image
        incorrectImage.style.display = 'none';
        incorrectImage.classList.add('show', 'animate');
        setTimeout(() => {
            incorrectImage.classList.remove('animate'); // Reset animation class
        }, 500); // Duration of the animation
    }

    // Highlight the correct answer
    const correctLabel = Array.from(allOptions).find(option => option.value === correctAnswer).parentElement;
    correctLabel.style.backgroundColor = 'green'; // Change to green for the correct answer
    correctLabel.style.color = 'white';

    document.getElementById('result').textContent = userAnswer === correctAnswer 
        ? "Sugoii! " + correctAnswer + " adalah jawaban yang benar." 
        : "Kamu salah. Jawaban yang benar adalah " + correctAnswer + ".";

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz(); // Call endQuiz when all questions have been answered
        }
    }, 2000); // Wait for 2 seconds before loading the next question
}

function endQuiz() {
    clearInterval(timerId); // Stop the timer
    const allOptions = document.querySelectorAll('input[name="option"]');
    allOptions.forEach(option => {
        option.disabled = true; // Disable all radio buttons
    });
    document.getElementById('result').textContent = `Kuis telah usai! Skor kamu adalah ${score} dari ${questions.length}.`;
    document.getElementById('result').style.display = "block"; // Show the modal

}

// Start the timer and load the first question when the page loads
window.onload = () => {
    startTimer();
    loadQuestion();
};


// Check for saved user preference, if any, on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    logo.src = "images/logo doiku white.png";
} else {
    document.body.classList.remove('dark-mode');
}
