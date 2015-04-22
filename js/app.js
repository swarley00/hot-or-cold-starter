
$(document).ready(function(){
	
	var newBtn = $(".new");

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	newGame();

	newBtn.click(function () {
		newGame();
	}); 

});

function newGame () {
	generateNumber();
}

function generateNumber () {
	var randomNumber = Math.round((Math.random()*100));
	console.log(randomNumber);
	feedback(randomNumber);
}

function feedback (r) {
	var userGuess = $("#userGuess").val();
	if (userGuess <= r - 50) {
		console.log("Ice Cold");
	}
	else if (userGuess > r - 30 && userGuess < r - 50) {
		console.log("Cold");
	}
	else if (userGuess > r - 20 && userGuess < r - 30) {
		console.log("Warm");
	}
	else if (userGuess > r - 10 && userGuess < r - 20) {
		console.log("Hot");
	}
	else if (userGuess > r - 1 && userGuess < r - 10) {
		console.log("Very Hot");
	}
}