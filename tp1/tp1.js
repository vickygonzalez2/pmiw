//Gonzalez Victoria
//86848/2
//Comision 2
//youtube:  https://youtu.be/SRHVOpdseoo 
//youtube p5js: https://youtu.be/y-v2nCDq2WI

let imagenAlaIzq;
let cant = 20;
let tam, tam2, tam3;
let colorX;
let colorY;

function preload () {
  imagenAlaIzq = loadImage ('data/imagen.png');
}

function setup() {
  createCanvas(800, 400);
  image (imagenAlaIzq, 0, 0);
  noStroke();
  tam2 = 17;
  tam3 = 17;
}
function draw() {
  tam = width/cant;
  grilla (255);
  colorX = map (mouseX, 0, width, 0, 255);
  colorY = map (mouseY, 0, height, 0, 255);
  print (ladoDerecho());
  print (ladoIzq());
  image (imagenAlaIzq, 0, 0);
}

function keyPressed () {
  if (key === 'k') {
    cant -- ;
  }
  if (key === 'r') {
    reiniciar (17);
  }
}
function mousePressed () {
  if (ladoIzq () === true ) {
    cant += 2 ;
  }
}
