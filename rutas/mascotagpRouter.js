import express from "express";
import { crear, buscarId, buscar, actualizar, eliminar, crearad, buscarIdad, buscarad, actualizarad, eliminarad } from "../controladores/mascotagpController.js";
const routermascotagp = express.Router();
//para persona
const routeradopcion = express.Router();


routermascotagp.get("/", (req, res) => {
    res.send("Bienvenido a Ladridos y Maullidos");
});
routermascotagp.post("/crear", (req, res) => {
    crear(req, res);
});
routermascotagp.get("/buscarId/:id", (req, res) => {
    buscarId(req, res);
});
routermascotagp.get("/buscar", (req, res) => {
    buscar(req, res);
});
routermascotagp.put("/actualizar/:id", (req, res) => {
    actualizar(req, res);
});
routermascotagp.delete("/eliminar/:id", (req, res) => {
    eliminar(req, res);
});
// para personas

routeradopcion.get("/", (req, res) => {
    res.send("Bienvenido a Ladridos y Maullidos");
});
routeradopcion.post("/crear", (req, res) => {
    crearad(req, res);
});
routeradopcion.get("/buscar/:id", (req, res) => {
    buscarIdad(req, res);
});
routeradopcion.get("/buscar", (req, res) => {
    buscaraad(req, res);
});
routeradopcion.put("/actualizar/:id", (req, res) => {
    actualizarad(req, res);
});
routeradopcion.delete("/eliminar/:id", (req, res) => {
    eliminarad(req, res);
});

export { routermascotagp, routeradopcion }
