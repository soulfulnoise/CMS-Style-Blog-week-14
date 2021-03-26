const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        name: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        date_created:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:DataTypes.NOW,
        },
        Subject: {
            type:DataTypes.STRING,
        },
        body:{
            typr:DataTypes.STRING,
        },
        user_id: {
            type:DataTypes.INTEGER,
            refernces: {
                model:'user',
                key:'id',
            },
        },

    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',

    }
)