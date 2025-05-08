import { body } from 'express-validator';

export function validarPais() {
    return [
        body('nombrePais')
          .trim()
          .notEmpty().withMessage('El nombre del país es obligatorio')
          .isLength({ min: 3, max: 90 }).withMessage('El nombre debe tener entre 3 y 90 caracteres'),
    
        body('capital')
          .trim()
          .notEmpty().withMessage('El nombre de la capital es obligatorio')
          .isLength({ min: 3, max: 90 }).withMessage('El nombre de la capital debe tener entre 3 y 90 caracteres'),
    
        body('limitrofes')
          .isArray({ min: 1, max: 3 }).withMessage('Debe haber entre 1 y 3 países limítrofes')
          .custom(fronteras =>
            Array.isArray(fronteras) && fronteras.every(f => typeof f === 'string' && /^[A-Z]{3}$/.test(f))
          ).withMessage('Cada país limítrofe debe tener exactamente 3 letras mayúsculas'),
    
        body('area')
          .optional()
          .isNumeric().withMessage('El área debe ser un número'),
    
        body('poblacion')
          .optional()
          .isNumeric().withMessage('La población debe ser un número'),
    
        body('gini')
          .optional()
          .isNumeric().withMessage('El índice GINI debe ser un número'),
    
        body('zonaHoraria')
          .optional()
          .isArray().withMessage('La zona horaria debe ser un array')
          .custom(zonas => zonas.every(z => typeof z === 'string'))
          .withMessage('Cada zona horaria debe ser una cadena de texto'),
    
        body('creador')
          .optional()
          .isString().withMessage('El creador debe ser una cadena de texto')
      ];
    }