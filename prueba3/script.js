
function enlaces(){
    //Número de enlaces que tiene la página 
    var enlaces = document.getElementsByTagName("a");

    //Enlaces se ha convertido en un array
    var numEnlaces = enlaces.length; 
    console.log("El número de enlaces que tiene es: " + numEnlaces);

    //El último enlace que tiene la página
    var ultimoEnlace = enlaces[numEnlaces - 1]; 
    console.log("El último enlace que tiene es: " + ultimoEnlace);

    var contador = 0;
    //Los enlaces que apuntan a google
    for (i = 0; i < enlaces.length; i++){
        if (enlaces[i].href.includes("google")){
            contador++;
        }
    }

    console.log("Número de enlaces que apuntan a Google: " + contador);
}

enlaces();