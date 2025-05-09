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
        res.redirect('/api/dashboard'); // Redirigir a la página de dashboard después de crear el país

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
    export const mostrarIndexController = (req, res) => {
        try {
            res.render('index', { // Renderiza la vista index.ejs
                
                title: 'Página de Inicio',
          
            });
    
        } catch (error) {
            res.status(500).send({
                mensaje: 'Error al cargar la vista del índice',
                error: error.message
            });
        }
    };

    export async function obtenerTodosLosPaisesPorCreadorDeboraControllerConResumen(req, res) {
  try {
    const paises = await obtenerTodosLosPaisesPorCreadorDebora();

    // Cálculo de totales
    const totalPoblacion = paises.reduce((total, p) => total + (p.poblacion || 0), 0);
    const totalArea = paises.reduce((total, p) => total + (p.area || 0), 0);

    // Promedio Gini (solo si hay valores válidos)
    const giniValores = paises.map(p => p.gini).filter(g => typeof g === 'number');
    const promedioGini = giniValores.length > 0
      ? (giniValores.reduce((a, b) => a + b, 0) / giniValores.length).toFixed(2)
      : 'N/A';

    // Render con variables adicionales
    res.render('dashboard', {
      paises,
      totalPoblacion,
      totalArea,
      promedioGini
    });
  } catch (error) {
    res.status(500).send({
      mensaje: 'Error al obtener los paises',
      error: error.message
    });
  }
}
