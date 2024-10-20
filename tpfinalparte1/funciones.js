function inicializarBotones() {
  botones[0] = [
  {
  x:
  150, y:
  350, ancho:
  100, alto:
  50, proximaPantalla:
    2
  }
  ,
  {
  x:
  350, y:
  350, ancho:
  100, alto:
  50, proximaPantalla:
    1
  }
  ];

  botones[1] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    0
  }
  ];

  botones[2] = [
  {
  x:
  150, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    3
  }
  ,
  ];

  botones[3] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    4
  }
  ];

  botones[4] = [
  {
  x:
  150, y:
  350, ancho:
  100, alto:
  50, proximaPantalla:
    5
  }
  ,
  {
  x:
  350, y:
  350, ancho:
  100, alto:
  50, proximaPantalla:
    8
  }
  ];

  botones[5] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    6
  }
  ];

  botones[6] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    7
  }
  ];

  botones[7] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    0
  }
  ];

  botones[8] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    9
  }
  ];

  botones[9] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    10
  }
  ];

  botones[10] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    11
  }
  ];

  botones[11] = [
  {
  x:
  150, y:
  350, ancho:
  100, alto:
  50, proximaPantalla:
    12
  }
  ,
  {
  x:
  350, y:
  350, ancho:
  100, alto:
  50, proximaPantalla:
    14
  }
  ];

  botones[12] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    13
  }
  ];

  botones[13] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    0
  }
  ];

  botones[14] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    15
  }
  ];

  botones[15] = [
  {
  x:
  250, y:
  400, ancho:
  100, alto:
  50, proximaPantalla:
    0
  }
  ];
}
function dibujarBotones() {
  for (let i = 0; i < botones[pantalla].length; i++) {
    let boton = botones[pantalla][i];
    rect(boton.x, boton.y, boton.ancho, boton.alto);
  }
}

function mostrarPantalla(pantalla) {
  for (let i = 0; i < botones[pantalla].length; i++) {
    let boton = botones[pantalla][i];

    fill(200); //color del botón
    rect(boton.x, boton.y, boton.ancho, boton.alto);

    fill(boton.colorTexto);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(boton.texto, boton.x + boton.ancho / 2, boton.y + boton.alto / 2);
  }
}
