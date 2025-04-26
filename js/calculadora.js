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

    const numerosImpares = [1, 3, 4, 5, 7, 9];
    const numerosPares = [2, 4, 6, 8];
    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);
    /*Sentencias de control*/
    for (const dia of diaslaborables) {
        console.log(dia);
        if (dia === 'viernes') {
            console.log('Por fin Viernes');
        } else {
            console.log('Aun no es viernes');
        }
        if (dia !== 'viernes') {
            console.log('Dia normal');
        } else {
            console.log('dia de salida');

        }
    }

    /*Manejo de objetos*/
    const miProfesor = {
        nombre: 'Angelo',
        apellido: 'Pujota',
        edad: 27,
        genero: 'Masculino',
        Ciudad: 'Quito'
    }
    console.log(miProfesor);

    console.log(miProfesor.nombre)
    /*Seteo de atributos*/
    miProfesor.apellido = 'Alcachofa';

    console.log(miProfesor);
    if (miProfesor.Ciudad = 'Quito') {
        console.log('Es de la capital');
    }

    const estudiante = {
        nombre: 'Juan',
        apellido: 'pedro',
        edad: 27,
        genero: 'Masculino',
        Ciudad: 'Quito'
    }
    const estudiante2 = {
        nombre: 'Anita',
        apellido: 'Casagallo',
        edad: 11,
        genero: 'Femenino',
        Ciudad: 'Guayaquil'
    }
    const estudiante3 = {
        nombre: 'Dario',
        apellido: 'Santoalla',
        edad: 17,
        genero: 'Masculino',
        Ciudad: 'Quito'
    }
    const estudiantes = [estudiante, estudiante2, estudiante3];
    console.log(estudiantes);
    console.table(estudiantes);

    const ciudadano = {
        nombre: 'Angelo',
        apellido: 'Pujota',
        direccion: {
            callePrincipal: 'Av.america',
            calleSecundaria: 'Av.La Gasca',
            numeracion: '5620',
            barrio: {
                referencia: 'Frente al Dilipa'
            }

        }
    }
    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);
    ciudadano.direccion.callePrincipal = 'Av amazonas';
    console.log(ciudadano);

    const est1 = {
        nombre: 'Edison'
    }
    const est2 = {
        nombre: 'Daniel'
    }
    const arregloEstudiantes = [est1, est2];
    console.log(arregloEstudiantes);
    const arregloEstudiantes2 = [{ nombre: 'Carla', apellido: 'Castillo' }, { nombre: 'Anita', apellido: 'Guevara' }];
    console.log(arregloEstudiantes2);
    console.log(arregloEstudiantes2[1].apellido);

    //Desestructuracion de Arreglos
    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c5);

    const [cuno, cdos] = colores;
    console.log(cuno);
    console.log(cdos);

    const [, , ctres] = colores;
    console.log(ctres);

    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];

    desestructuracionArreglo(colores);

    const [, p2, p3, p4, p5, p6, p7, p8, p9, p10] = desestructuracionArreglo2();
    console.log(p2);
    console.log(p3);
    console.log(p10);

    //Desestructuración por operador Rest
    console.log('Desestructuración por operador Rest');
    const[p1,...resto]=desestructuracionArreglo2();
    console.log(p1);
    console.log(resto);

    // Desestructuración de objetos
    const auto = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020,
        color: 'Amarillo'
    }

    const { marca, color, anio } = auto;
    console.log(color);

    const { anio1 } = {
        marca1: 'Toyota',
        modelo1: 'prius',
        anio1: 2020,
        color1: 'Amarillo'
    }
    console.log(anio1);

    desestructuracionObjeto(auto);
    const universidad= {
        nombre:'UCE',
        direccion:'America',
        rector:{
            nombreR:'Daniel',
            apellidoR:'Teran'
        }
    }
    
    const {rector,nombreR}=universidad;
    console.log(rector);

    const{apellidoR}=rector;
    console.log(apellidoR);

    desestructuracionObjeto(auto);
    const universidad2= {
        nombre2:'UCE',
        direccion2:'America',
        rector2:{
            nombreR2:'Daniel',
            apellidoR2:'Teran'
        }
    }

    const{nombre2,rector2:{nombreR2}}= universidad2;
    console.log(nombreR2);
    //Desestructuracion por operador rest 
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'prius',
        anioR: 2020,
        colorR: 'Amarillo'
    }

    const {marcaR, ...restoo}= autoR;
    console.log(marcaR);
    console.log(restoo);
    
}

function desestructuracionArreglo([c1, c2, c3]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);
}
// Como conclusión la desestructuración de objetos se lo hace a tráves de sus posiciones
function desestructuracionArreglo2() {
    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    return colores;
}

function desestructuracionObjeto({marca,color}) {
    console.log(marca);
    console.log(color);
}


