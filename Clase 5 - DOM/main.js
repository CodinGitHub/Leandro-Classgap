//Formas en que podemos seleccionar un elemento del HTML
// A traves del ID
// A traves del Clase
// A traves del etiqueta

// const parrafo1 = document.getElementById('parrafo1');
// const parrafos = document.getElementsByClassName('parrafo');
// const parrafosPorEtiqueta = document.getElementsByTagName('p');

const parrafo1 = document.querySelector('#parrafo2');

// console.log(parrafo1);
// console.log(parrafos);
// console.log(parrafosPorEtiqueta);

// parrafo1.style.color = 'white';
// parrafo1.style.backgroundColor = 'black';
// parrafo1.style.width = '100px';
// parrafo1.style.borderRadius = '14px'
// parrafo1.style.textAlign = 'center'
// parrafo1.style.border = '2px solid yellow'

const boton = document.querySelector('#submitBtn')
const lista = document.getElementById('lista')
const entrada = document.querySelector('#entrada')
const contenedirDiscos = document.querySelector('.contenedor-discos')

console.log(lista)

boton.addEventListener('click', (evento)=>{
  evento.preventDefault();
  console.log(entrada.value)
  lista.innerHTML += `<li>${entrada.value}</li>`;
})

const discos = [
  {id: 13, nombre: "disco1", autor: "autor1"},
  {id: 42, nombre: "disco2", autor: "autor3"},
  {id: 11, nombre: "disco3", autor: "autor4"},
]

discos.forEach(disco => {
  contenedirDiscos.innerHTML += `
    <div class="disco" id="${disco.id}">
        <p class="nombre-disco">${disco.nombre}</p>
        <p class="autor-disco">${disco.autor}</p>
    </div>
  `
})