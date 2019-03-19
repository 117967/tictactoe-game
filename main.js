var game = {
	table: [],
	isPlayerOne: false,
	
	onItemClick: function (e)
	{
		if(e.target.innerText == "")
		{
			// set the value based on the player (1 = X, 2 = O)
			e.target.innerText = (this.isPlayerOne ? "X" : "O");
			// switch player
			this.isPlayerOne = !this.isPlayerOne;

		}
	},
	
	start: function ()
	{
		for (var i = 0; i < 3; i++)
		{
			var row = document.getElementById("row" + (i + 1)).children;
			for (var j = 0; j < 3; j++)
				row[j].addEventListener("click", this.onItemClick.bind(this));
			this.table.push((row));
		}
	}
};

game.start();
