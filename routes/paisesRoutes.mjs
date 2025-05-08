import express from 'express';
import { validarPais } from '../validation/validationRules.mjs';
import { manejarErroresDeValidacion } from '../validation/errorMiddleware.mjs';
import { modificarPaisFormularioController, obtenerPaisPorIdController, obtenerTodosLosPaisesController, obtenerTodosLosPaisesPorCreadorDeboraController, crearPaisController, actualizarPaisPorIdController, borrarPaisIdController } from '../controller/paisController.mjs';

const router =express.Router();

router.get ('/paises', obtenerTodosLosPaisesController);
router.get('/paises/obtenerCreadorDebora', obtenerTodosLosPaisesPorCreadorDeboraController)
router.get('/paises/:id', obtenerPaisPorIdController);
router.post('/paises/crear', validarPais(), manejarErroresDeValidacion, crearPaisController); 
router.put ('/paises/actualizar/:id', actualizarPaisPorIdController); //arreglar las validaciones 
router.delete('/paises/borrar/:id', borrarPaisIdController); 
router.get('/dashboard',obtenerTodosLosPaisesPorCreadorDeboraController);
router.get('/formulario/modificar-pais/:id',modificarPaisFormularioController)



 

export default router;