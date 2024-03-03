let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto)

function asignarTextoElemento(elemento,texto){
    let elmentoHtml = document.querySelector(elemento)
    elmentoHtml.innerHTML = texto;
    return;
}
function clickusuario() {
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p' ,` Ganaste! en ${intentos} ${(intentos=== 1) ? 'Vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p' , 'El numero es menor');
    
        } else{
            asignarTextoElemento('p' , 'El numero es mayor');
        }  
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja (){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero Secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')

}

condicionesIniciales();
