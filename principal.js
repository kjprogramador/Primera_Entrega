
let cursos = [{
    id:101,
    nombre:"NodeJs",
    duracion: 32,
    valor: 150000
},
{
    id:102,
    nombre:"ReactJs",
    duracion: 42,
    valor: 350000
},
{
    id:103,
    nombre:"Angular",
    duracion: 30,
    valor: 100000
}];


const informacion={
    id:{
        demand:true,
        alias:"i"
    },
    nombre:{
        demand:true,
        alias:"n"
    },
    cedula:{
        demand:true,
        alias: "c"
    }
}


let mostrar=()=>{
    console.log("********lista de cursos*********")
    cursos.forEach(function(element, index) {
        setTimeout(function(){
            let resultado= "el curso con id " + element.id + " se llama " + element.nombre + " tiene una duracion de " 
                            + element.duracion + " horas y un valor de " + element.valor + " pesos."
            console.log(resultado);
        }, 2000*index);
      });
    }

const argv = require("yargs")
        .command("inscribir", " inscribir estudiante", informacion)
        .argv

const fs = require("fs");

let id= argv.id
let nombre= argv.nombre
let cedula= argv.cedula
let cursoEncontrado = cursos.find(curso1 => curso1.id == id);


let crearArchivo= (error) => {    
    texto = "el estudiante "+  nombre + '\n' +
    "con cedula " + cedula + '\n' +
    "se ha matriculado en el curso llamado " + cursoEncontrado.nombre + '\n' +
    "tiene una duracion de " + cursoEncontrado.duracion + " y un valor de " + cursoEncontrado.valor + " pesos."
    fs.writeFile("EstudiantesInscritos.txt", texto, (error)=>{
        if(error){
            console.log('Errrrrror al crear archivo');
        }
        console.log("se ha creado el archivo")
    });
}


if(cursoEncontrado == undefined && argv._ == "inscribir"){
    console.log("ha ingresado un id que no corresponde a ningun curso")
}
else if(argv._ == "inscribir"){
    crearArchivo();
}
else {
    mostrar();
}