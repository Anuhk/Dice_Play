var randomNumber1=Math.random();

randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;


var randomDiceImg1="dice" + randomNumber1 + ".png"; 
var randomImgSrc1="images/"+randomDiceImg1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSrc1);



var randomNumber2=Math.random();

randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2);

var randomDiceImg2="dice" + randomNumber2 + ".png"; 
var randomImgSrc2="images/"+randomDiceImg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSrc2);


var msg="";
if(randomNumber1>randomNumber2){
    msg="Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    msg="Player 2 Wins";
}
else{
    msg="Draw";
}

document.querySelector("h1").innerHTML=msg;