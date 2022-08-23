const config = require('config.json');
const db = require('_helpers/db');

module.exports = {
    CreateTax,
    FetchTax
};

async function CreateTax(params){
    await db.Tax.create(params);
}

async function FetchTax() {
    return await db.Tax.findAll();
}