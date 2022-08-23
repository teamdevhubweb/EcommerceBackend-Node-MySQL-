const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const userService = require('../UserService/user.service');
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

// routes
router.post('/authenticate', authenticateSchema, authenticate);
router.post('/register',upload.single("image") ,registerSchema, register);
router.get('/', authorize(), getAll);
router.get('/current', authorize(), getCurrent);
router.get('/:id', authorize(), getById);
router.put('/update', authorize(), upload.single("image"),updateSchema, update);
router.delete('/delete', authorize(), _delete);

module.exports = router;

function authenticateSchema(req, res, next) {
    // console.log("AuthenticateSchema" , req.body);
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
    // console.log("DFGDFGGFDGGDG");
    // console.log("Authenticate" , req.body);
    userService.authenticate({username : req.body.username , password : req.body.password})
        .then(user => res.json(user))
        .catch(next);
}

function registerSchema(req, res, next) {
    // console.log("Image Data",req.file)
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().min(6).required(),
        image:Joi.string()
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    // console.log("User Data",req.body)
    userService.create({firstName : req.body.firstName , lastName:req.body.lastName , username:req.body.username , password:req.body.password , image: '/static/' + req.file.filename})
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getCurrent(req, res, next) {
    // console.log("Sdfsdfsddsddfs");
    res.json(req.user);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function updateSchema(req, res, next) {
    // console.log("update UserSchema",req.file.filename);
    const schema = Joi.object({
        firstName: Joi.string(),
        lastName: Joi.string(),
        username: Joi.string(),
        password: Joi.string().min(6),
        image:Joi.string()
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {

    userService.update(req.user.id,{firstName : req.body.firstName , lastName:req.body.lastName , username:req.body.username , password:req.body.password , image: '/static/' + req.file.filename})

    // console.log("UpdateFunction",req.file.filename)
        .then(user => res.json(user))
        .catch(next);
}

function _delete(req, res, next) {
    userService.delete(req.user.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);
}