const config = require('config.json');
const db = require('_helpers/db');

module.exports = {
    CreateCarts,
    GetCarts
};

async function CreateCarts(params){
    await db.Carts.create(params);
}

async function GetCarts() {
    return await db.Carts.findAll();
}