var quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars"
    },
   
  ];

  
  
  localStorage.setItem("quizData", JSON.stringify(quizData));

  
  
  var currentQuestion = 0;
  var score = 0;
  
  function loadQuestion() {
    var quiz = JSON.parse(localStorage.getItem("quizData"));
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var currentQuiz = quiz[currentQuestion];
  
    questionElement.textContent = currentQuiz.question;

    optionsElement.innerHTML = "";
    currentQuiz.options.forEach(option => {
      var button = document.createElement("button");
      button.style.width="250px"
      button.style.height="30px"
      button.style.marginLeft="30px"
      button.style.marginTop="20px"
      button.style.backgroundColor="lightgrey"
      button.textContent = option;
      button.onclick = checkAnswer;
      
      optionsElement.appendChild(button);
    });
  
    if (currentQuestion === 0) {
      document.getElementById("prev").style.display = "none";
    } else {
      document.getElementById("prev").style.display = "inline-block";
    }
  
    if (currentQuestion === quiz.length - 1) {
      document.getElementById("next").style.display = "none";
      document.getElementById("submit").style.display = "inline-block";
    } else {
      document.getElementById("next").style.display = "inline-block";
      document.getElementById("submit").style.display = "none";
    }
  }
  
  function checkAnswer(event) {
    var userAnswer = event.target.textContent;
    var quiz = JSON.parse(localStorage.getItem("quizData"));
    if (userAnswer === quiz[currentQuestion].answer) {
      score++;
    }
  }
  
  document.getElementById("prev").onclick = function() {
    currentQuestion--;
    loadQuestion();
  };
  
  document.getElementById("next").onclick = function() {
    currentQuestion++;
    loadQuestion();
  };
  
  document.getElementById("submit").onclick = function() {
    alert("Your score is: " + score);
  };

  loadQuestion();