$('document').ready(function(){

	var startTimer = 5;
	var stopTimer = 0;
	var cdInterval;
	var score = 0;

	//Keep the images hidden unless its the selected one
 	$('.mImage').hide();



	//Random num from 0 to 9 exclusive
 	function randomNum() {
		return Math.floor(Math.random() * 31);
 	}

 	//Timer function for countdown & bug to appear
	function Timer() {
		cdInterval = setInterval(countDown, 1000);
	}

	function countDown() {
		if (startTimer !== 0) {
			startTimer--;
			$('.timer').text(startTimer);
			console.log(startTimer);
		} else {
			console.log('the interval cleared')
			clearInterval(cdInterval);
			$('.timer').text('');
			var interval = setInterval(function() {

				var random = randomNum();
			 	console.log(random);
			 	// Define Array of Boxes
			 	var images = $('.mImage');
			 	console.log(images);
			 	// Select A Random Box from Array
			 	var randImg = images[random]
			 	// Make the bug fade in/out
			 	$(randImg).fadeIn().delay(800).fadeOut();
				
			}, 1000);
		}
	}
	
	//Play the sound on load
	audiofn();

	//Run the timer function
	Timer();	

	//Play idle sound
	audioidle();
	
 	// Play sound
	function audiofn() {
	    var sound = $("#audio")[0];

	    sound.load();
	    sound.play();
	}

	function audiostrike() {
	    var sound = $("#strike")[0];

	    sound.load();
	    sound.play();
	}

	function audioidle() {
	    var sound = $("#idle")[0];

	    sound.load();
	    sound.play();
	}
	
	// Keep score of bug hits
	$('.mImage').click(function(){
		score++;
		$('.score').text(score);
		audiostrike();
		audioidle();
	});

	// Hide the bug after click event
	$('.mImage').on('click', function() {
		$(this).hide();
		console.log('test here');
	});

	

});



