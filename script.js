
// const questionContainer = document.getElementById('question-container');


const question = [
    {Questions : "What do you understand by HTML?",
answers:[
    {text : "HTML describes the structure of a webpage" , checked : false },
    {text : "HTML is the standard markup language mainly used to create web pages" , checked : false },
    {text : "HTML consists of a set of elements that helps the browser how to view the content" , checked : false },
    {text : "All of the above" , checked : true },

]

},    {Questions : " Who is the father of HTML?" ,
answers:[
    {text : "Rasmus Lerdorf" , checked : false },
    {text : "Tim Berners-Lee" , checked : true },
    {text : "Brendan Eich" , checked : false },
    {text : "Sergey Brin" , checked : false },

]

},    {Questions : "HTML stands for ___",
answers:[
    {text : "HyperText Markup Language" , checked : true },
    {text : "HyperText Marking Language" , checked : false },
    {text : "HighText Machine Language" , checked : false },
    {text : "HyperText Making Language" , checked : false },

]

},    {Questions : "Which is used to read an HTML page and render it?",
answers:[
    {text : "Web server" , checked : false },
    {text : "Web network" , checked : false },
    {text : "Web browser" , checked : true },
    {text : "Web matrix" , checked : false },

]

},

{Questions : "Which tag is used for inserting the largest heading in HTML?",
answers:[
    {text : "head" , checked : false },
    {text : "h1" , checked : true },
    {text : "h6" , checked : false },
    {text : "heading" , checked : false },

]

},

]


const questionelement = document.getElementById('question');
const answerbutton = document.querySelector('#answerbutton');
const next = document.getElementById('next=btn');


let currentQuestionIndex = 0;
let userScore = 0;

function  startquiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    next.innerHTML="next";
    showQuestion();
}
function showQuestion(){
    resetstate()
    let currentQuestion = question[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionelement.innerHTML = questionNo +":  " +currentQuestion.Questions;

    currentQuestion.answers.forEach(answere => {
        const button = document.createElement("button")
        button.innerHTML= answere.text
        button.classList.add("button")
        answerbutton.appendChild(button)
        if(answere.checked){
            button.dataset.checked = answere.checked

        }
       button.addEventListener("click", selectbutton)
    });
}

const resetstate =() =>{
    next.style.display="none"
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild)
    }
}

const selectbutton =(e) =>{
    const  chicebutton = e.target
    const iscoorect = chicebutton.dataset.checked === "true"
if(iscoorect){
    chicebutton.classList.add("correct")
    userScore++;
}else{
    chicebutton.classList.add("incorrect")
}
Array.from(answerbutton.children).forEach(button =>{
    if(button.dataset.checked === "true"){
        button.classList.add("correct")
    }else{
        button.disabled ="true"
    }
   
}); 
    next.style.display= "block"
}

const showscore =()=>{
    resetstate()
    questionelement.innerHTML =`you score ${userScore} our of ${question.length}`
    next.innerHTML=`play again`
    next.style.display= "block"
}



const handlequiz = ()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion()
    }else{
        showscore()
    }
}

next.addEventListener("click" ,() =>{
if(currentQuestionIndex < question.length){
    handlequiz()
}else{
    startquiz()
}}
)

startquiz()

