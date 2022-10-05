var letras;
let numero = 'este es un numero';
const FRUTAS = 'banano';

// numero = prompt('ingresa tu edad');
// FRUTAS = 'fresa';
letras = true;

console.log(numero);
console.log(typeof(numero));

//Condicionales
if(numero === 15){
    console.log('Si es igual');
}else{
    console.log('NO es igual');
}

//Operadores = == === > < + - / *
if(numero <= 10){
    console.log('Si es mayor a 10');
}else{
    console.log('NO es mayor a 10');
}

//Bucles
let valorInicial = 0;

// for(let i=3; i<5; i++){
//     valorInicial++;
//     console.log(valorInicial)
// }

// let i=6
// while(i<5){
//     valorInicial++;
//     console.log(valorInicial);
//     i++;
// }

// do {
//     valorInicial++;
//     console.log(valorInicial);
//     i++;
// } while (i<5);

let i = 3;

while (i) {
  console.log( i-- );
}

setInterval(()=>{
    let hora = new Date();
    console.log(hora.toTimeString())
    // console.log(hora.toDateString())
    // console.log(hora.toLocaleTimeString())
}, 1000);