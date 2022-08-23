const { DataTypes } = require('sequelize');

module.exports = Product;

function Product(sequelize){
    const attributes = {
        CreateBy:{type:DataTypes.INTEGER , allowNull:false},
        CategoryId:{type:DataTypes.INTEGER,allowNull:false},
        CategoryName:{type:DataTypes.STRING , allowNull:false},
        ProductName:{type:DataTypes.STRING , allowNull:false},
        Mesurement:{type:DataTypes.STRING , allowNull:false},
        ProductQty:{type:DataTypes.STRING , allowNull:false},
        ProductPrice:{type:DataTypes.STRING , allowNull:false},
        DiscountPercent:{type:DataTypes.STRING , allowNull:false},
        PriceAfterDiscount:{type:DataTypes.STRING , allowNull:false},
        WishlistStatus:{type:DataTypes.STRING},
        ProductType:{type:DataTypes.STRING , allowNull:false},
        ProductImage:{type:DataTypes.STRING},
        ShortDescription:{type:DataTypes.TEXT , allowNull:false},
        Specification:{type:DataTypes.TEXT , allowNull:false},
        HSNNumber:{type:DataTypes.STRING , allowNull:false},
        Brand:{type:DataTypes.STRING , allowNull:false},
        Taxes:{type:DataTypes.STRING , allowNull:false},
        IscapProduct:{type:DataTypes.STRING , allowNull:false},
        CapProductQty:{type:DataTypes.INTEGER , allowNull:false},
        FullDescription:{type:DataTypes.TEXT , allowNull:false},
        StartTime:{type:DataTypes.STRING , allowNull:false},
        EndTime:{type:DataTypes.STRING , allowNull:false},
        Slug:{type:DataTypes.STRING , allowNull:false},
        IsStatus:{type:DataTypes.STRING , allowNull:false},
        AvailablePinCode:{type:DataTypes.TEXT , allowNull:false},
        AvailableZoneIds:{type:DataTypes.TEXT , allowNull:false},
        TotalStockQuantity:{type:DataTypes.STRING , allowNull:false},
        CouponOfferAvailable:{type:DataTypes.STRING , allowNull:false},
        TotalOrders:{type:DataTypes.STRING , allowNull:false},
        FeatureProduct:{type:DataTypes.STRING},
        FeatureImage:{type:DataTypes.STRING},
        
    };

    return sequelize.define('Products', attributes)

}