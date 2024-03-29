var player1Random = Math.floor((Math.random() * 6) + 1);
var player2Random = Math.floor((Math.random() * 6) + 1);

// var player1 = "images/dice" + player1ImgVal + ".png";
// var player2 = "images/dice" + player2ImgVal + ".png";


var player1 = "images/dice" + player1Random + ".png";
var player2 = "images/dice" + player2Random + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", player1);

var img2 = document.querySelectorAll("img")[1].setAttribute("src", player2);

if (player1 < player2) {

    document.getElementById("header").innerHTML = "Player 2 Win";
} else if (player1 > player2) {

    document.getElementById("header").innerHTML = "Player 1 Win";
}
else {

    document.getElementById("header").innerHTML = "DRAW";
}


