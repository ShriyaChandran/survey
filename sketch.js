var canvas;
var voterCount=0;
var database;
var voter ;


function setup(){
canvas = createCanvas(600,600);
database = firebase.database();
form = new Form();
form.display();
voter = new Voter();
}

function draw(){

}
