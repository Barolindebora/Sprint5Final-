import express from 'express';
import {connectDB} from './config/dbconfig.mjs';
import router from './routes/paisesRoutes.mjs';
import methodOverride from 'method-override';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // Get the resolved path to the file
const __dirname = path.dirname(__filename); 

const app =express();
const PORT=process.env.PORT||3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.title = 'App de paises'; // título por defecto
    next();
  });

app.set ('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(expressEjsLayouts);
app.set('layout', 'layout'); // Nombre del layout principal

app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views')); // ajustar ruta
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

connectDB();

//configuracion de rutas
app.use ('/api', router);


//manejo de errores para rutas no encontradas 
app.use((req, res)=>{res.status(404).send({mensaje:'Ruta no encontrada'})
})

//iniciar el servidor
app.listen (PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)
;})