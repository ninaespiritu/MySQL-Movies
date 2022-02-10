const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Film = sequelize.define("Netflix", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Film;