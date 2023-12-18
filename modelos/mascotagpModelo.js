import Sequelize from "sequelize";
import { db } from "../database/conexion.js";


const mascotagp = db.define("mascotagp", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: true
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    raza: {
        type: Sequelize.STRING,
        allowNull: true
    },
    gusto: {
        type: Sequelize.STRING,
        allowNull: true
    }

});
// para personas adopcion    nombre de la tabla en bd

const adopcion = db.define("adopcion", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: true
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    residencia: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: true
    }

});

export { mascotagp, adopcion }



