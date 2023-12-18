import Sequelize from "sequelize";

//  nombre baseDat, usuario, password
const db = new Sequelize("mascotagp", "mascotagp", "mascotagp2023", {
    dialect: "mysql",
    host: "localhost"
});



export { db}