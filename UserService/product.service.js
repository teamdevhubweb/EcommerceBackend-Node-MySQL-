const config = require('config.json');
const res = require('express/lib/response');
const db = require('_helpers/db');

module.exports = {
    ProductCreate,
    ProductGet,
    GetProductReview
};

async function ProductCreate(params){
    await db.Products.create(params);
}

async function ProductGet() {
    return await db.Products.findAll();
}
async function GetProductReview(params){
    console.log(params);
    const id = params.id
    return await db.Products.findOne({
        include:[{
            model:db.Review,
            as:'Review'
        }],
        where:{id:id}
    })
}
