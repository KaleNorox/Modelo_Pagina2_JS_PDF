// Obtén una lista de todos los botones con la clase "boton"
const botones = document.querySelectorAll(".botonAgregar");

// Define la función de manejo de clic
function mostrarMensaje() {
    alert("¡Hola! Agregaste un producto.");
}

// Asigna la función de manejo de clic a todos los botones
botones.forEach(boton => {
    boton.addEventListener("click", mostrarMensaje);
});


// Obtén una referencia al botón
const miBoton = document.getElementById("botonPagar");

// Agrega un evento de clic al botón
miBoton.addEventListener("click", function() {
    // Muestra un mensaje emergente
    alert("Gracias por comprar en TECNOPLUS. Vuelve pronto :)");
});
///////////////////////////////////////////////////////////////////////////////////////

  
