var imagen1 = document.getElementById("imagen");
function hacerInvisible(){
    imagen1.style.visibility = "hidden"; 
}

function hacerVisible(){
    imagen1.style.visibility = "visible"; 
}

function hacerGrande() {
    var anchoActual = parseInt(imagen1.style.width); // Obtener el ancho actual y convertirlo a un número
    var altoActual = parseInt(imagen1.style.height); // Obtener el alto actual y convertirlo a un número

    // Sumar 10 píxeles al ancho y alto actuales
    imagen1.style.width = (anchoActual + 10) + "px"; 
    imagen1.style.height = (altoActual + 10) + "px"; 
}

function hacerPequeña(){

    imagen1.style.width = "100px";
    imagen1.style.height = "100px";
}