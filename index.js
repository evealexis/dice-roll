
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImageSource1 ="images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomImageSource2 ="images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "<em>Draw</em>";
} else if 
    (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<em>Player 1 Wins!</em>";
} else if 
    (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "<em>Player 2 Wins!</em>";
}
