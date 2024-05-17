
document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");
  var prompt = document.getElementById("custom-prompt");
  var btnContinuar = document.getElementById("btn-continuar");
  // Mostrar el overlay y el prompt cuando se cargue la página
  overlay.style.display = "block";
  prompt.style.display = "block";
  document.getElementById("main-content").style.filter = "blur(5px)"; // Aplicar desenfoque al contenido principal
  btnContinuar.addEventListener("click", function () {
    window.location.href = 'index.html';
  });
});
var overlay = document.getElementById("overlay");
var btnRegistrar = document.getElementById("btnRegistrar")
var btnIniciar = document.getElementById("btnIniciar")
var prompt1 = document.getElementById("custom-prompt1");
var prompt2 = document.getElementById("custom-prompt2")
var prompt = document.getElementById("custom-prompt");
btnRegistrar.addEventListener("click", function () {
  overlay.style.display = "block";
  prompt1.style.display = "block";
  document.getElementById("main-content").style.filter = "blur(5px)"; // Aplicar desenfoque al contenido principal
  prompt.style.display = "none";
});

btnIniciar.addEventListener("click", function () {
  overlay.style.display = "block";
  prompt2.style.display = "block";
  document.getElementById("main-content").style.filter = "blur(5px)"; // Aplicar desenfoque al contenido principal
  prompt.style.display = "none";
});





function zoom(e) {
  document.getElementsByClassName("imgOfer").item(e).style.transform = "scale(1.1,1.1)";
  document.getElementsByClassName("imgOfer").item(e).style.transition = "all 1s";

}

function volver(e) {
  document.getElementsByClassName("imgOfer").item(e).style.transform = "scale(1,1)";
  document.getElementsByClassName("imgOfer").item(e).style.transition = "all 1s";

}

function zoom1(e) {
  document.getElementsByClassName("img").item(e).style.transform = "scale(1.5,1.5)";
  document.getElementsByClassName("img").item(e).style.transition = "all 1s";

}

function volver1(e) {
  document.getElementsByClassName("img").item(e).style.transform = "scale(1,1)";
  document.getElementsByClassName("img").item(e).style.transition = "all 1s";

}

function zoom2(e) {
  document.getElementsByClassName("img2").item(e).style.transform = "scale(1.1,1.1)";
  document.getElementsByClassName("img2").item(e).style.transition = "all 1s";

}

function volver2(e) {
  document.getElementsByClassName("img2").item(e).style.transform = "scale(1,1)";
  document.getElementsByClassName("img2").item(e).style.transition = "all 1s";

}

//codigo para mover el texto de izquierda a derecha
/*
const textoMovi = document.getElementById("textoMov");
let posicion = 0;
const anchoContenedor = document.querySelector(".contenedorTextoMov").offsetWidth;

function moveText() {
  posicion++;
  textoMovi.style.left = posicion + "px";
  if (posicion > anchoContenedor) {
    posicion = -textoMovi.offsetWidth;
  }
}

setInterval(moveText, 8);*/

//Mover el texto de derecha a izquierda
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


/////////////////////////////////////////////////////////



/*hacer zoom a los botones del login*/

function zoomBtnsLogin(n){
document.getElementsByClassName("btnsI").item(n).style.transform="scale(1.05,1.05)"
document.getElementsByClassName("btnsI").item(n).style.transition="all 1s"
}

function regresarBtnsLogin(n){
  document.getElementsByClassName("btnsI").item(n).style.transform="scale(1,1)"
document.getElementsByClassName("btnsI").item(n).style.transition="all 1s"
}

/*Validacion del login */

function validarRegistro() {
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var fechaNacimiento = document.getElementById('fechaNacimiento').value;

  // Expresión regular para validar solo letras y espacios
  var letrasRegex = /^[A-Za-z\s]+$/;

  // Validar nombre y apellidos
  if (!letrasRegex.test(nombre)) {
      alert('Por favor, introduzca un nombre válido.');
      return;
  }

  if (!letrasRegex.test(apellidos)) {
      alert('Por favor, introduzca apellidos válidos.');
      return;
  }


  // Validar que los campos no estén vacíos
  if (nombre === '' || apellidos === '' || username === '' || email === '' || password === '' || confirmPassword === '' || fechaNacimiento === '') {
      alert('Por favor, complete todos los campos.');
      return;
  }

  // Validar formato de correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, introduzca un correo electrónico válido.');
      return;
  }

  // Validar longitud de la contraseña
  if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
  }
   // Validar la fecha de nacimiento
    // Suponiendo que la fecha de nacimiento debe estar en el pasado
    var fechaActual = new Date();
    var fechaNacimientoDate = new Date(fechaNacimiento);
    if (fechaNacimientoDate >= fechaActual) {
        alert('Por favor, introduzca una fecha de nacimiento válida.');
        return;
    }
    if (localStorage.getItem(username) !== null) {
      alert('El nombre de usuario ya está en uso :c Por favor, elija otro.');
      return;
  }

  alert('Registro exitoso! ;)')
  // Si todas las validaciones pasan, redirigir al usuario
  window.location.href = "../pag/index.html";


 

// Guardar los datos en el almacenamiento local
var nuevoUsuario = {
  nombre: nombre,
  apellidos: apellidos,
  username: username,
  fechaNacimiento: fechaNacimiento,
  email: email,
  password: password
};

localStorage.setItem(username, JSON.stringify(nuevoUsuario));

}

// Función para iniciar sesión
function iniciarSesion() {
  var loginUsername = document.getElementById('loginUsername').value;
  var loginPassword = document.getElementById('loginPassword').value;
 // Validar que los campos no estén vacíos
 if (loginUsername === '' || loginPassword === '') {
  alert('Por favor, complete todos los campos.');
  return;
}
  // Obtener los datos del usuario del almacenamiento local
  var usuarioGuardado = localStorage.getItem(loginUsername);

  if (usuarioGuardado === null) {
      alert('El nombre de usuario no existe :c');
      return;
  }

  usuarioGuardado = JSON.parse(usuarioGuardado);

  // Verificar la contraseña
  if (usuarioGuardado.password === loginPassword) {
      alert('Bienvenido! '+loginUsername+' ;)');
      // Aquí puedes redirigir al usuario a la página de destino
      window.location.href = "../pag/index.html";
  } else {
      alert('Contraseña incorrecta :c');
  }
}

function sesionRedes(n){
  switch(n){
    case 0: window.open("https://www.google.com/intl/es-419/gmail/about/");
    break;
    case 1: window.open("https://www.facebook.com/");
    break;
    default: window.open("https://twitter.com/?lang=es")
  }

}

function rotar(n){
  document.getElementsByClassName("imgSesion").item(n).style.transform="rotateY(180deg)";
  
  
}

function volver2(n){
  document.getElementsByClassName("imgSesion").item(n).style.transform="none";
  
}


