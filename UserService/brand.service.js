const config = require('config.json');
const db = require('_helpers/db');

module.exports = {
    BrandCreate,
    BrandGet
};

async function BrandCreate(params){
    await db.Brand.create(params);
}

async function BrandGet() {
    return await db.Brand.findAll();
}