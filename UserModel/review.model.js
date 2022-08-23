const { DataTypes } = require('sequelize');

module.exports = Review;

function Review(sequelize){
    const attributes = {
      UserID:{type:DataTypes.INTEGER,allowNull:false},
      ProductID:{type:DataTypes.INTEGER,allowNull:false},
      Ratings:{type:DataTypes.STRING,allowNull:false},
      Review:{type:DataTypes.STRING,allowNull:false},
    };

    return sequelize.define('Review', attributes)

}