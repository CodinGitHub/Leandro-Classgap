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
    contenedorFormulario.style.display = 'block';
    document.getElementById('info').style.display = 'none';

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
        
        //Validar si los campos de pistan estan llenos
        if(formData.get('nombrePista') == ''){
            alert('El nombre de la pista no debe estar vacio');
        }else if(formData.get('duracionPista') == ''){
            alert('El campo DURACION PISTA no debe estar vacio');
        }else{

            // Validar si la duracion 0-7200
            if (parseInt(formData.get('duracionPista')) < 0 || parseInt(formData.get('duracionPista')) > 7200 ){
                alert('la duracion debe ser mayor a cero y menos a 7200');
            }else{
                //Crear un objeto Pista a partir de la clase Pista
                let pistaActual = new Pista(formData.get('nombrePista'), formData.get('duracionPista'))
                arregloPistas.push(pistaActual);

                console.log(arregloPistas)
                alert(`Pista ${arregloPistas.length} cargada correctamente, puedes cargar mas pistas`)
                // Vaciar los campos
                document.querySelector('#nombrePista').value = '';
                document.querySelector('#duracionPista').value = '';
                

            }
            

        }

        // Si la duracion es mayor a 180 descatar en rojo
        
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

        if(formData.get('nombreDisco') == ''){
            alert('El campo NOMBRE no debe estar vacio');
        }else if(formData.get('autorDisco') == ''){
            alert('El campo AUTOR no debe estar vacio');
        }else if (formData.get('codigoDisco') == ''){
            alert('El campo CODIGO no debe estar vacio');
        }else if(arregloPistas.length == 0){
            alert('Debes cargar por lo menos una pista');
        }else{

            //Validar el codigo del disco 0 -999
            if(parseInt(formData.get('codigoDisco')) <0 || parseInt(formData.get('codigoDisco'))> 999){
                alert('El codigo debe estar en el rango de 0 - 999');
            }else{

                console.log(formData.get('codigoDisco'))
                let resultado = discos.find(elemento => elemento.Codigo === formData.get('codigoDisco'))
                console.log(resultado)

                if(resultado){ // Si existe, si tiene un contenido la variable resultado
                    alert('El codigo del disco ya existe')
                }else{

                    let discoActual = new Disco(formData.get('nombreDisco'), formData.get('autorDisco'), formData.get('codigoDisco'), arregloPistas)
                    discos.push(discoActual)
                    console.log(discos)

                    // Borrar el arreglo de pistas
                    arregloPistas = [];
                  

                    // Poner un alert disco cargado correctamente
                    alert(`Disco ${discos.length} cargado correctamente, podes cargar mas discos`)

                    // Vaciar los campos
                    document.querySelector('#nombreDisco').value = '';
                    document.querySelector('#autorDisco').value = '';
                    document.querySelector('#codigoDisco').value = '';
                }
            }
        } 
    });   
};

// Función Mostrar:
const Mostrar = () => {
    contenedorFormulario.style.display = 'none';
    document.getElementById('info').style.display = 'block';

    console.log('Disco Mostrado')
    // Variable para ir armando la cadena:
    // let html = '<h1>cadena</h1>';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    // document.getElementById('info').innerHTML = html; // <--- ahí es acá
    document.getElementById('info').innerHTML = '';
    discos.forEach(disco => {
        document.getElementById('info').innerHTML += `
        <div class="detalles-disco">
            <div class="imagen-disco">
                <img src="./compact-disc.png" alt="">
            </div>
            <div class="datos-disco">
                <h3>El lado oscuro de la Programación</h3>
                <p>Autor: 'Los Programadores Anónimos'</p>
                <p>Codigo: 001</p>
            </div>
            <ul>
                <li>'Esa cajita loca llamada variablecita' - <strong>200</strong> </li> 
                <li>'Nunca quise ser un NaN' - <strong>180</strong> </li> 
                <li>'No quiero programar' - <strong>90</strong> </li> 
            </ul>
        </div>   
        
        `
    });

};

// Todas las funciones que necesites:
