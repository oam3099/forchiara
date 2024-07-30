var b1=0;
var b2=0;
var b3=0;
var b4=0;
var b5=0;
var b6=0;

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b1=1;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon2');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b2=1;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon3');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b3=1;    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon4');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b4=1;    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon5');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b5=1;    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const clickableObject = document.querySelector('.balloon6');
    clickableObject.addEventListener('click', () => {
        clickableObject.remove();
b6=1;    });
});

var r1=0;
var cake=0;
var cal=0;
function preload() {
  k = loadImage('https://iili.io/dTlrdOJ.md.png');
}
function setup() {
  createCanvas(1345, 640);

  alert("I really wanted to surprise you with flowers delivered at your place, but unfotunately it was very complicated.\nTherefore, I made this website & virtual bouquet des fleurs for you, and I hope you accept it & like it<3.\nHappy national girlfriend day Chiara <3");

}

function draw() {
  background(211, 215, 226);
fill(255)
image(k,383,260,600,344);


noStroke();
fill(211, 215, 226);

if(b1&&b2&&b3&&b4&&b5&&b6){
if(mouseIsPressed){
if(mouseX>383 && mouseX<983 &&mouseY>260&&mouseY<604)
r1=1;
}
if(r1){
rect(383,260,600,344);
}}


textSize(30);
fill(102, 171, 249);
if(r1){
  text('click on me plz', 580, 600);

}

if(cake==1){
alert("I hope you find this bouquet beautiful, since this is my first time to create a bouquet online :P\nPlease go ahead and celebrate by popping all the balloons before grabbing the bouquet ^_^");
}
cake++;

}
