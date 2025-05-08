import express from 'express';
import {connectDB} from './config/dbconfig.mjs';
import router from './routes/paisesRoutes.mjs';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // Get the resolved path to the file
const __dirname = path.dirname(__filename); 

const app =express();
const PORT=process.env.PORT||3000;

//middleware para parsear JSON
app.use(express.static('public'));
app.use(express.json());
app.set ('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//middleware para parsear JSON
app.set('views', path.join(__dirname, 'views')); // ajustar ruta
//conexion a MongoDB
connectDB();

//configuracion de rutas
app.use ('/api', router);

//manejo de errores para rutas no encontradas 
app.use((req, res)=>{res.status(404).send({mensaje:'Ruta no encontrada'})
})

//iniciar el servidor
app.listen (PORT,()=>{console.log(`Servidor corriendo en el puerto ${PORT}`)
;})