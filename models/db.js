const {Sequelize} = require('sequelize');

const dbConnectionString = process.env.DB_CONNECTION_STRING

const sequelize = new Sequelize(dbConnectionString);
try {
    await sequelize.authenticate();
} catch (err) {
   console.error(err);
}

module.exports = sequelize;