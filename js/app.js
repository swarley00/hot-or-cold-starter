
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	var newBtn = $(".new");
	newBtn.click(function () {
		newGame();
	}); 

});

function newGame () {
	generateNumber();
}

function generateNumber () {
	var randomNumber = Math.round((Math.random()*100));
	return randomNumber;
}

function feedback () {
	var userGuess = $("#userGuess").val();
	if () {

	}
	else if () {

	}
	else {

	}
}