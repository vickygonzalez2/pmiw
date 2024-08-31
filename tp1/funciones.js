function reiniciar (reset) {
  cant = 20;
  tam2 = reset;
  tam3 = reset;
}

function grilla (relleno) {
  for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {

      if ((i+j) % 2 === 0) {
        push ();
        colores0 (colorX, colorY);
        rect(i*tam, j*tam, tam, tam);
        pop();

        fill (relleno);
        ellipse (i*tam+tam/2, j*tam+tam/2, tam2, tam3);
      } else {
        fill (relleno);
        rect(i*tam, j*tam, tam, tam);

        colores1 (colorX, colorY);
        ellipse (i*tam+tam/2, j*tam+tam/2, tam2, tam3);
      }
    }
  }
}

function colores0 (colorX, colorY) {
  colorX = map (mouseX, 0, width, 0, 255);
  colorY = map (mouseY, 0, height, 0, 255);
  fill (colorX, colorY);
}
function colores1 (colorX, colorY) {
  colorX = map (mouseX, 0, width, 0, 255);
  colorY = map (mouseY, 0, height, 0, 255);
  fill (colorY, colorX);
}

function circulos () {
  if ((tam2 === 0) && (tam3 === 0 )) {
    tam2 = 1;
    tam3 = 1;
  }
}

function ladoDerecho() {
  if (( mouseX > width/2 ) && (tam2 <= tam) && (tam3 <= tam)) {
    tam2 ++;
    tam3 ++;
    return true;
  } else {
    return false;
  }
}

function ladoIzq() {
  if ( mouseX < width/2 ) {
    tam2 --;
    tam3 --;
    circulos ();
    return true;
  } else {
    return false;
  }
}
