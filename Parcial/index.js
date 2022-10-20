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
    constructor(Nombre, Autor, Codigo, Pistas){
        this.Nombre = Nombre;
        this.Autor = Autor;
        this.Codigo = Codigo;
        this.Pistas = Pistas
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
let arregloPistas = [];

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
            <input id="agregarPistaBtn" type="submit" value="Agregar pista">
        </fieldset>
        <input id="agregarDiscoBtn" type="submit" value="Agregar disco">
    </form>
    `
    let formularioElement = document.querySelector('#formulario');
    let botonAgregarPista = document.querySelector('#agregarPistaBtn');
    let botnAgregarDisco = document.querySelector('#agregarDiscoBtn');

    botonAgregarPista.addEventListener('click', evento=>{
        evento.preventDefault()
        // Cargando datos desde el formulario:
        let formData = new FormData(formularioElement);
        

        //Crear un objeto Pista a partir de la clase Pista
        let pistaActual = new Pista(formData.get('nombrePista'), formData.get('duracionPista'))
        arregloPistas.push(pistaActual);

        console.log(arregloPistas)


        // let confirmacion = confirm('Quieres cargar otra pista', 'cargar')
        // if(confirmacion === true){
        //     // Agregar otra pista al arreglo de pistas
        //     console.log('Esperando carga de nueva pista')
        // }else{
        //     // Cargarse el disco con las pistas que haya tenido
        //     console.log('Disco Cargado');
        // }

        alert(`Pista ${arregloPistas.length} cargada correctamente, puedes cargar mas pistas`)

        // Forma resumida del if anterior
        // if(confirmacion == false){
        //     console.log('Disco Cargado');
        // }

        // Crear un objeto disco a partir de la clase Disco
        // let discoActual = new Disco(formData.get('nombreDisco'), formData.get('autorDisco'), formData.get('codigoDisco'))
        // discos.push(discoActual)
        // console.log(discos)
    });

    botnAgregarDisco.addEventListener('click', evento=>{
        evento.preventDefault()
        // Cargando datos desde el formulario:
        let formData = new FormData(formularioElement);

        //Comprobar si el codigo fue cargado anteriormente

        console.log(arregloPistas)

        // if(formData.get('nombreDisco') == ''){
        //     alert('El campo NOMBRE no debe estar vacio');
        // }else if(formData.get('autorDisco') == ''){
        //     alert('El campo AUTOR no debe estar vacio');
        // }else if (formData.get('codigoDisco') == ''){
        //     alert('El campo CODIGO no debe estar vacio');
        // }else if(arregloPistas.length == 0){
        //     alert('Debes cargar por lo menos una pista');
        // }else{
        //     let discoActual = new Disco(formData.get('nombreDisco'), formData.get('autorDisco'), formData.get('codigoDisco'), arregloPistas)
        //     discos.push(discoActual)
        //     console.log(discos)

        //     // Borrar el arreglo de pistas
        //     arregloPistas = [];

        //     // Poner un alert disco cargado correctamente
        //     alert(`Disco ${discos.length} cargado correctamente, podes cargar mas discos`)
        // }


        console.log(formData.get('codigoDisco'))

        let resultado = discos.find(elemento => elemento.Codigo === formData.get('codigoDisco'))

        if(resultado){
            alert('El codigo del disco ya existe')
        }else{
            let discoActual = new Disco(formData.get('nombreDisco'), formData.get('autorDisco'), formData.get('codigoDisco'), arregloPistas)
            discos.push(discoActual)
            console.log(discos)

            // Borrar el arreglo de pistas
            arregloPistas = [];

            // Poner un alert disco cargado correctamente
            alert(`Disco ${discos.length} cargado correctamente, podes cargar mas discos`)
        }

        
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
