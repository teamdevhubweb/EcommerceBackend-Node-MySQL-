const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const productService = require('../UserService/product.service')
const fs = require('fs');
const multer = require('multer');
const res = require('express/lib/response');


var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log("df");
      var dir = "./uploads";
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      callback(null,dir);
     },
     filename:function (req, file, callback) {
        callback(null,file.originalname);
     }
});
var upload = multer({storage: storage})

router.post('/add-products',upload.fields([
    {name : "FeatureImage" , maxCount:1},
    {name:"ProductImage",maxCount:10}
]),ProductSchema,ProductCreate);

router.get('/get-products' , getAllProducts);

router.get('/get-product-review/:id', getAllProductsReview);

module.exports = router;


function ProductSchema(req ,res ,next) {
    // console.log("ProductSchema",req.body);
    const schema = Joi.object({
        CreateBy:Joi.string(),
        CategoryId:Joi.number(),
        CategoryName:Joi.string(),
        ProductName:Joi.string(),
        Mesurement:Joi.string(),
        ProductQty:Joi.string(),
        ProductPrice:Joi.string(),
        DiscountPercent:Joi.string(),
        PriceAfterDiscount:Joi.string(),
        WishlistStatus:Joi.string(),
        ProductType:Joi.string(),
        ProductImage:Joi.string(),
        ShortDescription:Joi.string(),
        Specification:Joi.string(),
        HSNNumber:Joi.string(),
        Brand:Joi.string(),
        Taxes:Joi.string(),
        IscapProduct:Joi.string(),
        CapProductQty:Joi.number(),
        FullDescription:Joi.string(),
        StartTime:Joi.string(),
        EndTime:Joi.string(),
        Slug:Joi.string(),
        IsStatus:Joi.string(),
        AvailablePinCode:Joi.string(),
        AvailableZoneIds:Joi.string(),
        TotalStockQuantity:Joi.string(),
        CouponOfferAvailable:Joi.string(),
        TotalOrders:Joi.string(),
        FeatureProduct:Joi.string(),
        FeatureImage:Joi.string(),
        // Rating:Joi.number().precision(2),
        // Subscription:Joi.number()
    });
    validateRequest(req, next, schema);
}

function ProductCreate(req, res, next){
const ft = req.files.FeatureImage[0]
const fts = req.files.ProductImage

var prodctim = [];

const proImg = fts && fts?.map((data)=>{
    prodctim.push(`/static/${data?.filename}`)
})

// console.log(prodctim);
// console.log(ft);
// console.log(fts);
// console.log("ProductCreateFunctionReqBody",req.files)
    productService.ProductCreate({
        CreateBy:req.body.CreateBy,
        CategoryId:req.body.CategoryId,
        CategoryName:req.body.CategoryName,
        ProductName:req.body.ProductName,
        Mesurement:req.body.Mesurement,
        ProductQty:req.body.ProductQty,
        ProductPrice:req.body.ProductPrice,
        DiscountPercent:req.body.DiscountPercent,
        PriceAfterDiscount:req.body.PriceAfterDiscount,
        WishlistStatus:req.body.WishlistStatus,
        ProductType:req.body.ProductType,
        ShortDescription:req.body.ShortDescription,
        Specification:req.body.Specification,
        HSNNumber:req.body.HSNNumber,
        Brand:req.body.Brand,
        Taxes:req.body.Taxes,
        IscapProduct:req.body.IscapProduct,
        CapProductQty:req.body.CapProductQty,
        FullDescription:req.body.FullDescription,
        StartTime:req.body.StartTime,
        EndTime:req.body.EndTime,
        Slug:req.body.Slug,
        IsStatus:req.body.IsStatus,
        AvailablePinCode:req.body.AvailablePinCode,
        AvailableZoneIds:req.body.AvailableZoneIds,
        TotalStockQuantity:req.body.TotalStockQuantity,
        CouponOfferAvailable:req.body.CouponOfferAvailable,
        TotalOrders:req.body.TotalOrders,
        FeatureProduct:req.body.FeatureProduct,
        Rating:req.body.Rating,
        Subscription:req.body.Subscription,
        ProductImage:prodctim.toString(),
        FeatureImage:'/static/'+ft.filename
    })
    .then(() => res.json({message:"Product Added SuccessFully"}))
    .catch(next);
}

function getAllProducts(req, res, next) {
    productService.ProductGet()
        .then(Products => res.json(Products))
        .catch(next);
}

function getAllProductsReview(req,res,next) {


    // console.log(req.params);
    productService.GetProductReview(req.params)
        .then(ProductReview => res.json(ProductReview))
        .catch(next);
}