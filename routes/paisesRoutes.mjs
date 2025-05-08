import express from 'express';
import { validarPais } from '../validation/validationRules.mjs';
import { manejarErroresDeValidacion } from '../validation/errorMiddleware.mjs';
import { mostrarIndexController, modificarPaisFormularioController, obtenerPaisPorIdController, obtenerTodosLosPaisesController, obtenerTodosLosPaisesPorCreadorDeboraController, crearPaisController, actualizarPaisPorIdController, borrarPaisIdController } from '../controller/paisController.mjs';

const router =express.Router();
router.get('/', mostrarIndexController) // Ruta para la página de inicio
router.get ('/paises', obtenerTodosLosPaisesController);
router.get('/paises/obtenerCreadorDebora', obtenerTodosLosPaisesPorCreadorDeboraController)
router.get('/paises/:id', obtenerPaisPorIdController);
router.post('/paises/crear', validarPais(), manejarErroresDeValidacion, crearPaisController); 
router.put ('/paises/actualizar/:id', validarPais(), manejarErroresDeValidacion, actualizarPaisPorIdController); //arreglar las validaciones 
router.delete('/paises/borrar/:id', borrarPaisIdController); 
router.get('/dashboard',obtenerTodosLosPaisesPorCreadorDeboraController);
router.get('/formulario/modificar-pais/:id',modificarPaisFormularioController)
router.get('/formulario/crear-pais', (req, res) => {
    res.render('agregarPais');
});


 

export default router;