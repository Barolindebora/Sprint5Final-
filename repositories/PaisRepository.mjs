import pais from '../model/pais.mjs';
import IRepository from './IRepository.mjs';
//implementa metodos definidos en la interfaz

class PaisRepository extends IRepository{

    async obtenerPorId(id){
        return await pais.findById(id);
    }

    async obtenerTodos(){
        return await pais.find({});
    }
    
    async insertarPais(nuevoPais) {
        const nuevo = new pais(nuevoPais);
        return await nuevo.save();
    }
   
    async actualizarPorId(id, nuevosDatos) {
        return await pais.findOneAndUpdate(
                { _id: id },
                nuevosDatos,
                { new: true } // Devuelve el pais actualizado
            );
        } 

    async obtenerTodosPorCreadorDebora() {
            return await pais.find({ creador: /Debora/i });
          }

     
    async borrarPorId(id) {
            return await pais.findByIdAndDelete(id);
           }
       
          
        }
        export default new PaisRepository;
