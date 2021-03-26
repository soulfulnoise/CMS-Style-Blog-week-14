const Sequelize = require('sequlize');
require('dotenv').config();

let sequilize

if(Process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_Name,
        process.env.DB_User,
        Process.env.DB_password,
        {
            host: 'localhost',
            dialect: 'mysql',
            port:3306
        }
    );
}

module.exports = sequilize;