
// Los números del 10 al 1 
function numeros(){
    for(i = 10; i >= 1; i--){
        document.write(i + "<br>");
    }
}
//numeros(); //Así llamo a la funciòn 

// Muestra el numero más grande por consola
function numeroMayor(){
    var numero1 = prompt("Ingrese el primer número");
    var numero2 = prompt("Ingrese el segundo número");

    if (numero1 > numero2){
        document.write("El número " + numero1 + " es mayor"); 
    }else{
        document.write("El número 2 " + numero2 + " es mayor");
    }
}

// Pide dos números por pantalla y muestra la suma 
function sumaNumeros(){
    var numero1 = parseInt(prompt("Ingrese el primer número"));
    var numero2 = parseInt(prompt("Ingrese el segundo número"));

    var suma = numero1 + numero2;
    document.write("El resultado de la suma es: " + suma); 
}

//Pedir datos, si es casado mostrar datos en linea, si es soltero datos en columna: 
function estadoCivil(){
    var nombre = prompt("Ingrese su nombre");
    var edad = prompt("Ingrese su edad");
    var estatura = prompt("Ingrese su estatura");
    var estCivil = prompt("Ingrese su estado civil: casado o soltero");

    if (estCivil == "casado" || estCivil == "Casado"){
        document.write("Nombre: " + nombre + " Edad: " + edad + " Estatura: " + estatura + " Estado Civil: " + estCivil);
    }

    if (estCivil == "soltero" || estCivil == "Casado"){
        document.write("Nombre: " + nombre + "<br>" + " Edad: " + edad + "<br>" + " Estatura: " + estatura + "<br>" + " Estado Civil: " + estCivil);
    }
}

//Programa que pida una palabra y retorne el nùmero de caracteres que tiene: 

function numCaracteres(){
    var palabra = prompt("Ingrese una palabra"); 
    document.write("Número de caracteres: " + palabra.length); 
}

function meses(){
    var mesesdelAño = ['Enero' , 'Febrero' , 'Marzo' ,  'Abril' ,  'Mayo' ,  'Junio' ,  'Julio' ,  'Agosto' ,  'Septiembre' ,  'Octubre' ,  'Noviembre' ,  'Diciembre' ];
    for(i = 0; i < mesesdelAño.length; i ++){
        document.write(mesesdelAño[i] + "<br>"); //Importante, decirle que la iteración es sobre cada uno de los elementos del array.
    }
}

function valoracion(){
    var nota = parseInt(prompt("Ingrese su nota")); //Importante convertirlo a Integer, para que sea tratado como número. 
    switch(nota){
        case 1: 
            document.write("Ánimo guerrero, aún estás muy joven");
            break; 
        case 2: 
            document.write("¿Seguro que quieres que te lo diga?");
            break; 
        case 3: 
            document.write("¿No quieres probar otra cosa?");
            break; 
        case 4: 
            document.write("Es un casi, casi");
            break; 
        case 5: 
            document.write("¡NOS SALVAMOSSS!");
            break; 
        case 6: 
            document.write("Vamos superándonos");
            break;   
        case 7: 
            document.write("Un 7, vamos a por más");
            break;
        case 8: 
            document.write("Un 8, licenciado");
            break; 
        case 9: 
            document.write("Un 9, ingeniero");
            break; 
        case 10: 
            document.write("Un 10, directito a la NASA");
            break; 
        default: 
            document.write("Inserta una nota válida, por favor");
            break;    
    }
}

function parOimpar(){
    var num = prompt("Ingrese un número");
    while(num != null){ //Mientras el número sea diferente de null 
        if (num % 2 == 0){
            alert("El número es par");
        }else{
            alert("El número es impar");
        }
        num = prompt("Ingrese otro número"); 
    }
}

function alReves(){
    var cadena = prompt("Ingrese una frase");
    var Nuevacadena = ""; //Declaro un string vacío para el nuevo resultado;
    for (i = cadena.length - 1; i >= 0; i --){ 
        Nuevacadena += cadena[i]; //Va iterando sobre cada caracter, desde el ultimo hasta el primero y los guarda en Nuevacadena.
    }
    document.write(Nuevacadena);
}


//Crear un objeto y después imprimir todos los datos por consola. 
var Persona = {
    nombre: "Ana",
    edad: "22",
    telefono: "+34642581502",
} 

for (var prop in Persona){
    document.write(Persona[prop] + "<br>"); //Recorre todos las propiedades(Elementos) del objeto Persona
}
console.log(Persona); 

