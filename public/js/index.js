

$('document').ready(function(){

 	function randomNum() {
		return Math.floor(Math.random() * 9);
 	}


 	// Generate Random Number
 	var random = randomNum();
 	console.log(random);

 	// Define Array of Boxes
 	var boxes = $('.container').children();
 	console.log(boxes);

 	// Select A Random Box from Array
 	var box = boxes[random];
 	console.log(box);

 	// Change chosen box to active
	$(box).addClass('active'); 		

 	$('.active').click(function() {
 		$(this).fadeToggle();

 	});



 	// function changeBox() {
 	// 	$('div').click(function(){
 	// 	$('.container').children.addClass('.active');
 	// }

	// var interval = setInterval(function() {
	// 	console.log(randomNum());
	// }, 1000);

	// console.log(random);
});
// switch (randomNum()) {
// 	case "0":
// 		change('#box1');
// 	break;
// 	case "1":
// 		change('#box2');
// 	break;
// 	case "2":
// 		change('#box3');
// 	break;
// 	case "3":
// 		change('#box4');
// 	break;
// 	case "4":
// 		change('#box5');
// 	break;
// 	case "5":
// 		change('#box6');
// 	break;
// 	case "6":
// 		change('#box7');
// 	break;
// 	case "7":
// 		change('#box8');
// 	break;
// 	case "8":
// 		change('#box9');
// 	break;
// }



// });

