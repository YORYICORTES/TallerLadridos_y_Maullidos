import express from "express";
import { routermascotagp } from "../rutas/mascotagpRouter.js";
import { routeradopcion } from "../rutas/mascotagpRouter.js";
import { db } from "../database/conexion.js";


//Crear Instancia de Express
const app = express();

//Middleware
app.use(express.json());
//Verificar Conexion a Base de Datos
db.authenticate().then(() => {
    console.log(`Base de Datos conectada de manera exitosa`);
}).catch(err => {
    console.log(`Error al conectarse a la Base de Datos ::: ${err}`);
})

//Definir Rutas
app.get("/", (req, res) => {
    res.send("LADRIDOS Y MAULLIDOS");

});

//Rutas
app.use("/mascotagp", routermascotagp);
app.use("/adopcion", routeradopcion);
//Puerto de Servidor 
const PORT = 8000;


//Verificar que pueda sincronizar con la base de datos

db.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor Inicializado en puerto ${PORT}`);
    });
}).catch(err => {
    console.log(`Error al sincronizar Base de Datos ${err}`);
});

