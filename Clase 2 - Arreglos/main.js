//FUNCIONES

let suma1 = sumar(4, 9)
let suma2 = sumar(1, 2)
let suma3 = sumar(3, 4)

console.log(suma1, suma2, suma3)

function sumar(num1, num2){
    return num1+num2;
}
//Hoisting - una funcion se la puede declarar antes o despues de llamarla

//FUNCIONES FLECHAS

let resultado = (valor1, valor2) => {
    return valor1 + valor2
} // Las funciones flecha no gozan de hosting

console.log(resultado(10, 15))




let fruta = 'fresa';
let frutas = ['fresa', true, 10];

// console.log(frutas);

//METODOS

frutas.push('banana'); // Agregar elementos al final del arreglo
console.log(frutas);

frutas.pop(); // Quitar elementos al final del arreglo
console.log(frutas);

frutas.unshift('piña');//Agrega al inicio
console.log(frutas); 

frutas.shift(); //Quita del inicio
console.log(frutas); 

// Foreach
let numeros = [1, 2, 3, 4, 5];
// [11, 12, 13, 14, 15]
console.log()

let nuevoArreglo = [];
for(let i = 0; i<5 ;i++){
    console.log(numeros[i] + 10)
    nuevoArreglo.push(numeros[i] + 10)
}
console.log(nuevoArreglo)

let nuevoArreglo2 = []
numeros.forEach(elemento=>{
    nuevoArreglo2.push(elemento+10)
})
console.log(nuevoArreglo2)
console.log(numeros)

// Slice, splice

let variables = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

let corte = variables.splice(1,3);

console.log(corte)

// FILTER

let users = [
    {id: 1, name: "Celina", edad: 28}, 
    {id: 2, name: "David", edad: 15}, 
    {id: 3, name: "Federico", edad: 60}
  ];

let result = users.filter( elemento=>elemento.edad >= 28 )

console.log(result)

let ejercicioArray = ['amor', 'sol', 'piedra', 'día'];

let resultadoPlatzi = ejercicioArray.filter(elemento => elemento.length >= 4)

console.log(resultadoPlatzi)


/*--------------------------------*/
function ejecutarEjercicio(array){
    return array.filter(elemento => elemento.length >= 4)
}
/*--------------------------------*/

console.log(ejecutarEjercicio(['amor', 'sol', 'piedra', 'día']))