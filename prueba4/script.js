
function ocultarParrafo(){
    var parrafo2 = document.getElementById("parrafo2");
    
    if (parrafo2.style.visibility == "visible"){
        parrafo2.style.visibility = "hidden";
    }else{
        parrafo2.style.visibility = "visible";
    }
}