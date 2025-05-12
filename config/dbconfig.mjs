import mongoose from 'mongoose';//Se importa el módulo mongoose, que actúa como un Object Data Modeling (ODM). 
// Permite definir modelos y esquemas para manejar datos con MongoDB de forma estructurada y orientada a objetos.

export async function  connectDB () {//Se define y exporta una función asincrónica encargada de realizar la conexión con la base de datos.

    try {
        await mongoose.connect ('mongodb+srv://Grupo-03:grupo03@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexión exitosa a MongoDB')
    }
    catch(error){
        console.error ('Error al conectar a MongoDB',error);
        process.exit(1)//sale de la aplicación si hay errores
    }
    
}