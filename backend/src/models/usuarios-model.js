const { DataTypes } = require('sequelize');
const db = require('../infra/db');

const UsuarioModel = db.define('Usuario', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
});

UsuarioModel.sync();


module.exports = UsuarioModel;