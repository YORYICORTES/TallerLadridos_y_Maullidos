import { mascotagp } from "../modelos/mascotagpModelo.js";
import { adopcion } from "../modelos/mascotagpModelo.js";

//Crear un recurso para las mascotas
const crear = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).json({
            mensaje: "El nombre no puede estar vacio."
        });
        return;
    }
    const dataset = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        raza: req.body.raza,
        gusto: req.body.gusto
    };

    //Usar Sequelize para crear el recurso
    mascotagp.create(dataset).then((resultado) => {
        res.status(200).json({
            mensaje: "Registro creado correctamente"
        })
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Error al crear el registro ::: ${err}`
        })

    })


};
//Buscar recurso por ID
/*
const buscarId = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }

    mascotagp.findAll(id).then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro no encontrado ::: ${err}`
        });
    });

}
*/

const buscarId = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }
    mascotagp.findByPk(id).then((resultado) => {
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({
                mensaje: `Registro no encontrado`
            });
        }
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Error al buscar el registro: ${err}`
        });
    });
}

//Buscar recurso por ID
const buscar = (req, res) => {

    mascotagp.findAll().then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `No se encontraron Registros ::: ${err}`
        });
    });

};

//Actualizar un recurso

const actualizar = (req, res) => {
    const id = req.params.id;
    if (!req.body.nombre && !req.body.edad && !req.body.raza && !req.body.gusto) {
        res.status(400).json({
            mensaje: `No se encontraron Datos para Actualizar`
        });
        return;
    }
    else {
        const nombre = req.body.nombre;
        const edad = req.body.edad;
        const raza = req.body.raza;
        const gusto = req.body.gusto;
        mascotagp.update({ nombre, edad, raza, gusto }, { where: { id } })
            .then((resultado) => {
                res.status(200).json({
                    mensaje: `Registro Actualizado`
                });
            })
            .catch((err) => {
                res.status(500).json({
                    mensaje: `Error al actualizar Registro ::: ${err}`
                });
            })
    }

};
const eliminar = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }
    mascotagp.destroy({ where: { id } })
        .then((resultado) => {
            res.status(200).json({
                mensaje: `Registro Eliminado`
            });
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al eliminar Registro ::: ${err}`
            });
        })


};

// para personas

const crearad = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).json({
            mensaje: "El nombre no puede estar vacio."
        });
        return;
    }
    const dataset = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        correo: req.body.correo,
        residencia: req.body.residencia,
        telefono: req.body.telefono
    };

    //Usar Sequelize para crear el recurso
    adopcion.create(dataset).then((resultado) => {
        res.status(200).json({
            mensaje: "Registro creado correctamente personas"
        })
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Error al crear el registro personas ::: ${err}`
        })

    })


};
//Buscar recurso por ID
const buscarIdad = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }

    adopcion.findAll(id).then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro no encontrado personas::: ${err}`
        });
    });

}
//Buscar recurso por ID
const buscarad = (req, res) => {

    adopcion.findAll().then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `No se encontraron Registros personas::: ${err}`
        });
    });

};

//Actualizar un recurso

const actualizarad = (req, res) => {
    const id = req.params.id;
    if (!req.body.nombre && !req.body.edad && !req.body.correo && !req.body.residencia && !req.body.telefono) {
        res.status(400).json({
            mensaje: `No se encontraron Datos para Actualizar personas`
        });
        return;
    }
    else {
        const nombre = req.body.nombre;
        const edad = req.body.edad;
        const correo = req.body.correo;
        const residencia = req.body.residencia;
        const telefono = req.body.telefono;
        adopcion.update({ nombre, edad, correo, residencia, telefono }, { where: { id } })
            .then((resultado) => {
                res.status(200).json({
                    mensaje: `Registro Actualizado personas`
                });
            })
            .catch((err) => {
                res.status(500).json({
                    mensaje: `Error al actualizar Registro personas ::: ${err}`
                });
            })
    }

};
const eliminarad = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(203).json({
            mensaje: `El id no puede estar vacio para persona`
        });
        return;
    }
    adopcion.destroy({ where: { id } })
        .then((resultado) => {
            res.status(200).json({
                mensaje: `Registro Eliminado personas`
            });
        })
        .catch((err) => {
            res.status(500).json({
                mensaje: `Error al eliminar Registro personas ::: ${err}`
            });
        });

}

export { crear, buscarId, buscar, actualizar, eliminar, crearad, buscarIdad, buscarad, actualizarad, eliminarad }