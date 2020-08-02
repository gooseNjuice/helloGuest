const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://ifkmujgo:MHQfK0LWD1gfOga1JGFQIEgQXTiQWeiW@kandula.db.elephantsql.com:5432/ifkmujgo', {
    dialect: 'postgres',
    logging: console.log,
    ssl: true
});

module.exports = sequelize;
