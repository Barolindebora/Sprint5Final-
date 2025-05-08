import mongoose from 'mongoose'; 


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