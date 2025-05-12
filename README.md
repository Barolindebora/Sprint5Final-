
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


### Archivo: model/pais.mjs: 

Este archivo define el modelo de datos para los países utilizando Mongoose. Un modelo es la estructura que tendrán los documentos dentro de la colección en la base de datos.

Se crea un esquema (paisSchema) que describe los campos que tendrá cada país, como el nombre, capital, países limítrofes, área, población, índice GINI, zonas horarias y creador.

Luego, se genera un modelo llamado Pais basado en ese esquema, asociado a la colección Grupo-03 en MongoDB.

Finalmente, se exporta el modelo para poder utilizarlo en otras partes del proyecto.

### Archivo: repositories/IRepository.mjs 

Este archivo define una interfaz base para los repositorios del sistema. Su propósito es establecer los métodos que cualquier clase repositorio concreta debe implementar.

La clase IRepository incluye métodos como:

obtenerPorId(id)

obtenerTodos()

buscarPorCreador()

insertarPais(nuevoPais)

Cada método lanza un error si no es implementado, lo que obliga a las clases hijas a definir su comportamiento.

Este enfoque facilita la reutilización y la separación de responsabilidades.

### Archivo: repositories/PaisRepository.mjs

Este archivo define la clase PaisRepository, que implementa los métodos de la interfaz IRepository.

La clase se encarga de realizar todas las operaciones de acceso a datos sobre los países, como buscar, insertar, actualizar y eliminar. Utiliza el modelo pais definido con Mongoose para interactuar con la base de datos MongoDB.

Sirve como puente entre la base de datos y el resto de la aplicación, encapsulando la lógica de persistencia y permitiendo mantener un código más organizado y desacoplado.

### Archivo: paisService.mjs

Este archivo define funciones que actúan como servicios intermedios entre los controladores y el repositorio.

Cada función invoca métodos del PaisRepository, pero manteniendo la lógica de negocio separada de la lógica de acceso a datos. Esto ayuda a mantener un buen diseño en capas, facilitando el mantenimiento, las pruebas y la evolución del sistema.

En resumen, este módulo organiza y expone funcionalidades como obtener, crear, actualizar o borrar países, sin que los controladores tengan que preocuparse por los detalles técnicos de la base de datos.


### Archivo: paisController.mjs

Este archivo agrupa todas las funciones controladoras relacionadas con los países. Su responsabilidad principal es recibir las solicitudes del cliente (desde el navegador), procesarlas con ayuda de los servicios, y devolver una respuesta adecuada (ya sea en formato JSON o renderizando una vista EJS).

Entre sus funciones se incluyen:

Obtener países por ID o listarlos todos.

Crear, actualizar y borrar países.

Filtrar países según su creador.

Renderizar vistas como formularios o la página principal (index).

Calcular y mostrar resúmenes como el total de población, área y promedio Gini para los países creados por "Debora".

Este archivo es clave dentro de la capa de presentación de la aplicación, y se encarga de la lógica que está más cerca del usuario final.