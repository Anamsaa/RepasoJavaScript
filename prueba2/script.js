function adivinaNumero() {
    var numAleatorio = Math.floor(Math.random() * 10) + 1;

    var intentos = 0; 

    alert("Adivina el número");

    while (intentos < 3){

        var numero = parseInt(prompt("Ingresa un número"));
        intentos++;

        if (numAleatorio == numero){
            alert("Has adivinado el número");
            return;
        }else if(numAleatorio > numero){
            alert("El número es mayor");
        }else{
            alert("El número es menor");
        }
    }

    alert("Sin intentos. El número era: " +  numAleatorio);
}

function eliminarRepetidos(array){
    var nuevoArray = [];
    for (i = 0; i < array.length; i ++){
        var repetido = false;
        for (j = i + 1; j < array.length; j++){
            if (array[i] == array[j]){
              repetido = true; 
            }
        }

        if(!repetido){
             nuevoArray.push(array[i]);
        } 
    }
    return nuevoArray; 
}

var numeros = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8]; 
console.log(eliminarRepetidos(numeros)); 

//El constructor Set crea un conjunto de datos pero con valores únicos, no repetidos. 

function sinRepetidos(array){
    var nuevo = new Set(array); 
    //Utilizar Array.from para convertir el set a un array
    var arrayUnico = Array.from(nuevo);
    return arrayUnico;
}


function calcularDescuento(){

    //Recuperar los valores del documento
    var marca = document.getElementById("marca").value; 
    var precio = document.getElementById("precio").value;

    var descuento;

    switch (marca){
        case "Ford": 
            descuento = 0.10; 
            break; 
        case "Seat": 
            descuento = 0.08;
            break;
        case "Citroen": 
            descuento = 0.06; 
            break;
        case "Audi": 
            descuento = 0.04; 
            break; 
        default: 
            descuento = 0; 
    }

    var precioFinal = (precio - (precio * descuento)); 

    //con innerHTML modifico el valor de la etiqueta, recuperada con getElementById
    document.getElementById("resultado").innerHTML = "El descuento es de: "+ (100 * descuento) + "%" + " y el precio final es de: " + precioFinal; 
}



//Preguntar de cómo evitar el envío automático del formulario
function verificarEdad(){
    var edad = document.getElementById("edad").value; 

    if (edad >= 16){
        document.getElementById("enlaces").innerHTML = 
        " <p> Ingrese a este enlace </p> " + 
        " <a href='https://www.caib.es/sites/fp/ca/prova_portada/?campa=yes'>Dale click aquí</a>";
        return false; 
    }else{
        alert("No puedes ingresar a esta página");
        return false;
    }
}

