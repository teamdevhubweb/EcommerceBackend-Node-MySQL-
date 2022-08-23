const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const taxService = require('../UserService/tax.service');
const Role = require('_helpers/role');

router.post('/add-tax' , TaxSchema , CreateTax);

router.get('/get-tax' , getAllTax);

module.exports = router ; 


function TaxSchema(req ,res ,next){
    const schema = Joi.object({
        Name:Joi.string(),
        TaxPercent:Joi.number(),
        TaxType:Joi.string(),
        Status:Joi.string().valid(Role.Active , Role.InActive).required()
    });
    validateRequest(req, next, schema);
}


function CreateTax(req , res , next){
    taxService.CreateTax(req.body)
       .then(() => res.json({message:"Taxes Are Created And Added SuccessFully"}))
       .catch(next);
}


function getAllTax(req, res, next) {
    taxService.FetchTax()
    .then(Tax => res.json(Tax))
    .catch(next);
}
