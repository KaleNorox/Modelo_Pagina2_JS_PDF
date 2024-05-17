const hamburguesa = document.getElementById('hamburguesa');
const mainNav = document.getElementById('menu');

hamburguesa.addEventListener('click', () => {
    if (menu.style.display == 'none' ) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// Agregar un listener de ventana para mostrar el menú si el ancho de la página supera 768px
window.addEventListener('resize', () => {
    if (window.innerWidth > 1150) {
        menu.style.display = 'flex';
    }
    else if (window.innerWidth > 768){
        menu.style.display = 'block';
    }
    else menu.style.display = 'none'
});

