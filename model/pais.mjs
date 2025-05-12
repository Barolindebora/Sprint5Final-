import mongoose from 'mongoose'; //definición del modelo con el que se va a trabajar en el proyecto, modelo que se guarda en la base de datos 


const paisSchema=new mongoose.Schema({
    
    nombrePais: {type: String, required: true},
    capital: {type: [String]},
    limitrofes: [String],
    area: {type: Number},
    poblacion: {type: Number}, 
    gini: {type: Number},
    zonaHoraria: {type: [String]},
    creador: {type :String, default: 'Debora'},
} 
);
 const pais  =mongoose.model('Pais', paisSchema, 'Grupo-03');
 export default pais;