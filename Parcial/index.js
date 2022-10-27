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
    constructor(nombre, Autor, Codigo, Pistas){
        this.nombre = nombre;
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

    // let arregloPrueba = [
    //     {
    //     "Nombre": "Disco1",
    //     "Autor": "Autor1",
    //     "Codigo": "1",
    //     "Pistas": [
    //         {
    //             "Nombre": "pista1",
    //             "Duracion": "120"
    //         },
    //         {
    //             "Nombre": "pista2",
    //             "Duracion": "190"
    //         },
    //         {
    //             "Nombre": "pista3",
    //             "Duracion": "180"
    //         }
    //     ]
    //     },
    //     {
    //         "Nombre": "Disco2",
    //         "Autor": "Autor2",
    //         "Codigo": "2",
    //         "Pistas": [
    //             {
    //                 "Nombre": "pista10",
    //                 "Duracion": "181"
    //             },
    //             {
    //                 "Nombre": "pista11",
    //                 "Duracion": "190"
    //             },
    //             {
    //                 "Nombre": "pista12",
    //                 "Duracion": "180"
    //             },
    //             {
    //                 "Nombre": "pista12",
    //                 "Duracion": "380"
    //             },
    //             {
    //                 "Nombre": "pista14",
    //                 "Duracion": "180"
    //             }
    //         ]
    //         }
    // ]

    if(discos.length ==0){
        alert('Primero tienes que cargar discos')
    }

    discos.forEach(disco => {
        document.getElementById('info').innerHTML += `
        <div class="detalles-disco">
            <div class="imagen-disco">
                <img src="./compact-disc.png" alt="">
            </div>
            <div class="datos-disco">
                <h3>${disco.nombre}</h3>
                <p>Autor: ${disco.Autor}</p>
                <p>Codigo: ${disco.Codigo}</p>
                <p>Total Pistas: ${disco.Pistas.length}</p>
                <p>Duracion Total: ${sumarDuracionPistas(disco.Pistas)} seg</p>
                <p>Promedio Duracion pistas: ${promedioDuracionPistas(disco.Pistas)} seg</p>
                <p>Mayor duracion pista: ${mayorDuracionPistas(disco.Pistas)}</p>
            </div>
            <ul class="contenedor-pistas-${disco.Codigo}">
            </ul>
        </div>  
        `
        let contenedorPistasActual = document.querySelector(`.contenedor-pistas-${disco.Codigo}`)
        disco.Pistas.forEach(pista => {
            contenedorPistasActual.innerHTML += `<li>${pista.Nombre} <strong class="duracion-pistas" >${pista.Duracion}</strong> </li>` 
        });
    });

    let duracionPistas = document.querySelectorAll('.duracion-pistas')
    duracionPistas.forEach(duracionPista =>{
        if(parseInt(duracionPista.innerText)>180){
            duracionPista.style.color = 'red' 
        }
    });
};

// Todas las funciones que necesites:
function sumarDuracionPistas(arregloPistas){
    let sumaTotal = 0
    arregloPistas.forEach(pista =>{
        sumaTotal = sumaTotal + parseInt(pista.Duracion)
    })
    return sumaTotal;
}

function promedioDuracionPistas(arregloPistas){
    let sumaTotal = 0
    arregloPistas.forEach(pista =>{
        sumaTotal = sumaTotal + parseInt(pista.Duracion)
    })
    return Math.round(sumaTotal/arregloPistas.length);
}

function mayorDuracionPistas(arregloPistas){
    let mayorPista = 0;
    arregloPistas.forEach(pista =>{
        if(parseInt(pista.Duracion) > mayorPista){
            mayorPista = parseInt(pista.Duracion);
        }
    })
    let resultado = arregloPistas.find(item=>item.Duracion == String(mayorPista))
    
    return resultado.Nombre;
}