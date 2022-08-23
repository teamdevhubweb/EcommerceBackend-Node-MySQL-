const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const reviewService = require('../UserService/review.service');

router.post('/add-review' , ReviewSchema ,CreateReview );

router.get('/get-review' , getAllReview);

module.exports = router;


function ReviewSchema(req ,res ,next){
    console.log(req.body)
    const schema = Joi.object({
        UserID:Joi.number(),
        ProductID:Joi.number(),
        Ratings:Joi.string(),
        Review:Joi.string(),
    });
    validateRequest(req, next, schema);
}

function CreateReview(req , res , next){
 reviewService.CreateReview(req.body)
    .then(() => res.json({message:"Review Created And Added SuccessFully"}))
    .catch(next);
}

function getAllReview(req, res, next) {
    reviewService.FetchReview()
        .then(Review => res.json(Review))
        .catch(next);
}
