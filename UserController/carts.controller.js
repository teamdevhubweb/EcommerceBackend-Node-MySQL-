const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const cartsService = require('../UserService/carts.service');

router.post('/add-carts' , CartsSchema ,CartsCreate );

router.get('/get-carts' , getAllCarts);

module.exports = router;


function CartsSchema(req ,res ,next){
    console.log(req.body)
    const schema = Joi.object({
        UserID:Joi.number(),
        ProductID:Joi.number(),
        Items:Joi.number(),
        Variations:Joi.number()
    });
    validateRequest(req, next, schema);
}

function CartsCreate(req , res , next){
    cartsService.CreateCarts(req.body)
    .then(() => res.json({message:"Carts Created And Added SuccessFully"}))
    .catch(next);
}

function getAllCarts(req, res, next) {
    cartsService.GetCarts()
        .then(Carts => res.json(Carts))
        .catch(next);
}
