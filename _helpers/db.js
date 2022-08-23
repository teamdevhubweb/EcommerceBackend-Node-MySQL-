const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.User = require('../UserModel/user.model')(sequelize);

    db.Products = require('../UserModel/product.model')(sequelize);

    db.Brand = require('../UserModel/brand.model')(sequelize);

    db.Carts = require('../UserModel/carts.model')(sequelize);

    db.Review = require('../UserModel/review.model')(sequelize);

    db.Tax = require('../UserModel/tax.model')(sequelize);

    db.Products.hasMany(db.Review, {
        foreignKey: 'ProductID',
        as: 'Review'
    })

    // sync all models with database
    await sequelize.sync();
}