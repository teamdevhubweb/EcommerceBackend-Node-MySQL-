const { DataTypes } = require('sequelize');

module.exports = Tax;

function Tax(sequelize){
    const attributes = {
      Name:{type:DataTypes.STRING,allowNull:false},
      TaxPercent:{type:DataTypes.DECIMAL,allowNull:false},
      TaxType:{type:DataTypes.STRING,allowNull:false},
      Status:{type:DataTypes.ENUM('Active' , 'InActive'),allowNull:false}
    };

    return sequelize.define('Tax', attributes)

}