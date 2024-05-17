// Función para incrementar el contador
function incrementCounter() {
    // Obtener el valor actual del contador del almacenamiento local
    let currentCount = localStorage.getItem('contador');
  
    // Si no hay un contador en el almacenamiento local, iniciar en 0
    if (!currentCount) {
      currentCount = 0;
    } else {
      // Si hay un contador, convertirlo a número
      currentCount = parseInt(currentCount);
    }
  
    // Incrementar el contador
    currentCount++;
  
    // Actualizar el contador en el almacenamiento local
    localStorage.setItem('contador', currentCount);
  
    // Mostrar el contador en todas las etiquetas HTML con id 'counter'
    let counters = document.querySelectorAll('#counter');
    counters.forEach(function(counter) {
      counter.textContent = currentCount;
    });
  }
  
  // Función para manejar el evento unload (al recargar o cerrar la página)
  window.addEventListener('unload', function(event) {
    // Si la página se está cerrando (no se está recargando)
    if (event.persisted || (window.performance && window.performance.navigation.type === 1)) {
      // Limpiar el contador del almacenamiento local
      localStorage.removeItem('contador');
    }
  });
  
  // Al cargar la página
  window.onload = function() {
    // Obtener el valor actual del contador del almacenamiento local
    let currentCount = localStorage.getItem('contador');
  
    // Si hay un contador en el almacenamiento local, mostrarlo en todas las etiquetas HTML con id 'counter'
    if (currentCount) {
      let counters = document.querySelectorAll('#counter');
      counters.forEach(function(counter) {
        counter.textContent = currentCount;
      });
    }
  
    // Obtener todos los botones con la clase "incrementButton" y agregarles un event listener para manejar el clic
    let buttons = document.querySelectorAll('.botonAgregar');
    buttons.forEach(function(button) {
      button.addEventListener('click', incrementCounter);
    });
  };
  

  //////////////////////////////////////////////////////////////////////

  



  
  

  
 
  