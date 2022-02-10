const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URI);

// To authenticate the connection

/* sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
}); */

let connection = async () => {
    try {
        await sequelize.authenticate()
    }
    catch (error) {
        console.log(error)
    }
};

connection();

module.exports = sequelize;