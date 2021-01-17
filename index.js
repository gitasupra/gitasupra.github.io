window.onload = function() {
	document.getElementById("create-meme").addEventListener("click", function () {
	  const topText = document.getElementById("top-text-input").value;
	  document.getElementById("top-text").innerText = topText;

	  const bottomText = document.getElementById("bottom-text-input").value;
	  document.getElementById("bottom-text").innerText = bottomText;

	  memeArray = ["pugBlanket.jpg", "stonks.jpg", "robot.jpg", "carDogs.jpg", "happyDog.jpg", "spiderman.jpg", "hacking.jpg", "handshake.jpg"]
	  var randomNum = Math.floor( Math.random() * memeArray.length );
	  var randomMeme = memeArray[randomNum];
	  	document.getElementById("meme").src = randomMeme;
		  function random_bg_color() {
			var x = Math.floor(Math.random() * 256);
			var y = Math.floor(Math.random() * 256);
			var z = Math.floor(Math.random() * 256);
			var bgColor = "rgb(" + x + "," + y + "," + z + ")";
		 console.log(bgColor);
		 document.body.style.background = bgColor;
		}
	
	random_bg_color();
	});
}