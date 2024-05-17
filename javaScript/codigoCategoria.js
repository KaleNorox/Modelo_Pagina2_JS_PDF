function cambiarImagen(n){
    switch(n){
        case 0: document.getElementById("comp1").src="../img/logos/img-computadora1.png";
        break;
        case 1: document.getElementById("lapt1").src="../img/logos/img-laptop1.png";
        break;
        case 2: document.getElementById("celu1").src="../img/logos/img-celular2.png";
        break;
        case 3: document.getElementById("tabl1").src="../img/logos/img-tablet1.png";
        break;
        default: document.getElementById("peri1").src="../img/logos/img-periférico1.png";
    }
}

function volverImagen(n){
    switch(n){
        case 0: document.getElementById("comp1").src="../img/logos/img-computadora.jpg";
        break;
        case 1: document.getElementById("lapt1").src="../img/logos/img-laptop.jpg";
        break;
        case 2: document.getElementById("celu1").src="../img/logos/img-celular1.jpg";
        break;
        case 3: document.getElementById("tabl1").src="../img/logos/img-tablet.png";
        break;
        default: document.getElementById("peri1").src="../img/logos/img-periférico.png";
    }
}

function irPaginas(n){
    switch(n){
        case 0: window.open("computadoras.html");
        break;
        case 1: window.open("laptops.html");
        break;
        case 2: window.open("celulares.html");
        break;
        case 3: window.open("tablets.html");
        break;
        default:window.open("perifericos.html")
    }
}