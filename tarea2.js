
/* function contarPalabras(){
    var cadena = "Hola soy ana";

    //Eliminar espacios al inicio y al final de la cadena.
    cadena = cadena.trim(); 

    //Dividir la cadena en espacios usando separadores.
    var palabras = cadena.split(" ");

    //Devolver la cantidad de palabras 
    document.write(palabras.length + "<br>");
}
*/

/*
//Triángulo de asteriscos. 

function triangulo(num){
    //El número de filas del triángulo.
    for(i = 1; i <= num; i++){
        document.write("<br>");
        //Número de columnas del triángulo.
        for(j = 1; j <= i; j++){
            document.write("*");
        }
    }
}
var num = prompt("Introduce un número"); 
document.write(triangulo(num) + "<br>"); */

//Eliminar números repetidos. 

/*
function numeroRepetidos(array){
    //Guarda los valores en el nuevo array
    var newArray = []; 
    //Ordenarlo en caso de que el array esté desordenado
    array = array.sort(); 
    for(i = 0; i < array.length; i++){
        //Compara las posiciones de i con la siguiente 
        if(array[i] != array[i - 1]){ 
            newArray.push(array[i]); 
        }
    }
    return newArray; //retornando valores que pido con la función
}
var array = [8, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5 ,5]; 
document.write(numeroRepetidos(array) + "<br>");
*/

function tresNumeros(){
     var num1 = prompt("Ingrese el primer número");
     var num2 = prompt("Ingrese el segundo número");
     var num3 = prompt("Ingrese el tercer número");

    if (num1 < num2 && num1 < num3){
        document.write("El número pequeño es: " + num1); 
    } else if (num2 < num1 && num2 < num3){
        document.write("El número pequeño es: " + num2);
    } else if (num3 < num1 && num3 < num2){
        document.write("El número pequeño es: " + num3);
    }
} 

function factorial(){
    // El factorial de un número, es el número por sus números anteriores. Es decir, 3x2x1
    
    while (true){
        var num = parseInt(prompt("Ingrese un número"));
    
        if (!isNaN(num)){
            var factorial = 1;
            for (i = num; i >= 1; i --){
                factorial *= i; 
            }
            document.write("El factorial de el número " + num + " es " + factorial + "<br>");
        } else {
            document.write("Ingrese un número válido");
            break; // Salir del bucle si la entrada no es válida
        }
    }
}


function datosUsuarios(){

    var nombre = prompt("Ingrese su nombre: "); 
    var salario = parseFloat(prompt("Ingrese su salario: "));
    var edad = prompt("Ingrese su edad: "); 

    if (salario >= 1000 &&  salario <= 2000 && edad > 45){
        salario += (salario * 3 / 100); 
    } else if (salario >= 1000 &&  salario <= 2000 && edad < 45){
        salario += (salario * 10 / 100);
    } else if (salario < 1000 && edad < 30){
        salario = 1100; 
    } else if (salario < 1000 && edad > 45){
        salario += (salario * 15 / 100);
    } else if (salario < 1000 && edad >= 30 && edad <= 45){
        salario += (salario * 3 / 100); 
    }
    document.write("Nombre: " + nombre + "<br>" + "Salario: " + salario + "<br>" + "Edad: " + edad);
}

function mayusMinus(){
    var palabra = prompt("Ingrese una palabra");
    document.write("La palabra en mayúscula: " + palabra.toUpperCase() + "<br>");
    document.write("La palabra en minúscula: " + palabra.toLowerCase());
}

function 
