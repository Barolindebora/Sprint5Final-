import PaisRepository from "../repositories/PaisRepository.mjs";
//utiliza los metodos del repositorio para buscar , filtrar, etc
 //separa los metodos del repositorio con el fin de que este solo se ocupe de la base de datos

export async function obtenerPaisPorId(id) {
    return await PaisRepository.obtenerPorId(id);
}
export async function obtenerTodosLosPaises() {
    return await PaisRepository.obtenerTodos();
}
export async function crearPais(datosPais) {
    return await PaisRepository.insertarPais(datosPais);
}
export async function actualizarPaisporId(id, nuevosDatos) {
        return await PaisRepository.actualizarPorId(id, nuevosDatos);
    }
export async function obtenerTodosLosPaisesPorCreadorDebora() {
        return await PaisRepository.obtenerTodosPorCreadorDebora();
    }
export async function borrarPaisPorId(id) {
        return await PaisRepository.borrarPorId(id);
    }