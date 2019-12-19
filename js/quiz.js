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
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
}

for(var i = 0; i < questions.length; i += 1 ){
  question = questions[i][0];
  answer  = questions[i][1];
  response = parseInt(prompt(question)); 

  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
 } else {
    wrong.push(question);
 }
}

html = "You got " + correctAnswers + " questions right.";



print(html);