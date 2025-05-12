
# Sprint5Final- NODE.JS
## Diplomatura en Diseño Web - Sprint 5 TP Final
### Barolin, Debora Ines
### Nodo Tecnológico - Catamarca - Capital - Argentina 


### Herramientas para el desarrollo del proyecto: 
Para el desarrollo del proyecto se utilizaron distintas dependencias y herramientas de desarrollo que incluyen un framework web (Express), una biblioteca de modelado de datos para MongoDB (Mongoose), un motor de plantillas (EJS) y diversos middlewares como method-override, express-validator y ejs-layouts.

Express	            ✔️ Framework web minimalista para Node.js
Mongoose	        ✔️ ODM (Object Data Modeling) – biblioteca para MongoDB
EJS	                ✔️ Motor de plantillas (Template Engine)
ejs-layouts	        ✔️ Middleware o helper para manejar layouts con EJS
method-override	    ✔️ Middleware de Express para soportar PUT/DELETE en formularios HTML
express-validator	✔️ Middleware de validación (validación y sanitización de datos)


### Archivo: dbconfig.mjs
Este archivo tiene como propósito establecer la conexión entre la aplicación y la base de datos MongoDB utilizando la biblioteca Mongoose, que permite interactuar con MongoDB de forma más sencilla y estructurada desde Node.js.

📌 Descripción del contenido
Importación de Mongoose

js
Copiar
Editar
import mongoose from 'mongoose';
Se importa el módulo mongoose, que funciona como un Object Data Modeling (ODM), facilitando el manejo de datos en MongoDB mediante modelos y esquemas.

Definición de la función connectDB()

export async function connectDB() { ... }
Se declara una función asincrónica que se encarga de conectar la aplicación con la base de datos.
Conexión con la base de datos

await mongoose.connect('mongodb+srv://...');
Se utiliza mongoose.connect() para establecer la conexión con una base de datos remota en MongoDB Atlas. La cadena de conexión incluye el nombre de usuario, la contraseña y el nombre de la base de datos.

Manejo de errores
catch (error) {
    console.error(...);
    process.exit(1);
}
Si ocurre un error durante la conexión, este se captura e imprime en consola. Luego se detiene la ejecución del programa con process.exit(1) para evitar fallas posteriores.

✅ Resultado esperado
Si la conexión es exitosa, se imprime el mensaje:
Conexión exitosa a MongoDB
Si falla, se muestra el error en consola y se detiene la aplicación.



