////////////////////////////////////////////////////////
window.addEventListener('load', inicio, false);

function inicio() {
    var imagen1 = document.getElementById("o1");
    var imagen2 = document.getElementById("o2");
    var imagen3 = document.getElementById("o3");
    var imagen4 = document.getElementById("o4");
    var imagen5 = document.getElementById("o5");
    var imagen6 = document.getElementById("o6");
    var imagen7 = document.getElementById("o7");
    var imagen8 = document.getElementById("o8");
    var imagen9 = document.getElementById("o9");

    imagen1.addEventListener('mouseover', ver, false);
    imagen1.addEventListener('mouseout', retornar, false);

    imagen2.addEventListener('mouseover', ver2, false);
    imagen2.addEventListener('mouseout', retornar2, false);

    imagen3.addEventListener('mouseover', ver3, false);
    imagen3.addEventListener('mouseout', retornar3, false);

    imagen4.addEventListener('mouseover', ver4, false);
    imagen4.addEventListener('mouseout', retornar4, false);

    imagen5.addEventListener('mouseover', ver5, false);
    imagen5.addEventListener('mouseout', retorna5, false);

    imagen6.addEventListener('mouseover', ver6, false);
    imagen6.addEventListener('mouseout', retornar6, false);

    imagen7.addEventListener('mouseover', ver7, false);
    imagen7.addEventListener('mouseout', retornar7, false);

    imagen8.addEventListener('mouseover', ver8, false);
    imagen8.addEventListener('mouseout', retornar8, false);

    imagen9.addEventListener('mouseover', ver9, false);
    imagen9.addEventListener('mouseout', retornar9, false);
}

var c2 = 1;

var intervalo1;
var intervalo2;
var intervalo3;
var intervalo4;
var intervalo5;
var intervalo6;
var intervalo7;
var intervalo8;
var intervalo9;

function ver() {
    intervalo1 = setInterval(function() {
        c2++;
        if (c2 > 3) c2 = 1;
        document.getElementById("o1").src = "../img/ofertasfinal/oferta1_" + c2 + ".png";
    }, 1500);
}

function ver2() {
    intervalo2 = setInterval(function() {
        c2++;
        if (c2 > 3) c2 = 1;
        document.getElementById("o2").src = "../img/ofertasfinal/oferta2_" + c2 + ".png";
    }, 1500);
}
function ver3() {
  intervalo3 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("o3").src = "../img/ofertasfinal/oferta3_" + c2 + ".png";
  }, 1500);
}
function ver4() {
  intervalo4 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("o4").src = "../img/ofertasfinal/oferta4_" + c2 + ".png";
  }, 1500);
}
function ver5() {
  intervalo5 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("o5").src = "../img/ofertasfinal/oferta5_" + c2 + ".png";
  }, 1500);
}
function ver6() {
  intervalo6 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("o6").src = "../img/ofertasfinal/oferta6_" + c2 + ".png";
  }, 1500);
}
function ver7() {
  intervalo7 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("o7").src = "../img/ofertasfinal/oferta7_" + c2 + ".png";
  }, 1500);
}
function ver8() {
  intervalo8 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("o8").src = "../img/ofertasfinal/oferta10_" + c2 + ".png";
  }, 1500);
}
function ver9() {
  intervalo9 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("o9").src = "../img/ofertasfinal/oferta11_" + c2 + ".png";
  }, 1500);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function retornar() {
    clearInterval(intervalo1);
    document.getElementById("o1").src = "../img/ofertasfinal/oferta1.png";
}

function retornar2() {
    clearInterval(intervalo2);
    document.getElementById("o2").src = "../img/ofertasfinal/oferta2.png";
}
function retornar3() {
  clearInterval(intervalo3);
  document.getElementById("o3").src = "../img/ofertasfinal/oferta3.png";
}

function retornar4() {
  clearInterval(intervalo4);
  document.getElementById("o4").src = "../img/ofertasfinal/oferta4.png";
}
function retorna5() {
  clearInterval(intervalo5);
  document.getElementById("o5").src = "../img/ofertasfinal/oferta5.png";
}

function retornar6() {
  clearInterval(intervalo6);
  document.getElementById("o6").src = "../img/ofertasfinal/oferta6.png";
}
function retornar7() {
  clearInterval(intervalo7);
  document.getElementById("o7").src = "../img/ofertasfinal/oferta7.png";
}

function retornar8() {
  clearInterval(intervalo8);
  document.getElementById("o8").src = "../img/ofertasfinal/oferta10.png";
}
function retornar9() {
  clearInterval(intervalo9);
  document.getElementById("o9").src = "../img/ofertasfinal/oferta11.png";
}
///////////////////////////////////////////////////////////////////////////////