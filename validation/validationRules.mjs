import { body } from 'express-validator';

export function validarPais() {
    return [
        body('nombrePais')
          .trim()
          .notEmpty().withMessage('El nombre del país es obligatorio')
          .isLength({ min: 3, max: 90 }).withMessage('El nombre debe tener entre 3 y 90 caracteres'),
    
          body('capital')
          .optional()
          .custom(value => {
            if (!value || typeof value !== 'string') throw new Error("Poderes inválidos.");
            const capitalesArray = value.split(',').map(p => p.trim());
           const capitalInvalida = capitalesArray.find(p => p.length < 3 || p.length > 90);
        if (capitalInvalida) {
          throw new Error(`En la capital, la palabra "${capitalInvalida}" no cumple con la longitud requerida (3-90 caracteres).`);
        }
        return true;
      }),
    
          body('limitrofes')
          .notEmpty().withMessage("Campo 'limitrofes' obligatorio.")
          .custom(value => {
            if (!value || typeof value !== 'string') throw new Error("Paises limitrofes inválidos.");
            const limitrofesArray = value.split(',').map(p => p.trim());
            if (limitrofesArray.length === 0) throw new Error("El campo limitrofes debe contener al menos un país válido (entre 3 y 60 caracteres).");
            const limitrofeInvalido = limitrofesArray.find(p => !/^[A-Z]{3}$/.test(p))
        if (limitrofeInvalido) {
          throw new Error(`En los paises limítrofes la palabra "${limitrofeInvalido}" no cumple con la longitud requerida (exactamente 3 letras mayusculas).`);
        }
    
            return true;
          }),

    
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
          .custom(value => {
            if (typeof value !== 'string') return true;
            const zonasHorarias = value.split(',').map(d => d.trim());
            if (zonasHorarias.some(d => d.length < 1)) {
              throw new Error("Cada zona horaria debe tener al menos 1 carácter.");
            }
            return true;
          }),
    
        body('creador')
          .optional()
          .isString().withMessage('El creador debe ser una cadena de texto')
      ];
    }