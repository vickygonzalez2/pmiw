//Gonzalez Victoria
//Lucila Tenutto

let pantalla = 0;
let imagenes = [];
let tiempoCambio = 50000;
let tiempoUltimoCambio;
let listaDeTextos = [];
//let fuente1, fuente2;
let posTextoX, posTextoY;
let botones = [];
//let textos;
let song;

function preload() {
  soundFormats ('mp3', 'ogg');
  song = loadSound ('/data/musica.mp3');

  imagenes[0] = loadImage('data/principal1.jpg'); //inicio
  imagenes[1] = loadImage('data/principal2.jpg'); //creditos
  imagenes[2] = loadImage('data/desaparicion3.jpg'); //los habitantes desaparecen
  imagenes[3] = loadImage('data/viaje1.jpg'); //viajan al bosque
  imagenes[4] = loadImage('data/pistas.jpg'); // encuentran una pista
  imagenes[5] = loadImage('data/bosque3.jpg'); // investigan solos
  imagenes[6] = loadImage('data/cueva3.jpg'); //encuentran una cueva
  imagenes[7] = loadImage('data/cueva1.jpg'); //lo enfrentan y mueren
  imagenes[8] = loadImage('data/bosque2.jpg'); // piden ayuda
  imagenes[9] = loadImage('data/auto1.jpg'); //encuentran pista en el auto
  imagenes[10] = loadImage('data/libros.jpg'); //consultan libros y descubren maquina
  imagenes[11] = loadImage('data/maquinatiempo1.jpg'); //encuentran la maquina
  imagenes[12] = loadImage('data/maquinatiempo3.jpg'); //destruyen la maquina
  imagenes[13] = loadImage('data/festejo.jpg'); //festejo
  imagenes[14] = loadImage('data/maquinatiempo2.jpg'); //usan la maquina
  imagenes[15] = loadImage('data/tds2.jpg'); //desaparicion del pueblo

  //fuente1 = loadFont('data/fuente2.ttf');
  //fuente2 = loadFont('data/fuente1.ttf');

  textos = loadStrings('/data/gff.txt');
  listaDeTextos[0] = "Gravity Falls\nMenú principal";
  listaDeTextos[1] = "Créditos\nGonzalez Victoria\nTenutto Lucila\nDirector: Alexander Robert Hirsch";
  listaDeTextos[2] = "Los habitantes de Gravity Falls comenzaron a desaparecer";
  listaDeTextos[3] = "Viajan al bosque en busca de respuestas";
  listaDeTextos[4] = "Encuentran una pista que los guía a la verdad";
  listaDeTextos[5] = "Investigan solos, el peligro aumenta";
  listaDeTextos[6] = "Encuentran una cueva misteriosa...";
  listaDeTextos[7] = "Lo enfrentan, pero no logran sobrevivir...FINAL1";
  listaDeTextos[8] = "Piden ayuda a Soos y Wendy...";
  listaDeTextos[9] = "Encuentran una pista en el auto de Soos"
  listaDeTextos[10] = "Dipper consulta los 3 libros a la vez que revelan algo impactante.."
  listaDeTextos[11] = "Deciden destruir la maquina"
  listaDeTextos[12] = "Logran salvar al pueblo FINAL2"
  listaDeTextos[13] = "Utilizan la maquina y algo ocurre";
  listaDeTextos[14] = "Desaparece el pueblo entero excepto ellos FINAL3";
}

function setup() {
  createCanvas(640, 480);
  song.setVolume(0.5);
  inicializarBotones();
  dibujarBotones();
  tiempoUltimoCambio = millis();
}


function draw() {
  background(50);


  if (millis() - tiempoUltimoCambio > tiempoCambio) {
    pantalla++;
    if (pantalla >= imagenes.length) {
      pantalla = 0;
    }
    tiempoUltimoCambio = millis();
  }
  image(imagenes[pantalla], 0, 0, width, height);
  for (let i = 0; i < botones[pantalla].length; i++) {
    dibujarBotones(botones[pantalla][i]);
  }
}

function mousePressed() {
  for (let i = 0; i < botones[pantalla].length; i++) {
    let boton = botones[pantalla][i];
    if (mouseX > boton.x && mouseX < boton.x + boton.ancho &&
      mouseY > boton.y && mouseY < boton.y + boton.alto) {
      pantalla = boton.proximaPantalla;
    }
  }
/*   pantalla++;
  if (pantalla >= textos.length) {
    pantalla = 0; 
  }*/
}

function keyPressed () {
  //musica
  if (key === 'm' && song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
