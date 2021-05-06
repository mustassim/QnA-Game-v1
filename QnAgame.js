var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hello, user. I have been expecting you. Can you enter your name? ");

console.log("Welcome, " + userName + ". Let us see how you fare today.")

var score = 0; console.log("");

console.log("You shall be subjected to 5 questions. You begin at a score of 0, and your final score will determine how well you know the lazy creator of this thing. Let us begin. ")

console.log("");

console.log("Oh yes, one other thing, make sure the first letters on your answers are capital. Negative marking for not following this.");

console.log("");
// play function 
// This function takes in the user's questions and answers
// it returns whether the answer is right or wrong, and deducts score accordingly. 

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){

    console.log("You got that right! ");
    console.log("^.^")
    score += 1;

  }else{ 

    console.log("You got that wrong! ");
    console.log("-____-");
    score = score - 1; 

  }
  
  console.log("")
}

//array of objects

var questions = [{
  question: "This should be easy. What is my favourite colur? ",
  answer: "Blue"
},{
  question: "I am a fan of many sports, but hardly good at them. Which is my favourite, indoor sport? ",
  answer: "Snooker"
},{
  question: "This is going to be interesting. What is my zodiac? ",
  answer: "Aries"
},{
  question: "I would love to travel many a places in my lifetime. Which country tops this list? ",
  answer: "Japan"
},{
  question: "The final question now then. What is my favourite season? ",
  answer: "Autumn"
}
]


for (var i = 0; i < questions.length; i++){ 
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  
}

console.log("So then, your final score is.... ", score);

if (score < 0 ){
  console.log("Are you sure you know me? ");
}
else if (3 > score >= 1){
  console.log("My, my you do know me somewhat. ")
}
else if (score >= 3){
  console.log("Well, what can I say. You know me well. <3")
}