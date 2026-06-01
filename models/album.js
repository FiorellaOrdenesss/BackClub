const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Album = sequelize.define("Album", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Album;
