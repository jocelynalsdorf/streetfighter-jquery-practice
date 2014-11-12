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

	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
		$(".ryu-ready").hide();
		$(".ryu-still").hide();
		$(".ryu-cool").show();
	}	
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 88) {
		$(".ryu-ready").show();
		$(".ryu-still").hide();
		$(".ryu-cool").hide();
	}	
	});

	function playHadouken () {
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}
});

