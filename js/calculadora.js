const SUMA = '+';
const RESTA = '-';
const MULTIPLICAR = '*';
const DIVIDIR = '/';

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dividir(numero1, numero2) {
    return numero1 / numero2;
}
function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;
    if (tipo === SUMA) {
        resultado = sumar(num1, num2);
    }
    if (tipo === RESTA) {
        resultado = restar(num1, num2);
    }
    if (tipo === MULTIPLICAR) {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === DIVIDIR) {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();
}
const fundamentos = () => {

    console.log('Fundamentos JS')
    /*Tipos de variables
   var: antiguo, obsoleto 
   let: varaibles cambiantes
   const: variables constantes 
   */
    let nombre = 'Edison';
    let numero = 10;
    let areglo = [1, 2, 3, 4, 5];
    const nomnbrec = '10';
    console.log(areglo);
    console.log('texto de prueba');

    /*Arreglos*/
    const diaslaborables = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    console.log(diaslaborables);
    console.log(diaslaborables[0]);
    console.log(diaslaborables[10]);
    let valor = '';
    console.log(valor);

    diaslaborables.push('Sabado');
    diaslaborables.unshift('dias');
    console.log(diaslaborables);

    const numerosImpares=[1,3,4,5,7,9];
    const numerosPares= [2,4,6,8];
    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);
    /*Sentencias de control*/
    for(const dia of diaslaborables){
        console.log(dia);
        if(dia==='viernes'){
            console.log('Por fin Viernes');
        }else{
            console.log('Aun no es viernes');
        }
        if(dia!=='viernes'){
            console.log('Dia normal');
        }else{
            console.log('dia de salida');

        }
    }

    /*Manejo de objetos*/
    const miProfesor={
        nombre:'Angelo',
        apellido:'Pujota',
        edad:27,
        genero:'Masculino',
        Ciudad:'Quito'
    }
    console.log(miProfesor);

    console.log(miProfesor.nombre)
    /*Seteo de atributos*/
    miProfesor.apellido='Alcachofa';

    console.log(miProfesor);
    if(miProfesor.Ciudad='Quito'){
        console.log('Es de la capital');
    }

    const estudiante={
        nombre:'Juan',
        apellido:'pedro',
        edad:27,
        genero:'Masculino',
        Ciudad:'Quito'
    }
    const estudiante2={
        nombre:'Anita',
        apellido:'Casagallo',
        edad:11,
        genero:'Femenino',
        Ciudad:'Guayaquil'
    }
    const estudiante3={
        nombre:'Dario',
        apellido:'Santoalla',
        edad:17,
        genero:'Masculino',
        Ciudad:'Quito'
    }
    const estudiantes = [estudiante,estudiante2,estudiante3];
    console.log(estudiantes);
    console.table(estudiantes);
}

