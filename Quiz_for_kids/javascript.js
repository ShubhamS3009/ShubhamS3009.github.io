let test, test_status, main,wrong, qimg,submit, option,question,currentQuestion, choice, choices, chA, chB, chC, chD, correct = 0,pos=0, tries=[0,0,0,0,0],y=1,q=1;

pos=Math.floor(Math.random() *20) ;                             
   
const questions = 
[
  {
    //1
    'question' : "Name the bird in image below :",
    'img': "image/parrot.jpg",
    'a': "Parrot",
    'b': "Eagle",
    'c': "Peacock",
    'd': "Pigeon",
    'answer': "a"
  },
  {
    //2
    'question' : "Name the bird in image below :",
    'img': "image/peacock.jpeg",
    'a': "Parrot",
    'b': "Eagle",
    'c': "Peacock",
    'd': "Pigeon",
    'answer': "c"
  },
  {
    //3
  'question' : "Name the animal in image below:",
    'img': "image/cat.jpg",
    'a': "Dog",
    'b': "Horse",
    'c': "Cat",
    'd': "Camel",
    'answer': "c"
  },
  {
    //4
  'question' : "Name the animal in image below:",
    'img': "image/horse.jpeg",
    'a': "Dog",
    'b': "Horse",
    'c': "Cat",
    'd': "Camel",
    'answer': "b"
  },
  {
    //5
    'question' : "Name the fruit in image below:",
    'img': "image/Apple.jpeg",
    'a': "Banana",
    'b': "Watermelon",
    'c': "Strawberry",
    'd': "Apple",
    'answer': "d"
  },
  {
    //6
    'question' : "Name the fruit in image below:?",
    'img': "image/banana.jpeg",
    'a': "Banana",
    'b': "Watermelon",
    'c': "Strawberry",
    'd': "Apple",
    'answer': "a"
  },
  {
    //7
    'question' : "Name the flower in image below:",
    'img': "image/lotus.jpeg",
    'a': "Rose",
    'b': "Hibiscus",
    'c': "lotus",
    'd': "lili",
    'answer': "c"
  },
   {
    //8
    'question' : "Name the person in image below:",
    'img': "image/joker.jpeg",
    'a': "Joker",
    'b': "Driver",
    'c': "Farmer",
    'd': "Fisher-man",
    'answer': "a"
  },
  {
    //9
    'question' : "Name the vehicle in image below:",
    'img': "image/aeroplane.jpeg",
    'a': "Bicycle",
    'b': "Aeroplane",
    'c': "Bus",
    'd': "Car",
    'answer': "b"
  },
  {
    //10
    'question' : "Name the vehicle in image below:",
    'img': "image/bicycle.jpeg",
    'a': "Bicycle",
    'b': "Aeroplane",
    'c': "Bus",
    'd': "Car",
    'answer': "a"
  },
  {
    //11
    'question' : "Name the vehicle in image below:",
    'img': "image/bus.png",
    'a': "Bicycle",
    'b': "Aeroplane",
    'c': "Bus",
    'd': "Car",
    'answer': "c"
  },
  {
    //12
    'question' : "Name the vehicle in image below:",
    'img': "image/car.jpg",
    'a': "Bicycle",
    'b': "Aeroplane",
    'c': "Bus",
    'd': "Car",
    'answer': "d"
  },
  {
    //13
    'question' : "Name the object in image below:",
    'img': "image/bed.webp",
    'a': "Bicycle",
    'b': "Bed",
    'c': "Bus",
    'd': "Car",
    'answer': "b"
  },
  {
    //14
    'question' : "Name the object in image below:",
    'img': "image/bowl.jpg",
    'a': "Bowl",
    'b': "Coat",
    'c': "Bus",
    'd': "Car",
    'answer': "a"
  },
  {
    //15
    'question' : "Name the object in image below:",
    'img': "image/sun.jpg",
    'a': "Bicycle",
    'b': "Coat",
    'c': "Bus",
    'd': "Sun",
    'answer': "d"
  }, {
    //16
    'question' : "Name the object in image below:",
    'img': "image/moon.jpg",
    'a': "Moon",
    'b': "Coat",
    'c': "Bus",
    'd': "Car",
    'answer': "a"
  },
  {
    //17
    'question' : "Name the object in image below:",
    'img': "image/door.jpg",
    'a': "Bicycle",
    'b': "Coat",
    'c': "Door",
    'd': "Car",
    'answer': "c"
  },
  {
    //18
    'question' : "Name the object in image below:",
    'img': "image/cloud.jpg",
    'a': "Cloud",
    'b': "Coat",
    'c': "Bus",
    'd': "Car",
    'answer': "a"
  },
  {
    //19
    'question' : "Name the object in image below:",
    'img': "image/bat.jpg",
    'a': "Bicycle",
    'b': "Bat",
    'c': "Bus",
    'd': "Car",
    'answer': "b"
  },
  {
    //20
    'question' : "Name the object in image below:",
    'img': "image/pencile.webp",
    'a': "Bicycle",
    'b': "Coat",
    'c': "Bus",
    'd': "Pencile",
    'answer': "d"
  },
];

function get(x) 
{
  return document.getElementById(x);
}
function attempt()
{
  for ( i = 0; i < 5; i++)
  {
  attempt=get("attempt");
  attempt.innerHTML += "<h3> Question " + q + " retried '" + tries[i] +"' times</h3><br>"; 
  q++;
  }
}
function renderQuestion() 
{  
  if (correct >= 5)
  {
    qimg.innerHTML = "";
    option.innerHTML = "";
    submit.innerHTML = "";
    test.innerHTML = "<h2>You got " + correct + " out of 5</h2><br>";
    get("test_status").innerHTML = "Test completed!!";
    attempt ();
    correct = 0;
    return false;
  }
  else{
  test = get("test");
  qimg = get("qimg");
  option = get("option");
  submit = get("submit");
  get("test_status").innerHTML = "Question " + (correct + 1) + " of 5";

const data = questions[pos];
  question =data.question;
  img = data.img;
  chA = data.a;
  chB = data.b;
  chC = data.c;
  chD = data.d;
console.log('question='+question);
  test.innerHTML = "<h3>"+(correct + 1) +") " + question + "</h3>";
  qimg.innerHTML ="<img src=\"" + img + "\"width=\"400\" height=\"400\"><br><br>";
  option.innerHTML = "<label> <input type='radio' name='choices' value='a'> " + chA + "</label>";
  option.innerHTML += "<label> <input type='radio' name='choices' value='b'> " + chB + "</label>";
  option.innerHTML += "<label> <input type='radio' name='choices' value='c'> " + chC + "</label>";
  option.innerHTML += "<label> <input type='radio' name='choices' value='d'> " + chD + "</label>";
  submit.innerHTML = "<button onclick='checkAnswer()'>Submit Answer</button>";
}
}

function checkAnswer() 
{

  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) 
  {
    if (choices[i].checked) 
    {
      choice = choices[i].value;
    }
  }

  if (choice === questions[pos].answer)
  {
    correct++;
    y=1;
    pos++;
    wrongAnswer.innerHTML= "";
  }
  else
  { 
    wrong();
    tries[correct]=y;
    y++;
    console.log("Attempts" +tries[correct]);
    renderQuestion();
  }
  function wrong()
  {
    wrongAnswer.innerHTML= "OOPS! Try Again";
  }
  renderQuestion();
}
window.addEventListener('load', renderQuestion);