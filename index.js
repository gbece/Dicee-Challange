var randomNumber1=Math.floor(Math.random()*6)+1;   // Generate random number for the first dicee
var randomNumber2=Math.floor(Math.random()*6)+1;    // Generate random number for the second dic

var img1Sourse="images/dice"+randomNumber1+".png";    // 
var img2Sourse="images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",img1Sourse);
document.querySelector(".img2").setAttribute("src",img2Sourse);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Pleyer 1 Wins!";
}else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Pleyer 2 Wins!🚩";
}else {
  document.querySelector("h1").innerHTML="Draw!";
}
