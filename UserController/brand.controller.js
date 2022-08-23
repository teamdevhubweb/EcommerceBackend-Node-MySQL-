const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const brandService = require('../UserService/brand.service');
const fs = require('fs');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // console.log("df");
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

router.post('/add-brand', upload.single("Images") , BrandSchema , BrandCreate)

router.get('/get-brands' , getAllBrand);

module.exports = router;

function BrandSchema(req ,res ,next){
    const schema = Joi.object({
        Title:Joi.string(),
        Images:Joi.string()
    });
    validateRequest(req, next, schema);
}

function BrandCreate(req , res , next){
    brandService.BrandCreate({Title:req.body.Title , Images:'/static/'+req.file.filename})
    .then(() => res.json({message:"Brand Added SuccessFully"}))
    .catch(next);
}

function getAllBrand(req, res, next) {
    brandService.BrandGet()
        .then(Brands => res.json(Brands))
        .catch(next);
}