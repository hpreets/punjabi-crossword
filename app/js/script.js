// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Mughal emperor during Guru Nanak Saheb times",
					answer: "bw;b;r", /*"bw;b;r"*/
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Obstacles",
					answer: "ib;G;n", /*"ib;G;n"*/
					position: 2,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "Anand Saheb is in this Raag",
					answer: "rw;m;k;lI",
					position: 3,
					orientation: "down",
					startx: 8,
					starty: 1
				},
				{
					clue: "During the battle of Anandpur, this Sikh fought and defeated an intoxicated elephant that was planned to break the doors open of Anandpur",
					answer: "b;ic~;q;r;isM;G", /*b;ic~;q;r;isM;G*/
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 2
				},
				{
					clue: "The Nitnem bani recited in evening",
					answer: "r;ih;rw;s;sw;ih;b", /*"r;ih;rw;s;sw;ih;b"*/
					position: 5,
					orientation: "down",
					startx: 4,
					starty: 2
				},
				{
					clue: "Hell",
					answer: "n;r;k",
					position: 6,
					orientation: "across",
					startx: 6,
					starty: 3
				},
				{
					clue: "This Sikh living body was burnt wrapped in cotton in Delhi during Sahaheedi of Guru Teg Bahadar ji",
					answer: "Bw;eI;s;qI;dw;s", /*"Bw;eI;s;qI;dw;s"*/
					position: 7,
					orientation: "across",
					startx: 2,
					starty: 5
				},
				{
					clue: "Capable",
					answer: "s;m;r;Q",
					position: 8,
					orientation: "down",
					startx: 7,
					starty: 5
				},
				{
					clue: "Guru Gobind Singh ji appointed her as the mother of Khalsa",
					answer: "mw;qw;sw;ih;b;kO;r", /*"mw;qw;sw;ih;b;kO;r"*/
					position: 9,
					orientation: "across",
					startx: 1,
					starty: 7
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
