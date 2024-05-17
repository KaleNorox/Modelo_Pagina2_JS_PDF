window.addEventListener('load', inicio, false);

function inicio() {
    var imagen1 = document.getElementById("iphone");
    var imagen2 = document.getElementById("iphone2");
    var imagen3 = document.getElementById("pixel");
    var imagen4 = document.getElementById("huawei");
    var imagen5 = document.getElementById("huawei2");
    var imagen6 = document.getElementById("moto");
    var imagen7 = document.getElementById("sam");
    var imagen8 = document.getElementById("sam2");
    var imagen9 = document.getElementById("redmi");

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
        document.getElementById("iphone").src = "../img/imagenes finales/celularApple_" + c2 + ".jpg";
    }, 1500);
}

function ver2() {
    intervalo2 = setInterval(function() {
        c2++;
        if (c2 > 3) c2 = 1;
        document.getElementById("iphone2").src = "../img/imagenes finales/celularApple2_" + c2 + ".png";
    }, 1500);
}
function ver3() {
  intervalo3 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("pixel").src = "../img/imagenes finales/celularGoogle" + c2 + ".png";
  }, 1500);
}
function ver4() {
  intervalo4 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("huawei").src = "../img/imagenes finales/celularHuawei_" + c2 + ".png";
  }, 1500);
}
function ver5() {
  intervalo5 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("huawei2").src = "../img/imagenes finales/celularHuawei2_" + c2 + ".png";
  }, 1500);
}
function ver6() {
  intervalo6 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("moto").src = "../img/imagenes finales/celularMotorola1_" + c2 + ".png";
  }, 1500);
}
function ver7() {
  intervalo7 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("sam").src = "../img/imagenes finales/celularSamsung_" + c2 + ".png";
  }, 1500);
}
function ver8() {
  intervalo8 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("sam2").src = "../img/imagenes finales/celularSamsung2_" + c2 + ".png";
  }, 1500);
}
function ver9() {
  intervalo9 = setInterval(function() {
      c2++;
      if (c2 > 3) c2 = 1;
      document.getElementById("redmi").src = "../img/imagenes finales/celularXiaomi_" + c2 + ".png";
  }, 1500);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function retornar() {
    clearInterval(intervalo1);
    document.getElementById("iphone").src = "../img/imagenes finales/celularApple.png";
}

function retornar2() {
    clearInterval(intervalo2);
    document.getElementById("iphone2").src = "../img/imagenes finales/celularApple2.png";
}
function retornar3() {
  clearInterval(intervalo3);
  document.getElementById("pixel").src = "../img/imagenes finales/celularGoogle.png";
}

function retornar4() {
  clearInterval(intervalo4);
  document.getElementById("huawei").src = "../img/imagenes finales/celularHuawei.png";
}
function retorna5() {
  clearInterval(intervalo5);
  document.getElementById("huawei2").src = "../img/imagenes finales/celularHuawei2.png";
}

function retornar6() {
  clearInterval(intervalo6);
  document.getElementById("moto").src = "../img/imagenes finales/celularMotorola.png";
}
function retornar7() {
  clearInterval(intervalo7);
  document.getElementById("sam").src = "../img/imagenes finales/celularSamsung.png";
}

function retornar8() {
  clearInterval(intervalo8);
  document.getElementById("sam2").src = "../img/imagenes finales/celularSamsung3.png";
}
function retornar9() {
  clearInterval(intervalo9);
  document.getElementById("redmi").src = "../img/imagenes finales/celularXiaomi.png";
}