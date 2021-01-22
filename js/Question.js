class question{

constructor(){
this.title = createElement('h1')
this.input1 = createInput("Enter Your Name Here...");
this.input2 = createInput("Enter Correct Option No....");
this.question = createElement('h3');
this.option1 = createElement('h4');
this.option2 = createElement('h4');
this.option3 = createElement('h4');
this.option4 = createElement('h4');
}

display(){
    this.title.html("MY QUIZZZZ GAME");
    this.title.position(350,0);
    this.question.html("QUESTION :- What Type Of Engines Do They Use in Formula 1 Cars??? ");
    this.question.position(150,80);
    this.option1.html("1: 6.2L V8");
    this.option1.position(150,100);
    this.option2.html("2: 7.2L V12");
    this.option2.position(150,120);
    this.option3.html("3: 2jz");
    this.option3.position(150,140);
    this.option4.html("4: 1.6L v6");
    this.option4.position(150,160);
    this.input1.position(150,230);
    this.input2.position(350,230);
}











































}