
const fs=require("fs");


const crearArchivo=async (base=5)=>{


    console.log("===============")
    console.log(`TABLA DE DEL ${base}`)
    console.log("===============")  
    
    
    let salida=``;

    

    try{

        if(typeof base != "number")throw "La base no es un numero"
        for(i=1;i<=10;i++){
    
            salida+=`${base}x${i} = ${base*i}\n`
            
            }
             
            await fs.writeFileSync(`tabla${base}.txt`,salida)
            
            console.log(`tabla del ${base} creada`)

    }
    catch(error){
        console.log("errorsito")
        throw error;
          
    }

   


}


module.exports={
    crearArchivo
}




                                  /// PROMESA NEW PROMISE




// const fs=require("fs");


// const crearArchivo=(base=5)=>{

// return new Promise((resolve,reject)=>{


//     console.log("===============")
//     console.log(`TABLA DE DEL ${base}`)
//     console.log("===============")  
    
    
//     let salida=``;


    

//         if(typeof base != "number"){
//         reject ("La base no es un numero")
//     return }
//         for(i=1;i<=10;i++){
    
//             salida+=`${base}x${i} = ${base*i}\n`
            
//             }
             
//             fs.writeFileSync(`tabla${base}.txt`,salida)
            
//             resolve(`tabla del ${base} creada`)

    
    
    
      
          
   






// })
   
   


// }


module.exports={
    crearArchivo
}