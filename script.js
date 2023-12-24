const userInfoContainer = document.getElementById('user-info');
const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');

let currentQuestionIndex = 0;
let userScore = 0;

const questions = [
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Hyperlink and Text Markup Language', 'High-level Text Markup Language'],
        correctAnswer: 0
    },
    {
        question: 'Which of the following is not a valid HTML element?',
        options: ['div', 'span', 'paragraph'],
        correctAnswer: 2
    },
    {
       question: 'What does CSS stand for?',
       options: ['ColorFull style sheet', 'Cascading Style Sheet', 'Creative Style Sheet'],
       correctAnswer: 1
    },
    {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        options: ['At the end of the document', 'In the Head section', 'In the body section'],
        correctAnswer: 1
     },
     {
        question: 'Which HTML tag is used to define an internal style sheet?',
        options: ['Style', 'Script', 'Src'],
        correctAnswer: 2
     }
    // Mazeed sawal yaha add kry
];

function startQuiz() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const rollNo = document.getElementById('rollNo').value;

    if (firstName && lastName && rollNo) {
        userInfoContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        displayQuestion();
    } else {
        alert('Please fill in all the information.');
    }
}



function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        optionsContainer.innerHTML += `
            <input type="radio" name="option" value="${index}" id="option${index}">
            <label for="option${index}">${option}</label><br>
        `;
    });
}


function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const userAnswer = parseInt(selectedOption.value);
        const currentQuestion = questions[currentQuestionIndex];

        if (userAnswer === currentQuestion.correctAnswer) {
            userScore++;
            optionsContainer.innerHTML += '<span class="tick">&#10004;</span>';
        } else {
            optionsContainer.innerHTML += '<span class="cross">&#10008;</span>';
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert('Please select an option.');
    }
}

function endQuiz() {
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
    <p>Your score: ${userScore}/${questions.length}</p>`;
}


function endQuiz() {
    const passThreshold = 2;
    const resultMessage = userScore >= passThreshold ? 'Congratulations! You passed!' : 'Oops! App fail ho gay. Better luck next time.';

    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score: ${userScore}/${questions.length}</p>
        <p>${resultMessage}</p>
    `;

    if (userScore >= passThreshold) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        document.body.appendChild(confetti);
    }
}
// modefid
function startQuiz() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const rollNo = document.getElementById('rollNo').value;

    if (firstName && lastName && rollNo) {
        // Check if the user has already taken the quiz
        const hasTakenQuiz = localStorage.getItem(`quiz_${rollNo}`);

        if (hasTakenQuiz) {
            alert('You have already taken the quiz. You cannot take it again.');
        } else {
            userInfoContainer.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            displayQuestion();
        }
    } else {
        alert('Please fill in all the information.');
    }
}

function endQuiz() {
    const passThreshold = 2;
    const resultMessage = userScore >= passThreshold ? 'Congratulations! You passed!' : 'Oops! App fail ho gay. Better luck next time.';

    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score: ${userScore}/${questions.length}</p>
        <p>${resultMessage}</p>
    `;

    if (userScore >= passThreshold) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        document.body.appendChild(confetti);
    }

    // Save the information that the user has taken the quiz
    localStorage.setItem(`quiz_${document.getElementById('rollNo').value}`, 'taken');
}


