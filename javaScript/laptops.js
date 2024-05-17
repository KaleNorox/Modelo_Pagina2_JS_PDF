////////////////////////////////////////////////////////
window.addEventListener('load', inicio, false);

function inicio() {
    var imagen1 = document.getElementById("l1");
    var imagen2 = document.getElementById("l2");
    var imagen3 = document.getElementById("l3");
    var imagen4 = document.getElementById("l4");
    var imagen5 = document.getElementById("l5");
    var imagen6 = document.getElementById("l6");
    var imagen7 = document.getElementById("l7");
    var imagen8 = document.getElementById("l8");
    var imagen9 = document.getElementById("l9");

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
        document.getElementById("l1").src = "../img/imagenes finales/laptopApple_" + c2 + ".png";
    }, 1500);
}

function ver2() {
    intervalo2 = setInterval(function() {
        c2++;
        if (c2 > 3) c2 = 1;
        document.getElementById("l2").src = "../img/imagenes finales/laptopApple2_" + c2 + ".png";
    }, 1500);
}
function ver3() {
  intervalo3 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("l3").src = "../img/imagenes finales/laptopAsus2_" + c2 + ".png";
  }, 1500);
}
function ver4() {
  intervalo4 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("l4").src = "../img/imagenes finales/laptopDell_" + c2 + ".png";
  }, 1500);
}
function ver5() {
  intervalo5 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("l5").src = "../img/imagenes finales/laptopHp_" + c2 + ".png";
  }, 1500);
}
function ver6() {
  intervalo6 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("l6").src = "../img/imagenes finales/laptopHp4_" + c2 + ".png";
  }, 1500);
}
function ver7() {
  intervalo7 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("l7").src = "../img/imagenes finales/laptopHp3_" + c2 + ".png";
  }, 1500);
}
function ver8() {
  intervalo8 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("l8").src = "../img/imagenes finales/laptopLenovo_" + c2 + ".png";
  }, 1500);
}
function ver9() {
  intervalo9 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("l9").src = "../img/imagenes finales/laptopLenovo2_" + c2 + ".png";
  }, 1500);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function retornar() {
    clearInterval(intervalo1);
    document.getElementById("l1").src = "../img/imagenes finales/laptopApple.png";
}

function retornar2() {
    clearInterval(intervalo2);
    document.getElementById("l2").src = "../img/imagenes finales/laptopApple2.png";
}
function retornar3() {
  clearInterval(intervalo3);
  document.getElementById("l3").src = "../img/imagenes finales/laptopAsus2.png";
}

function retornar4() {
  clearInterval(intervalo4);
  document.getElementById("l4").src = "../img/imagenes finales/laptopDell.png";
}
function retorna5() {
  clearInterval(intervalo5);
  document.getElementById("l5").src = "../img/imagenes finales/laptopHp.png";
}

function retornar6() {
  clearInterval(intervalo6);
  document.getElementById("l6").src = "../img/imagenes finales/laptopHp4.png";
}
function retornar7() {
  clearInterval(intervalo7);
  document.getElementById("l7").src = "../img/imagenes finales/laptopHp3.png";
}

function retornar8() {
  clearInterval(intervalo8);
  document.getElementById("l8").src = "../img/imagenes finales/laptopLenovo.png";
}
function retornar9() {
  clearInterval(intervalo9);
  document.getElementById("l9").src = "../img/imagenes finales/laptopLenovo2.png";
}
///////////////////////////////////////////////////////////////////////////////