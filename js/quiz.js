var questions = [
  ["How many days in a year?", 365],
  ["How many hours in a day?", 24],
  ["How many minutes in an hour?", 60]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;

for(var i = 0; i < questions.length; i += 1 ){
  question = questions[i][0];
  answer  = questions[i][1];
  response = parseInt(prompt(question)); 

  if (response === answer) {
    correctAnswers += 1;
 }
}

html = "You got " + correctAnswers + " questions right.";