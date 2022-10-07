let fruta = 'banana';
let frutas = ['banana', 'fresa'];

const usuarios = {
    nombre: 'David',
    edad: 38,
    developer: true,
    idiomas: ['espanol', 'ingles'],
    direccion: {
        calle: 'Nogales',
        nro: 31145,
        Coordenas: {
            x: 12321,
            y: 555
        }
    }
};

usuarios.color = 'azul';

delete usuarios.nombre;
delete usuarios.edad;

console.log(usuarios);
// console.log(frutas[1]);
// console.log(usuarios)


// EJERCICIO 2 PLATZI

let array = [
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    }
  ];

let arregloConNombres = [];

array.forEach(elemento => {
    arregloConNombres.push(elemento.name)
})

console.log(arregloConNombres)

// EJERCICIO 3 PLATZI

let array3 = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
  ];

// array3[0].taxes = 1000*0.19;
// array3[1].taxes = 2000*0.19;

let resultado = array3.map(elemento => ({
    ...elemento,
    taxes: elemento.price*0.19
}))

console.log(resultado)

// function solution(array){
//     return array.map(item => ({
//         ...item,
//         taxes: Math.trunc(item.price * .19)
//     }))
// }; 