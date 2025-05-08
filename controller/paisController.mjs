import { renderizarListaPaises, renderizarPaises } from "../views/responseViews.mjs";
import  { obtenerPaisPorId, obtenerTodosLosPaises, 
    obtenerTodosLosPaisesPorCreadorDebora, crearPais, actualizarPaisporId, borrarPaisPorId } from "../services/paisService.mjs";


export async function  obtenerPaisPorIdController(req, res) {
    try{ 
        const {id}=req.params;
        const pais =await obtenerPaisPorId(id);
        if (!pais)
            return res.status(404).send ({mensaje:'Pais no encontrado'});
        const paisFormateado=renderizarListaPaises(pais)
        res.status(200).json(paisFormateado);

    } catch (error){
        res.status(500).send ({mensaje: 'Error al obtener el pais', error:error.mensaje})
    }
    
}

export async function  obtenerTodosLosPaisesController(req, res) {
    try{ 
        const paises =await obtenerTodosLosPaises();
       
        const paisesFormateados=renderizarListaPaises(paises)
        res.status(200).json(paisesFormateados);

    } catch (error){
        res.status(500).send ({mensaje: 'Error al obtener los paises', error:error.mensaje})
    }
    
}

export async function crearPaisController(req, res) {
    try {
        const datosPais = req.body;
        const nuevoPais = await crearPais(datosPais);
        res.status(201).json(renderizarPaises(nuevoPais));

    } catch (error) {
        res.status(500).send({ mensaje: "Error al crear el pais", error: error.message });
    }
}

export async function actualizarPaisPorIdController(req, res) {
    try {
        const { id } = req.params; // ID del país que se quiere actualizar
        const nuevosDatos = req.body; // Datos a actualizar desde el cuerpo de la solicitud
        const paisActualizado = await actualizarPaisporId(id, nuevosDatos);
        // Devolver el pais actualizado
        res.redirect('/api/dashboard');
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar el pais', error: error.message });
    }
}


export async function actualizarSuperheroeController(req, res) {
    try {
    const {id}= req.params;
    const nuevosDatos= req.body;
    const superheroeActualizado = await actualizarSuperheroe(id,nuevosDatos);
   res.redirect('/api/dashboard');
 
    } catch (error) {
        res.status(500).send({mensaje:'Superheroe con ID incorrecto o inexistente'}); 
    }
}


export async function obtenerTodosLosPaisesPorCreadorDeboraController(req, res) {
    try {
        const paises = await obtenerTodosLosPaisesPorCreadorDebora();
     res.render ('dashboard', { paises });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los paises', error: error.message });
    }
}

export async function borrarPaisIdController(req, res) {
    const { id } = req.params; //id a borrar

    try {
        const paisBorrado = await borrarPaisPorId(id);

        if (!paisBorrado) {
            return res.status(404).send({ mensaje: 'País no encontrado' });
        }

        // Devolver el país borrado
        res.redirect('/api/dashboard');
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al borrar el país', error: error.message });
    }
}
    export const modificarPaisFormularioController = async ( req, res ) => {
        try {
            const { id } = req.params;
            const paisAEditar = await obtenerPaisPorId( id );
            
            res.render('editarPais', { paisAEditar });
        } catch (error) {
            res.status(500).send({
                mensaje: `Error al cargar formulario`,
                error: error.mensaje
            });
        }

    
}