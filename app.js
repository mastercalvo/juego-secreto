let numerSecreto =0;
let intentos =0;
let listaNumerosSorTeados = [];
let numeroMaximo = 10;

console.log(numerSecreto);


function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
titulo.innerHTML =  texto;
    return;
} 
function verificarIntento() {
    let numeroDeUsario = parseInt(document.getElementById('valorUsuario').value);
  
 
    if (numeroDeUsario === numerSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsario > numerSecreto) {
          asignarTextoElemento('p','El número secreto es menor');  
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        linpiarCaja();
    }
    return;
}
function linpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroSecreto() {
    numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los números
    if (listaNumerosSorTeados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else{
       //si el numero generado está incluido en la lista
      if (listaNumerosSorTeados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
      } else{
        listaNumerosSorTeados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
    
} 


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numerSecreto = generarNumeroSecreto();
    intentos = 1;    
}

function reiniciarJuego() {
 //Limpiar caja
 linpiarCaja();
 //Indicar mensaje de intervalos de números
//Generar el número  aleatorio
//inicializar el número de intentos
condicionesIniciales();
//deshabilitar el botón de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();