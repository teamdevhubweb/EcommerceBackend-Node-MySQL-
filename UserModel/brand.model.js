const { DataTypes } = require('sequelize');

module.exports = Brand;

function Brand(sequelize){
    const attributes = {
      Title:{type:DataTypes.STRING,allowNull:false},
      Images:{type:DataTypes.STRING,allowNull:false}
    };

    return sequelize.define('Brand', attributes)

}