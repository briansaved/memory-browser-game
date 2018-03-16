let icons = ['trophy', 'tree', 'tint', 'umbrella', 'warehouse', 'podcast', 'pills', 'plane', 'paw', 'rocket', 'puzzle-piece', 'paperclip', 'paper-plane', 'motorcycle', 'lock', 'lemon', 'leaf'];


function startGame() {
	//timerReset();
	//starReset();
	populate(4);
	

}


//shuffle function from https://bost.ocks.org/mike/shuffle/

function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

function populate(num) {
	
	//LOGIC IS: shuffle the main array and slice half the number of cards
	shuffle(icons);
	let boardIcons = icons.slice(0, num/2);
	
	//duplicate the array values to make pairs and shuflfe this new array
	boardIcons = boardIcons.concat(boardIcons);
	shuffle(boardIcons);
	
	//populate HTML
	let board = document.querySelector('.game-board');
	const fragment = document.createDocumentFragment(); 

	for (let x = 0; x < num; x++) {
    	const card = document.createElement('div');
    	const icon = document.createElement('i')
    	icon.classList.add('card', 'fa', 'fa-'+boardIcons[x]);
		card.appendChild(icon);
		fragment.appendChild(card);
		console.log("it works");
	}
	board.appendChild(fragment); 
}


	startGame();
