$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".gameArea").html(startScreen);
}

initialScreen();

$("body").on("click", ".start-button", function(event){
	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){

	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		

		clearInterval(theTimer);
		Win();
	}
	else {
		
		clearInterval(theTimer);
		Lose();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTotal++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";
	$(".gameArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function Win() {
	correctTotal++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";
	$(".gameArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function Lose() {
	incorrectTotal++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>";
	$(".gameArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".gameArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 6) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theTimer = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theTimer);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Quiz complete! Let's see how you did..." + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTotal + "</p>" + "<p>Wrong Answers: " + incorrectTotal + "</p>" + "<p>Unanswered: " + unansweredTotal + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".gameArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTotal = 0;
	incorrectTotal = 0;
	unansweredTotal = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What does the acronym 'HTML' stand for?", "What is the correct tag for a paragraph in HTML?", "Which symbol assigns a value to a property in JavaScript?", "Which of the following is known as a jQuery selector?", "If you want to use JavaScript inside in the same file as your HTML, where is the best place to put it?", "What does the acronym 'CSS' stand for?", "How many values can a boolean output?"];
var answerArray = [["HyperText Markup Language", "HotText Markup Language", "HyperText Mystery Language", "HyperTextual Mock Language"], ["&lt;para&gt;","&lt;pg&gt;","&lt;p&gt;","None of the above"], ["==", ":", "!=", "="], ["#","$","@","!"], ["At the top","At the bottom","In the middle","You never put JavaScript inside an HTML document"], ["Coding Style Sheets", "Computer Style Sheets", "Cyber Style Sheets", "Cascading Style Sheets"], ["Two","One","Three","As many as you want"]];
var correctAnswers = ["A. HyperText Markup Language", "C. &lt;p&gt;", "D. =", "B. $", "B. At the bottom", "D. Cascading Style Sheets", "A. Two"];
var questionCounter = 0;
var selecterAnswer;
var theTimer;
var correctTotal = 0;
var incorrectTotal = 0;
var unansweredTotal = 0;