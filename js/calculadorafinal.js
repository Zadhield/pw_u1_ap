function mostrarEnDisplay(valor){
    let elementoDisplay = document.getElementById('id_display');
    elementoDisplay.innerText = elementoDisplay.innerText + valor;
    if(valor!== "+"){
        concatenarNumero(valor);
    }else {
        operacionSumar();
    }
}
let num1 = "";
let num2="";
let esSegundoDigito="0";
 
function operacionSumar(){
    esSegundoDigito = "1";
}

function concatenarNumero(numero){
    if(esSegundoDigito=== "0"){
        num1=num1+numero;
    } else{
        num2=num2+numero;
    }
}
