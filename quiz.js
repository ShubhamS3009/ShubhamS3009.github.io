const quizData = [{
    'question': "What is the object in the image below?",
    'img' : 'image.jpg',
    'a': "Java",
    'b': "C",
    'c': "Python",
   'correct': "a",
},
{
    'question': "What is the object in the image below?",
    'img' : "image2.jpg",
    'a': "Java",
    'b': "C",
    'c': "Python",
    'correct': "c",
},
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let image = document.getElementById("img");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index] ;
questionBox.innerHTML = `${index + 1} )${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
image.innerHTML = "<img id='image' src="+ data.img +"alt='sorry image is not loading'></img>"
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
        index++;
        
    loadQuestion()
    } else {
        retry()
        incorrect++;
        reset();
    }
}
)
const retry = () => {
alert("OOPS!! Wrong aswer. Try Again.");

}

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h2 class="w-100">Congratulatios! You have completed the Test</h2>
        <h3>No. of Attempts = ${loadQuestion.index(0)}</h3>
    </div>
`
}
loadQuestion(index);