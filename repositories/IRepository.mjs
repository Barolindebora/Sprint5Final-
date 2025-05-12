class IRepository{
    obtenerPorId(id){
        throw new Error('Metodo obtenerPorID() no implementado');
    }

    obtenerTodos(){
        throw new Error('Metodo obtenerTodos() no implementado');
    }

    buscarPorCreador(){
        throw new Error('buscarPorCreador() no implementado');
    }

    insertarPais(nuevoPais){
        throw new Error ('Metodo insertarPais() no implementado')
    }

}

export default IRepository;
//este archivo establece los metodos que deben implementar los modelos que se definen