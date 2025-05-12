import pais from '../model/pais.mjs';
import IRepository from './IRepository.mjs';
//implementa metodos definidos en la interfaz

class PaisRepository extends IRepository{

    async obtenerPorId(id){
        return await pais.findById(id);
    }//obtiene solo el pais cuyo id se pasa por parametro

    async obtenerTodos(){
        return await pais.find({});
    } //obtiene todos todos los paises
    
    async insertarPais(nuevoPais) {
        const nuevo = new pais(nuevoPais);
        return await nuevo.save();
    }//guarda un nuevo pais en la base de datos
   
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
//devuelve los paises en los que el creador es debora 
     
    async borrarPorId(id) {
            return await pais.findByIdAndDelete(id);
           }
       //borra loa paises por el id
          
  
}
        export default new PaisRepository;
// este archivo tiene las implementaciones de los metodos que se utilizan en el proyecto 