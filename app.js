
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';
let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;
// console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(typeof(numeroSecreto));
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario);

    // console.log('Intento numero: ', intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('H1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log('numero Generado: ', numeroGenerado);
    console.log(listaNumeros);
    //Si el numero generado esta incluido en la lista
    if (listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

asignarTextoElemento('H1', 'Juego del numero secreto!');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);