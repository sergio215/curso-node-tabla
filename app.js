const fs=require("fs");

console.clear();
const {crearArchivo}=require('./helpers/multiplicar');



console.log(process.argv)
console.log(argv)

console.log('base: yargs', argv.base)


// const [,,arr3="base=5"]=process.argv
// const[,base2]=arr3.split("=")

// console.log(base2)

// const base=5;





crearArchivo(base)
.then(doc=>console.log("Archivo creado"))
.catch(err=>console.log(err))

