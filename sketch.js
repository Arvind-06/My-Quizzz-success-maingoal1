var contestantCount,database,quiz,contestant;
var gameState=0;
var backgroundIMG;
function preload(){
backgroundIMG = loadImage("images/car2.jpg");
}


function setup(){
  createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();



 function draw(){
  background(backgroundIMG);
  if(contestantCount ===4){
    quiz.update(1);
  }


  if(gameState === 1){
    clearInterval();
    quiz.play() ;
  

  }
}
}