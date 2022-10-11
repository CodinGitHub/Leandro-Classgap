// Clases - plantilla para hacer objetos

class Disco {
  constructor(name, autor, codigo){
    this.name = name;
    this.autor = autor;
    this.codigo = codigo;
    this.pistas = [];
    
  }
  cargarPistas(nombrePista,duracionPista){
    this.pistas.push({
      nombrePista: nombrePista,
      duracionPista: duracionPista
    })
  }
}

let discos = [];

function cargar(){
  console.log('Disco Creado');
  let nuevoDisco = new Disco('Disco1', 'Autor1', '001');
  nuevoDisco.cargarPistas('Cancion1', 180)
  discos.push(nuevoDisco)
}

function mostrar(){
  console.log(discos)
}

