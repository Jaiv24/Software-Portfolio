const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Javascript",
				weight: 12.3
			}, {
				text: "Embedded C",
				weight: 8
			}, {
				text: "Objective C",
				weight: 11
			}, {
				text: "computer",
				weight: 3
			}, {
				text: "Assembly Language",
				weight: 7
			}, {
				text: "python",
				weight: 7
			}, {
				text: "Oracle SQL database",
				weight: 9
			}, {
				text: "Developer",
				weight: 4
			}, {
				text: "Java",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 200});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 500; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Software Developer.", "like to code things from scratch, and enjoy bringing ideas to life in the browser.", "am a passionate Engineer with Problem solving compentency.",
				"value simple content structure, clean design patterns, and thoughtful interactions."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1.5,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();

