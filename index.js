let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1 + 1);

let randomImage = "dice" + randomNumber1 + ".png";

let sourceImage = "images/" + randomImage;

document.querySelectorAll("img")[0].setAttribute("src" ,sourceImage);

let randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2 + 1);

let sourceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" ,sourceImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 wins!";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Play 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}