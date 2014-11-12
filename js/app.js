$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show();
		$(".hadouken").animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
	})
	.mouseup(function() {
		//Ryu goes back to his ready position
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
	});


	function playHadouken () {
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}
});

