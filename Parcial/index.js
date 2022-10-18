'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };


class Disco {
    constructor(Nombre, Autor, Codigo){
        this.Nombre = Nombre;
        this.Autor = Autor;
        this.Codigo = Codigo;
    }
}

class Pista{
    constructor(Nombre, Duracion){
        this.Nombre = Nombre,
        this.Duracion = Duracion
    }
}


// Discos:
let discos = [];

let contenedorFormulario = document.querySelector('#contenedorFormulario');

// Función Cargar:
const Cargar = () => {
    contenedorFormulario.innerHTML = `
    <form id="formulario" action="">
        <input id="nombreDisco" name="nombreDisco" type="text" placeholder="Nombre disco" value="Disco1">
        <input id="autorDisco" name="autorDisco" type="text" placeholder="Autor" value="Autor1">
        <input id="codigoDisco" name="codigoDisco"  type="number" placeholder="Código">
        <fieldset>
            <legend>Pistas:</legend>
            <input id="nombrePista" name="nombrePista" type="text" placeholder="Nombre">
            <input id="duracionPista"  name="duracionPista" type="number" placeholder="Duración">
            <input id="agregarBtn" type="submit" value="agregar">
        </fieldset>
    </form>
    `
    let formularioElement = document.querySelector('#formulario');
    let botonAgregar = document.querySelector('#agregarBtn');

    botonAgregar.addEventListener('click', evento=>{
        evento.preventDefault()
        // Cargando datos desde el formulario:
        let formData = new FormData(formularioElement);
        

        //Crear un objeto Pista a partir de la clase Pista
        let pistaActual = new Pista(formData.get('nombrePista'), formData.get('duracionPista'))

        console.log(pistaActual)

        let confirmacion = confirm('Quieres cargar otro disco')
        console.log(confirmacion)

        // Crear un objeto disco a partir de la clase Disco
        // let discoActual = new Disco(formData.get('nombreDisco'), formData.get('autorDisco'), formData.get('codigoDisco'))
        // discos.push(discoActual)
        // console.log(discos)
    });

    
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
