const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Film = sequelize.define("HBO", {
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
        allowNull: true,
        defaultValue: "No actor details"
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
});

module.exports = Film;