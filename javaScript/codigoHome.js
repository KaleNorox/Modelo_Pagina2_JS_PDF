

function zoom(e){
    document.getElementsByClassName("imgOfer").item(e).style.transform="scale(1.1,1.1)";
    document.getElementsByClassName("imgOfer").item(e).style.transition="all 1s";
    
}

function volver(e){
    document.getElementsByClassName("imgOfer").item(e).style.transform="scale(1,1)";
    document.getElementsByClassName("imgOfer").item(e).style.transition="all 1s";

}

function zoom1(e){
    document.getElementsByClassName("img").item(e).style.transform="scale(1.5,1.5)";
    document.getElementsByClassName("img").item(e).style.transition="all 1s";
    
}

function volver1(e){
    document.getElementsByClassName("img").item(e).style.transform="scale(1,1)";
    document.getElementsByClassName("img").item(e).style.transition="all 1s";

}

function zoom2(e){
    document.getElementsByClassName("img2").item(e).style.transform="scale(1.1,1.1)";
    document.getElementsByClassName("img2").item(e).style.transition="all 1s";
    
}

function volver2(e){
    document.getElementsByClassName("img2").item(e).style.transform="scale(1,1)";
    document.getElementsByClassName("img2").item(e).style.transition="all 1s";

}
document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");
    var prompt = document.getElementById("custom-prompt");
    var accessBtn = document.getElementById("access-btn");
  
    accessBtn.addEventListener("click", function() {
      overlay.style.display = "none"; // Ocultar el overlay
      prompt.style.display = "none"; // Ocultar el prompt
      document.getElementById("main-content").style.filter = "none"; // Quitar el filtro de desenfoque del contenido principal
    });
  
    // Mostrar el overlay y el prompt cuando se cargue la página
    overlay.style.display = "block";
    prompt.style.display = "block";
    document.getElementById("main-content").style.filter = "blur(5px)"; // Aplicar desenfoque al contenido principal
  });



//codigo para mover el texto de derecha a izquierda
const textoMovi = document.getElementById("textoMov");
let posicion = 1950;
const anchoContenedor = document.querySelector(".contenedorTextoMov").offsetWidth;

function moveText() {
  posicion--;
  textoMovi.style.left = posicion + "px";
  if (posicion < -textoMovi.offsetWidth) {
    posicion = anchoContenedor;
  }
}

setInterval(moveText, 8);

///////////////////////////////////////////////////////////////////////////







