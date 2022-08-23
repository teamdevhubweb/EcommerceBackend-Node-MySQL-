const { DataTypes } = require('sequelize');

module.exports = Carts;

function Carts(sequelize){
    const attributes = {
      UserID:{type:DataTypes.INTEGER,allowNull:false},
      ProductID:{type:DataTypes.INTEGER,allowNull:false},
      Items:{type:DataTypes.INTEGER,allowNull:false},
      Variations:{type:DataTypes.INTEGER,allowNull:false}
    };

    return sequelize.define('Carts', attributes)

}